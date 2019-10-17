var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')
const cab = require('./patch/js/patch.js');

class Button extends Nanocomponent {
  constructor() {
    super()
    this.color = null
  }

  createElement(color) {
    this.color = color
    // console.log(patch)
    return html `
      <button style="background-color: ${color}">
        Click Me
      </button>
    `
  }

  // Implement conditional rendering
  update(newColor) {
    return newColor !== this.color
  }
}
 
module.exports = Button