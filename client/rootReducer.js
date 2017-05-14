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
    playlist: [],
    trackURL: '',
    trackIMG: '',
    trackPlaying: false,
    name: '',
    author: '',
    pointer: 0,
    authorID: '',
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
          trackPlaying: !state.player.trackPlaying,
        },
      };
    case 'SEARCH':
      return {
        ...state,
        fetch: action.payload,
      };
    case 'PLAY_TRACK':
      if (state.player.playlist.length > 0) {
        if (state.player.playlist[state.player.playlist.length - 1].trackURL == action.payload.url) {
          return {
    ...state,
    player: {
            trackURL: action.payload.url,
            trackIMG: action.payload.img,
            isPlaying: true,
            name: action.payload.name,
            author: action.payload.author,
            authorID: action.payload.authorID,
            playlist: [...state.player.playlist],
            pointer: state.player.pointer,
          },
  };
        }
      }

      return {
        ...state,
        player: {
        trackURL: action.payload.url,
        trackIMG: action.payload.img,
        isPlaying: true,
        name: action.payload.name,
        author: action.payload.author,
        authorID: action.payload.authorID,
        playlist: [...state.player.playlist, {
            trackURL: action.payload.url,
            trackIMG: action.payload.img,
            name: action.payload.name,
            author: action.payload.author,
            authorID: action.payload.id,
          }],
        trackPlaying: true,
        pointer: state.player.playlist.length,
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
    case 'AUTH':
      return {
      ...state,
      auth: true,
    };
    case 'PLAY_FORWARD':
      if (state.player.playlist.length > 0) {
        if (state.player.playlist[state.player.pointer + 1]) {
          return {
            ...state,
            player: {
              ...state.player,
              pointer: state.player.pointer + 1,
              trackURL: state.player.playlist[state.player.pointer + 1].trackURL,
              trackIMG: state.player.playlist[state.player.pointer + 1].trackIMG,
              isPlaying: true,
              name: state.player.playlist[state.player.pointer + 1].name,
              author: state.player.playlist[state.player.pointer + 1].author,
              authorID: state.player.playlist[state.player.pointer + 1].authorID,
              trackPlaying: true,
            },
          };
        }
      }
      return state;
    case 'PLAY_BACKWARD':

      if (state.player.playlist.length > 0) {
      if (state.player.playlist[state.player.pointer - 1]) {
          return {
            ...state,
            player: {
              ...state.player,
              pointer: state.player.pointer - 1,
              trackURL: state.player.playlist[state.player.pointer - 1].trackURL,
              trackIMG: state.player.playlist[state.player.pointer - 1].trackIMG,
              isPlaying: true,
              name: state.player.playlist[state.player.pointer - 1].name,
              author: state.player.playlist[state.player.pointer - 1].author,
              authorID: state.player.playlist[state.player.pointer - 1].authorID,
              trackPlaying: true,
            },
          };
        }
    }
      return state;
    default:
      return state;
  }
}
