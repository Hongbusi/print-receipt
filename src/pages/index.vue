<script setup lang="ts">
// import domToImage from 'dom-to-image'
// import html2canvas from 'html2canvas'
// import printJS from 'print-js'
import Print from './print'

const print = new Print()

print.addPrintText('冠山示范型居家养老服务中心消费结账单')
print.addPrintText('冠山示范型居家养老服务中心消费结账单')
print.addPrintBlankLine()
print.addPrintText('冠山示范型居家养老服务中心消费结账单')
print.addPrintText('冠山示范型居家养老服务中心消费结账单')

function handleClickPrint() {
  print.print()
}

// async function print() {
//   // const dataUrl = await domToImage.toPng(document.querySelector('#print-container')!)

//   printJS({
//     printable: 'print-container',
//     type: 'html',
//     style: 'div { word-break: break-all; font-size: 12px; zoom: 0.95; font-weight: 400; } ul { padding: 0; margin: 0; list-style: none; display: flex; } ul li {width: 30%; display: inline-block;} .blank-line {margin-top:6px;}',
//     header: '冠山示范型居家养老服务中心消费结账单',
//     headerStyle: 'font-size: 12px;',
//     scanStyles: false
//   })

//   // html2canvas(document.querySelector('#print-container')!, {
//   //   scale: 50
//   // }).then((canvas) => {
//   //   const dataUrl = canvas.toDataURL('image/png')
//   //   printJS({
//   //     printable: dataUrl,
//   //     type: 'image',
//   //     imageStyle: 'width: 100%;'
//   //   })
//   // })
// }
</script>

<template>
  <div class="p-5 mx-auto my-20 w-100 border text-center">
    <!-- <div id="print-container">
      <div>姓名：张三</div>
      <div>单号：123442342421442单号：123442342421442</div>
      <div>收营员：李四</div>
      <div class="blank-line" />
      <ul>
        <li>这是菜名</li>
        <li>价格</li>
        <li>数量</li>
      </ul>
      <div class="blank-line" />
      <div>结账时间：2022-10-20</div>
      <div>消费金额：67元</div>
      <div> 账户余额：1000元</div>
    </div> -->

    <hr class="my-6">
    <button class="px-2 py-1 border" @click="handleClickPrint">
      Click Print
    </button>
  </div>
</template>
