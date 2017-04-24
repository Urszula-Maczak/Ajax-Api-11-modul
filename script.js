//* wersja po problemach ze strony serwer Chrome - taki komunikat http://screenshot.sh/m1Ps1i2qPOujh

var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

//Metoda Ajax w jQuery - wersja obszerna
function getQuote() {				//* 1) wybrać opcję obszerną, czyli $.ajax zamiast $getJson [...]
	$.ajax({						// function getQuote() {
	 	url: quoteUrl,				// ----usunięto 'dataType' = "json" i 'data' = "nul", bo to są argumenty z właściowściami domyślnymi
	 	success: createTweet		
	});								 
}									//* 2) zainstawać wtyczke w chrome Allow-Control-Allow-Origin								
//Wersja krótsza					//     i przełączyć na enable (ikonka wyskoczy w górnym prawym rogu,)				
/*function getQuote() {				//		wtedy pójdzie request do serwera				
	$.ajax(quoteUrl, createTweet);	
}*/									

function createTweet(input) {
	//* temporary solution, to fix incorrect server response	  3) input = JSON.parse(input.slice(2, input.length - 1)); <- dodać ten zapis jako pierwsza
 	input = JSON.parse(input.slice(2, input.length - 1));		
 																
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = "Unknown author";
	}

	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote').text(input.quoteText);
		$('.author').text("Author: " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}

$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});

