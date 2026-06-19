<script setup>
import { COMPANY_ADVANTAGES } from '../config/constants'
</script>

<template>
  <section class="relative py-16 md:py-24 px-4 bg-[url('/background.jpeg')] bg-fixed bg-center bg-no-repeat bg-cover">
    <!-- Overlay gelap -->
    <div class="absolute inset-0 bg-black/70"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Keunggulan</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Mengapa Memilih Kami?
        </h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(item, index) in COMPANY_ADVANTAGES"
          :key="index"
          class="bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-800 hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200 shadow-xl"
        >
          <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
            <span class="text-accent font-bold text-lg">{{ index + 1 }}</span>
          </div>
          <h3 class="text-lg font-bold text-primary dark:text-white mb-2">{{ item.title }}</h3>
          <p class="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
