import React, { Component } from "react";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Card from "./components/Card"
import "./App.css";



class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
