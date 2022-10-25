<script setup lang="ts">
import printReceipt from './print2'

function handleClickPrint() {
  printReceipt({
    header: '冠山示范型居家养老服务中心消费结账单',
    nodes: [
      { type: 'text', content: '这是一个测试' },
      { type: 'blank-line' },
      {
        type: 'list',
        title: '点餐列表',
        content: [
          ['红烧肉', '10元', '*1'],
          ['红烧肉', '100元', '*1'],
          ['红烧肉', '10元', '*1'],
          ['红烧肉', '10元', '*1']
        ]
      },
      { type: 'blank-line' },
      { type: 'text', content: '消费金额：100 元' },
      { type: 'text', content: '余额：1000 元' },
      { type: 'text', content: '这是一个测试' }
    ]
  })
}
</script>

<template>
  <div class="p-5 py-20 text-center">
    <button class="px-2 py-1 border" @click="handleClickPrint">
      Click Print
    </button>
  </div>
</template>
