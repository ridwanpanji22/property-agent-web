<script setup>
import {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_ESTABLISHED,
  COMPANY_TAGLINE,
} from '../config/constants'
import { computed } from 'vue'

const yearsExperience = computed(() => new Date().getFullYear() - COMPANY_ESTABLISHED)
</script>

<template>
  <section id="tentang" class="py-16 md:py-24 px-4 scroll-mt-20 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
        <!-- Left: Text -->
        <div class="md:col-span-3">
          <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Tentang Kami</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-6">
            {{ COMPANY_TAGLINE }}
          </h2>
          <p class="text-text-secondary dark:text-gray-400 leading-relaxed text-base md:text-lg">
            {{ COMPANY_DESCRIPTION }}
          </p>
        </div>
        <!-- Right: Highlight -->
        <div class="md:col-span-2 flex flex-col gap-6">
          <div class="bg-surface dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <p class="text-5xl font-black text-accent mb-2">{{ yearsExperience }}+</p>
            <p class="text-text-secondary dark:text-gray-400 text-sm font-medium">Tahun Pengalaman</p>
          </div>
          <div class="bg-surface dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <p class="text-lg font-semibold text-primary dark:text-white mb-1">{{ COMPANY_NAME }}</p>
            <p class="text-text-secondary dark:text-gray-400 text-sm">Berdiri sejak {{ COMPANY_ESTABLISHED }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
