import { Component } from "react";

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  updateClicks = () => {              //скидуємо всі стани до 0
    this.setState(prevState => {
      return {
        clicks: prevState.clicks + 1,
      };
    });
  }

  render() {
    
  }


}