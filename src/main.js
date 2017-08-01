/*eslint no-unused-vars: ["error", {"varsIgnorePattern": "Promise"}] */

var Promise = require('bluebird')
import 'font-awesome/css/font-awesome.css'

import { bootstrap } from 'aurelia-bootstrapper-webpack'

bootstrap(function(aurelia) {

  aurelia.use
    .standardConfiguration()
    .feature('pages')
    .developmentLogging()

  aurelia.start().then(a => a.setRoot('app', document.body))
})