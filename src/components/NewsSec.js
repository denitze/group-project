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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
            <div>
                {this.state.isLoaded ? this.state.items.articles.map(article => 
                <div> <h1>{article.title}</h1> 
                <img src={article.urlToImage} alt=""/>
                <p>{article.description}</p>
                <p>{article.author}</p>
                
                </div>) 
                
                
                : <div>Loading .... </div>}
                {/* {this.state.items.map(user => <div> {user.name} </div>)} */}
                {/* {this.state.items.map(user => <UserCard 
                key={user.id} 
                userData={user}
             /> )} */}
            </div>
         );
    }
}
 
export default NewsSec;