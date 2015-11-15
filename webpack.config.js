var buildConfig = require('./webpack.config.build')

buildConfig.output.path = './site/js'

buildConfig.debug   =  true
buildConfig.devtool =  'inline-source-map'

module.exports = buildConfig
