<script setup>
import { WA_NUMBER } from '../config/constants'
const waUrlGeneral = `https://wa.me/${WA_NUMBER}`
</script>

<template>
  <section class="relative py-24 md:py-32 text-center px-4 bg-[url('/background.jpeg')] bg-fixed bg-center bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-4xl mx-auto">
      <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Properti & Tanah Kavling</p>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Investasi Properti Strategis & Tanah Kavling
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
        Jual lahan komersial strategis dan tanah kavling dengan skema kredit in-house langsung ke perusahaan tanpa BI Checking.
      </p>
      <a 
        :href="waUrlGeneral" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-accent/30"
      >
        Hubungi Kami via WhatsApp
      </a>
    </div>
  </section>
</template>
