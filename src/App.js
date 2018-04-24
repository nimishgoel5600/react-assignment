import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
class App extends Component {
  state = {
    valueText: ""
  };

  textChangeHandler = event => {
    const valueText = event.target.value;
    this.setState({ valueText });
  };

  deleteCharHandler = (index)=>{
    const text=this.state.valueText.split('');
    text.splice(index,1);
    const updatedText=text.join('');
    this.setState({valueText:updatedText});
  };

  render() {
    const charList=this.state.valueText.split('').map(
      (ch,key)=>{
        return <Char key={key} character={ch} deleteChar={()=>this.deleteCharHandler(key)} />
      }
    );
    return (
      <div className="App">
        <div className="inputBox">
          <label htmlFor="paragraph">Enter Text : </label>
          <input
            type="text"
            id="paragraph"
            onChange={event => this.textChangeHandler(event)}
            value={this.state.valueText}
          />
          <p className="length">
            You have entered {this.state.valueText.length} characters so far
          </p>
        </div>
        <div className="inputBox">
          <Validation charLength={this.state.valueText.length} />
        </div>
        <div className="inputBox">
          {charList}
        </div>
      </div>
    );
  }
}

export default App;
