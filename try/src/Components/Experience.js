import React, { Component } from "react";
import "./Profile.css";

export default class Experiencs extends Component {
  render() {
    return (
      <div className='bo'>
        <h1 className='ex'>EXPERIENCE</h1>
        <img
          src={process.env.PUBLIC_URL + "./balance.png"}
          alt='balance pic'
          className='im'
        />

        <h2 className='sp'>Balance Innovations</h2>
        <p className='sp'>Software Engineer | June 2018 - present</p>

        <p className='sp'>
          Create and maintain modular user interfaces and component libraries
          for a Softwrae as a Service product the are performant , well-tested ,
          and well-crafted .Update and enhance APIs within a MicroServices
          architecture.
        </p>

        <h4 className='sp'>Technologies utilized:</h4>
        <p className='bo1' style={{ marginLeft: 20 }}>
          React , Redux , GraphQL (Apollo Server and Apollo Client , c#.NET Core
          , Cloud Development with AWS , Git).
        </p>

        <h1 className='in'>IMODULES</h1>
        <h2 className='sp'>iModules</h2>
        <p className='sp'>Software Engineer | April 2017-June 2018</p>
        <p className='sp'>
          Utilized Tst-Driven Development and Pair Programming paradingms to
          create both the front-end and back-end of an email management system.
          Leveraged RabbitMQ to handle large message volumes that were
          performant and well-executed . In addtion , created and updated native
          iOS and Android mobile application.
        </p>
        <h4 className='sp'>Technologies utilized:</h4>
        <p className='bo1' style={{ marginLeft: 20 }}>
          React , Redux , GraphQL (Apollo Server and Apollo Client , c#.NET Core
          , Cloud Development with AWS , Git).
        </p>
        <img
          src={process.env.PUBLIC_URL + "./balance.png"}
          alt='balance pic'
          className='im'
        />

        <h2 className='sp'>Balance Innovations</h2>
        <p className='sp'>Software Engineer | June 2018 - present</p>

        <p className='sp'>
          Create and maintain modular user interfaces and component libraries
          for a Softwrae as a Service product the are performant , well-tested ,
          and well-crafted .Update and enhance APIs within a MicroServices
          architecture.
        </p>

        <h4 className='sp'>Technologies utilized:</h4>
        <p className='bo1' style={{ marginLeft: 20 }}>
          React , Redux , GraphQL (Apollo Server and Apollo Client , c#.NET Core
          , Cloud Development with AWS , Git).
        </p>
      </div>
    );
  }
}
