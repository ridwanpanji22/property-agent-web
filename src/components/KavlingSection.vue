<script setup>
import { ref, computed } from 'vue'
import { dataKavling } from '../data/kavling'
import KavlingItem from './KavlingItem.vue'

const itemsPerPage = 3
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(dataKavling.length / itemsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return dataKavling.slice(start, end)
})

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
</script>

<template>
  <section id="kavling" class="py-16 md:py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
    <div class="mb-10 text-center md:text-left">
      <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">B2C</p>
      <h2 class="text-3xl font-extrabold text-primary dark:text-white tracking-tight">Tanah Kavling</h2>
      <p class="text-text-secondary dark:text-gray-400 mt-2 text-lg">Investasi tanah kavling dengan kemudahan skema kredit in-house.</p>
    </div>
    <div class="bg-white dark:bg-gray-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden mb-6">
      <KavlingItem 
        v-for="item in paginatedData" 
        :key="item.id" 
        :item="item" 
      />
    </div>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="flex justify-center items-center gap-4">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        Sebelumnya
      </button>
      <span class="text-sm font-medium text-text-secondary dark:text-gray-400">
        Halaman {{ currentPage }} dari {{ totalPages }}
      </span>
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        Selanjutnya
      </button>
    </div>
  </section>
</template>
