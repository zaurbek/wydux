import React, { Component } from 'react';
import { connect } from 'react-redux';

import { togglePlay } from '../actions'

class PlayerBottom extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        {this.props.player.isPlaying ?
          <div className="player-bottom">
            <audio id="audio" autoPlay src={this.props.player.trackURL} />
            <a href='#' onClick={()=>this.props.togglePlay()}><i className={`fa fa-${this.props.player.trackPlaying?'pause':'play'}`} aria-hidden="true"></i></a> 
            
            
            
            
          </div> 
          
          
          : 
          
          
          null}

      </div>
    );
  }
}

const PlayerBottomWrapped = connect(
    state=>({
        player: state.player,
    }),
    dispatch=>({
      togglePlay: ()=>dispatch(togglePlay()),
    }))(PlayerBottom)


export default PlayerBottomWrapped;

