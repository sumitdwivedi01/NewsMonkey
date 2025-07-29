import React from 'react'

const NewsItem = ({title , description , imgUrl ,newsUrl ,date , author ,source ,color})=> {

    return (
      <div className='my-5 d-flex justify-content-center align-items-center' >
        <div className="card">
              <img src={imgUrl} className="card-img-top" alt="..."/>
              <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${color}`} style={{zIndex:'1' , left:`90%`}}>{source}</span>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                <p className="card-text"><small className="text-muted">By: {author} Date: {new Date(date).toGMTString()}</small></p>
              </div>
        </div>
      </div>
    )
  }


export default NewsItem;
