import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { msToMS } from './Home.jsx';

class PlayerImage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<div className="player">

      {this.props.player.isPlaying ? <div>
        <img alt="track logo" className="img-unwrapped" src={this.props.player.trackIMG !== '' ? this.props.player.trackIMG : 'http://blueroom.org.au/wp-content/uploads/2016/12/BLANK_SN-Website-760x485.jpg'} />
      <div className="track-data-left">
              <div className='track-name-left'>Track Name:</div>
              <br/>
              <div className="track-name-left">{this.props.player.name}</div>
              <div className='clear-both-2'/>
              <hr/>
              <div className='track-name-left'>Artist:</div>
              <br/>
              <div className="track-name-left"><Link to={this.props.player.authorID ? `/artist/${this.props.player.authorID}` : '/'}>{this.props.player.author}</Link></div>
              <hr/>
              <div className='track-name-left'>Time:</div>
              <br/>
              <div className='track-name-left'>{msToMS(this.props.player.duration)}</div>
              <hr/>
            </div>
            </div> : null }
    </div>)
 ;
  }
}


const PlayerImageWrapped = connect(
    state => ({
      player: state.player,
    }),
    null)(PlayerImage);

export default PlayerImageWrapped;


