import React, { Component} from 'react'
import ReactDOM from 'react-dom';
import _ from 'lodash'


export default class Gameselected extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
handleChange = (item)=>{
  console.log(item)

this.props.handleChange(item)
}

convertTime = (convert) => {
  let date = new Date(convert);
return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
}


handleBetRisk = (e,item) =>{

let bet=e.target.value


if(item.juice<0){
  let calcBet =(bet)=>{
      let newAmount = (100/item.juice)*bet;
      return newAmount
  }
    let win = calcBet(bet)
    win = Math.round(win * 100) / 100
    win = Math.abs(win)
  this.props.handleBetRisk(item,win,bet)
}else{
  let calcBet =(bet)=>{
      let newAmount = (item.juice*.01)*bet;
      return newAmount
  }
    let win = calcBet(bet)
    win = Math.round(win * 100) / 100
  this.props.handleBetRisk(item,win,bet)
}
}



showme=()=>{
  let games = this.props.gameSelected;
  return games.map((item,i)=>{
    return(
      <div className="game-selected-container" key ={i} >
          <div className="close-btn" onClick={()=>this.handleChange(item)}>
            <img src = "./img/sportIcons/close-btn.svg" />
          </div>
          <div className="bet-container">
              <div className="bet-chosen">
                    <span className="teamChozen">{item.teamChosen}  {(item.line>0 && item.wagerType==='moneyline' || item.line>0 && item.wagerType==='spread' ? '+ '+ item.line : item.line)} </span>
                  <span className="wager-type">{item.wagerType}</span>
              </div>
              <span className="wager-type">{(item.wagerType==='moneyline' ? '': item.juice)}</span>
          </div>
          <div className="match-container">
            <span className="game">{item.Details}</span>
            <span className="match-time">{this.convertTime(item.matchTime)}</span>
          </div>
          <div className="wager-amount">
            <div className="group-risk">
              <input type="number" name="risk" value={item.risk} onChange={(e)=>this.handleBetRisk(e,item)}/>
              <span>Risk</span>
            </div>
            <div className="group-winbox">
                <h5>{item.win}</h5>
               <span>Win</span>
            </div>
          </div>
      </div>
    )
  })
}
totalMoneyRisked = ()=>{
  var s = _.reduce(this.props.gameSelected, function(s, entry) {
      return s + parseFloat(entry.risk);
  }, 0);
    s = Math.abs(Math.round(s * 100) / 100)
  return s;
}
totalMoneyWinPossible = ()=>{
  var s = _.reduce(this.props.gameSelected, function(s, entry) {
      return s + parseFloat(entry.win);
  }, 0);
  s = Math.abs(Math.round(s * 100) / 100)

  return s;
}

  render () {
    return (
      <div id ="game-selected" >
        <h1>Bet Slip</h1>
        {this.showme()}
        <div className="wager-confirmation-container">
          <div className="confirmation-group bets">
            <h5>Total Bets:</h5>
            <h5>{this.props.gameSelected.length}</h5>
          </div>
          <div className="confirmation-group bet-risk">
              <h5>Total Stake:</h5>
              <h5> {isNaN(this.totalMoneyRisked()) ?' Fill-in bet':'$'+ this.totalMoneyRisked()}</h5>
          </div>
          <div className="confirmation-group bet-win">
              <h5>Possible Winnings</h5>
              <h5> {isNaN(this.totalMoneyWinPossible()) ?'':'$'+ this.totalMoneyWinPossible()}</h5>
          </div>
          <button type="text">Place Wager</button>
        </div>
      </div>)
  }
}
