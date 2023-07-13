export const searchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    // console.log(quote);
    return quote;
  };
