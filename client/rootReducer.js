export default function (state = { album: { name: '', tracks: { items: [] } }, isLoading: false, isPlaying: false, trackURL: '', trackIMG: '', auth: false, fetch: { tracks: {}, albums: {}, playlists: {}, artists: {} } }, action) {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return {
        ...state,
        isPLaying: !state.isPLaying,
      };
    case 'SEARCH':
      return {
        ...state,
        fetch: action.payload,
      };
    case 'PLAY_TRACK':
      return {
        ...state,
        trackURL: action.payload.url,
        trackIMG: action.payload.img,
        isPlaying: true,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ALBUM_DATA':
      return {
        ...state,
        album: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
