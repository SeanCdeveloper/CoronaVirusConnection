import axios from "axios";

export default {
  // Gets all messages \\ Used 1 (Chatpage.js)
  getMessages: function() {
    return axios.get("/api/messages");
  },
  /* Added */
  getNews: function() {
    return axios.get('http://newsapi.org/v2/everything?q=coronavirus&apiKey=3cb25d8241014e44a94861a91d73f1f4')
  },
  // Gets the message with the given id \\ Used 1 (detail.js)
  getMessage: function(id) {
    return axios.get("/api/messages/" + id); 
  },
  // Deletes the message with the given id \\ used 3 times (ChatPage.js)
  deleteMessage: function(id) {
    return axios.delete("/api/messages/" + id);
  },
  // Saves a message to the database \\ Used 1 (Chatpage.js)
  saveMessage: function(messageData) {
    return axios.post("/api/messages", messageData);
  }
};

/* 

Use 'const [messages, setMessages]' in ChatPage.js 
&&
'const [message, setMessage]' in Detail in Details.js

*/

