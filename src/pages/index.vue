<script setup lang="ts">
import Print from './print'

const print = new Print({
  header: '冠山示范型居家养老服务中心消费结账单',
  nodes: [
    { type: 'text', content: '这是一个测试' },
    { type: 'blank-line' },
    {
      type: 'list',
      title: '这是一个测试列表',
      content: [
        ['这是第一个', '这是第二个', '这是第三个'],
        ['这是第一个', '这是第二个', '这是第三个']
      ]
    },
    { type: 'text', content: '这是一个测试' },
    { type: 'text', content: '这是一个测试' },
    { type: 'text', content: '这是一个测试' }
  ]
})

function handleClickPrint() {
  print.toPrint()
}
</script>

<template>
  <div class="p-5 py-20 text-center">
    <button class="px-2 py-1 border" @click="handleClickPrint">
      Click Print
    </button>
  </div>
</template>
