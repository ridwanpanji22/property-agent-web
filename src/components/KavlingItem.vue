<script setup>
import { computed } from 'vue'
import { generateWaUrlKavling } from '../utils/whatsapp'

const props = defineProps({
  item: Object
})

const waUrl = computed(() => generateWaUrlKavling(props.item.blok, props.item.nomor))

const formatNumber = (num) => {
  return num.toLocaleString('id-ID')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-950 p-6 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-150 flex flex-col md:flex-row gap-6 md:items-center justify-between">
    <div class="flex-grow">
      <div class="flex items-center gap-4 mb-3">
        <h3 class="text-lg font-semibold text-text-primary dark:text-white">Kavling Blok {{ item.blok }}-{{ item.nomor }}</h3>
        <span
          :class="item.status === 'Tersedia' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'"
          class="px-3 py-1 rounded-full text-xs font-semibold"
        >
          {{ item.status }}
        </span>
      </div>
      <div class="flex flex-col gap-2 text-sm text-text-secondary dark:text-gray-400">
        <span>Luas: <strong class="text-text-primary dark:text-white font-medium">{{ formatNumber(item.luas) }} m²</strong></span>
        <p class="text-xs text-accent font-medium bg-accent/10 w-fit px-2 py-1 rounded">
          Tersedia Skema Kredit In-House tanpa BI Checking
        </p>
      </div>
    </div>
    <div class="shrink-0" v-if="item.status === 'Tersedia'">
      <a 
        :href="waUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block w-full md:w-auto text-center px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-sm"
      >
        Minta Simulasi Cicilan via WA
      </a>
    </div>
    <div class="shrink-0" v-else>
      <span class="inline-block w-full md:w-auto text-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-lg font-medium text-sm cursor-not-allowed">
        Sudah Terjual
      </span>
    </div>
  </div>
</template>
