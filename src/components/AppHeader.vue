<script setup>
import { ref } from 'vue'
import { COMPANY_NAME } from '../config/constants'
import { isDark, toggleTheme } from '../utils/theme'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Komersial', href: '#komersial' },
  { label: 'Kavling', href: '#kavling' },
  { label: 'Kontak', href: '#kontak' },
]

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
<header class="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
  <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="#" class="flex items-center gap-3 text-xl font-bold tracking-tight text-primary dark:text-white">
      <img src="/logo.png" alt="Logo PT Agung Banua Duta Property" class="h-10 w-auto object-contain" />
      <span class="hidden sm:block">{{ COMPANY_NAME }}</span>
    </a>

    <!-- Link & Buttons Area -->
    <div class="flex items-center gap-6">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-6 text-sm font-medium text-text-secondary dark:text-gray-400">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="hover:text-accent transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Tombol Toggle Dark/Light Mode -->
      <button 
        @click="toggleTheme" 
        class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-text-secondary dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        <!-- Tampilkan Moon Icon jika mode Light -->
        <svg v-if="!isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <!-- Tampilkan Sun Icon jika mode Dark -->
        <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>

      <!-- Hamburger Button (Mobile) -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <!-- Hamburger icon -->
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <!-- Close icon -->
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Dropdown -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pb-4"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="closeMobileMenu"
        class="block py-3 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-accent transition-colors border-b border-gray-50 dark:border-gray-900 last:border-b-0"
      >
        {{ link.label }}
      </a>
    </div>
  </transition>
</header>
</template>
