module.exports = {
  entry: __dirname+'/client/index.js',
  output: {
    path: __dirname+'/client/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
};
