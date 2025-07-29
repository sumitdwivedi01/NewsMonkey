import React ,{useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import newsLogo from './newsLogo.png';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



const News=({setProgress ,apiKey,  pageSize, country, category, clr})=>{
  
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
        // this.setState({ articles:response.articles , totalResults:response.totalResults , loading:false})
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
        // this.setState({
        //   articles: articles.concat(response.articles),
        //   totalResults: response.totalResults,
        //   loading: false,
        //   page:nextPage
        // });
        setArticles(articles.concat(response.articles));
        setTotalResults(response.totalResults);
        setLoading(false);
        setPage(nextPage);
  }
    return (
      <>
       <h1 className='text-center' style={{margin: '30px 0px'}}>NewsMonkey -Top {capitalizeFirstLetter(category)} Headlines</h1>
       
       {/* {articles.map((element)=>{console.log(element)})} this is pointing to every object of articles here we will use this to itirate news cards individually */}
        
       
       {loading && <Spinner/>}

       <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}>


            <div className="container">
            <div className="row container">
       {
       
           articles.map((element)=>{
                return <div className='col-md-4 my-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imgUrl={!element.urlToImage?newsLogo:element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"unknown"} source={element.source.name} color={clr}/>
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

