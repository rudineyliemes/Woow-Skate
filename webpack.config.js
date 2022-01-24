const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    devServer: {
       static: { 
        directory: path.join(__dirname, 'dist'),
       },
        compress: true,
        port: 9000
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            exclude: /node_modules/,
            test: /\.s[ac]ss$/i,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                    modules: true
                }
              },
                {loader: 'sass-loader'},
              
            ]
          },
        ],
      }    
};