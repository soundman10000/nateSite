/*eslint no-console: ["error", { allow: ["log"] }] */

const express  = require('express')

const app = express()
    , pkg = require('./package.json')
    , port = 9000

const release = './dist/release'

app.use('/', express.static(release))
app.use(`/node_modules/${pkg.name}`, express.static(release))

app.listen(port, _ => console.log('serving files from %s on http://localhost:%s', release, port))
