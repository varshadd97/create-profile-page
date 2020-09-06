import React, { Component } from "react";
import "./Profile.css";

export default class Education extends Component {
  render() {
    return (
      <div className='bo'>
        <h1 className='ex'>EDUCATION</h1>
        <p className='mn'>Johnson Country Community College</p>
        <p className='sp'>May 2017</p>
        <p className='sp'>Software Development Certificate | GPA : 4.0</p>
        <p className='mn'>The University of Kansas</p>
        <p className='sp'>May 2013</p>
        <p className='sp'>Bachelor's ofMusic Education | GPA : 3.49</p>
      </div>
    );
  }
}
