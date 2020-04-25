import React, { Component } from 'react';
// import logo from './logo.svg';

class DataFetcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('http://newsapi.org/v2/everything?q=coronavirus&apiKey=3cb25d8241014e44a94861a91d73f1f4')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          articles: data.articles
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <h2>{item.title}</h2>
              <p>{item.author}</p>
              <img src={item.urlToImage} style={{ width: "50vw" }}></img>
              <p>{item.content}</p>
              <a href={item.url}>Read Article</a>
            </div>
          )
        })}
      </div>
    );
  }
}

export default DataFetcher;
