import React, { Component } from 'react'
import NewsItem from './NewsItem'
import newsLogo from './newsLogo.png';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
  static defaultProps ={
    country:"us",
    pageSize:5,
    category:'general',
    clr:'info'
  }
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter =(str)=> {
  if (!str) return ''; // handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1,
    }
    document.title=`NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async updateNews(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);;
        let response = await data.json();
        this.props.setProgress(60);
        this.setState({ articles:response.articles , totalResults:response.totalResults , loading:false})
        this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
  }
  fetchMoreData =async()=>{
    const nextPage = this.state.page +1;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let response = await data.json();
        this.setState({
          articles: this.state.articles.concat(response.articles),
          totalResults: response.totalResults,
          loading: false,
          page:nextPage
        });
  }
  render() {
    return (
      <>
       <h1 className='text-center' style={{margin: '30px 0px'}}>NewsMonkey -Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
       
       {/* {this.state.articles.map((element)=>{console.log(element)})} this is pointing to every object of articles here we will use this to itirate news cards individually */}
        
       
       {/* {this.state.loading && <Spinner/>} */}

       <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}>


            <div className="container">
            <div className="row container">
       {
       
           this.state.articles.map((element)=>{
                return <div className='col-md-4 my-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imgUrl={!element.urlToImage?newsLogo:element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"unknown"} source={element.source.name} color={this.props.clr}/>
                </div>
                
              }) 
            }
            </div>    
            </div >
            </InfiniteScroll>
      </>
    )
  }
}

export default News;
