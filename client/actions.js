import axios from 'axios';

// Back and forth tracks
export function playForward() {
  return {
    type: 'PLAY_FORWARD',
  };
}
export function playBackward() {
  return {
    type: 'PLAY_BACKWARD',
  };
}


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
    return fetchAlbum(id).then(res => res.data).then(data => dispatch(plugAlbum(data)));
  };
}

// fetch Artist with ID

function fetchArtist(id) {
  return axios.get(`https://api.spotify.com/v1/artists/${id}`);
}

function plugArtist(data) {
  console.log(data);
  return {
    type: 'ARTIST_DATA',
    payload: data,
  };
}

export function newArtist(id) {
  return function (dispatch) {
    return fetchArtist(id).then(res => res.data).then(data => dispatch(plugArtist(data)));
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
  return axios.get(`https://api.spotify.com/v1/search?limit=18&type=artist,playlist,track,album&q=${text}`);
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
    return dispatch(plugTracks({
      tracks: {},
      albums: {},
      playlists: {},
      artists: {},
    }));
  };
}
// /////

// Play Track
export function playTrack(trackObject) {
  if (trackObject.album.images[1].url !== 'undefined') {
    const parsed = {
      url: trackObject.preview_url,
      img: trackObject.album.images[1].url,
      name: trackObject.name,
      authorID: trackObject.artists[0].id,
      author: trackObject.artists[0].name,
      duration: trackObject.duration_ms,
    };
    return {
      type: 'PLAY_TRACK',
      payload: parsed,
    };
  }

  const parsed = {
      url: trackObject.preview_url,
      img: trackObject.album.images[0].url,
      name: trackObject.name,
      id: trackObject.artists[0].id,
      author: trackObject.artists[0].name,
      duration: trackObject.duration_ms,
    };
  return {
      type: 'PLAY_TRACK',
      payload: parsed,
    };
}


// Toggle Play
export function togglePlay() {
  return {
    type: 'TOGGLE_PLAY',
  };
}

