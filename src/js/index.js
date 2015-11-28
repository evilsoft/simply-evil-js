// this needs to stay here, do not remove.
import 'babel-polyfill'

// everything down from here can be removed for your
// own application and standup
import App from './app'

const app = App()

function start(options={}) {
  stop()
  app.start(options)
}

function stop() {
  // A place to clean anything up
  app.stop()
}

module.exports = { start, stop }
