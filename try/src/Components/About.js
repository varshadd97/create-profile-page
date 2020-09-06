import React, { Component } from "react";
import "./Profile.css";
export default class About extends Component {
  render() {
    return (
      <div className='bo'>
        <h1 className='ab'>ABOUT</h1>
        <p className='pr'>
          Experience full-stack developer focuing on creating quality , well-
          designed software.
        </p>
        <p className='sp'>
          Katia Wheeler (formerly sittmann) is a Software Engineer baed in
          Kansas City.While growing up , she was constanstly At the computer ,
          either playing a rousing game of The Sims (lets be honest , she was
          putting the all in the pool and taking away the ladder) or creating
          new Xangan layouts . As she got older (and Xanga faded from society),
          she dabbled more in the . NET space and some JavaScript Frameworks.
        </p>
        <p className='sp'>
          In her current role , she mostly focuses on creating composable UIs
          with React on the front-end . She has also doubbled in macghine
          learning (Skynet), iOS and Android development , and does freelance
          WordPress development
        </p>
        <p className='sp'>
          When she's not coding , katia can be found driking massive amounts of
          Tea (seriously , ungodly amounts) , biking ,
          <span style={{ color: "red" }}> attempting to blog </span> , playing a
          video game , or, simply manically laughing while stroking one of her
          to cats in an armchair.
        </p>
        <p className='sp'>
          Feel free to reach out to Katia and say Hello at One Of social
          accounts!
        </p>
      </div>
    );
  }
}
