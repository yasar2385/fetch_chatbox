// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function FETCH_CHATBOX(post_url, text) {
  console.log(post_url, text);
  fetch(post_url, {
    method: 'POST',
    body: JSON.stringify({
      message: text,
    }),
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((r) => r.json())
    .then((r) => {
      let msg2 = {
        name: 'AI',
        message: r.answer,
      };
      console.log(msg2);
      //this.messages.push(msg2);
      //this.updateChatText(chatbox);
      //textField.value = '';
    })
    .catch((error) => {
      console.error(error);
      //this.updateChatText(chatbox);
      //textField.value = '';
    });
}

FETCH_CHATBOX('', 'how to insert new reference');
