import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
};
    };
nextNumber = () => {
  this.setState((state) =>({
    //condition ? true : false 
    count: state.count < 10 ? state.count +1 : state.count,
  }))
};
previousNumber = () => {
  this.setState((state) =>({
    count: state.count > -10 ? state.count -1 : state.count,
  }))
};
randomNumber = () => {
  this.setState({
      count: +(Math.random() * (10 - -10) + -10).toFixed(0),
    });
  };
resetNumber = () => {
  this.setState((state) =>({
    count: 0,
  }));}


render() {
  return (
    <div className="app">
      <div className="counter">{this.state.count}</div>
        <div className="controls">
          <button onClick={this.nextNumber}>INC</button>
          <button onClick={this.previousNumber}>DEC</button>
          <button onClick={this.randomNumber}>RND</button>
          <button onClick={this.resetNumber}>RESET</button>
        </div>
      </div>
    );
  }
}
export default App;
