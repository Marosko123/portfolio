<template>
  <div class="flex flex-col items-center justify-center w-full h-full bg-purple-200">
    <h2 class="text-3xl font-bold mb-4">Kontakt</h2>
    <p class="max-w-md text-center mb-6">
      Ak máte záujem o doučovanie, napíšte mi na
      <strong>bednarmaros341@gmail.com</strong> alebo zavolajte na <strong>+421 911 670 188</strong>.
    </p>

    <!-- Príklad formulára, (momentálne len ukážka) -->
    <form class="space-y-4 w-64">
      <input class="block w-full p-2 border border-gray-300 rounded" type="text" placeholder="Vaše meno" />
      <input class="block w-full p-2 border border-gray-300 rounded" type="email" placeholder="E-mail" />
      <textarea class="block w-full p-2 border border-gray-300 rounded" rows="3" placeholder="Správa" />
      <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Odoslať
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
// Bez špeciálnej logiky, len prezentačné info a ukážka formulára
</script>

<style scoped>
/* Prípadné lokálne úpravy pre Kontakt sekciu */
</style>
