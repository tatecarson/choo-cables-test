var html = require('choo/html')
var Viz = require('../components/viz.js')
var viz = new Viz()



var TITLE = 'choo-test - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        ${viz.render(state.color)}
      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
