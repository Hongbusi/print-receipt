export default class Print {
  constructor(el, options) {
    this.el = el
    this.options = options
    this.init()
  }

  init() {
    this.createIframe()
  }

  createIframe() {
    const iframe = document.createElement('iframe')
    iframe.id = 'print-container'
    const f = document.body.appendChild(iframe)
    const w = f.contentWindow || f.contentDocument
    const doc = f.contentDocument || f.contentWindow.document
    doc.open()
    doc.write(`
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
    <p style="margin: 0; font-size: 12px;">fsdf</p>
  `)
    iframe.onload = function () {
      w.focus()
      w.print()
    }
    doc.close()
  }
}
