import React, {Component} from 'react';
import axios from "axios";



import Quote from "./quote";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:{},
    };
  }
  
  getquote(){
    axios.get("https://quotes.rest/qod").then((request) => {
      this.setState({  
        quote: request.data.contents.quotes[0],
      });
      console.log(this.state.quote);
    });
  }
  
  componentDidMount(){
    this.getquote();
    
  }
  
  
  
  render() {
    return (
      <div className="app">
          <Quote quoteData={this.state.quote}/>       
      </div>
    );
  }
}
