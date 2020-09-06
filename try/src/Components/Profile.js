import React, { Component } from "react";
import "./Profile.css";
export default class Profile extends Component {
  render() {
    return (
      <div className='bo'>
        <img src={process.env.PUBLIC_URL + "./new.jpg"} className='details' />
        <h1 className='space'>katia Wheeler</h1>
        <p className='VD'>👩‍💻 Software Engineer ☕️Tea enthusiast</p>
        <p className='DD'>🎲 Gamer</p>
        <p className='DD'>🐦 ♏️ ⚛️ 📧</p>
      </div>
    );
  }
}
