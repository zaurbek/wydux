export default function (state = { isPLaying: false, trackURL: '', auth: false, tracks: [] }, action) {
  switch (action.type) {
    case 'TOOGLE_PLAY':
      return {
        ...state,
        isPLaying: !state.isPLaying,
      };
    default:
      return state;
  }
}
