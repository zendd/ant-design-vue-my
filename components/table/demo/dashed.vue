<docs>
---
order: 99
title:
  en-US: Dashed Border
  zh-CN: 虚线边框
---

## zh-CN

使用 `dashed` 属性让表格底部边框变为虚线，并且表头不带边框。

## en-US

Use `dashed` prop to make the bottom border of the table cells dashed, and the table header has no border.
</docs>

<template>
  <a-table :columns="columns" :data-source="data" dashed>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>Header</template>
    <template #footer>Footer</template>
  </a-table>
</template>
<script lang="ts" setup>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
</script>
