const newQuote = () => {
  $.ajax({
    type: 'GET',
    url: 'https://type.fit/api/quotes', //fetching data from the api
   
  }); 
};

//Event function
$(document).ready(() => {
  $(newQuote);
  $('#new-quote').click(newQuote);
});