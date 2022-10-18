<script setup lang="ts">
import domToImage from 'dom-to-image'
import printJS from 'print-js'

async function print() {
  const dataUrl = await domToImage.toPng(document.querySelector('#print-container')!)

  printJS({
    printable: dataUrl,
    type: 'image',
    imageStyle: 'width: 100%;'
  })
}
</script>

<template>
  <div class="p-5 mx-auto my-20 w-100 border text-center">
    <div id="print-container" class="inline-block px-4mm py-10mm w-58mm text-left bg-red-200 text-12px">
      <p>冠山示范型居家养老服务中心消费结账单</p>
      <p class="mt-4mm">
        姓名：张三
      </p>
      <p>单号：123442342421423421342</p>
      <p>收营员：李四</p>
      <p>结账时间：2022-10-20</p>
      <p class="mt-4mm">
        消费金额：67元
      </p>
      <p class="mt-4mm">
        账户余额：1000元
      </p>
    </div>

    <hr class="my-6">
    <button class="px-2 py-1 border" @click="print">
      Click Print
    </button>
  </div>
</template>
