import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import { HomePage, CodeEditorPage } from "./pages";
import Header from "./components/Header";
import {database} from 'firebase'

class App extends Component {
  // constructor() {
  //   super();
  // this.state ={
  //   num: null
  // }}
  state ={
    num: null
  }
  componentDidMount = () => {
    database()
      .ref("codesessions")
      .on("value", s => {
        this.setState({ num: s.numChildren() });
      });
  };

  render() {
    return (
      
      <Router>
        <Header tallySessions={this.state.num}/>
        
        <div className="App container">
          {/* <AppRouter /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="/codesessions/:sessionid" component={CodeEditorPage}/>
        </div>
      </Router>
    );
  }
}

export default App;