<script setup>
import { COMPANY_STATS } from '../config/constants'
</script>

<template>
  <section class="py-16 md:py-20 px-4 bg-primary dark:bg-accent/10">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
        <div v-for="(stat, index) in COMPANY_STATS" :key="index">
          <p class="text-4xl md:text-5xl font-black text-white dark:text-accent mb-2">
            {{ stat.value }}
          </p>
          <p class="text-gray-300 dark:text-gray-400 text-sm font-medium">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
