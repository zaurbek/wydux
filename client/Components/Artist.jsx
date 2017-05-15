import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {playTrack, isLoading, newArtist} from '../actions';
import {msToMS} from './Home.jsx';

class Album extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentWillMount() {
        this
            .props
            .isLoading();
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this
            .props
            .newArtist(id);
    }
    render() {
        return (
            <div className="col-right">
                <div className="page-store">
                    {this.props.loading
                        ? <h1>Loading..</h1>
                        : <div>
                            <div className="top-ref-artist">
                                <img
                                    src={this.props.artist.images[0]
                                    ? this.props.artist.images[0].url
                                    : 'http://vignette3.wikia.nocookie.net/k-anime/images/6/60/No_Image_Available.png/r' +
                                        'evision/latest?cb=20130418072455'}
                                    className="top-ref-artist-image"/>
                                <div className="cleat-both">
                                    <h4>{this.props.artist.name}</h4>
                                    <span>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://twitter.com/share?url=http://wydux.herokuapp.com/&text=wyDux - cool Spotify Web Player created with React and Redux">
                                            <button className='twitter-share-button'>
                                                <i className="fa fa-twitter" aria-hidden="true"></i> Tweet</button>
                                        </a>
                                    </span>
                                    <h5>
                                        Type: Artist
                                    </h5>
                                    <h5>
                                        Followers: {this.props.artist.followers.total}
                                    </h5>
                                    <h5>
                                        Genres:
                                    </h5>
                                    <ul>
                                        {this.props.loading
                                            ? null
                                            : this
                                                .props
                                                .artist
                                                .genres
                                                .map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                    </ul>
                                    <h5>
                                        Popularity: {this.props.artist.popularity + '%'}</h5>
                                </div>
                            </div>
                            <h6 className='my-name'><i className="fa fa-code" aria-hidden="true"></i>  with  <i className="fa fa-heart" aria-hidden="true"></i> by <a href='https://github.com/zooll8/wydux' target='_blank'>Zaurbek Zhakupov</a></h6>

                        </div>}
                </div>

            </div>
        )
    }
}

const ConnectedAlbum = connect(state => ({loading: state.isLoading, artist: state.artist}), dispatch => ({
    newArtist: (id) => dispatch(newArtist(id)),
    isLoading: () => dispatch(isLoading()),
    playTrack: object => dispatch(playTrack(object))
}))(Album);

export default ConnectedAlbum;
