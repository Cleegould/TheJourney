import React, { useEffect } from 'react'
import { searchQuote } from "../utils/quote";
import { useState } from 'react';
import { Card } from '@mui/material';

export default function Quote() {
 
 const [quoteValue, setQuoteValue] = useState([])
  useEffect(() => {
    searchQuote()
      .then((quote) => {
        setQuoteValue(quote)
        console.log(quote);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  
  
  // searchQuote().then((quote) => {
    //     console.log(quote);
    //   }).catch((err) => {
    //     console.error(err);
    //   });
  return (
    <Card sx={{
      width: '70%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F6713C',
      marginTop: '20px'
  }}>
      <h1>"{quoteValue.content}"<br/>-<em>{quoteValue.author}</em></h1>
      <div>
  </div>
  </Card>
  )
}

 
  // const searchQuote = () => {
  //   const [quote, setQuote] = useState([])
  //   const [author, setAuthor] = useState([])

  //   const quoteAPI = async () => {
  //     let arrayOfQuotes = []
  //     try { 
  //       const data = await fetch('https://api.quotable.io/random')
  //     } catch (error) {
        
  //     }