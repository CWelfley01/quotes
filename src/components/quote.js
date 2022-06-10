import React from 'react'

export default function Quote(props) {
    return (
        <div className="quote">
        <h1>{props.quoteData.title}!</h1>
        <h2>{props.quoteData.quote}</h2>
        <h3>-{props.quoteData.author}</h3>
        <img src={props.quoteData.background} />
        </div>
    );
    
      
}
