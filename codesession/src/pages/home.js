import React from "react";

import rand from "random-key";
import { database } from "firebase";
import Button from "@material-ui/core/Button";

export default class HomePage extends React.Component {
  state = {
    key: rand.generate(5),
    num: null
  };

  componentDidMount = () => {
    database()
      .ref("codesessions")
      .on("value", s => {
        this.setState({ num: s.numChildren() });
      });
  };


  onHighGround = () => {
      // console.log("it's over anakin")
      database()
      .ref("codesessions/" + this.state.key)
      .set({
        content: "Happy Coding",
        createdon: Date()
      });
    this.props.history.push("/codesessions/" + this.state.key);
  }
  render() {
    return (
      <React.Fragment>
        <div className="homepage">
          <div style={{paddingTop: '5em'}}>

          <h1>
            Share Code in Realtime with Anyone
          </h1>

          <h4 className="sub-title">
            <em> A Simple Realtime Code Editing sharing App. Utilizing Firebase Realtime Database and Ace editor </em>
            
          </h4> 
          <hr/>
          <h5> Click the button below to initialize a code session and share the generated url</h5>
          <Button variant="contained"  color="red" onClick={this.onHighGround}>Code Editor</Button>
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}