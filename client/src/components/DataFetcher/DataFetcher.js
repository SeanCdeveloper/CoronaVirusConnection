import React, { useState, useEffect } from 'react';
// import './App.css';
import axios from 'axios';
import NewsData from '../NewsData/NewsData'

const DataFetcher = () => {
    const [News, setNews] = useState({});

    useEffect(() => {
        //const axios = require("axios");
        axios.get('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3cb25d8241014e44a94861a91d73f1f4')
            .then(res => {
                // console.log(res.data);
                // console.log(res.data.articles);
                // console.log(res.data.articles)
                {
                 const articleData = res.data.articles.map(article => {
                        // console.log(article)
                        // console.log(article.url);
                        // console.log(article.title);
                        // console.log(article.content);
                        // console.log(article.urlToImage);   
             
                        setNews(article);    
                    })
                }
            })
            .catch(err => { console.log(err) });
    }, [])
    
    console.log(News);

    return (
        <div>
                <ul>
                  
                </ul>
        </div>
    )
}

export default DataFetcher;

//   import React, { useState, useEffect } from 'react';
//                  // import './App.css';
//                  import axios from 'axios';
//                  import NewsData from '../NewsData/NewsData'
                 
//                  const DataFetcher = () => {
//                      const [News, setNews] = useState([]);
                 
//                      useEffect(() => {
//                          //const axios = require("axios");
//                          axios.get('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3cb25d8241014e44a94861a91d73f1f4')
//                              .then(res => {
//                                  // console.log(res.data);
//                                  // console.log(res.data.articles);
//                                  // console.log(res.data.articles)
//                                  {
//                                      res.data.articles.map(article => {
//                                          // console.log(article)
//                                          // console.log(article.url);
//                                          // console.log(article.title);
//                                          // console.log(article.content);
//                                          // console.log(article.urlToImage);            
//                                          setNews({
//                                              url: article.url,
//                                              title: article.title,
//                                              content: article.content,
//                                              urlToImage: article.urlToImage,
//                                          })
//                                      })
//                                  }
//                              })
//                              .catch(err => { console.log(err) });
//                      }, [])
                     
//                      console.log(News);
//                      return (
//                          <div>
//                              <ul>
                                        
//                              </ul>
//                          </div>
//                      )
//                  }
                 
//                  export default DataFetcher;


    // const [search, setSearch] = useState();
      // const [posts, setPosts] = useState([]);
      // const [title, setTitle] = useState();
      // const [content, setContent] = useState();
      // const [url, setUrl] = useState();
      // const [urlToImage, setUrlToImage] = useState();

      // console.log(res.data.articles[0].title)
        // console.log(res.data.articles[0].content)
        // console.log(res.data.articles[0].url)
        // console.log(res.data.articles[0].urlToImage)

        // setTitle(res.data.articles[0].title);
        // setContent(res.data.articles[0].content);
        // setUrl(res.data.articles[0].url);
        // setUrlToImage(res.data.articles[0].urlToImage);

///////////////////////////////////////////////////////////////

/* Getting [0] Response */

