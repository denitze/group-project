import React, { Component } from 'react';

class NewsSec extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            items: []
         }
    }

    componentDidMount() {
        fetch("http://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=6a17b34119a14fc3b668522e94dc69df")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() { 
        return ( 
            <div id="info">
                {this.state.isLoaded ? this.state.items.articles.map(article => 
                 
                <figure>
                <img src={article.urlToImage} alt=""/>
                <figcaption>
                <h1>{article.title}</h1> 
                
                <p>{article.description}{article.author}</p>
                <p></p>
                </figcaption>
                </figure>
                
                ) 
                
                
                : <div>Loading .... </div>
                }
                
            </div>
         );
    }
}
 
export default NewsSec;