import React from 'react'
import Skeleton from 'react-loading-skeleton'
import '../App.css';

const CardSkeleton = ({cards , theme}) => {
  return Array(cards).fill(0).map((_ , i)=>(
        <div className="col-md-4 mb-4" key={i}>
        <div className={`card card-skeleton-${theme} h-100 d-flex`}>
            <div className="img">
                <Skeleton height={250} style={{display:'block'}}/>
            <span className={`position-absolute top-0 translate-middle badge rounded-pill`} style={{ zIndex: '1', left: `90%` }}><Skeleton baseColor={theme==='light'?'#c2bebe':'#1e2738'} highlightColor={theme==='light'?'#f5f5f5':'#2f3a4f'}  style={{
            width: '96px',
            height: '21px',
            position: 'absolute',
            right: '-17px',
            borderRadius: '999px',
            top: '0'
            }}/></span>
            </div>
            <div className="headi mt-2 px-2">
            <h3> <Skeleton count={2}/></h3>
            <p> <Skeleton count={3}/></p>
            </div>
            <div className="bttn mb-2 mt-auto px-2">
            <Skeleton width={100} height={30}/>
                <small><Skeleton/></small>
            </div>
        </div>
      </div>
  ))
    
  
}

export default CardSkeleton;