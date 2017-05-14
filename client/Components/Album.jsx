import React, {
    Component,
}
from 'react';
import {
    connect,
}
from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
    playTrack,
    isLoading,
    newAlbum,
}
from '../actions';
import {
    msToMS,
}
from './Home.jsx';

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
                  <div className="top-ref">
                            <img src={this.props.album.images ? this.props.album.images[0].url : ''} className="top-ref-image" />
                            <div className="cleat-both">
                              <h4>{this.props.album.name}</h4>

                              <span><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/share?url=http://wydux.herokuapp.com/&text=wyDux - cool Spotify Web Player created with React and Redux"><button className='twitter-share-button'><i className="fa fa-twitter" aria-hidden="true"></i> Tweet</button></a></span>
                              <h5> Type: Album </h5>

                              <h5> Label: {this.props.album.label} </h5>

                              <h5> Artists: </h5>
                              <ul>
                                {this.props.loading ? null : this.props.album.artists.map((item, index) => (
                                <li key={index}><Link to={`/artist/${item.href.split('/')[item.href.split('/').length - 1]}`}>{item.name}</Link></li>
                            ))}
                              </ul>
                            </div>
                          </div>
                  <h3 className="text-center extra-margin-top">Tracks:</h3><hr />
                  <table className="table table-striped table-hover">
                            <thead>
                              <tr>
                                <th />
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
                                          <h5 className='my-name'><i className="fa fa-code" aria-hidden="true"></i>  with  <i className="fa fa-heart" aria-hidden="true"></i> by <a href='https://github.com/zooll8/wydux' target='_blank'>Zaurbek Zhakupov</a></h5>

                </div>}
          </div>

      </div>);
  }
}

const ConnectedAlbum = connect(
    state => ({
      loading: state.isLoading,
      album: state.album,
    }),
    dispatch => ({
      newAlbum: id => dispatch(newAlbum(id)),
      isLoading: () => dispatch(isLoading()),
      playTrack: object => dispatch(playTrack(object)),
    }))(Album);


export default ConnectedAlbum;
