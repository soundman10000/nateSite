/*eslint-disable no-var*/
/*global __dirname */

const path = require('path')
const AureliaWebpackPlugin = require('malley-aurelia-plugin')
const ProvidePlugin = require('webpack/lib/ProvidePlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const pkg = require('./package.json')

module.exports =
  { devServer:
    { host: 'localhost'
    , port: 9000
    }
  , debug: true
  , entry:
    { main: [ './src/main' ]
    }
  , output:
    { path: path.join(__dirname, 'dist')
    , filename: 'bundle.js'
    }
    , plugins:
    [ new CopyWebpackPlugin([ { from: 'src/images/'}])
    , new AureliaWebpackPlugin({})
    , new ProvidePlugin({
      'Promise': 'bluebird'
    })
    ]
  , resolve:
    { alias:
    { 'mdl': 'material-design-lite/material.css'
    , 'fa': 'font-awesome/css/font-awesome.css'
    , 'site': 'src/styles/site.pcss'
    }
    , root:  [ path.resolve('./') ]
    , packageAlias: 'browser'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
        { test: /\.css$/, loaders: ['style', 'css', 'resolve-url']},
        { test: /\.pcss$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]-[name]-[local]', 'postcss']},
        { test: /\.html$/, loader: 'html' },
        { test: /\.(png|gif|jpg|ico)$/, loader: 'url?limit=8192' },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
      ]
    }
    , postcss: webpack =>
      [ require('postcss-import')({ addDependencyTo: webpack, path: 'src/styles' })
      , require('postcss-cssnext')
      , require('postcss-assets')({ loadPaths: ['src/images/'] })
      , require('postcss-font-awesome')
      , require('rucksack-css')
      , require('lost')
      ]
  }
