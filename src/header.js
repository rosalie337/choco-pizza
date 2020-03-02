import React from 'react';

export default class Header {
    render () {
        return (
            <div>
                <img src={this.props.logo} alt="logo" class="leftHeader"/>
                <p class="leftHeader">{this.props.name}</p>
                <h6 class="leftHeader">{this.props.description}</h6>
                <img src={this.props.fb} alt="facebook logo" class="socialNav"/>
                <img src={this.props.twitter} alt="twitter logo" class="socialNav"/>
                <img src={this.props.google} alt="google plus logo" class="socialNav"/>
                <img src={this.props.instagram} alt="instagram logo" class="socialNav"/>
                <img src={this.props.flicker} alt="flicker logo" class="socialNav"/>
                <img src={this.props.pintrest} alt="pinterest logo" class="socialNav"/>
                <img src={this.props.rss} alt="rss logo" class="socialNav"/>
                <img src={this.props.email} alt="email logo" class="socialNav"/>
            </div>
    );
  }
}