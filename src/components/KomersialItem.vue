<script setup>
import { computed } from 'vue'
import { generateWaUrlKomersial } from '../utils/whatsapp'

const props = defineProps({
  item: Object
})

const waUrl = computed(() => generateWaUrlKomersial(props.item.nama))

const formatNumber = (num) => {
  return num.toLocaleString('id-ID')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-950 p-6 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-150 flex flex-col md:flex-row gap-6 md:items-center justify-between">
    <div class="flex-grow">
      <h3 class="text-lg font-semibold text-text-primary dark:text-white mb-3">{{ item.nama }}</h3>
      <div class="flex flex-wrap gap-4 text-sm text-text-secondary dark:text-gray-400 items-center">
        <span>Luas: {{ formatNumber(item.luasTotal) }} m²</span>
        <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 hidden md:block"></span>
        <span>Lebar Muka: <strong class="font-bold text-text-primary dark:text-white">{{ item.lebarMuka }} m</strong></span>
        <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 hidden md:block"></span>
        <span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-text-primary dark:text-gray-300">{{ item.statusLegal }}</span>
      </div>
    </div>
    <div class="shrink-0">
      <a 
        :href="waUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block w-full md:w-auto text-center px-6 py-3 bg-primary dark:bg-white dark:text-gray-950 hover:bg-primary/90 dark:hover:bg-gray-200 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-sm"
      >
        Minta Dokumen Legalitas via WA
      </a>
    </div>
  </div>
</template>
