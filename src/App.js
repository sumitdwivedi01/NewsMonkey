//Class Based Component is used here
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  country="us";
  render() {
    return (
      <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<News key="general"pageSize={this.pageSize} country={this.country} category='general' clr={'info'}/>}  ></Route>
          <Route path='/business' element={<News key="business" pageSize={this.pageSize} country={this.country} category='business' clr={'primary'}/> } ></Route>
          <Route path='/entertainment' element={<News  key="entertainment" pageSize={this.pageSize} country={this.country} category='entertainment' clr={'success'}/> }></Route>
          <Route path='/general' element={<News key="general" pageSize={this.pageSize} country={this.country} category='general' clr={'info'}/> }></Route>
          <Route path='/health' element={<News key="health" pageSize={this.pageSize} country={this.country} category='health' clr={'danger'}/>}> </Route>
          <Route path='/science' element={<News  key="science" pageSize={this.pageSize} country={this.country} category='science' clr={'success'}/>}> </Route>
          <Route path='/sports' element={<News key="sports" pageSize={this.pageSize} country={this.country} category='sports' clr={'warning'}/>}> </Route>
          <Route path='/technology' element={<News key="technology" pageSize={this.pageSize} country={this.country} category='technology' clr={'dark'} />}> </Route>
        </Routes>
      </Router>
      </>
    )
  }
}
