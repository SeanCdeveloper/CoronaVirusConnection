import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Header, List, Icon } from 'semantic-ui-react'
import axios from 'axios';
require('dotenv').config();


function APIcall() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
  }, [])
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

      <Container fluid className="newsWell">
        {
          news.map((news,i) => (
            <List>
            <div key={i}>
            <List.Item>
            <List.Content>
            <List.Header><h2>{news.title}</h2></List.Header>
            <List.Description><p>{news.author}</p>
              <p>{news.content}</p>
              <a href={news.url}>Read Article</a>
              </List.Description>
              </List.Content>
            </List.Item>
            </div>
            </List>
          )
          )}
        <Link to='/join'>Go back to Chat</Link>
      </Container>
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