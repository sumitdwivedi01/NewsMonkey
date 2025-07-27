//Class Based Component is used here
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  country="us";
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    console.log(this.apiKey);
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
        <Routes>
          <Route path='/'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general"pageSize={this.pageSize} country={this.country} category='general' clr={'info'}/>}  ></Route>
          <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category='business' clr={'primary'}/> } ></Route>
          <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={this.country} category='entertainment' clr={'success'}/> }></Route>
          <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category='general' clr={'info'}/> }></Route>
          <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category='health' clr={'danger'}/>}> </Route>
          <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country={this.country} category='science' clr={'success'}/>}> </Route>
          <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category='sports' clr={'warning'}/>}> </Route>
          <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category='technology' clr={'dark'} />}> </Route>
        </Routes>
      </Router>
      </>
    )
  }
}
