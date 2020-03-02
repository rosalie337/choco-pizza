import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Body from './body.js'
import Footer from './footer.js'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header 
          logo={'logo.png'} 
          name={'Delicious'}
          description={'The best food blog on the web.'}
          fb={'fb-icon.png'}
          twitter={'twit-icon.png'}
          google={'gp-icon.png'}
          instagram={'insta-icon.png'}
          flicker={'flic-icon.png'}
          pintrest={'pint-icon.png'}
          rss={'rss-icon.png'}
          email={'mail-icon.png'}
        />
       <Body 
          mainPic={'choco-pizza.png'}
          paragraph1={'For the fig swirl: Melt butter over medium head in a saucepan. Add brown sugar and stir to dissolve. Halve all the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.'}
          paragraph2={'Ice cream: In a small pot over medium head, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the eg yolks. Set mixture in the fridge and wait until the fig mixture is cooled'}
          paragraph3={'Using an ice cream machine pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue your process for +/- 10 minutes. Pour semi-frozen mixture into pyrex dish or glass tupperware. Freeze for at least two hours before serving.'}
          li={'1 1/2 cups milk'}
          li1={'1/2 cup mascarpone'}
          li2={'1/2 tsp pink salt'}
          li3={'1 lb Black Mission Figs'}
          li4={'1/2 cup brown sugar'}
          li5={'2-4 tbsp water'}
          li6={'1 1/2 cups heavy cream'}
          li7={'1/3 granulated sugar'}
          li8={'2 egg yolks'}
          li9={'1 lemon, juiced'}
          li10={'2 tbsp butter'}
          li11={'1 cup honey roasted pecans, roughly chopped'}
        />
        <Footer 
          author={'van-pic.png'}
          authorName={'Vanessa Stevenson'}
          authorText={'Food enthusiast, photography fan. Add a pinch of raw foodism and that\'s pretty much who I am'}
          smallIcon={'small-logo.png'}
          bottomText={'Delicious © 2013 • All Rights Reserved. Proudly published with Ghost.'}
        />
      </div>
    );
  }
}