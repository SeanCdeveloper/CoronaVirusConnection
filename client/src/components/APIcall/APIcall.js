import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Header, Grid, List, Accordion} from 'semantic-ui-react'
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
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>Latest Coronavirus News</Header>
              <div className="NewsAreaWrap"></div>
              <List>
                {news.map((news,i) => {
                  return (
                    <List.Item  key={i}>
                      <List.Content><Header as="h2">{news.title}</Header></List.Content>
                      <List.Content>{news.author}</List.Content>
                      <List.Content>{news.content}</List.Content>
                      <List.Content a href={news.url}>Read Article</List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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


  