/* Google-News API: Basic Display of [0] */

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DataFetcher = () => {
//     // const [search, setSearch] = useState();
//     const [posts, setPosts] = useState([]);
//     const [title, setTitle] = useState();
//     const [content, setContent] = useState();
//     const [url, setUrl] = useState();
//     const [urlToImage, setUrlToImage] = useState();

//     useEffect(() => {
//        //const axios = require("axios");
//     axios.get('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3cb25d8241014e44a94861a91d73f1f4')
//     .then(res => {
//         console.log(res.data);
//         console.log(res.data.articles[0].title)
//         console.log(res.data.articles[0].content)
//         console.log(res.data.articles[0].url)
//         console.log(res.data.articles[0].urlToImage)

//         setTitle(res.data.articles[0].title);
//         setContent(res.data.articles[0].content);
//         setUrl(res.data.articles[0].url);
//         setUrlToImage(res.data.articles[0].urlToImage);
//     })
//     .catch(err => { console.log(err) });
//     }, [])

//     // console.log(posts);
//     return (
//         <div>
//             <div><strong>Title:</strong>&nbsp;{title}</div>
//             <br/>
//             <div><strong>Content: </strong>&nbsp;{content}</div>
//             <br/>
//             <div><strong>Url: </strong>&nbsp;{url}</div>
//             <br/>
//             <div><strong>Image URL: </strong>&nbsp;{urlToImage}</div>
//             {/* { <ul>
//                 {
//             posts.map(title => (
//             <li key={post.id}>{posts.title}</li> 
//             ))
//             } 

//             </ul> */}
//         </div>
//     )
// }

// export default DataFetcher;

/////////////////////////////////////////////////////////

/* Double map() Technique Qmod */ 



     {/* <li><strong>Title:</strong>&nbsp;{News.title}</li>
                 <li><strong>Content: </strong>&nbsp;{News.content}</li>
                 <li><strong>Url: </strong>&nbsp;{News.url}</li>
                 <li><strong>Image URL: </strong>&nbsp;{News.urlToImage}</li>    */} 

                //  import React, { useState, useEffect } from 'react';
                //  // import './App.css';
                //  import axios from 'axios';
                //  import NewsData from '../NewsData/NewsData'
                 
                //  const DataFetcher = () => {
                //      const [News, setNews] = useState([]);
                 
                //      useEffect(() => {
                //          //const axios = require("axios");
                //          axios.get('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3cb25d8241014e44a94861a91d73f1f4')
                //              .then(res => {
                //                  // console.log(res.data);
                //                  // console.log(res.data.articles);
                //                  // console.log(res.data.articles)
                //                  {
                //                      res.data.articles.map(article => {
                //                          // console.log(article)
                //                          // console.log(article.url);
                //                          // console.log(article.title);
                //                          // console.log(article.content);
                //                          // console.log(article.urlToImage);            
                //                          setNews({
                //                              url: article.url,
                //                              title: article.title,
                //                              content: article.content,
                //                              urlToImage: article.urlToImage,
                //                          })
                //                      })
                //                  }
                //              })
                //              .catch(err => { console.log(err) });
                //      }, [])
                     
                //      console.log(News);
                //      return (
                //          <div>
                //              <ul>
                                        
                //              </ul>
                //          </div>
                //      )
                //  }
                 
                //  export default DataFetcher;
/////////////////////////////////////////////////////////

/* Getting and Displaying Simple API Return */

// import React, {useState, useEffect} from 'react';
// // import './App.css';
// import axios from 'axios';

// function DataFetcher() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         // axios.get('http://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=bbb815e9d5d661bba4a9ff4878159a9b')
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => {
//             console.log(res.data);
//             setPosts(res.data);
//         })
//         .catch(err => {console.log(err)});
//     }, [])

//     return (
//     <div>
//         <ul>
//         {
//             posts.map(post => (
//                <li key={post.id}>{post.title}</li>
//             ))
//         }
//         {/* {posts} */}
//         </ul>
//     </div>
//   )
// }

// export default DataFetcher;



// https://jsonplaceholder.typicode.com/posts

// const axios = require("axios");
// axios.get('')
//     .then(res => {
//         console.log(res.data);
//         // setPosts(res.data.weather[0].main);
//     })
//     .catch(err => { console.log(err) });

/* Getting 'post' requests from data */


    //     axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/random_masks_usage_instructions.php&x-rapidapi-key=15d8b0eaa3mshc38998c726d310fp1c3926jsnf6e82c2313d1')
    //     .then(res => {
    //         console.log(res.data);
    //         // setPosts(res.data.weather[0].main);
    //     })
    //     .catch(err => {console.log(err)});


/* "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "a6ccf79befmsh87f5a0cc8e7ffbfp122416jsn1b5c182cd73e"*/