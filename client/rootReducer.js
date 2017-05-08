export default function (state = { isPLaying: false, trackURL: '', trackIMG: '', auth: false, fetch: { tracks:{},albums:{},playlists:{},artists:{} }}, action ) {
  switch (action.type) {
    case 'TOOGLE_PLAY':
      return {
        ...state,
        isPLaying: !state.isPLaying,
      };
    case 'SEARCH':
      return {
        ...state,
        fetch: action.payload,
      };
    default:
      return state;
  }
}
