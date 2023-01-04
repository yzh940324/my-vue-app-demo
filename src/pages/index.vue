<script lang="ts" setup>
import { baseStore } from '@/stores';

const value = ref("")
const store  = baseStore()
</script>

<template>
    <div>Index</div>
    <div>{{store.system_name}}</div>
    <div>{{store.stress}}</div>
    <div>{{store.getSystemNameLength()}}</div>
    <ElInput v-model="value" clearable/>
</template>