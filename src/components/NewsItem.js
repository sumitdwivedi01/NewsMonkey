import React from 'react';
import '../App.css';

const NewsItem = ({title , description , imgUrl ,newsUrl ,date , author ,source ,color , theme})=> {

    return (
      <div className='my-5 d-flex justify-content-center align-items-center' >
        <div className={`card news-card-${theme} news-card`} style={{backgroundColor: `${theme==='light'?'white':'#070e1e'}`}}>
              <img src={imgUrl} className="card-img-top" alt="..."/>
              <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${color}`} style={{zIndex:'1' , left:`90%`}}>{source}</span>
              <div className={"card-body"}>
                <h5 className={`card-title text-${theme==='light'?'dark':'light'}`}>{title}</h5>
                <p className={`card-text text-${theme==='light'?'dark':'light'}`}>{description}</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                <p className="card-text"><small className="" style={{color:'#5a6772'}}>By: {author} Date: {new Date(date).toGMTString()}</small></p>
              </div>
        </div>
      </div>
    )
  }


export default NewsItem;

//cardbackground #0b152a
//on hover #070e1e