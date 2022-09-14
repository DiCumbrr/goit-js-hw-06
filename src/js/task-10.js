const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('input'),
  boxesEl: document.querySelector('#boxes')
}
const { createBtn, destroyBtn, inputEl, boxesEl } = refs

const metods = {
  getRandomHexColor: function () {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  },

  getNum: function () {
    const num = inputEl.value
    this.createBoxes(num)
  },

  destroyBoxes: function () {
    boxesEl.innerHTML = ''
  },

  createBoxes: function (num) {
    let boxesWidth = 20
    let boxesHeight = 20
    for (let i = 0; i < num; i++) {
      boxesWidth += 10
      boxesHeight += 10
      const colorNumber = this.getRandomHexColor()

      let div = document.createElement('div')
      div.setAttribute(
        'style',
        `background-color:${colorNumber};height:${boxesHeight}px;width:${boxesWidth}px`
      )
      this.addBoxesToDocument(div)
    }
  },

  addBoxesToDocument: function (elem) {
    boxesEl.appendChild(elem)
  }
}

createBtn.addEventListener('click', function () {
  metods.getNum()
})

destroyBtn.addEventListener('click', metods.destroyBoxes)
