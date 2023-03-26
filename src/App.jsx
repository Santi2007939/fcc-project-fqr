import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './style-sheets/main.css'

import './App.css'

function App() {
  const [quotes, setQuotes] = useState('');
  const colors = ['rgb(231, 76, 60)', 'rgb(189, 187, 153)', 'rgb(52, 34, 36)', 'rgb(22, 160, 133)', 'rgb(243, 156, 18)', 'rgb(155, 89, 182)']

  let y = Math.floor(Math.random() * colors.length)
  console.log(y);

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
      let i = Math.floor(Math.random() * data.length);
      setQuotes(data[i]);
    })
    y = Math.floor(Math.random() * colors.length)
  }
  

  useEffect(() => {
    getQuote();
    
  }, [])


  return (
    <div className="App" style={{background: `${colors[y]}`}}>
      <div id='wrapper'>
      <div id='quote-box' className='quote__box' style={{background: `white`}}>
          <div id='quote-box-text' className='quote__box__text'>
            <h1 id="text" className='quote__box__text__quote' style={{color: `${colors[y]}`}}>
              <FontAwesomeIcon icon={faQuoteLeft} /> {quotes.text}
            </h1>
            <h2 id="author" className='quote__box__text__author' style={{color: `${colors[y]}`}}>
              - {quotes.author}
            </h2>
          </div>
          <div id='quote-box-buttons' className='quote__box__button'>
            <div id='quote-box__buttons' className='quote__box__button__link'>
              <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quotes.text}" ${quotes.author}`} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} style={{background: `${colors[y]}`} } className='icon'/></a>
            </div>
            <button onClick={getQuote} id='new-quote' className='quote__box__button__new' style={{background: `${colors[y]}`, color:'white'}}>New Quote</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App
