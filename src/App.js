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
import { SkeletonTheme } from 'react-loading-skeleton';

const App =()=> {
  let pageSize=6;
  let country="us";
  let apiKey=process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState('light');
  const switchTheme=(mode)=>{
    setTheme(mode);
    if(mode==='light'){
      document.body.style.backgroundColor='white';
    }
    else{
      document.body.style.backgroundColor = `rgb(14 , 18 , 27)`;
    }
  }
    return (
      <>
      <Router>
      <Navbar theme={theme} switchTheme={switchTheme}/>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
      <SkeletonTheme baseColor={theme==='light'?'#e0e0e0':'#0f1b33'} highlightColor={theme==='light'?'#f5f5f5':'#1d2c4d'}>
        <Routes>
          <Route path='/'  element={<News theme={theme} setProgress={setProgress} apiKey={apiKey} key="general"pageSize={pageSize} country={country} category='general' clr={'info'}/>}  ></Route>
          <Route path='/business' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category='business' clr={'primary'}/> } ></Route>
          <Route path='/entertainment' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country={country} category='entertainment' clr={'success'}/> }></Route>
          <Route path='/general' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='general' clr={'info'}/> }></Route>
          <Route path='/health' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category='health' clr={'danger'}/>}> </Route>
          <Route path='/science' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country={country} category='science' clr={'success'}/>}> </Route>
          <Route path='/sports' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category='sports' clr={'warning'}/>}> </Route>
          <Route path='/technology' element={<News theme={theme} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category='technology' clr={'dark'} />}> </Route>
        </Routes>
        </SkeletonTheme>
      </Router>
      </>
    )
  }
export default App;
