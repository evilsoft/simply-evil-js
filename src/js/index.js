// this needs to stay here, do not remove.
import 'babel-polyfill'
import '../less/main.less'

const appEl = document.getElementById('app')
const heading = document.createElement('h1')

heading.innerText = "Hello, Simply Evil"
appEl.appendChild(heading)
