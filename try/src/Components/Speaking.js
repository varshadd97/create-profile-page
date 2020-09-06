import React, { Component } from "react";
import "./Profile.css";
export default class Speaking extends Component {
  render() {
    return (
      <div className='bo'>
        <h1 className='ex'>SPEAKING</h1>
        <p className='mn'>Thinking About React , Atomatically</p>
        <p className='sp'>Connectaha 2019 | Omaha , NE</p>
        <p className='sp'>
          Atomic design is the concept of breaking down user interfaces into
          smaller , simpler elements. Theire are five diffrent levels in atomaic
          design : Atoms , Moluciules, Organism , templats , and pages. This
          levels are combined to make user interfaces .
        </p>
        <p className='sp'>
          React , At its core , follows Atomic design inherntly by encouraging
          developers to keep components as simple and as broken down as
          possible.from this simplicity , we can create more complex components
          and containers of components to create the user interfaces for our
          appications following this patterns gives us , as developers , and
          easy to manage (test) ecosysytem within our React applications .
        </p>
      </div>
    );
  }
}
