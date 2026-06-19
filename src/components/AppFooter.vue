<script setup>
import {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_ADDRESS,
  COMPANY_PHONE,
  COMPANY_EMAIL,
} from '../config/constants'
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Komersial', href: '#komersial' },
  { label: 'Kavling', href: '#kavling' },
  { label: 'Kontak', href: '#kontak' },
]
</script>

<template>
  <footer class="bg-primary dark:bg-gray-950 text-white pt-16 pb-8 px-4 border-t border-gray-800 dark:border-gray-800">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
        <!-- Column 1: Company -->
        <div>
          <p class="text-lg font-bold mb-3">{{ COMPANY_NAME }}</p>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ COMPANY_DESCRIPTION.substring(0, 150) }}...
          </p>
        </div>
        <!-- Column 2: Quick Links -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Navigasi</p>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-gray-300 hover:text-accent text-sm transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
        <!-- Column 3: Contact -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Kontak</p>
          <div class="space-y-3 text-sm text-gray-300">
            <p>{{ COMPANY_ADDRESS }}</p>
            <p>{{ COMPANY_PHONE }}</p>
            <p>{{ COMPANY_EMAIL }}</p>
          </div>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-6">
        <p class="text-sm text-gray-500 text-center">
          &copy; {{ currentYear }} {{ COMPANY_NAME }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
