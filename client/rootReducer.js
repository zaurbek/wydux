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
    isPlaying: true,
    playlist: [],
    trackURL: 'https://p.scdn.co/mp3-preview/c6f693ae5275fa2693450cb3fcbe4321d7bf0f2e?cid=null',
    trackIMG: 'https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329',
    trackPlaying: false,
    name: 'Something - Remastered',
    author: 'The Beatles',
    pointer: 0,
    authorID: '3WrFJ7ztbogyGnTHbHJFl2',
    duration: 182293,
  },
  isLoading: false,
  fetch: {
    albums: {
    'href': 'https://api.spotify.com/v1/search?query=beetles&type=album&offset=0&limit=18',
    items: [
      {
        'album_type': 'album',
        artists: [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          spotify: 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
        },
        href: 'https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN',
        id: '0ETFjACtuP2ADo6LFhL6HN',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329',
            width: 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878',
            width: 64,
          },
        ],
        name: 'Abbey Road (Remastered)',
        type: 'album',
        'uri': 'spotify:album:0ETFjACtuP2ADo6LFhL6HN',
      },
      {
        'album_type': 'album',
        artists: [
          {
            external_urls: {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          'spotify': 'https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh',
        },
        href: 'https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh',
        id: '7vEJAtP3KgKSpOHVgwm3Eh',
        'images': [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/9ecfdf528562cae879748b73bd81b64dfa3d5704',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/58d9e881327df093da91b082ed89a4e2c4fec1a9',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/adda7302aab91f1a83cdca24878bad49384dae65',
            'width': 64,
          },
        ],
        name: '1 (Remastered)',
        'type': 'album',
        'uri': 'spotify:album:7vEJAtP3KgKSpOHVgwm3Eh',
      },
      {
        album_type: 'album',
        'artists': [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL',
        },
        'href': 'https://api.spotify.com/v1/albums/1klALx0u4AavZNEvC4LrTL',
        'id': '1klALx0u4AavZNEvC4LrTL',
        'images': [
          {
            height: 640,
            'url': 'https://i.scdn.co/image/2782d94528b449fb6910300cc8c8f93ab8cc7a8d',
            'width': 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/b6fe2afbd9fc1719d08765e693c9d91e5cafb38e',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/395d7bdb8713327f6ddce44740caee2b4739ff5f',
            'width': 64,
          },
        ],
        'name': 'The Beatles (Remastered)',
        type: 'album',
        'uri': 'spotify:album:1klALx0u4AavZNEvC4LrTL',
      },
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          spotify: 'https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW',
        },
        href: 'https://api.spotify.com/v1/albums/6QaVfG1pHYl1z15ZxkvVDW',
        'id': '6QaVfG1pHYl1z15ZxkvVDW',
        'images': [
          {
            'height': 640,
            url: 'https://i.scdn.co/image/ec881187fe0432c8f6d208b9b4833bd411471345',
            'width': 640,
          },
          {
            'height': 300,
            url: 'https://i.scdn.co/image/b0da4d3af09485434503aec6c83817df0c38f6ef',
            'width': 300,
          },
          {
            'height': 64,
            url: 'https://i.scdn.co/image/43cda56eb48cf779eff73892fa0a6699a4bb1d3b',
            width: 64,
          },
        ],
        name: "Sgt. Pepper's Lonely Hearts Club Band (Remastered)",
        type: 'album',
        uri: 'spotify:album:6QaVfG1pHYl1z15ZxkvVDW',
      },
      {
        album_type: 'album',
        'artists': [
          {
            external_urls: {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/3KzAvEXcqJKBF97HrXwlgf',
        },
        href: 'https://api.spotify.com/v1/albums/3KzAvEXcqJKBF97HrXwlgf',
        id: '3KzAvEXcqJKBF97HrXwlgf',
        'images': [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/1e6c3774deb8c44852ac169e03ce3f7a37c936af',
            'width': 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/aec67ae3a374ecf851665ad5cadccc0ac42c0ae8',
            width: 300,
          },
          {
            height: 64,
            'url': 'https://i.scdn.co/image/f038b690d8e3a98aea1397010b838e464f38fa79',
            width: 64,
          },
        ],
        'name': 'Please Please Me (Remastered)',
        'type': 'album',
        'uri': 'spotify:album:3KzAvEXcqJKBF97HrXwlgf',
      },
      {
        'album_type': 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          'spotify': 'https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm',
        },
        href: 'https://api.spotify.com/v1/albums/50o7kf2wLwVmOTVYJOTplm',
        'id': '50o7kf2wLwVmOTVYJOTplm',
        'images': [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/e26910fd9e7bb1671213cb9ed06a855077ddd79f',
            width: 640,
          },
          {
            height: 300,
            'url': 'https://i.scdn.co/image/7da8f3c2b2e002853864b6986f78e8cb7933d020',
            width: 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/fc4fe9ac0aa200c5af2bf26d791fad09dbc059e2',
            'width': 64,
          },
        ],
        name: 'Rubber Soul (Remastered)',
        type: 'album',
        'uri': 'spotify:album:50o7kf2wLwVmOTVYJOTplm',
      },
      {
        'album_type': 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5',
        },
        'href': 'https://api.spotify.com/v1/albums/0jTGHV5xqHPvEcwL8f6YU5',
        id: '0jTGHV5xqHPvEcwL8f6YU5',
        images: [
          {
            height: 640,
            'url': 'https://i.scdn.co/image/b3651a85f2bca826b38194c51d09cd7b068aa3ab',
            'width': 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/a329e45d52649d9ef327764a202df6084aff20ce',
            'width': 300,
          },
          {
            'height': 64,
            url: 'https://i.scdn.co/image/8cae03783213449b24f247244a3b2049e98ee6e1',
            width: 64,
          },
        ],
        'name': 'Let It Be (Remastered)',
        type: 'album',
        uri: 'spotify:album:0jTGHV5xqHPvEcwL8f6YU5',
      },
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          'spotify': 'https://open.spotify.com/album/2BtE7qm1qzM80p9vLSiXkj',
        },
        'href': 'https://api.spotify.com/v1/albums/2BtE7qm1qzM80p9vLSiXkj',
        'id': '2BtE7qm1qzM80p9vLSiXkj',
        'images': [
          {
            height: 640,
            url: 'https://i.scdn.co/image/5efcba83e06ce03ca843b459a4189f861ddc5f23',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/44a8e349f4d580ce4ea15ff8b60a37b2c7595c4b',
            width: 300,
          },
          {
            height: 64,
            'url': 'https://i.scdn.co/image/da34ae526d3f542db4bb17846628d8ade8923d8e',
            width: 64,
          },
        ],
        name: 'Magical Mystery Tour (Remastered)',
        type: 'album',
        'uri': 'spotify:album:2BtE7qm1qzM80p9vLSiXkj',
      },
      {
        'album_type': 'album',
        artists: [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          'spotify': 'https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX',
        },
        'href': 'https://api.spotify.com/v1/albums/0PT5m6hwPRrpBwIHVnvbFX',
        id: '0PT5m6hwPRrpBwIHVnvbFX',
        images: [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/bbbd06069770d49731587d1f513bdf482c9420ab',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/9b7ac180a2f7a6209c9db2cb50c7e3cb04859115',
            'width': 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/8a2e78c8fba472319c3e0d1416f29302f2635458',
            width: 64,
          },
        ],
        'name': 'Help! (Remastered)',
        'type': 'album',
        uri: 'spotify:album:0PT5m6hwPRrpBwIHVnvbFX',
      },
      {
        album_type: 'album',
        'artists': [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          spotify: 'https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR',
        },
        'href': 'https://api.spotify.com/v1/albums/3PRoXYsngSwjEQWR5PsHWR',
        id: '3PRoXYsngSwjEQWR5PsHWR',
        images: [
          {
            height: 640,
            'url': 'https://i.scdn.co/image/75ef0990aa0bb02ef7f6a52d41cc2c4c8028c3ba',
            'width': 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/94f80ce1463e6cd9f0a8b563cdfd77348d140a2b',
            width: 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/e7d73d44dbad68d6bfd4823448c09ff371ca1ce7',
            'width': 64,
          },
        ],
        'name': 'Revolver (Remastered)',
        'type': 'album',
        'uri': 'spotify:album:3PRoXYsngSwjEQWR5PsHWR',
      },
      {
        album_type: 'album',
        'artists': [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6wCttLq0ADzkPgtRnUihLV',
        },
        'href': 'https://api.spotify.com/v1/albums/6wCttLq0ADzkPgtRnUihLV',
        id: '6wCttLq0ADzkPgtRnUihLV',
        'images': [
          {
            'height': 640,
            url: 'https://i.scdn.co/image/56f312139863addd3837e68e6c198150e80f510a',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/02fa6b459660f3ef32c8c3906af7f9b7a3c56f49',
            width: 300,
          },
          {
            height: 64,
            'url': 'https://i.scdn.co/image/7f7a492ce7d64238ad10ac681948296e5c029424',
            'width': 64,
          },
        ],
        'name': "A Hard Day's Night (Remastered)",
        type: 'album',
        uri: 'spotify:album:6wCttLq0ADzkPgtRnUihLV',
      },
      {
        'album_type': 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          'spotify': 'https://open.spotify.com/album/1aYdiJk6XKeHWGO3FzHHTr',
        },
        'href': 'https://api.spotify.com/v1/albums/1aYdiJk6XKeHWGO3FzHHTr',
        id: '1aYdiJk6XKeHWGO3FzHHTr',
        images: [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/1e684af9619d7310229826fab2d6ce490cb954f1',
            'width': 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/9e5f60a1dfc1262d0dcc22bec1c3501e33299862',
            width: 300,
          },
          {
            height: 64,
            'url': 'https://i.scdn.co/image/a36d862ded8425df1656f8057d9f743ce7332366',
            width: 64,
          },
        ],
        name: 'With The Beatles (Remastered)',
        'type': 'album',
        'uri': 'spotify:album:1aYdiJk6XKeHWGO3FzHHTr',
      },
      {
        'album_type': 'compilation',
        artists: [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          spotify: 'https://open.spotify.com/album/1Ye7yrA7vAlQnoooj8yDXb',
        },
        href: 'https://api.spotify.com/v1/albums/1Ye7yrA7vAlQnoooj8yDXb',
        id: '1Ye7yrA7vAlQnoooj8yDXb',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/a2d7fe909996562c2ba13f87b3f95ebac6717b21',
            width: 640,
          },
          {
            'height': 300,
            url: 'https://i.scdn.co/image/2d863d2a815261c623357f9e3e07fa7054c075fb',
            'width': 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/efbaad0d208b537bb792041e43144c096ebc0d9d',
            'width': 64,
          },
        ],
        name: 'Love',
        'type': 'album',
        uri: 'spotify:album:1Ye7yrA7vAlQnoooj8yDXb',
      },
      {
        album_type: 'compilation',
        artists: [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        external_urls: {
          'spotify': 'https://open.spotify.com/album/1cTeNkeINtXiaMLlashAKs',
        },
        'href': 'https://api.spotify.com/v1/albums/1cTeNkeINtXiaMLlashAKs',
        'id': '1cTeNkeINtXiaMLlashAKs',
        images: [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/b4b907579f0c68b81fa98e16478351bdcd943f94',
            width: 640,
          },
          {
            'height': 300,
            url: 'https://i.scdn.co/image/fa4c98f53c26e1fb9eeb1327c0a28d4c126012ca',
            'width': 300,
          },
          {
            'height': 64,
            url: 'https://i.scdn.co/image/8b89a1cfa518d903543785603a4b7024cdb9140b',
            'width': 64,
          },
        ],
        'name': 'The Beatles 1967 - 1970 (Remastered)',
        'type': 'album',
        'uri': 'spotify:album:1cTeNkeINtXiaMLlashAKs',
      },
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/1vANZV20H5B4Fk6yf7Ot9a',
        },
        href: 'https://api.spotify.com/v1/albums/1vANZV20H5B4Fk6yf7Ot9a',
        id: '1vANZV20H5B4Fk6yf7Ot9a',
        'images': [
          {
            height: 640,
            url: 'https://i.scdn.co/image/863e2f879a99e4afb084a6d0eb39ef37e596d5d2',
            width: 640,
          },
          {
            'height': 300,
            url: 'https://i.scdn.co/image/24c3ed65c8e4340d4b6b07f035795566e5311aa1',
            width: 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/bbcfc7bb0a275a4fc34d0e4935bbdefb4bf7351b',
            'width': 64,
          },
        ],
        name: 'Beatles For Sale (Remastered)',
        'type': 'album',
        'uri': 'spotify:album:1vANZV20H5B4Fk6yf7Ot9a',
      },
      {
        album_type: 'compilation',
        artists: [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          spotify: 'https://open.spotify.com/album/3GmCXW10kLxmZrEY0JpRlw',
        },
        'href': 'https://api.spotify.com/v1/albums/3GmCXW10kLxmZrEY0JpRlw',
        id: '3GmCXW10kLxmZrEY0JpRlw',
        images: [
          {
            height: 640,
            'url': 'https://i.scdn.co/image/debcb13253a093ddc4828921f499dbbba8ecec6f',
            width: 640,
          },
          {
            height: 300,
            'url': 'https://i.scdn.co/image/a50ace0a4a6fb3698a5a3d1aa4aa66cf3100f13b',
            width: 300,
          },
          {
            'height': 64,
            url: 'https://i.scdn.co/image/92d795c76f6b62be1b905bcf84863953de4eff40',
            'width': 64,
          },
        ],
        'name': 'Past Masters (Vols. 1 & 2 / Remastered)',
        type: 'album',
        'uri': 'spotify:album:3GmCXW10kLxmZrEY0JpRlw',
      },
      {
        'album_type': 'album',
        'artists': [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0n9SWDBEftKwq09B01Pwzw',
        },
        href: 'https://api.spotify.com/v1/albums/0n9SWDBEftKwq09B01Pwzw',
        'id': '0n9SWDBEftKwq09B01Pwzw',
        images: [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/94c04cbf2ea221d53c4ca2c93c8228c39945a180',
            'width': 640,
          },
          {
            height: 300,
            'url': 'https://i.scdn.co/image/702e569b7ae20e95c2ae9e7a0ee9cd3c941a1ac5',
            'width': 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/aec363797720043c00c583fcf3c663493af3675e',
            width: 64,
          },
        ],
        name: 'Live At The Hollywood Bowl',
        'type': 'album',
        'uri': 'spotify:album:0n9SWDBEftKwq09B01Pwzw',
      },
      {
        'album_type': 'album',
        artists: [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        'external_urls': {
          spotify: 'https://open.spotify.com/album/1gKZ5A1ndFqbcrWtW85cCy',
        },
        href: 'https://api.spotify.com/v1/albums/1gKZ5A1ndFqbcrWtW85cCy',
        'id': '1gKZ5A1ndFqbcrWtW85cCy',
        'images': [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/b524e45ee12bc0562cd36169a895b9ec59fa702f',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/dba3850d7bae42990d211a15221decc09736f4fe',
            'width': 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/72bc77482b4e760c7e2adcefdc44d52be16dc961',
            'width': 64,
          },
        ],
        name: 'Yellow Submarine (Remastered)',
        type: 'album',
        uri: 'spotify:album:1gKZ5A1ndFqbcrWtW85cCy',
      },
    ],
    limit: 18,
    'next': 'https://api.spotify.com/v1/search?query=beetles&type=album&offset=18&limit=18',
    offset: 0,
    'previous': null,
    'total': 56,
  },
    'artists': {
    'href': 'https://api.spotify.com/v1/search?query=beetles&type=artist&offset=0&limit=18',
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
        },
        followers: {
          'href': null,
          total: 3284583,
        },
        genres: [
          'british invasion',
          'classic rock',
          'merseybeat',
          'protopunk',
          'psychedelic rock',
          'rock',
        ],
        href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
        id: '3WrFJ7ztbogyGnTHbHJFl2',
        'images': [
          {
            'height': 1000,
            url: 'https://i.scdn.co/image/934c57df9fbdbbaa5e93b55994a4cb9571fd2085',
            'width': 1000,
          },
          {
            height: 640,
            url: 'https://i.scdn.co/image/5f70d98d3e4616a02a3afe2aa9a840b9157b92a1',
            width: 640,
          },
          {
            'height': 200,
            'url': 'https://i.scdn.co/image/7fe1a693adc52e274962f1c61d76ca9ccc62c191',
            'width': 200,
          },
          {
            'height': 64,
            url: 'https://i.scdn.co/image/857b1ce5b1b372b873b0a8bdb3ff8023b6c61d39',
            'width': 64,
          },
        ],
        name: 'The Beatles',
        popularity: 85,
        'type': 'artist',
        'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
      },
      {
        external_urls: {
          'spotify': 'https://open.spotify.com/artist/0TTJo50ZDpnqpfH5vpXXiz',
        },
        'followers': {
          'href': null,
          'total': 77,
        },
        'genres': [],
        'href': 'https://api.spotify.com/v1/artists/0TTJo50ZDpnqpfH5vpXXiz',
        'id': '0TTJo50ZDpnqpfH5vpXXiz',
        'images': [],
        name: 'The Sesame Street Beetles',
        'popularity': 4,
        type: 'artist',
        'uri': 'spotify:artist:0TTJo50ZDpnqpfH5vpXXiz',
      },
      {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/4wPPA3JL0pn7les6XoTgLg',
        },
        'followers': {
          href: null,
          'total': 27,
        },
        'genres': [],
        href: 'https://api.spotify.com/v1/artists/4wPPA3JL0pn7les6XoTgLg',
        'id': '4wPPA3JL0pn7les6XoTgLg',
        images: [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/7a9bec5b89d64be08b20090bedd66fd706eedf99',
            'width': 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/59ceae03655133e29d480d1d68bda39a1f739ed5',
            'width': 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/a888160825d02e3ee461eec3afe9740ee67379ff',
            width: 64,
          },
        ],
        'name': 'The Dead Beetles',
        'popularity': 0,
        'type': 'artist',
        'uri': 'spotify:artist:4wPPA3JL0pn7les6XoTgLg',
      },
      {
        'external_urls': {
          spotify: 'https://open.spotify.com/artist/2D96XZJ4A51X72JQhGGW3C',
        },
        followers: {
          'href': null,
          'total': 2,
        },
        genres: [],
        'href': 'https://api.spotify.com/v1/artists/2D96XZJ4A51X72JQhGGW3C',
        id: '2D96XZJ4A51X72JQhGGW3C',
        'images': [
          {
            height: 640,
            url: 'https://i.scdn.co/image/4c14895a38be931cf23a58d93c65d0f47a70bbcc',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/677067fbbbd036242302b9f4c67a3d6856631d57',
            width: 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/43720848992b2a1199aa5511c1a97e834e79a569',
            'width': 64,
          },
        ],
        'name': 'The Pine Beetles',
        popularity: 0,
        type: 'artist',
        'uri': 'spotify:artist:2D96XZJ4A51X72JQhGGW3C',
      },
      {
        external_urls: {
          'spotify': 'https://open.spotify.com/artist/3fZjF1hfwvwF7YkSpYsLD2',
        },
        'followers': {
          href: null,
          total: 8,
        },
        genres: [],
        'href': 'https://api.spotify.com/v1/artists/3fZjF1hfwvwF7YkSpYsLD2',
        'id': '3fZjF1hfwvwF7YkSpYsLD2',
        'images': [
          {
            'height': 640,
            url: 'https://i.scdn.co/image/1f998549c278ded312c58e0455b528f7f6c71993',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/fab4c514d8c2a4c4c33e05ec39e8a2a9ee496b85',
            'width': 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/5b64eaf3f9805f7db1aeae6710a512d70eaa22ed',
            'width': 64,
          },
        ],
        name: 'The Click Beetles',
        'popularity': 0,
        type: 'artist',
        'uri': 'spotify:artist:3fZjF1hfwvwF7YkSpYsLD2',
      },
      {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/6ypBrPkZi5bdO1aixZWihn',
        },
        'followers': {
          'href': null,
          'total': 16,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/6ypBrPkZi5bdO1aixZWihn',
        id: '6ypBrPkZi5bdO1aixZWihn',
        'images': [
          {
            'height': 640,
            'url': 'https://i.scdn.co/image/1b1c6fb9fa81fc0ba89373ffac69ffa9f582eb32',
            'width': 640,
          },
          {
            'height': 300,
            'url': 'https://i.scdn.co/image/33f785c5700184cc58f2de9264806225dc381f64',
            width: 300,
          },
          {
            'height': 64,
            url: 'https://i.scdn.co/image/f74982dd1800596b9fb350a73fcc210a7cc4596b',
            'width': 64,
          },
        ],
        name: 'Beetles & Butterflys',
        'popularity': 0,
        'type': 'artist',
        'uri': 'spotify:artist:6ypBrPkZi5bdO1aixZWihn',
      },
      {
        'external_urls': {
          spotify: 'https://open.spotify.com/artist/1h485AEGDjqK740MDSUvih',
        },
        followers: {
          href: null,
          total: 9,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/1h485AEGDjqK740MDSUvih',
        id: '1h485AEGDjqK740MDSUvih',
        'images': [],
        name: 'Cookie Monster and Sesame Street Beetles',
        popularity: 0,
        'type': 'artist',
        uri: 'spotify:artist:1h485AEGDjqK740MDSUvih',
      },
      {
        'external_urls': {
          spotify: 'https://open.spotify.com/artist/1MLXQOUzVRfjYAu5xyEntV',
        },
        'followers': {
          'href': null,
          total: 4545,
        },
        genres: [
          'tribute',
        ],
        href: 'https://api.spotify.com/v1/artists/1MLXQOUzVRfjYAu5xyEntV',
        'id': '1MLXQOUzVRfjYAu5xyEntV',
        images: [
          {
            'height': 640,
            url: 'https://i.scdn.co/image/23565d86f98b222b2d447fcf5fc8820eaf92fe3b',
            'width': 640,
          },
          {
            height: 300,
            'url': 'https://i.scdn.co/image/45adae1eec1f93688728aea5de56aea834963f7d',
            'width': 300,
          },
          {
            'height': 64,
            'url': 'https://i.scdn.co/image/1fbee1d8636172dc143cbc104548fe6ada42b8c7',
            'width': 64,
          },
        ],
        name: 'The Silver Beetles',
        popularity: 21,
        type: 'artist',
        uri: 'spotify:artist:1MLXQOUzVRfjYAu5xyEntV',
      },
    ],
    'limit': 18,
    next: null,
    'offset': 0,
    previous: null,
    'total': 8,
  },
    'tracks': {
    href: 'https://api.spotify.com/v1/search?query=beetles&type=track&offset=0&limit=18',
    'items': [
      {
        album: {
          album_type: 'album',
          'artists': [
            {
              'external_urls': {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              'type': 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            spotify: 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
          },
          'href': 'https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN',
          id: '0ETFjACtuP2ADo6LFhL6HN',
          images: [
            {
              height: 640,
              'url': 'https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a',
              width: 640,
            },
            {
              'height': 300,
              'url': 'https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878',
              width: 64,
            },
          ],
          name: 'Abbey Road (Remastered)',
          'type': 'album',
          uri: 'spotify:album:0ETFjACtuP2ADo6LFhL6HN',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'disc_number': 1,
        'duration_ms': 185733,
        explicit: false,
        'external_ids': {
          isrc: 'GBAYE0601696',
        },
        external_urls: {
          'spotify': 'https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2',
        },
        'href': 'https://api.spotify.com/v1/tracks/6dGnYIeXmHdcikdzNNDMm2',
        'id': '6dGnYIeXmHdcikdzNNDMm2',
        name: 'Here Comes The Sun - Remastered',
        popularity: 73,
        'preview_url': 'https://p.scdn.co/mp3-preview/6902e7da51d2f17e5369d57dadf8ce7d2a123f99?cid=null',
        'track_number': 7,
        'type': 'track',
        'uri': 'spotify:track:6dGnYIeXmHdcikdzNNDMm2',
      },
      {
        album: {
          'album_type': 'album',
          'artists': [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
          },
          href: 'https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN',
          'id': '0ETFjACtuP2ADo6LFhL6HN',
          'images': [
            {
              'height': 640,
              url: 'https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a',
              width: 640,
            },
            {
              'height': 300,
              'url': 'https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329',
              'width': 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878',
              width: 64,
            },
          ],
          'name': 'Abbey Road (Remastered)',
          type: 'album',
          'uri': 'spotify:album:0ETFjACtuP2ADo6LFhL6HN',
        },
        'artists': [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'disc_number': 1,
        duration_ms: 259946,
        'explicit': false,
        'external_ids': {
          isrc: 'GBAYE0601690',
        },
        external_urls: {
          'spotify': 'https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD',
        },
        href: 'https://api.spotify.com/v1/tracks/2EqlS6tkEnglzr7tkKAAYD',
        'id': '2EqlS6tkEnglzr7tkKAAYD',
        'name': 'Come Together - Remastered',
        popularity: 70,
        preview_url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9?cid=null',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2EqlS6tkEnglzr7tkKAAYD',
      },
      {
        album: {
          album_type: 'album',
          'artists': [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              'type': 'artist',
              uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/3KzAvEXcqJKBF97HrXwlgf',
          },
          'href': 'https://api.spotify.com/v1/albums/3KzAvEXcqJKBF97HrXwlgf',
          id: '3KzAvEXcqJKBF97HrXwlgf',
          images: [
            {
              'height': 640,
              url: 'https://i.scdn.co/image/1e6c3774deb8c44852ac169e03ce3f7a37c936af',
              'width': 640,
            },
            {
              'height': 300,
              'url': 'https://i.scdn.co/image/aec67ae3a374ecf851665ad5cadccc0ac42c0ae8',
              width: 300,
            },
            {
              height: 64,
              'url': 'https://i.scdn.co/image/f038b690d8e3a98aea1397010b838e464f38fa79',
              'width': 64,
            },
          ],
          name: 'Please Please Me (Remastered)',
          type: 'album',
          uri: 'spotify:album:3KzAvEXcqJKBF97HrXwlgf',
        },
        artists: [
          {
            external_urls: {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        duration_ms: 155226,
        explicit: false,
        external_ids: {
          'isrc': 'GBAYE0601423',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5ZBeML7Lf3FMEVviTyvi8l',
        },
        'href': 'https://api.spotify.com/v1/tracks/5ZBeML7Lf3FMEVviTyvi8l',
        id: '5ZBeML7Lf3FMEVviTyvi8l',
        name: 'Twist And Shout - Remastered',
        popularity: 68,
        preview_url: 'https://p.scdn.co/mp3-preview/b7e3bc96b46e4dcc22cec5d23337d2446cb0ab87?cid=null',
        'track_number': 14,
        type: 'track',
        uri: 'spotify:track:5ZBeML7Lf3FMEVviTyvi8l',
      },
      {
        album: {
          'album_type': 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            spotify: 'https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh',
          },
          'href': 'https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh',
          'id': '7vEJAtP3KgKSpOHVgwm3Eh',
          'images': [
            {
              'height': 640,
              url: 'https://i.scdn.co/image/9ecfdf528562cae879748b73bd81b64dfa3d5704',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/58d9e881327df093da91b082ed89a4e2c4fec1a9',
              width: 300,
            },
            {
              height: 64,
              'url': 'https://i.scdn.co/image/adda7302aab91f1a83cdca24878bad49384dae65',
              'width': 64,
            },
          ],
          name: '1 (Remastered)',
          type: 'album',
          'uri': 'spotify:album:7vEJAtP3KgKSpOHVgwm3Eh',
        },
        'artists': [
          {
            external_urls: {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 425653,
        explicit: false,
        external_ids: {
          isrc: 'GBUM71505902',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0aym2LBJBk9DAYuHHutrIl',
        },
        href: 'https://api.spotify.com/v1/tracks/0aym2LBJBk9DAYuHHutrIl',
        id: '0aym2LBJBk9DAYuHHutrIl',
        name: 'Hey Jude - Remastered 2015',
        popularity: 68,
        preview_url: 'https://p.scdn.co/mp3-preview/c718fc992246a4b070500515880bed0b517631ab?cid=null',
        'track_number': 21,
        type: 'track',
        'uri': 'spotify:track:0aym2LBJBk9DAYuHHutrIl',
      },
      {
        'album': {
          album_type: 'album',
          'artists': [
            {
              external_urls: {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              'type': 'artist',
              uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5',
          },
          href: 'https://api.spotify.com/v1/albums/0jTGHV5xqHPvEcwL8f6YU5',
          'id': '0jTGHV5xqHPvEcwL8f6YU5',
          'images': [
            {
              height: 640,
              'url': 'https://i.scdn.co/image/b3651a85f2bca826b38194c51d09cd7b068aa3ab',
              width: 640,
            },
            {
              'height': 300,
              'url': 'https://i.scdn.co/image/a329e45d52649d9ef327764a202df6084aff20ce',
              width: 300,
            },
            {
              height: 64,
              'url': 'https://i.scdn.co/image/8cae03783213449b24f247244a3b2049e98ee6e1',
              width: 64,
            },
          ],
          name: 'Let It Be (Remastered)',
          'type': 'album',
          'uri': 'spotify:album:0jTGHV5xqHPvEcwL8f6YU5',
        },
        'artists': [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        duration_ms: 243026,
        'explicit': false,
        external_ids: {
          isrc: 'GBAYE0601713',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48',
        },
        href: 'https://api.spotify.com/v1/tracks/7iN1s7xHE4ifF5povM6A48',
        'id': '7iN1s7xHE4ifF5povM6A48',
        name: 'Let It Be - Remastered',
        'popularity': 68,
        preview_url: 'https://p.scdn.co/mp3-preview/f7913ebb647d47835c34fa4db7e889c8a87c6d10?cid=null',
        'track_number': 6,
        'type': 'track',
        'uri': 'spotify:track:7iN1s7xHE4ifF5povM6A48',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              'type': 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh',
          },
          href: 'https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh',
          'id': '7vEJAtP3KgKSpOHVgwm3Eh',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/9ecfdf528562cae879748b73bd81b64dfa3d5704',
              width: 640,
            },
            {
              height: 300,
              'url': 'https://i.scdn.co/image/58d9e881327df093da91b082ed89a4e2c4fec1a9',
              width: 300,
            },
            {
              'height': 64,
              'url': 'https://i.scdn.co/image/adda7302aab91f1a83cdca24878bad49384dae65',
              width: 64,
            },
          ],
          name: '1 (Remastered)',
          type: 'album',
          uri: 'spotify:album:7vEJAtP3KgKSpOHVgwm3Eh',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 145746,
        explicit: false,
        external_ids: {
          isrc: 'GBUM71505904',
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/4pbG9SUmWIvsROVLF0zF9s',
        },
        href: 'https://api.spotify.com/v1/tracks/4pbG9SUmWIvsROVLF0zF9s',
        id: '4pbG9SUmWIvsROVLF0zF9s',
        name: 'I Want To Hold Your Hand - Remastered 2015',
        popularity: 66,
        'preview_url': 'https://p.scdn.co/mp3-preview/d7e6b26957825e64b3546bd7365b74baa1ce3046?cid=null',
        'track_number': 4,
        type: 'track',
        'uri': 'spotify:track:4pbG9SUmWIvsROVLF0zF9s',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              'type': 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL',
          },
          'href': 'https://api.spotify.com/v1/albums/1klALx0u4AavZNEvC4LrTL',
          id: '1klALx0u4AavZNEvC4LrTL',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/2782d94528b449fb6910300cc8c8f93ab8cc7a8d',
              width: 640,
            },
            {
              'height': 300,
              url: 'https://i.scdn.co/image/b6fe2afbd9fc1719d08765e693c9d91e5cafb38e',
              'width': 300,
            },
            {
              'height': 64,
              'url': 'https://i.scdn.co/image/395d7bdb8713327f6ddce44740caee2b4739ff5f',
              width: 64,
            },
          ],
          name: 'The Beatles (Remastered)',
          'type': 'album',
          uri: 'spotify:album:1klALx0u4AavZNEvC4LrTL',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        duration_ms: 138386,
        explicit: false,
        external_ids: {
          'isrc': 'GBAYE0601654',
        },
        'external_urls': {
          spotify: 'https://open.spotify.com/track/5jgFfDIR6FR0gvlA56Nakr',
        },
        'href': 'https://api.spotify.com/v1/tracks/5jgFfDIR6FR0gvlA56Nakr',
        'id': '5jgFfDIR6FR0gvlA56Nakr',
        'name': 'Blackbird - Remastered',
        popularity: 66,
        'preview_url': 'https://p.scdn.co/mp3-preview/9cd5790f74f29046953ef511c3737a1121785b73?cid=null',
        'track_number': 11,
        'type': 'track',
        uri: 'spotify:track:5jgFfDIR6FR0gvlA56Nakr',
      },
      {
        'album': {
          album_type: 'album',
          artists: [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              'type': 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL',
          },
          'href': 'https://api.spotify.com/v1/albums/1klALx0u4AavZNEvC4LrTL',
          id: '1klALx0u4AavZNEvC4LrTL',
          'images': [
            {
              height: 640,
              url: 'https://i.scdn.co/image/2782d94528b449fb6910300cc8c8f93ab8cc7a8d',
              width: 640,
            },
            {
              'height': 300,
              'url': 'https://i.scdn.co/image/b6fe2afbd9fc1719d08765e693c9d91e5cafb38e',
              'width': 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/395d7bdb8713327f6ddce44740caee2b4739ff5f',
              width: 64,
            },
          ],
          name: 'The Beatles (Remastered)',
          'type': 'album',
          uri: 'spotify:album:1klALx0u4AavZNEvC4LrTL',
        },
        'artists': [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 285000,
        explicit: false,
        'external_ids': {
          'isrc': 'GBAYE0601650',
        },
        'external_urls': {
          spotify: 'https://open.spotify.com/track/389QX9Q1eUOEZ19vtzzI9O',
        },
        'href': 'https://api.spotify.com/v1/tracks/389QX9Q1eUOEZ19vtzzI9O',
        'id': '389QX9Q1eUOEZ19vtzzI9O',
        'name': 'While My Guitar Gently Weeps - Remastered',
        'popularity': 64,
        preview_url: 'https://p.scdn.co/mp3-preview/7fff749e1f714fc9bd2cf74802a04ebf1ec6a249?cid=null',
        'track_number': 7,
        type: 'track',
        'uri': 'spotify:track:389QX9Q1eUOEZ19vtzzI9O',
      },
      {
        'album': {
          'album_type': 'album',
          artists: [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              'type': 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX',
          },
          href: 'https://api.spotify.com/v1/albums/0PT5m6hwPRrpBwIHVnvbFX',
          id: '0PT5m6hwPRrpBwIHVnvbFX',
          images: [
            {
              'height': 640,
              url: 'https://i.scdn.co/image/bbbd06069770d49731587d1f513bdf482c9420ab',
              'width': 640,
            },
            {
              'height': 300,
              'url': 'https://i.scdn.co/image/9b7ac180a2f7a6209c9db2cb50c7e3cb04859115',
              'width': 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/8a2e78c8fba472319c3e0d1416f29302f2635458',
              width: 64,
            },
          ],
          name: 'Help! (Remastered)',
          type: 'album',
          uri: 'spotify:album:0PT5m6hwPRrpBwIHVnvbFX',
        },
        'artists': [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 125666,
        'explicit': false,
        'external_ids': {
          isrc: 'GBAYE0601477',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI',
        },
        href: 'https://api.spotify.com/v1/tracks/3BQHpFgAp4l80e1XslIjNI',
        id: '3BQHpFgAp4l80e1XslIjNI',
        'name': 'Yesterday - Remastered',
        popularity: 65,
        'preview_url': 'https://p.scdn.co/mp3-preview/e0e725ffb5467d8fc192f5f2bdc0656de2d5d8b3?cid=null',
        'track_number': 13,
        'type': 'track',
        'uri': 'spotify:track:3BQHpFgAp4l80e1XslIjNI',
      },
      {
        album: {
          'album_type': 'album',
          'artists': [
            {
              'external_urls': {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            spotify: 'https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm',
          },
          href: 'https://api.spotify.com/v1/albums/50o7kf2wLwVmOTVYJOTplm',
          id: '50o7kf2wLwVmOTVYJOTplm',
          'images': [
            {
              'height': 640,
              url: 'https://i.scdn.co/image/e26910fd9e7bb1671213cb9ed06a855077ddd79f',
              'width': 640,
            },
            {
              height: 300,
              'url': 'https://i.scdn.co/image/7da8f3c2b2e002853864b6986f78e8cb7933d020',
              width: 300,
            },
            {
              height: 64,
              'url': 'https://i.scdn.co/image/fc4fe9ac0aa200c5af2bf26d791fad09dbc059e2',
              'width': 64,
            },
          ],
          'name': 'Rubber Soul (Remastered)',
          type: 'album',
          uri: 'spotify:album:50o7kf2wLwVmOTVYJOTplm',
        },
        artists: [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 146333,
        'explicit': false,
        'external_ids': {
          isrc: 'GBAYE0601489',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3KfbEIOC7YIv90FIfNSZpo',
        },
        href: 'https://api.spotify.com/v1/tracks/3KfbEIOC7YIv90FIfNSZpo',
        id: '3KfbEIOC7YIv90FIfNSZpo',
        'name': 'In My Life - Remastered',
        popularity: 64,
        'preview_url': 'https://p.scdn.co/mp3-preview/729eb2814049fdf4e8b62b614e459be1a55b5040?cid=null',
        'track_number': 11,
        'type': 'track',
        'uri': 'spotify:track:3KfbEIOC7YIv90FIfNSZpo',
      },
      {
        album: {
          album_type: 'album',
          'artists': [
            {
              'external_urls': {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6wCttLq0ADzkPgtRnUihLV',
          },
          'href': 'https://api.spotify.com/v1/albums/6wCttLq0ADzkPgtRnUihLV',
          id: '6wCttLq0ADzkPgtRnUihLV',
          'images': [
            {
              height: 640,
              url: 'https://i.scdn.co/image/56f312139863addd3837e68e6c198150e80f510a',
              width: 640,
            },
            {
              'height': 300,
              url: 'https://i.scdn.co/image/02fa6b459660f3ef32c8c3906af7f9b7a3c56f49',
              'width': 300,
            },
            {
              'height': 64,
              url: 'https://i.scdn.co/image/7f7a492ce7d64238ad10ac681948296e5c029424',
              width: 64,
            },
          ],
          'name': "A Hard Day's Night (Remastered)",
          'type': 'album',
          uri: 'spotify:album:6wCttLq0ADzkPgtRnUihLV',
        },
        'artists': [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'disc_number': 1,
        duration_ms: 154200,
        explicit: false,
        'external_ids': {
          'isrc': 'GBAYE0601438',
        },
        external_urls: {
          'spotify': 'https://open.spotify.com/track/5J2CHimS7dWYMImCHkEFaJ',
        },
        'href': 'https://api.spotify.com/v1/tracks/5J2CHimS7dWYMImCHkEFaJ',
        'id': '5J2CHimS7dWYMImCHkEFaJ',
        'name': "A Hard Day's Night - Remastered",
        popularity: 62,
        'preview_url': 'https://p.scdn.co/mp3-preview/bde00f9865951e2dd1948aff24fececc5883f111?cid=null',
        track_number: 1,
        'type': 'track',
        uri: 'spotify:track:5J2CHimS7dWYMImCHkEFaJ',
      },
      {
        album: {
          'album_type': 'album',
          'artists': [
            {
              external_urls: {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              'type': 'artist',
              uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW',
          },
          href: 'https://api.spotify.com/v1/albums/6QaVfG1pHYl1z15ZxkvVDW',
          id: '6QaVfG1pHYl1z15ZxkvVDW',
          'images': [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ec881187fe0432c8f6d208b9b4833bd411471345',
              'width': 640,
            },
            {
              'height': 300,
              url: 'https://i.scdn.co/image/b0da4d3af09485434503aec6c83817df0c38f6ef',
              width: 300,
            },
            {
              'height': 64,
              url: 'https://i.scdn.co/image/43cda56eb48cf779eff73892fa0a6699a4bb1d3b',
              width: 64,
            },
          ],
          'name': "Sgt. Pepper's Lonely Hearts Club Band (Remastered)",
          type: 'album',
          'uri': 'spotify:album:6QaVfG1pHYl1z15ZxkvVDW',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'disc_number': 1,
        'duration_ms': 208466,
        explicit: false,
        external_ids: {
          'isrc': 'GBAYE0601509',
        },
        external_urls: {
          'spotify': 'https://open.spotify.com/track/25yQPHgC35WNnnOUqFhgVR',
        },
        href: 'https://api.spotify.com/v1/tracks/25yQPHgC35WNnnOUqFhgVR',
        'id': '25yQPHgC35WNnnOUqFhgVR',
        name: 'Lucy In The Sky With Diamonds - Remastered',
        'popularity': 62,
        'preview_url': 'https://p.scdn.co/mp3-preview/8cf35d378b4f66d88a306b2e3461c4ea49897023?cid=null',
        'track_number': 3,
        type: 'track',
        uri: 'spotify:track:25yQPHgC35WNnnOUqFhgVR',
      },
      {
        album: {
          album_type: 'album',
          'artists': [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          available_markets: [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            spotify: 'https://open.spotify.com/album/3KzAvEXcqJKBF97HrXwlgf',
          },
          'href': 'https://api.spotify.com/v1/albums/3KzAvEXcqJKBF97HrXwlgf',
          id: '3KzAvEXcqJKBF97HrXwlgf',
          'images': [
            {
              height: 640,
              'url': 'https://i.scdn.co/image/1e6c3774deb8c44852ac169e03ce3f7a37c936af',
              'width': 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/aec67ae3a374ecf851665ad5cadccc0ac42c0ae8',
              width: 300,
            },
            {
              'height': 64,
              'url': 'https://i.scdn.co/image/f038b690d8e3a98aea1397010b838e464f38fa79',
              'width': 64,
            },
          ],
          'name': 'Please Please Me (Remastered)',
          type: 'album',
          uri: 'spotify:album:3KzAvEXcqJKBF97HrXwlgf',
        },
        artists: [
          {
            external_urls: {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 141693,
        explicit: false,
        'external_ids': {
          'isrc': 'GBAYE0601417',
        },
        external_urls: {
          'spotify': 'https://open.spotify.com/track/3VbGCXWRiouAq8VyMYN2MI',
        },
        href: 'https://api.spotify.com/v1/tracks/3VbGCXWRiouAq8VyMYN2MI',
        'id': '3VbGCXWRiouAq8VyMYN2MI',
        'name': 'Love Me Do - Remastered',
        popularity: 62,
        'preview_url': 'https://p.scdn.co/mp3-preview/c0c7944dcb9d24570c40eada869d83bcda419bdd?cid=null',
        track_number: 8,
        'type': 'track',
        uri: 'spotify:track:3VbGCXWRiouAq8VyMYN2MI',
      },
      {
        'album': {
          'album_type': 'album',
          'artists': [
            {
              external_urls: {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
          },
          'href': 'https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN',
          'id': '0ETFjACtuP2ADo6LFhL6HN',
          images: [
            {
              'height': 640,
              'url': 'https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a',
              'width': 640,
            },
            {
              'height': 300,
              url: 'https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329',
              width: 300,
            },
            {
              'height': 64,
              'url': 'https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878',
              'width': 64,
            },
          ],
          'name': 'Abbey Road (Remastered)',
          type: 'album',
          'uri': 'spotify:album:0ETFjACtuP2ADo6LFhL6HN',
        },
        'artists': [
          {
            'external_urls': {
              spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        'duration_ms': 182293,
        explicit: false,
        external_ids: {
          'isrc': 'GBAYE0601691',
        },
        external_urls: {
          'spotify': 'https://open.spotify.com/track/0pNeVovbiZHkulpGeOx1Gj',
        },
        'href': 'https://api.spotify.com/v1/tracks/0pNeVovbiZHkulpGeOx1Gj',
        'id': '0pNeVovbiZHkulpGeOx1Gj',
        name: 'Something - Remastered',
        popularity: 62,
        'preview_url': 'https://p.scdn.co/mp3-preview/c6f693ae5275fa2693450cb3fcbe4321d7bf0f2e?cid=null',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:0pNeVovbiZHkulpGeOx1Gj',
      },
      {
        'album': {
          'album_type': 'album',
          'artists': [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2BtE7qm1qzM80p9vLSiXkj',
          },
          href: 'https://api.spotify.com/v1/albums/2BtE7qm1qzM80p9vLSiXkj',
          'id': '2BtE7qm1qzM80p9vLSiXkj',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/5efcba83e06ce03ca843b459a4189f861ddc5f23',
              'width': 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/44a8e349f4d580ce4ea15ff8b60a37b2c7595c4b',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/da34ae526d3f542db4bb17846628d8ade8923d8e',
              'width': 64,
            },
          ],
          name: 'Magical Mystery Tour (Remastered)',
          'type': 'album',
          uri: 'spotify:album:2BtE7qm1qzM80p9vLSiXkj',
        },
        artists: [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'disc_number': 1,
        duration_ms: 247320,
        explicit: false,
        'external_ids': {
          isrc: 'GBAYE0601640',
        },
        'external_urls': {
          spotify: 'https://open.spotify.com/track/3Am0IbOxmvlSXro7N5iSfZ',
        },
        href: 'https://api.spotify.com/v1/tracks/3Am0IbOxmvlSXro7N5iSfZ',
        'id': '3Am0IbOxmvlSXro7N5iSfZ',
        name: 'Strawberry Fields Forever - Remastered',
        popularity: 61,
        'preview_url': 'https://p.scdn.co/mp3-preview/5e78e78228d30e272ff9d60822032ce85b17a8d9?cid=null',
        track_number: 8,
        'type': 'track',
        'uri': 'spotify:track:3Am0IbOxmvlSXro7N5iSfZ',
      },
      {
        'album': {
          album_type: 'album',
          artists: [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/2P5sC9cVZDToPxyomzF1UH',
              },
              href: 'https://api.spotify.com/v1/artists/2P5sC9cVZDToPxyomzF1UH',
              id: '2P5sC9cVZDToPxyomzF1UH',
              'name': 'Joey Bada$$',
              'type': 'artist',
              uri: 'spotify:artist:2P5sC9cVZDToPxyomzF1UH',
            },
          ],
          'available_markets': [
            'AD',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
            'BO',
            'BR',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'EC',
            'EE',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HU',
            'ID',
            'IE',
            'IS',
            'IT',
            'JP',
            'LI',
            'LT',
            'LU',
            'LV',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'SE',
            'SG',
            'SK',
            'SV',
            'TR',
            'TW',
            'US',
            'UY',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/1rJXQEZ5DnUalRSPB3R0WO',
          },
          'href': 'https://api.spotify.com/v1/albums/1rJXQEZ5DnUalRSPB3R0WO',
          'id': '1rJXQEZ5DnUalRSPB3R0WO',
          'images': [
            {
              'height': 640,
              url: 'https://i.scdn.co/image/59aacc03bbea4c8fc5a3debb1d6a56ddcff6daf3',
              width: 640,
            },
            {
              'height': 300,
              url: 'https://i.scdn.co/image/a49f3067db86eed16f30176e98e672834b01dd21',
              width: 300,
            },
            {
              'height': 64,
              'url': 'https://i.scdn.co/image/91a1abb343fc5b1b29c38921c5195e258c9ee087',
              'width': 64,
            },
          ],
          'name': 'B4.DA.$$',
          'type': 'album',
          'uri': 'spotify:album:1rJXQEZ5DnUalRSPB3R0WO',
        },
        'artists': [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/2P5sC9cVZDToPxyomzF1UH',
            },
            'href': 'https://api.spotify.com/v1/artists/2P5sC9cVZDToPxyomzF1UH',
            'id': '2P5sC9cVZDToPxyomzF1UH',
            name: 'Joey Bada$$',
            'type': 'artist',
            'uri': 'spotify:artist:2P5sC9cVZDToPxyomzF1UH',
          },
        ],
        'available_markets': [
          'AD',
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
          'BO',
          'BR',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'EC',
          'EE',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HU',
          'ID',
          'IE',
          'IS',
          'IT',
          'JP',
          'LI',
          'LT',
          'LU',
          'LV',
          'MC',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PL',
          'PT',
          'PY',
          'SE',
          'SG',
          'SK',
          'SV',
          'TR',
          'TW',
          'US',
          'UY',
        ],
        'disc_number': 1,
        'duration_ms': 230765,
        'explicit': true,
        'external_ids': {
          'isrc': 'QMKSC1400043',
        },
        'external_urls': {
          spotify: 'https://open.spotify.com/track/7gZC4WIaFSGg38tvKD2jlA',
        },
        'href': 'https://api.spotify.com/v1/tracks/7gZC4WIaFSGg38tvKD2jlA',
        'id': '7gZC4WIaFSGg38tvKD2jlA',
        name: 'Black Beetles',
        'popularity': 52,
        'preview_url': 'https://p.scdn.co/mp3-preview/3b666acf6082dc21a9dbbaa1db0854b363709464?cid=null',
        track_number: 13,
        'type': 'track',
        uri: 'spotify:track:7gZC4WIaFSGg38tvKD2jlA',
      },
      {
        'album': {
          album_type: 'album',
          'artists': [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              id: '3WrFJ7ztbogyGnTHbHJFl2',
              'name': 'The Beatles',
              'type': 'artist',
              uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            'spotify': 'https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR',
          },
          href: 'https://api.spotify.com/v1/albums/3PRoXYsngSwjEQWR5PsHWR',
          id: '3PRoXYsngSwjEQWR5PsHWR',
          images: [
            {
              height: 640,
              'url': 'https://i.scdn.co/image/75ef0990aa0bb02ef7f6a52d41cc2c4c8028c3ba',
              width: 640,
            },
            {
              'height': 300,
              url: 'https://i.scdn.co/image/94f80ce1463e6cd9f0a8b563cdfd77348d140a2b',
              'width': 300,
            },
            {
              height: 64,
              'url': 'https://i.scdn.co/image/e7d73d44dbad68d6bfd4823448c09ff371ca1ce7',
              width: 64,
            },
          ],
          'name': 'Revolver (Remastered)',
          'type': 'album',
          'uri': 'spotify:album:3PRoXYsngSwjEQWR5PsHWR',
        },
        'artists': [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            id: '3WrFJ7ztbogyGnTHbHJFl2',
            'name': 'The Beatles',
            'type': 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        'available_markets': [
          'CA',
          'MX',
          'US',
        ],
        disc_number: 1,
        duration_ms: 126533,
        'explicit': false,
        'external_ids': {
          isrc: 'GBAYE0601494',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5GjPQ0eI7AgmOnADn1EO6Q',
        },
        href: 'https://api.spotify.com/v1/tracks/5GjPQ0eI7AgmOnADn1EO6Q',
        'id': '5GjPQ0eI7AgmOnADn1EO6Q',
        'name': 'Eleanor Rigby - Remastered',
        popularity: 60,
        preview_url: 'https://p.scdn.co/mp3-preview/0ed074e48aad07edbc7d24d95b1e751e6311ca37?cid=null',
        track_number: 2,
        'type': 'track',
        uri: 'spotify:track:5GjPQ0eI7AgmOnADn1EO6Q',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              'external_urls': {
                'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
              },
              'href': 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
              'id': '3WrFJ7ztbogyGnTHbHJFl2',
              name: 'The Beatles',
              type: 'artist',
              'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
            },
          ],
          'available_markets': [
            'CA',
            'MX',
            'US',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm',
          },
          'href': 'https://api.spotify.com/v1/albums/50o7kf2wLwVmOTVYJOTplm',
          'id': '50o7kf2wLwVmOTVYJOTplm',
          'images': [
            {
              height: 640,
              'url': 'https://i.scdn.co/image/e26910fd9e7bb1671213cb9ed06a855077ddd79f',
              width: 640,
            },
            {
              height: 300,
              'url': 'https://i.scdn.co/image/7da8f3c2b2e002853864b6986f78e8cb7933d020',
              width: 300,
            },
            {
              height: 64,
              'url': 'https://i.scdn.co/image/fc4fe9ac0aa200c5af2bf26d791fad09dbc059e2',
              'width': 64,
            },
          ],
          'name': 'Rubber Soul (Remastered)',
          'type': 'album',
          uri: 'spotify:album:50o7kf2wLwVmOTVYJOTplm',
        },
        'artists': [
          {
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
            },
            href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
            'id': '3WrFJ7ztbogyGnTHbHJFl2',
            name: 'The Beatles',
            type: 'artist',
            'uri': 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2',
          },
        ],
        available_markets: [
          'CA',
          'MX',
          'US',
        ],
        'disc_number': 1,
        'duration_ms': 124693,
        explicit: false,
        'external_ids': {
          isrc: 'GBAYE0601480',
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/1H7gMYGykdtwZOV6s1N0by',
        },
        'href': 'https://api.spotify.com/v1/tracks/1H7gMYGykdtwZOV6s1N0by',
        id: '1H7gMYGykdtwZOV6s1N0by',
        'name': 'Norwegian Wood (This Bird Has Flown) - Remastered',
        popularity: 60,
        preview_url: 'https://p.scdn.co/mp3-preview/cf3b2f5396d7cb825383cc501e5541ef256c0551?cid=null',
        'track_number': 2,
        type: 'track',
        uri: 'spotify:track:1H7gMYGykdtwZOV6s1N0by',
      },
    ],
    'limit': 18,
    next: 'https://api.spotify.com/v1/search?query=beetles&type=track&offset=18&limit=18',
    offset: 0,
    'previous': null,
    'total': 946,
  },
    playlists: {
    'href': 'https://api.spotify.com/v1/search?query=beetles&type=playlist&offset=0&limit=18',
    items: [
      {
        collaborative: false,
        'external_urls': {
          spotify: 'http://open.spotify.com/user/normanamos/playlist/3jJI65a6BWQ3yVgil0CQdE',
        },
        href: 'https://api.spotify.com/v1/users/normanamos/playlists/3jJI65a6BWQ3yVgil0CQdE',
        id: '3jJI65a6BWQ3yVgil0CQdE',
        'images': [
          {
            height: 640,
            url: 'https://mosaic.scdn.co/640/4e6916b16ce51c241c16f4d642360443aeb7b4df809c6f28db643023d76b9cb650a8ea59689a3af20c268e33b8ea23b90b8debba71ecfe83195ed865377d0c66cae914111f5ee721853dc68d2cc53556',
            width: 640,
          },
          {
            height: 300,
            'url': 'https://mosaic.scdn.co/300/4e6916b16ce51c241c16f4d642360443aeb7b4df809c6f28db643023d76b9cb650a8ea59689a3af20c268e33b8ea23b90b8debba71ecfe83195ed865377d0c66cae914111f5ee721853dc68d2cc53556',
            width: 300,
          },
          {
            height: 60,
            url: 'https://mosaic.scdn.co/60/4e6916b16ce51c241c16f4d642360443aeb7b4df809c6f28db643023d76b9cb650a8ea59689a3af20c268e33b8ea23b90b8debba71ecfe83195ed865377d0c66cae914111f5ee721853dc68d2cc53556',
            'width': 60,
          },
        ],
        name: 'Beetles',
        'owner': {
          'external_urls': {
            spotify: 'http://open.spotify.com/user/normanamos',
          },
          'href': 'https://api.spotify.com/v1/users/normanamos',
          'id': 'normanamos',
          type: 'user',
          'uri': 'spotify:user:normanamos',
        },
        'public': null,
        'snapshot_id': '13ORQEI7vH8GDs/GOIoPYiGX4RSUtHCymfaLo83kkph4XSSiRezVFWlcoAGp1UeF',
        tracks: {
          href: 'https://api.spotify.com/v1/users/normanamos/playlists/3jJI65a6BWQ3yVgil0CQdE/tracks',
          'total': 36,
        },
        type: 'playlist',
        uri: 'spotify:user:normanamos:playlist:3jJI65a6BWQ3yVgil0CQdE',
      },
      {
        collaborative: false,
        external_urls: {
          'spotify': 'http://open.spotify.com/user/jojoguillory/playlist/6qiM1Hn9VRgkzD990kNyKh',
        },
        'href': 'https://api.spotify.com/v1/users/jojoguillory/playlists/6qiM1Hn9VRgkzD990kNyKh',
        'id': '6qiM1Hn9VRgkzD990kNyKh',
        images: [
          {
            height: 640,
            url: 'https://mosaic.scdn.co/640/36487b43071aa21fc75e7868852da7f059e9a1e7593e9721f3e15507edb808f10cb368ed6b7449b36a6ad72b309d2d31721298b75bc1a002489af00e8dbf666b2479344e5b3e6b43ee9f4da5690789cb',
            'width': 640,
          },
          {
            'height': 300,
            url: 'https://mosaic.scdn.co/300/36487b43071aa21fc75e7868852da7f059e9a1e7593e9721f3e15507edb808f10cb368ed6b7449b36a6ad72b309d2d31721298b75bc1a002489af00e8dbf666b2479344e5b3e6b43ee9f4da5690789cb',
            'width': 300,
          },
          {
            height: 60,
            url: 'https://mosaic.scdn.co/60/36487b43071aa21fc75e7868852da7f059e9a1e7593e9721f3e15507edb808f10cb368ed6b7449b36a6ad72b309d2d31721298b75bc1a002489af00e8dbf666b2479344e5b3e6b43ee9f4da5690789cb',
            'width': 60,
          },
        ],
        name: 'black beetles',
        owner: {
          external_urls: {
            spotify: 'http://open.spotify.com/user/jojoguillory',
          },
          href: 'https://api.spotify.com/v1/users/jojoguillory',
          id: 'jojoguillory',
          type: 'user',
          'uri': 'spotify:user:jojoguillory',
        },
        'public': null,
        snapshot_id: 'ld324MUD/B4K6ChblxP6QDgcbyVAmVBJT7FHjI490Y1WpEEB17D0Q+oxBMI2IiHg',
        'tracks': {
          'href': 'https://api.spotify.com/v1/users/jojoguillory/playlists/6qiM1Hn9VRgkzD990kNyKh/tracks',
          'total': 17,
        },
        type: 'playlist',
        uri: 'spotify:user:jojoguillory:playlist:6qiM1Hn9VRgkzD990kNyKh',
      },
      {
        collaborative: false,
        external_urls: {
          spotify: 'http://open.spotify.com/user/113433623/playlist/4TqUbCRRBtXWffu4Zx9d6Z',
        },
        href: 'https://api.spotify.com/v1/users/113433623/playlists/4TqUbCRRBtXWffu4Zx9d6Z',
        id: '4TqUbCRRBtXWffu4Zx9d6Z',
        'images': [
          {
            height: 640,
            url: 'https://mosaic.scdn.co/640/bddc1d513e0661bf33f593186f7bed6f4435036f199cbc603af8afca12948db6ba9a142e9fa80072962c51ca74944e60cccf0f39d10bee03666b04676c41981dc659cc8a19a0371f42951d8dec48db7c',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://mosaic.scdn.co/300/bddc1d513e0661bf33f593186f7bed6f4435036f199cbc603af8afca12948db6ba9a142e9fa80072962c51ca74944e60cccf0f39d10bee03666b04676c41981dc659cc8a19a0371f42951d8dec48db7c',
            'width': 300,
          },
          {
            height: 60,
            'url': 'https://mosaic.scdn.co/60/bddc1d513e0661bf33f593186f7bed6f4435036f199cbc603af8afca12948db6ba9a142e9fa80072962c51ca74944e60cccf0f39d10bee03666b04676c41981dc659cc8a19a0371f42951d8dec48db7c',
            width: 60,
          },
        ],
        'name': 'Black Beetles',
        'owner': {
          external_urls: {
            'spotify': 'http://open.spotify.com/user/113433623',
          },
          href: 'https://api.spotify.com/v1/users/113433623',
          'id': '113433623',
          type: 'user',
          uri: 'spotify:user:113433623',
        },
        'public': null,
        'snapshot_id': 'KkQBqQwXCXkM9Tcn7NHk5mgIkpJNl4k+AdqBZMG7ijdmHNRBriSr1BSbB59vb4Sw',
        tracks: {
          'href': 'https://api.spotify.com/v1/users/113433623/playlists/4TqUbCRRBtXWffu4Zx9d6Z/tracks',
          'total': 64,
        },
        type: 'playlist',
        uri: 'spotify:user:113433623:playlist:4TqUbCRRBtXWffu4Zx9d6Z',
      },
      {
        'collaborative': false,
        'external_urls': {
          'spotify': 'http://open.spotify.com/user/1171930193/playlist/6KFMd2vkx9CXbsLxv3v3IA',
        },
        'href': 'https://api.spotify.com/v1/users/1171930193/playlists/6KFMd2vkx9CXbsLxv3v3IA',
        id: '6KFMd2vkx9CXbsLxv3v3IA',
        images: [
          {
            height: null,
            url: 'https://u.scdn.co/images/pl/default/ed9375ee06e4898983b7539a2a98233e9793ace8',
            'width': null,
          },
        ],
        'name': '(Beetles)',
        owner: {
          external_urls: {
            'spotify': 'http://open.spotify.com/user/1171930193',
          },
          'href': 'https://api.spotify.com/v1/users/1171930193',
          'id': '1171930193',
          type: 'user',
          'uri': 'spotify:user:1171930193',
        },
        'public': null,
        'snapshot_id': 'YuwN6nJb4QwHlXRSdaK3+IETbe41aHll/Oh9IMFOuPsaMamJtHiVgws6MGC0sJOF',
        'tracks': {
          href: 'https://api.spotify.com/v1/users/1171930193/playlists/6KFMd2vkx9CXbsLxv3v3IA/tracks',
          total: 101,
        },
        type: 'playlist',
        'uri': 'spotify:user:1171930193:playlist:6KFMd2vkx9CXbsLxv3v3IA',
      },
      {
        collaborative: false,
        'external_urls': {
          spotify: 'http://open.spotify.com/user/224s2fnnp4466ljqwdabavmby/playlist/2nwUGiGsz57PPZipKMdL3a',
        },
        href: 'https://api.spotify.com/v1/users/224s2fnnp4466ljqwdabavmby/playlists/2nwUGiGsz57PPZipKMdL3a',
        id: '2nwUGiGsz57PPZipKMdL3a',
        images: [
          {
            height: 640,
            'url': 'https://mosaic.scdn.co/640/4e6916b16ce51c241c16f4d642360443aeb7b4df809c6f28db643023d76b9cb650a8ea59689a3af29cab76ad73ce2adbacbd118ebc632255ce7c1841411d661890b87bf5e09f436760049f30b2621de6',
            'width': 640,
          },
          {
            'height': 300,
            'url': 'https://mosaic.scdn.co/300/4e6916b16ce51c241c16f4d642360443aeb7b4df809c6f28db643023d76b9cb650a8ea59689a3af29cab76ad73ce2adbacbd118ebc632255ce7c1841411d661890b87bf5e09f436760049f30b2621de6',
            'width': 300,
          },
          {
            height: 60,
            'url': 'https://mosaic.scdn.co/60/4e6916b16ce51c241c16f4d642360443aeb7b4df809c6f28db643023d76b9cb650a8ea59689a3af29cab76ad73ce2adbacbd118ebc632255ce7c1841411d661890b87bf5e09f436760049f30b2621de6',
            width: 60,
          },
        ],
        name: 'beetles',
        'owner': {
          external_urls: {
            spotify: 'http://open.spotify.com/user/224s2fnnp4466ljqwdabavmby',
          },
          href: 'https://api.spotify.com/v1/users/224s2fnnp4466ljqwdabavmby',
          'id': '224s2fnnp4466ljqwdabavmby',
          type: 'user',
          'uri': 'spotify:user:224s2fnnp4466ljqwdabavmby',
        },
        public: null,
        'snapshot_id': 'owPU1Ws4Pa3ttqIrugETnMMHdqeyIFuCf/C7jEfbi5CeCBXqzD+tinaozxgqB8/B',
        'tracks': {
          'href': 'https://api.spotify.com/v1/users/224s2fnnp4466ljqwdabavmby/playlists/2nwUGiGsz57PPZipKMdL3a/tracks',
          total: 83,
        },
        type: 'playlist',
        'uri': 'spotify:user:224s2fnnp4466ljqwdabavmby:playlist:2nwUGiGsz57PPZipKMdL3a',
      },
      {
        collaborative: false,
        'external_urls': {
          spotify: 'http://open.spotify.com/user/bobbyowenscoreau/playlist/1FxiOfBRMVStFUqlIh62RV',
        },
        'href': 'https://api.spotify.com/v1/users/bobbyowenscoreau/playlists/1FxiOfBRMVStFUqlIh62RV',
        id: '1FxiOfBRMVStFUqlIh62RV',
        images: [
          {
            'height': 640,
            'url': 'https://mosaic.scdn.co/640/b67f245f3d55e2928370dadf39640b3d7f994eb9334dd65de2699b1b1f4c3ae84ed451f24637e19a8a452c5a27120d7c0354d6810b8d230b614c84610de042e1d60c20e9b64bbf091c8dfc979e561104',
            width: 640,
          },
          {
            'height': 300,
            'url': 'https://mosaic.scdn.co/300/b67f245f3d55e2928370dadf39640b3d7f994eb9334dd65de2699b1b1f4c3ae84ed451f24637e19a8a452c5a27120d7c0354d6810b8d230b614c84610de042e1d60c20e9b64bbf091c8dfc979e561104',
            width: 300,
          },
          {
            'height': 60,
            url: 'https://mosaic.scdn.co/60/b67f245f3d55e2928370dadf39640b3d7f994eb9334dd65de2699b1b1f4c3ae84ed451f24637e19a8a452c5a27120d7c0354d6810b8d230b614c84610de042e1d60c20e9b64bbf091c8dfc979e561104',
            'width': 60,
          },
        ],
        name: 'neil,billy joel,clash,who,queen,beetles,billy idol',
        'owner': {
          'external_urls': {
            'spotify': 'http://open.spotify.com/user/bobbyowenscoreau',
          },
          href: 'https://api.spotify.com/v1/users/bobbyowenscoreau',
          id: 'bobbyowenscoreau',
          'type': 'user',
          'uri': 'spotify:user:bobbyowenscoreau',
        },
        'public': null,
        snapshot_id: 'sdk6jPg+7zaSxmHRB3eWqwHHQcBM2ksVOloZxAUr2McuXIUSUFcLGEoOvdeB2jxM',
        'tracks': {
          href: 'https://api.spotify.com/v1/users/bobbyowenscoreau/playlists/1FxiOfBRMVStFUqlIh62RV/tracks',
          total: 154,
        },
        type: 'playlist',
        uri: 'spotify:user:bobbyowenscoreau:playlist:1FxiOfBRMVStFUqlIh62RV',
      },
      {
        collaborative: false,
        'external_urls': {
          spotify: 'http://open.spotify.com/user/beetlet12/playlist/1WIqKbdGivexS5UmtWAzbz',
        },
        href: 'https://api.spotify.com/v1/users/beetlet12/playlists/1WIqKbdGivexS5UmtWAzbz',
        id: '1WIqKbdGivexS5UmtWAzbz',
        'images': [
          {
            'height': 640,
            'url': 'https://mosaic.scdn.co/640/c7c6f06a49b9eae437d52d111d029e65600cc8cc3f66e9948e95546e0b192e577c4e47e8abcae3a81fc9521eb7382624df3107fb0ff7a0eb504b18e77db50832be282c1f325e882aa9e469e4a3675b01',
            width: 640,
          },
          {
            height: 300,
            'url': 'https://mosaic.scdn.co/300/c7c6f06a49b9eae437d52d111d029e65600cc8cc3f66e9948e95546e0b192e577c4e47e8abcae3a81fc9521eb7382624df3107fb0ff7a0eb504b18e77db50832be282c1f325e882aa9e469e4a3675b01',
            'width': 300,
          },
          {
            'height': 60,
            url: 'https://mosaic.scdn.co/60/c7c6f06a49b9eae437d52d111d029e65600cc8cc3f66e9948e95546e0b192e577c4e47e8abcae3a81fc9521eb7382624df3107fb0ff7a0eb504b18e77db50832be282c1f325e882aa9e469e4a3675b01',
            'width': 60,
          },
        ],
        'name': 'beetles best',
        owner: {
          external_urls: {
            'spotify': 'http://open.spotify.com/user/beetlet12',
          },
          'href': 'https://api.spotify.com/v1/users/beetlet12',
          'id': 'beetlet12',
          type: 'user',
          'uri': 'spotify:user:beetlet12',
        },
        public: null,
        'snapshot_id': '9snGlPmsWq2Mi8OV+FKosGrQE202ttbLQoHBxI1pJzUPfQdKgtY5KO6DRMMbX9S/',
        'tracks': {
          href: 'https://api.spotify.com/v1/users/beetlet12/playlists/1WIqKbdGivexS5UmtWAzbz/tracks',
          total: 254,
        },
        type: 'playlist',
        'uri': 'spotify:user:beetlet12:playlist:1WIqKbdGivexS5UmtWAzbz',
      },
      {
        'collaborative': false,
        'external_urls': {
          'spotify': 'http://open.spotify.com/user/katelynn.m.erke/playlist/4AdEe1mrOxeFaPO465ibdG',
        },
        href: 'https://api.spotify.com/v1/users/katelynn.m.erke/playlists/4AdEe1mrOxeFaPO465ibdG',
        id: '4AdEe1mrOxeFaPO465ibdG',
        'images': [
          {
            'height': 640,
            url: 'https://mosaic.scdn.co/640/c429243cd056974175abe72a3142d3dccffc166ab3651a85f2bca826b38194c51d09cd7b068aa3ab9ecfdf528562cae879748b73bd81b64dfa3d57041e6c3774deb8c44852ac169e03ce3f7a37c936af',
            'width': 640,
          },
          {
            'height': 300,
            url: 'https://mosaic.scdn.co/300/c429243cd056974175abe72a3142d3dccffc166ab3651a85f2bca826b38194c51d09cd7b068aa3ab9ecfdf528562cae879748b73bd81b64dfa3d57041e6c3774deb8c44852ac169e03ce3f7a37c936af',
            width: 300,
          },
          {
            height: 60,
            url: 'https://mosaic.scdn.co/60/c429243cd056974175abe72a3142d3dccffc166ab3651a85f2bca826b38194c51d09cd7b068aa3ab9ecfdf528562cae879748b73bd81b64dfa3d57041e6c3774deb8c44852ac169e03ce3f7a37c936af',
            width: 60,
          },
        ],
        'name': 'the Beetles',
        'owner': {
          external_urls: {
            'spotify': 'http://open.spotify.com/user/katelynn.m.erke',
          },
          'href': 'https://api.spotify.com/v1/users/katelynn.m.erke',
          'id': 'katelynn.m.erke',
          type: 'user',
          'uri': 'spotify:user:katelynn.m.erke',
        },
        public: null,
        snapshot_id: '7fQH+tKmSE3+qLIg7PBwlNMov7IJCG0H0gAgxMSYflSPSZbKxdySkJoMe/pNYrmK',
        tracks: {
          href: 'https://api.spotify.com/v1/users/katelynn.m.erke/playlists/4AdEe1mrOxeFaPO465ibdG/tracks',
          'total': 90,
        },
        'type': 'playlist',
        uri: 'spotify:user:katelynn.m.erke:playlist:4AdEe1mrOxeFaPO465ibdG',
      },
      {
        collaborative: false,
        external_urls: {
          'spotify': 'http://open.spotify.com/user/11152209206/playlist/7v2UEvjqvm1xrvBPX97ebt',
        },
        'href': 'https://api.spotify.com/v1/users/11152209206/playlists/7v2UEvjqvm1xrvBPX97ebt',
        'id': '7v2UEvjqvm1xrvBPX97ebt',
        images: [
          {
            'height': 640,
            'url': 'https://mosaic.scdn.co/640/36139c2d8745af987fa9b27897b6ab71369309ddb0d082b0609fe0ee4c0a04191db7cba5bb9ddcd471be5fdc057a171570687357557a4e3ad57ea6b17e73b841ace9f5e408712c884c50a49ade94e8c2',
            width: 640,
          },
          {
            height: 300,
            url: 'https://mosaic.scdn.co/300/36139c2d8745af987fa9b27897b6ab71369309ddb0d082b0609fe0ee4c0a04191db7cba5bb9ddcd471be5fdc057a171570687357557a4e3ad57ea6b17e73b841ace9f5e408712c884c50a49ade94e8c2',
            'width': 300,
          },
          {
            height: 60,
            url: 'https://mosaic.scdn.co/60/36139c2d8745af987fa9b27897b6ab71369309ddb0d082b0609fe0ee4c0a04191db7cba5bb9ddcd471be5fdc057a171570687357557a4e3ad57ea6b17e73b841ace9f5e408712c884c50a49ade94e8c2',
            'width': 60,
          },
        ],
        name: 'Mannequin Challenge (Black Beetles)',
        owner: {
          'external_urls': {
            spotify: 'http://open.spotify.com/user/11152209206',
          },
          href: 'https://api.spotify.com/v1/users/11152209206',
          id: '11152209206',
          'type': 'user',
          uri: 'spotify:user:11152209206',
        },
        'public': null,
        snapshot_id: 'g/7zLPL4NMTK08Aj1/7FU4ZK1sekTWZvnbDWH3mvF11C3M+7ATn9cg/yHuSd67D+',
        tracks: {
          href: 'https://api.spotify.com/v1/users/11152209206/playlists/7v2UEvjqvm1xrvBPX97ebt/tracks',
          'total': 51,
        },
        type: 'playlist',
        'uri': 'spotify:user:11152209206:playlist:7v2UEvjqvm1xrvBPX97ebt',
      },
      {
        collaborative: false,
        'external_urls': {
          spotify: 'http://open.spotify.com/user/12158201013/playlist/5YnCzpgOe7XLACOPXD9wWJ',
        },
        'href': 'https://api.spotify.com/v1/users/12158201013/playlists/5YnCzpgOe7XLACOPXD9wWJ',
        'id': '5YnCzpgOe7XLACOPXD9wWJ',
        images: [
          {
            'height': null,
            'url': 'https://u.scdn.co/images/pl/default/c4cb4f9dc1470bd4a5257ddb94ed03ae693a4560',
            width: null,
          },
        ],
        name: 'The Rock Playlist',
        owner: {
          external_urls: {
            spotify: 'http://open.spotify.com/user/12158201013',
          },
          href: 'https://api.spotify.com/v1/users/12158201013',
          'id': '12158201013',
          type: 'user',
          uri: 'spotify:user:12158201013',
        },
        public: null,
        'snapshot_id': 'rPUTloKdfLjGFeDhckfBhplob/+ZERfvyqluLGLmTwergbM2xZWY/+muWy4Q3seO',
        tracks: {
          'href': 'https://api.spotify.com/v1/users/12158201013/playlists/5YnCzpgOe7XLACOPXD9wWJ/tracks',
          total: 301,
        },
        'type': 'playlist',
        uri: 'spotify:user:12158201013:playlist:5YnCzpgOe7XLACOPXD9wWJ',
      },
      {
        collaborative: false,
        'external_urls': {
          spotify: 'http://open.spotify.com/user/jakemarsden13/playlist/0u2Vmd6AEV6eL2NzwQCmtc',
        },
        href: 'https://api.spotify.com/v1/users/jakemarsden13/playlists/0u2Vmd6AEV6eL2NzwQCmtc',
        'id': '0u2Vmd6AEV6eL2NzwQCmtc',
        images: [
          {
            height: null,
            url: 'https://u.scdn.co/images/pl/default/8ec8de43d5938e02df3f7c9d921924159e5dc049',
            'width': null,
          },
        ],
        'name': 'Tryna Finesse',
        owner: {
          'external_urls': {
            spotify: 'http://open.spotify.com/user/jakemarsden13',
          },
          'href': 'https://api.spotify.com/v1/users/jakemarsden13',
          id: 'jakemarsden13',
          type: 'user',
          uri: 'spotify:user:jakemarsden13',
        },
        'public': null,
        snapshot_id: 'iDTkNnt3CcE4N4X2Wz0W3dkAuT3yJIx9qm4AHriMjTLrRsFZChupaR2mO3RAR2A6',
        'tracks': {
          'href': 'https://api.spotify.com/v1/users/jakemarsden13/playlists/0u2Vmd6AEV6eL2NzwQCmtc/tracks',
          'total': 59,
        },
        'type': 'playlist',
        uri: 'spotify:user:jakemarsden13:playlist:0u2Vmd6AEV6eL2NzwQCmtc',
      },
    ],
    limit: 18,
    'next': null,
    offset: 0,
    'previous': null,
    'total': 11,
  },
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
              duration: action.payload.duration,
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
          playlist: [
            ...state.player.playlist, {
              trackURL: action.payload.url,
              trackIMG: action.payload.img,
              name: action.payload.name,
              author: action.payload.author,
              authorID: action.payload.authorID,
              duration: action.payload.duration,
            },
          ],
          trackPlaying: true,
          pointer: state.player.playlist.length,
          duration: action.payload.duration,
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
