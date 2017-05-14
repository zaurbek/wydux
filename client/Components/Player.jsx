import React from 'react';
import { connect } from 'react-redux';


class PlayerImage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<div className="player">

      {this.props.player.isPlaying ? <div>
        <img alt="track logo" className="img-unwrapped" src={this.props.player.trackIMG !== '' ? this.props.player.trackIMG : 'http://blueroom.org.au/wp-content/uploads/2016/12/BLANK_SN-Website-760x485.jpg'} />
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
