<script setup>
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import KeunggulanSection from './components/KeunggulanSection.vue'
import StatistikSection from './components/StatistikSection.vue'
import KomersialSection from './components/KomersialSection.vue'
import KavlingSection from './components/KavlingSection.vue'
import VisiMisiSection from './components/VisiMisiSection.vue'
import KontakSection from './components/KontakSection.vue'
import AppFooter from './components/AppFooter.vue'

import { initTheme } from './utils/theme'

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-text-primary dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors duration-300">
    <AppHeader />
    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <KeunggulanSection />
      <StatistikSection />
      <KomersialSection />
      <KavlingSection />
      <VisiMisiSection />
      <KontakSection />
    </main>
    <AppFooter />
  </div>
</template>
