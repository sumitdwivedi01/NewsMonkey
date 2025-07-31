import React  from "react";
import '../App.css';
import {
  Link 
} from "react-router-dom";
const Navbar =({theme , switchTheme})=> {
  const handleModeChange =(e)=>{
    const newTheme = e.target.checked?'dark':'light';
    switchTheme(newTheme);
  }

    return (
      <>
      <nav className={`navbar navbar-dark navbar-expand-lg bg-${theme} sticky-top`}>
        <div className="container-fluid">
            <Link className={`navbar-brand text-${theme==='light'?'dark':'light'}`} to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon ${theme === 'light' ? 'toggler-dark' : 'toggler-light'}`}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/business">Business</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/entertainment">Entertainment</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/general">General</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/health">Health</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/science">Science</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/sports">Sports</Link> </li>
                <li className="nav-item"> <Link className={`nav-link text-${theme==='light'?'dark':'light'}`} aria-current="page" to="/technology">Technology</Link> </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch='true' onChange={handleModeChange}/>
              <label className={`form-check-label text-${theme==='light'?'dark':'light'}`} htmlFor="checkNativeSwitch" >
                dark Mode
              </label>
            </div>
            </div>
        </div>
        </nav>
      </>
    )
  }


export default Navbar
