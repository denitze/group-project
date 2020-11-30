import React, { Component } from 'react';
import UserCard from './UserCard';

class WeatherSec3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            items: []
         }
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=e5282060965199600c1a50877b494763")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
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
                {/* {this.state.isLoaded ? this.state.items.articles.map(article => 
                <div> <h1>{article.author}</h1> 
                <p>{article.title}</p>
                <img src={article.urlToImage} alt=""/>
                </div>) 
                
                
                : <div>Loading .... </div>} */}

                {/* {this.state.items.map(user => <div> {user.name} </div>)} */}
                {/* {this.state.items.map(user => <UserCard 
                key={user.id} 
                userData={user}
             /> )} */}
            </div>
         );
    }
}
 
export default WeatherSec3;