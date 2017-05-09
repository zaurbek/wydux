import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onSearch, newSearch, playTrack } from '../actions.js';

function msToMS(ms) {
    var minutes = Math.floor(ms/60000)
    var seconds = Math.floor(ms/1000)%60
    return minutes+':'+seconds;
}

class Right extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  tableTracks() {
    return (
        <table className="table table-striped table-hover right-table">
             <thead>
    <tr>
      <th>Play:</th>
      <th>Artist:</th>
      <th>Name:</th>
      <th>Popularity:</th>
      <th>Time:</th>
    </tr>
  </thead>
             <tbody>
    {this.props.tracks.map((item, index) => (

      <tr key={index}>
              <td><button className="btn btn-xs btn-success" href='#' onClick={()=>this.props.playTrack(item)}>!</button></td>
              <td>{item.artists[0].name}</td>
              <td>{item.name}</td>
              <td className="tracks--table--progress"><div className="progress">
  <div className="progress-bar progress-bar-success" style={{width:item.popularity+'%'}}></div>
</div>
</td>
              <td>{msToMS(item.duration_ms)}</td>
            </tr>

                      )) }
  </tbody>
           </table>
      );
  }
  render() {
    return (
      <div className="col-right">
        <div className="form-group">
          <input onChange={() => this.props.onSearch(this.searchText.value)} ref={(input) => { this.searchText = input; }} type="text" className="form-control search-bar" placeholder="Search" />
        </div>
        <div className="tracks-store">
          {(this.props.albums) ? (<div className=" extra-margin-top "><h3 className="text-center">Albums:</h3><hr /></div>) : null}
          {(this.props.albums) ? this.props.albums.map(item => (
              <div className="well track-card" key={item.id}>
                  <img className="card-img" src={item.images[1].url}  /><br  />

                  {item.name}


                </div>
                      )) : null
              }
          <div className="clear-both" />
          {(this.props.artists) ? (<div className=" extra-margin-top "><h3 className="text-center extra-margin-top ">Artists:</h3><hr /></div>) : null}
          {(this.props.artists) ? this.props.artists.map(item => (
              <div className="well track-card" key={item.id}>
                  <img className="card-img" src={item.images[1].url}  /><br  />

                  {item.name}


                </div>
                      )) : null
              }
          <div className="clear-both" />
          {(this.props.playlists) ? (<div className=" extra-margin-top "><h3 className="text-center extra-margin-top">Playlists:</h3><hr /></div>) : null}
          {(this.props.playlists) ? this.props.playlists.map(item => (
              <div className="well track-card" key={item.id}>
                  <img className="card-img" src={item.images.length > 1 ? item.images[1].url:item.images[0].url}  /><br  />

                  {item.name}


                </div>
                      )) : null
              }
          <div className="clear-both" />
          {(this.props.tracks) ? (<div className=" extra-margin-top "><h3 className="text-center extra-margin-top">Tracks:</h3><hr /></div>) : null}
          {(this.props.tracks) ? this.tableTracks() : null }
        </div>
        
      </div>
    );
  }
}

const RightWrapped = connect(
    state => ({
      tracks: state.fetch.albums.items ? (state.fetch.tracks.items.length > 0 ? state.fetch.tracks.items : null) : null,
      artists: state.fetch.albums.items ? (state.fetch.artists.items.length > 0 ? state.fetch.albums.items : null) : null,
      playlists: state.fetch.albums.items ? (state.fetch.playlists.items.length > 0 ? state.fetch.playlists.items : null) : null,
      albums: state.fetch.albums.items ? (state.fetch.albums.items.length > 0 ? state.fetch.albums.items : null) : null,
    }),
    dispatch => ({
      onSearch: text => dispatch(newSearch(text)),
      playTrack: object => dispatch(playTrack(object))
    }),
)(Right);

export default RightWrapped
;
