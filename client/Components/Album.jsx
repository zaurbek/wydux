import React, {Component} from 'react';
import { connect } from 'react-redux';
import { playTrack } from '../actions.js';


class Album extends Component {
    constructor(props) {
        super(props);
        this.props=props
    }
    render() {
        return (
            <div>
            <h1>Albums page: {this.props.match.params.id}</h1>
            </div>
            )
    }
}


const ConnectedAlbum = connect(
    null,
    dispatch => ({
      playTrack: object => dispatch(playTrack(object))
    }))
export default ConnectedAlbum;