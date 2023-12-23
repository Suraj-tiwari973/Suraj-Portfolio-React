import React from 'react';
import '../styles/cards.css';

const Cards = (props) => {
  return (
    <div className="card" style={{width:300,height:"fit-content"}}>
    <div>
        <img src={props.image} className="card-img-top" alt="..." style={{height:200,width:300}}/>
    </div>
    <div className="card-body">
      <p className="card-text">
        {
          props.text
        }
      </p>
      <div className='btn--container'>
      <a href = {props.link} className='btn w-100' target='_blank' rel="noopener noreferrer">
        Show
      </a>
      </div>
    </div>
  </div>
  )
}

export default Cards;