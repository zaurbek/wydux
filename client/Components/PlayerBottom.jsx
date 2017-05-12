import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    }),null)(PlayerBottom)


export default PlayerBottomWrapped;

