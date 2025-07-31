import React ,{useEffect , useState} from 'react'
import NewsItem from './NewsItem';
import newsLogo from './newsLogo.png';
import darkLogo from './Dark_logo.png';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton';



const News=({setProgress ,apiKey,  pageSize, country, category, clr , theme})=>{
  
  const capitalizeFirstLetter =(str)=> {
  if (!str) return ''; // handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);



  const updateNews= async()=>{
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        setProgress(30);
        let response = await data.json();
        setProgress(60);
        setArticles(response.articles)
        setTotalResults(response.totalResults)
        setLoading(false);
        setProgress(100);
  }
  useEffect(() => {
   document.title=`NewsMonkey-${capitalizeFirstLetter(category)}`;
    updateNews(); 
    // eslint-disable-next-line
  }, [])
  
  const fetchMoreData =async()=>{
    const nextPage = page +1;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pagesize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let response = await data.json();
        setArticles(articles.concat(response.articles));
        setTotalResults(response.totalResults);
        setLoading(false);
        setPage(nextPage);
  }
    return (
      <>
       <h1 className={`text-center text-${theme==='light'?'dark':'light'}`} style={{margin: '30px 0px'}}>NewsMonkey -Top {capitalizeFirstLetter(category)} Headlines</h1>
       
       {loading && 
       <div className="container">
       <div className="row">
              <CardSkeleton theme={theme} cards={6}/>
       </div>
              </div> }

       <InfiniteScroll
          dataLength={articles.length} 
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={
            <div className='container'>
            <div className="row container">
              <CardSkeleton theme={theme} cards={3}/>
            </div>
              </div>}
              >


            <div className="container">
            <div className="row container">
              
       {
       
           articles.map((element)=>{
                return <div className='col-md-4 my-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imgUrl={!element.urlToImage?(theme==='light'?newsLogo:darkLogo):element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"unknown"} source={element.source.name} color={clr} theme={theme}/>
                </div>
                
              }) 
            }
            </div>    
            </div >
            </InfiniteScroll>
      </>
    )
  }


News.defaultProps ={
    country:"us",
    pageSize:5,
    category:'general',
    clr:'info'
  }
  News.propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }


export default News;

