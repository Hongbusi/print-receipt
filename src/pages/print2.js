import printJS from 'print-js'

function push(context, source) {
  context.code += source
}

function genText(context, text) {
  push(context, `<div>${text}</div>`)
}

function genList(context, title, content) {
  genText(context, title)

  content.forEach((i) => {
    push(context, '<ul>')
    i.forEach((j) => {
      push(context, `<li>${j}</li>`)
    })
    push(context, '</ul>')
  })
}

function genBlankLine(context) {
  push(context, '<div class="blank-line" />')
}

function generate(context, options) {
  push(context, '<div id="print-container">')

  options.nodes.forEach((node) => {
    switch (node.type) {
      case 'text':
        genText(context, node.content)
        break

      case 'list':
        genList(context, node.title, node.content)
        break

      case 'blank-line':
        genBlankLine(context)
        break

      default:
        break
    }
  })

  push(context, '</div>')
}

function insert(code) {
  const div = document.createElement('div')
  div.style = 'position: fixed; bottom: 0; left: 100%;'
  div.innerHTML = code
  return document.body.appendChild(div)
}

function remove(node) {
  const parent = node.parentNode
  if (parent)
    parent.removeChild(node)
}

export default function printReceipt(options) {
  const context = { code: '' }

  generate(context, options)

  const node = insert(context.code)

  printJS({
    printable: 'print-container',
    type: 'html',
    style: '#print-container { padding-right: 4px; } div { word-break: break-all; font-size: 12px; zoom: 0.95; font-weight: 400; } ul { padding: 0; margin: 0; list-style: none; display: flex; } ul li { display: inline-block; } ul li:nth-child(1) { width: 50%; } ul li:nth-child(2) { width: 30%; } ul li:nth-child(3) { width: 20%; } .blank-line { margin-top: 10px; }',
    header: options.header,
    headerStyle: 'font-size: 12px;',
    scanStyles: false,
    onLoadingEnd() {
      remove(node)
    }
  })
}
