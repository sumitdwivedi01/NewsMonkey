import React, { Component } from 'react'
import NewsItem from './NewsItem'
import newsLogo from './newsLogo.png';
import Spinner from './Spinner';
import PropTypes from 'prop-types';




export class News extends Component {
  static defaultProps ={
    country:"us",
    pageSize:5,
    category:'general'
  }
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    console.log("this is a news component's constructor");
    this.state={
      articles:[],
      loading:false,
      page:1,
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94df717d210d485d8f83b733bc22ea70&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    this.setState({ articles:response.articles , totalResults:response.totalResults , loading:false})
  }
  handlePrevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94df717d210d485d8f83b733bc22ea70&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    this.setState({ articles:response.articles, page:this.state.page -1 ,loading:false})
  }
  handleNextClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94df717d210d485d8f83b733bc22ea70&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    this.setState({ articles:response.articles, page:this.state.page +1,loading:false});
    
  }
  render() {
    return (
      <div className='container my-3'>
       <h1 className='text-center' style={{margin: '30px 0px'}}>Top Headlines of NewsMonkey </h1>
       
       {/* {this.state.articles.map((element)=>{console.log(element)})} this is pointing to every object of articles here we will use this to itirate news cards individually */}
        <div className="row">
       <div className="container d-flex justify-content-between my-3 sticky-top"  style={{top:'58px' , zIndex:'1020'}}>
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary"onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
       {this.state.loading && <Spinner/>}
       {
        !this.state.loading && this.state.articles.map((element)=>{
             return <div className='col-md-4 my-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imgUrl={!element.urlToImage?newsLogo:element.urlToImage} newsUrl={element.url} />
                </div>
        })
       }
       </div>
       
      </div>
    )
  }
}

export default News;
