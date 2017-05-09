function fetchSearch(text) {
  return fetch(`https://api.spotify.com/v1/search?limit=16&type=artist,playlist,track,album&q=${text}`);
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
          return fetchSearch(text).then(res => res.json()).then((data) => {
              console.log(data);
              return dispatch(plugTracks(data));
            });
        } else {
            return dispatch(plugTracks({ tracks:{},albums:{},playlists:{},artists:{} }))
        }
  };
}


export function playTrack(trackObject) {
  const parsed={
    url:trackObject.preview_url,
    img:trackObject.album.images[0].url
  }
  return {
    type: 'PLAY_TRACK',
    payload: parsed
  }
}

export function togglePlay() {
  return {
    type: 'TOGGLE_PLAY'
  }
}