export default function (state = {
  album: {
    name: '',
    tracks: {
      items: [],
    },
    artists: [],
    label: '',
  },
  artist: {
    name: '',
    images: [],
    followers: {
      total: 0,
    },
    popularity: 0,
    genres: [],
  },
  player: {
    isPlaying: false,
    trackURL: '',
    trackIMG: '',
    trackPlaying: false,
  },
  isLoading: false,
  auth: false,
  fetch: {
    tracks: {},
    albums: {},
    playlists: {},
    artists: {},
  },
}, action) {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return {
        ...state,
        player: {
          ...state.player,
          trackPlaying: !state.player.trackPlaying
        }
      };
    case 'SEARCH':
      return {
        ...state,
        fetch: action.payload,
      };
    case 'PLAY_TRACK':
      return {
        ...state,
        player: {
          trackURL: action.payload.url,
          trackIMG: action.payload.img,
          isPlaying: true,
        },
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
    case 'ARTIST_DATA':
      return {
        ...state,
        artist: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
