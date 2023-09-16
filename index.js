// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function FETCH_CHATBOX(post_url, text) {
  console.log(post_url, text);
}

FETCH_CHATBOX(
  'https://impactchatbotapi.newgen.co:8002/predict',
  'how to insert new reference'
);
