<template>
  <nav class="bg-blue-600 text-white py-4 px-6 flex justify-between items-center sticky top-0">
    <div class="font-bold text-xl">Moje Portfolio</div>

    <div class="space-x-4">
      <a href="#section1" class="hover:underline" @click="scrollToSection(0)">O mne</a>
      <a href="#section2" class="hover:underline" @click="scrollToSection(1)">Portfolio</a>
      <a href="#section3" class="hover:underline" @click="scrollToSection(2)">Služby</a>
      <a href="#section4" class="hover:underline" @click="scrollToSection(3)">Kontakt</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
function scrollToSection(index: number) {
  const scrollContainer = document.querySelector('.scroll-container') as any;

  if (!scrollContainer) {
    return
  }

  const sections = scrollContainer.querySelectorAll('.scroll-area') as NodeListOf<HTMLElement>

  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<style scoped></style>
