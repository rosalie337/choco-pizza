import React, { Component } from "react";

export default class Footer extends Component {
    render() {
      return (
        <div>
            <h3>{this.props.authorName}</h3>
            <img src={this.props.author} alt="vanessa pic"/>
            <p>{this.props.authorText}</p>
            <p>{this.props.smallIcon}</p>
            <p>{this.props.bottomText}</p>
        </div>
      );
    }
  }