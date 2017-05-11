import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { playTrack, isLoading, newAlbum } from '../actions';
import { msToMS } from './Home.jsx';

class Album extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentWillMount() {
    this.props.isLoading();
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.newAlbum(id);
  }
  render() {
    return (
      <div className="col-right">
        <div className="page-store">
          {this.props.loading ? <h1>Loading..</h1> :
          <div>
            <div className="top-ref" />
            <h3 className="text-center extra-margin-top">Tracks:</h3><hr />
            <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>#</th>
                    <th>Name:</th>
                    
                    <th>Time:</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.album.tracks.items.map((item, index) => {
                    const parsedTrack = {
                    ...item,
                    album: this.props.album,
                  };
                    return (<tr key={index}>
        <td><button className="btn btn-xs btn-success" href="#" onClick={() => this.props.playTrack(parsedTrack)}><i className="fa fa-play" aria-hidden="true" /></button></td>
        <td>{item.track_number}</td>
        <td>{item.name}</td>
        <td>{msToMS(item.duration_ms)}</td>
      </tr>);
                  }) }
                </tbody>
              </table>


          </div>}
        </div>
      </div>
    );
  }
}


const ConnectedAlbum = connect(
    state => ({
      loading: state.isLoading,
      album: state.album,
    })
    ,
    dispatch => ({
      playTrack: object => dispatch(playTrack(object)),
      isLoading: () => dispatch(isLoading()),
      newAlbum: id => dispatch(newAlbum(id)),
    }))(Album);


export default ConnectedAlbum;
