const newQuote = () => {
  $.ajax({
    type: 'GET',
    url: 'https://type.fit/api/quotes', //fetching data from the api
    success: quotes => {
      const parseData = JSON.parse(quotes); //translating success quotes data into object
      const randomQuote = Math.floor(Math.random() * parseData.length); //get random index of quotes
      
      
    }
  }); 
};

//Event function
$(document).ready(() => {
  $(newQuote);
  $('#new-quote').click(newQuote);
});