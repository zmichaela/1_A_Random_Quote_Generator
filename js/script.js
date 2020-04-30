/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
sources - https://www.bustle.com/articles/121359-25-of-the-best-book-quotes-of-all-time
shortlist.com/news/the-40-most-powerful-literary-quotes
***/


// Created an array with 7 quotes and its information
let quotes = [
  {
    quote: "It's the possibility of having a dream come true that makes life interesting",
    source: "Paulo Coelho",
    citation: "The Alchemyst",
    tag: "Philosophy"
  },
  {
    quote: "Memories warm you up from the inside. But they also tear you apart",
    source: "Haruki Murakami",
    citation: "Kafka On The Shore",
    year: 2002
  },
  {
    quote: "Nowadays people know the price of everything and the value of nothing",
    source: "Oscar Wilde",
    citation: "The picture of Dorian Grey",
    year: 1890
  },
  {
    quote: "You are your best thing",
    source: "Toni Morrison",
    citation: "Beloved",
    year: 1987
  },
  {
    quote: "It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning",
    source: "H.G. Wells",
    citation: "The Time Machine",
    year: 1895
  },
  {
    quote: "It's much better to do good in a way that no one knows anything about it",
    source: "Leo Tolstoy",
    citation: "Anna Karenina",
    year: 1877
  },
  {
    quote: "I know not all that may be coming, but be it what it will, I’ll go to it laughing",
    source: "Herman Melville",
    year: 1851
  },  
  ];
  

// created a function to get a random quote from the above array
function getRandomQuote () {
let randomNumber = Math.floor(Math.random() * quotes.length); 
let randomQuote = quotes[randomNumber]; 
return randomQuote;
}

//console.log(getRandomQuote());

// get random colour - a string of 3 GRB numbers
//https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
function getRandomColour () {
  let randomRed = Math.ceil(Math.random() * 256);
  let randomGreen = Math.ceil(Math.random() * 256);
  let randomBlue = Math.ceil(Math.random() * 256);
  let randomColours = randomRed + ", " + randomGreen + ", " + randomBlue;
  return randomColours;
  }

  // replace the existing backgroud colour 
  // source - https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  function changeBackground () {
    document.body.style.backgroundColor = `rgb( ${getRandomColour()} )`;
  }


//Created a function that will print a random quote store in the getRandomQuote function
function printQuote () {
let storeObject = getRandomQuote(); // stores a random quote generated by the above function
let htmlString = '<p class="quote">' + storeObject.quote + '</p>';
htmlString += '<p class="source">' + storeObject.source;
if (storeObject.citation) {
    htmlString += '<span class="citation">' + storeObject.citation + '</span>';
};
if (storeObject.year) {
    htmlString += '<span class="year">' + storeObject.year + '</span>';
};
if (storeObject.tag) {
   htmlString += '<span class="tag">, ' + storeObject.tag + '</span>';
}
htmlString += '</p>'; 
document.getElementById('quote-box').innerHTML = htmlString;
changeBackground();
return htmlString; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);