<script setup>
import { COMPANY_VISI, COMPANY_MISI } from '../config/constants'
</script>

<template>
  <section id="visi-misi" class="py-16 md:py-24 px-4 scroll-mt-20 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16">
        <!-- Visi -->
        <div>
          <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Visi</p>
          <h2 class="text-2xl md:text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-6">
            Pandangan Masa Depan Kami
          </h2>
          <blockquote class="border-l-4 border-accent pl-6 py-2">
            <p class="text-text-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed italic">
              "{{ COMPANY_VISI }}"
            </p>
          </blockquote>
        </div>
        <!-- Misi -->
        <div>
          <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Misi</p>
          <h2 class="text-2xl md:text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-6">
            Langkah Nyata Kami
          </h2>
          <ol class="space-y-4">
            <li
              v-for="(misi, index) in COMPANY_MISI"
              :key="index"
              class="flex gap-4 items-start"
            >
              <span class="shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                {{ index + 1 }}
              </span>
              <p class="text-text-secondary dark:text-gray-400 text-base leading-relaxed pt-1">
                {{ misi }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
