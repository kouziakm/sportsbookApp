import React, { Component} from 'react'
import ReactDOM from 'react-dom';


export default class HeaderNfl extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div id ="header" style ={{
        background: "linear-gradient(rgba(27,52,63,0.41), #050708) 0 0/cover,url(/img/background-main.jpg) center center no-repeat fixed",
        backgroundSize: "cover"
      }}>
      <div className="header-logo">
      <img src = "./img/sportIcons/nflLogo.svg"/>
      </div>
        <div className = "account-section">
        </div>
        <div className="sport-icons">
          <div className="sports-group">
            <img src="/img/sportIcons/soccer.svg" />
            <img src="/img/sportIcons/football.svg" />
            <img src="/img/sportIcons/mma.svg" />
            <img src="/img/sportIcons/baseball.svg" />
          </div>
        </div>
      </div>)
  }
}
