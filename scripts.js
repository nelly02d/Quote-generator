const newQuote = () => {
  $.ajax({
    type: 'GET',
    url: 'https://type.fit/api/quotes', //fetching data from the api
    success: quotes => {
      const parseData = JSON.parse(quotes); //translating success quotes data into text
      const randomQuote = Math.floor(Math.random() * parseData.length); //get random index of quotes
      
      const quote = parseData[randomQuote].text; 
      const author = parseData[randomQuote].author; 
      //placing the quote inside the text element
      $('#text').html(quote);
      //placing the author in author element 
      $('#author').html(`- ${author}`);
      
      //When tweet icon is pressed, tweet browser will open and it will place the generated quote in the tweet site
      $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent( quote + ' - '+ author));
    }
  }); 
};

//Event function
$(document).ready(() => {
  $(newQuote);
  $('#new-quote').click(newQuote);
});