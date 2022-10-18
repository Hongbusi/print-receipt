import printJS from 'print-js'

export default class Print {
  constructor() {
    this.elStr = ''
  }

  addPrintText(text) {
    this.elStr += `<div>${text}</div>`
  }

  addPrintBlankLine() {
    this.elStr += '<div class="blank-line" />'
  }

  print() {
    const divEl = document.createElement('div')
    divEl.id = 'print-container'
    divEl.innerHTML = this.elStr

    document.body.appendChild(divEl)

    printJS({
      printable: 'print-container',
      type: 'html',
      style: 'div { word-break: break-all; font-size: 12px; zoom: 0.95; font-weight: 400; } ul { padding: 0; margin: 0; list-style: none; display: flex; } ul li {width: 30%; display: inline-block;} .blank-line {margin-top:6px;}',
      header: '冠山示范型居家养老服务中心消费结账单',
      headerStyle: 'font-size: 12px;',
      scanStyles: false
    })
  }
}
