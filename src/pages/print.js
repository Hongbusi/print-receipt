import printJS from 'print-js'

export default class Print {
  code = ''

  constructor(options) {
    this.options = options

    this.generate()
  }

  generate() {
    this.push('<div id="print-container">')

    this.options.nodes.forEach((node) => {
      switch (node.type) {
        case 'text':
          this.genText(node.content)
          break

        case 'list':
          this.genList(node.title, node.content)
          break

        case 'blank-line':
          this.genBlankLine()
          break

        default:
          break
      }
    })

    this.push('</div>')
  }

  push(source) {
    this.code += source
  }

  genText(text) {
    this.push(`<div>${text}</div>`)
  }

  genList(title, content) {
    this.genText(title)
    this.push('<ul>')

    content.forEach((i) => {
      i.forEach((j) => {
        this.push(`<li>${j}</li>`)
      })
    })

    this.push('</ul>')
  }

  genBlankLine() {
    this.push('<div class="blank-line" />')
  }

  insert() {
    const div = document.createElement('div')
    div.style = 'position: fixed; bottom: 0; left: 100%;'
    div.innerHTML = this.code
    return document.body.appendChild(div)
  }

  remove(node) {
    const parent = node.parentNode
    if (parent)
      parent.removeChild(node)
  }

  toPrint() {
    const node = this.insert()

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    printJS({
      printable: 'print-container',
      type: 'html',
      style: 'div { word-break: break-all; font-size: 12px; zoom: 0.95; font-weight: 400; } ul { padding: 0; margin: 0; list-style: none; display: flex; } ul li { width: 33%; display: inline-block; } .blank-line { margin-top: 6px; }',
      header: this.options.header,
      headerStyle: 'font-size: 12px;',
      scanStyles: false,
      onLoadingEnd() {
        _this.remove(node)
      }
    })
  }
}
