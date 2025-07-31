import React from 'react';
import '../App.css';

const NewsItem = ({ title, description, imgUrl, newsUrl, date, author, source, color, theme }) => {
  return (
    <a href={newsUrl} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noreferrer">
      <div className={`card h-100 d-flex flex-column justify-content-between news-card-${theme} news-card`} style={{ backgroundColor: `${theme === 'light' ? 'white' : '#070e1e'}` }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{ zIndex: '1', left: `90%` }}>{source}</span>
        
        <div className="card-body d-flex flex-column flex-grow-1">
          <div>
            <h5 className={`card-title text-${theme === 'light' ? 'dark' : 'light'}`}>{title}</h5>
            <p className={`card-text text-${theme === 'light' ? 'dark' : 'light'}`}>{description}</p>
          </div>
          <div className="mt-auto">
            <span  className="btn btn-sm btn-primary mb-2">Read More</span>
            <p className="card-text"><small style={{ color: '#5a6772' }}>By: {author} Date: {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
