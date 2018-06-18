const path = require('path');

module.exports = {
  mode: 'production',
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    node: '8.11.1',
                  },
                },
              ],
            ],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
    ],
  },
};
