import axios from 'axios';

// fetch Album with ID
function fetchAlbum(id) {
  return axios.get(`https://api.spotify.com/v1/albums/${id}`);
}

function plugAlbum(data) {
  console.log(data);
  return {
    type: 'ALBUM_DATA',
    payload: data,
  };
}

export function newAlbum(id) {
  return function (dispatch) {
    return fetchAlbum(id).then((res) => res.data).then((data) => dispatch(plugAlbum(data)));
  };
}


// Spinner
export function isLoading() {
  return {
    type: 'LOADING',
  };
}


// Search
function fetchSearch(text) {
  return axios.get(`https://api.spotify.com/v1/search?limit=16&type=artist,playlist,track,album&q=${text}`);
}

function plugTracks(fetch) {
  return {
    type: 'SEARCH',
    payload: fetch,
  };
}
export function newSearch(text) {
  return function (dispatch) {
    if (text.length > 0) {
      return fetchSearch(text).then(res => res.data).then((data) => {
            console.log(data);
            return dispatch(plugTracks(data));
          });
    }
    return dispatch(plugTracks({ tracks: {}, albums: {}, playlists: {}, artists: {} }));
  };
}
// /////

// Play Track
export function playTrack(trackObject) {
  if (trackObject.album.images[1].url!=='undefined') {
    const parsed = {
    url: trackObject.preview_url,
    img: trackObject.album.images[1].url,
  };
  return {
    type: 'PLAY_TRACK',
    payload: parsed,
  };
  } else {
    const parsed = {
    url: trackObject.preview_url,
    img: trackObject.album.images[0].url,
  };
  return {
    type: 'PLAY_TRACK',
    payload: parsed,
  };
  }
  
}


// Toggle Play
export function togglePlay() {
  return {
    type: 'TOGGLE_PLAY',
  };
}
