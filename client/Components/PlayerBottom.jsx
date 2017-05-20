import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { togglePlay, playBackward, playForward } from '../actions';

class PlayerBottom extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      time: '0: 0 / 0: 30',
      old: props.player.name,
      added: false,
      volume: 1,
    };
  }
  togglePlay() {
    if (this.props.player.trackPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play();
    }
    this.props.togglePlay();
  }
  addListeners() {
    if (!this.state.added) {
      this.audioPlayer.addEventListener('timeupdate', () => {
        this.watcher();
        const ratio = this.audioPlayer.currentTime / this.audioPlayer.duration;
        const coords = this.time.offsetLeft + (this.time.offsetWidth * ratio);
        this.move(coords);
      });
      this.audioPlayer.addEventListener('ended', () => {
        this.props.togglePlay();
      });
    }
  }
  componentDidUpdate() {
    { this.props.player.isPlaying ?
      (this.props.player.name !== this.state.old ? this.addListeners() : null)
     : null; }
  }
  componentDidMount() {
    { this.props.player.isPlaying ?
      this.addListeners()
     : null; }
  }
  mouseFrom(event) {
    window.removeEventListener('mouseup', this.mouseFrom(event));
    window.removeEventListener('mousemove', this.mouseChange(event));
  }
  watcher() {
    this.setState({ added: true, time: (isNaN(this.audioPlayer.duration) ? '0: 00 / 0: 30' : `0: ${Math.floor(this.audioPlayer.currentTime)} / 0: ${Math.floor(this.audioPlayer.duration)}`), old: this.props.player.name });
  }
  mouseChange(event) {
    const nextTime = ((event.pageX - this.time.offsetLeft) / this.time.offsetWidth) * this.audioPlayer.duration;
    this.move(event.pageX);
    this.audioPlayer.currentTime = nextTime;
  }
  move(coords) {
    const Left = coords - this.time.offsetLeft;
    const times = this.time.offsetWidth - this.handleMark.offsetWidth;
    if (Left >= 0 && Left <= times) {
      this.handleMark.style.marginLeft = `${Left}px`;
    } else if (Left < 0) {
      this.handleMark.style.marginLeft = '0px';
    }
  }
  mouseOn(event) {
    window.addEventListener('mouseup', this.mouseFrom(event));
    window.addEventListener('mousemove', this.mouseChange(event));
  }
  mute() {
    this.audioPlayer.muted = !this.audioPlayer.muted;
  }
  lowerVolume() {
    if ((this.audioPlayer.volume - 0.2) <= 0.1) {
      this.setState({
        volume: 0,
      });
      this.audioPlayer.volume = 0;
    } else {
      this.setState({
        volume: Math.round((this.audioPlayer.volume - 0.2) * 10) / 10,
      });
      this.audioPlayer.volume = this.audioPlayer.volume - 0.2;
    }
  }
  increaseVolume() {
    if ((this.audioPlayer.volume + 0.2) >= 0.98) {
      this.setState({
        volume: 1,
      });
      this.audioPlayer.volume = 1;
    } else {
      this.setState({
        volume: Math.round((this.audioPlayer.volume + 0.2) * 10) / 10,
      });
      this.audioPlayer.volume = this.audioPlayer.volume + 0.2;
    }
  }
  getMuted() {
    if (this.audioPlayer && this.props.player.isPlaying) {
      return `glyphicon glyphicon-volume-off ${this.audioPlayer.muted ? 'highlight' : ''}`;
    }
    return 'glyphicon glyphicon-volume-off';
  }
  getVolume() {
    if (this.audioPlayer && this.props.player.isPlaying) {
      return this.audioPlayer.muted ? '0%' : `${this.state.volume*100}%`;
    } 
      return '100%';
    
  }
  render() {
    return (
      <div>
        {this.props.player.isPlaying ?
          <div className="player-bottom">
            <audio ref={(audio) => { this.audioPlayer = audio; }} autoPlay={!!this.props.player.trackPlaying} src={this.props.player.trackURL} />
            <div className="track-data">
              <div className="track-name">{this.props.player.name}</div>
              <div className="track-artist"><Link to={this.props.player.authorID ? `/artist/${this.props.player.authorID}` : ''}>{this.props.player.author}</Link></div>
            </div>
            <div className="player-controls">
              <button onClick={() => this.props.playBackward()} className="btn btn-link play-element"><i className={'fa fa-backward'} aria-hidden="true" /></button>
              <button onClick={() => this.togglePlay()} className="btn btn-link play-element"><i className={`fa fa-${this.props.player.trackPlaying ? 'stop' : 'play'}`} aria-hidden="true" /></button>
              <button onClick={() => this.props.playForward()} className="btn btn-link play-element"><i className={'fa fa-forward'} aria-hidden="true" /></button>
              <span className="player-time">{this.state.time}</span>
            </div>
            <div className="time" ref={(time) => { this.time = time; }} onClick={event => this.mouseChange(event)}>
              <div className="handle" ref={(handle) => { this.handleMark = handle; }} onMouseDown={event => this.mouseOn(event)} />
            </div>
            <div className="player-volume">
              <button onClick={() => this.mute()} className="btn btn-link play-element left"><i className={this.getMuted()} aria-hidden="true" /></button>
              <button onClick={() => this.increaseVolume()} className="btn btn-link play-element right"><i className="fa fa-volume-up" aria-hidden="true" /></button>
              <div className="volume">{this.getVolume()}</div>
              <button onClick={() => this.lowerVolume()} className="btn btn-link play-element right"><i className="fa fa-volume-down" aria-hidden="true" /></button>

            </div>
          </div>


          :


          null}

      </div>
    );
  }
}

const PlayerBottomWrapped = connect(
    state => ({
      player: state.player,
    }),
    dispatch => ({
      togglePlay: () => dispatch(togglePlay()),
      playForward: () => dispatch(playForward()),
      playBackward: () => dispatch(playBackward()),
    }))(PlayerBottom);


export default PlayerBottomWrapped;

