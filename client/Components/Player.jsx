import React from 'react';
import { connect } from 'react-redux';


class Player extends React.Component {
  constructor(props) {
          super(props);
          this.props = props;
        }

  render() {
          return (<div className="player">
          {this.props.isPlaying ? <div><button className="btn btn-success play-btn btn-xs">{this.props.isPlaying ? 'Stop' : 'Play'}</button>
          <img alt="track logo" className="img-unwrapped" src={this.props.trackIMG !== '' ? this.props.trackIMG : 'http://blueroom.org.au/wp-content/uploads/2016/12/BLANK_SN-Website-760x485.jpg'} />
          <audio id="audio" autoPlay controls src={this.props.trackURL} /></div> : null }
        </div>)
 ;}
}


const PlayerWrapped = connect(
    state => ({
      trackIMG: state.trackIMG,
      trackURL: state.trackURL,
      isPlaying: state.isPlaying,
    }),
    null)(Player);

export default PlayerWrapped;
