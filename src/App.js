//Class Based Component is used here
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  let pageSize=5;
  let country="us";
  let apiKey=process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <Routes>
          <Route path='/'  element={<News setProgress={setProgress} apiKey={apiKey} key="general"pageSize={pageSize} country={country} category='general' clr={'info'}/>}  ></Route>
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category='business' clr={'primary'}/> } ></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country={country} category='entertainment' clr={'success'}/> }></Route>
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='general' clr={'info'}/> }></Route>
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category='health' clr={'danger'}/>}> </Route>
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country={country} category='science' clr={'success'}/>}> </Route>
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category='sports' clr={'warning'}/>}> </Route>
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category='technology' clr={'dark'} />}> </Route>
        </Routes>
      </Router>
      </>
    )
  }
export default App;
