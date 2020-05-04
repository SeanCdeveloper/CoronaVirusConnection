import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Header} from 'semantic-ui-react'
import axios from 'axios';
require('dotenv').config();


function APIcall() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
  }, [])
/* Make it a get('/news') */ 
  const apikey = process.env.API_KEY
  const getNews = () => {
    axios.get("/news")
      .then(data => {
        console.log(" news ", data);
        // const { articles } = data.data;
        setNews(data.data);
      })
      .catch(err => console.log(err));
  }
  return (
    <Container>
      <Header as='h1' style={{textDecoration: "underline"}}>Current News</Header>
      <div className="NewsAreaWrap"></div>

      <div fluid className="newsWell">
        {
          news.map((news,i) => (
            <div key={i}>
              <h2>{news.title}</h2>
              <p>{news.author}</p>
              <p>{news.content}</p>
              <a href={news.url}>Read Article</a>
            </div>
          )
          )}
        <Link to='/join'>Go back to Chat</Link>
      </div>
    </Container>
  );
}

export default APIcall;

  // /*

  // Organize by ip address to location.
  // How to find a person's IP address?
  // Check to see how zip-code works, too.
  // Four different mini-rooms to go into and communicate.

  // */

  // style={{ border: "1px solid black", height: "200px", margin: "0 100px 0 100px" }}