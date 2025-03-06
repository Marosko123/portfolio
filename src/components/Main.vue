<template>
  <!-- Kontajner pre vertikálne scroll-snap -->
  <div ref="scrollContainer" class="scroll-container">
    <div class="scroll-area" data-section="about">
      <AboutSection />
    </div>

    <div class="scroll-area" data-section="services">
      <ServicesSection />
    </div>

    <div class="scroll-area" data-section="contact">
      <ContactSection />
    </div>

    <!-- PortfolioSection je tiež samostatný komponent, ale s iným obsahom -->
    <div class="scroll-area" data-section="portfolio">
      <PortfolioSection />
    </div>
  </div>

  <!-- Tlačidlo Scroll to top (zobrazí sa len, ak nie sme úplne hore) -->
  <button v-if="!isAtTop" class="fixed bottom-4 right-4 btn" @click="scrollToTop">
    Scroll to top
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AboutSection from './sections/AboutSection.vue'
import PortfolioSection from './sections/PortfolioSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import ContactSection from './sections/ContactSection.vue'

/**
 * Reaktívne premenné & referencie
 */
const scrollContainer = ref<HTMLDivElement | null>(null)
const isAtTop = ref(true)

// Uchováme si IntersectionObserver (aby sme ho vedeli zrušiť pri unmount)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!scrollContainer.value) return

  // A) Scroll listener – zistíme, či sme na top
  scrollContainer.value.addEventListener('scroll', handleScroll)
  checkScrollTop()

  // B) IntersectionObserver – zisťuje, ktorá sekcia je v popredí
  observer = new IntersectionObserver(handleIntersection, {
    root: scrollContainer.value,
    threshold: 0.6 // sekcia je "aktívna", ak aspoň 60% plochy je viditeľných
  })

  // pozbierame všetky .scroll-area a začneme ich sledovať
  const sections = scrollContainer.value.querySelectorAll('.scroll-area')
  sections.forEach((section) => observer?.observe(section))

  // C) Scrollneme na sekciu, ktorú označuje URL hash (ak je nejaký)
  scrollToSectionFromHash()
})

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
  // zrušíme observer
  if (observer) {
    observer.disconnect()
  }
})

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Scroll events
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
function handleScroll() {
  checkScrollTop()
}

function checkScrollTop() {
  if (!scrollContainer.value) return
  isAtTop.value = scrollContainer.value.scrollTop === 0
}

function scrollToTop() {
  if (!scrollContainer.value) return
  scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' })

  // Nastavíme hash na #about (prvá sekcia) alebo vymažeme (podľa potreby)
  window.location.hash = '#about'
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// IntersectionObserver callback
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
function handleIntersection(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // Zoberieme data-section
      const el = entry.target as HTMLElement
      const sectionName = el.dataset.section
      if (sectionName) {
        // Nastavíme hash v URL
        window.location.hash = `#${sectionName}`
      }
    }
  }
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Načítanie sekcie z URL hashu
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
function scrollToSectionFromHash() {
  const currentHash = window.location.hash.replace('#', '')
  if (!scrollContainer.value || !currentHash) return

  // Skúsime nájsť div.scroll-area s data-section="currentHash"
  const target = scrollContainer.value.querySelector<HTMLDivElement>(
    `.scroll-area[data-section="${currentHash}"]`
  )
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* Kontajner so scroll-snap nastavením (vertikálne) */
.scroll-container {
  height: calc(100vh - 120px);
  /* Výška okna - výška Navbaru */
  overflow-y: auto;

  scroll-behavior: smooth;
  /* Plynulé scrollovanie */
  scroll-snap-type: y mandatory;
  /* Snap na najbližšiu sekciu */
  -webkit-scroll-snap-type: y mandatory;
  -ms-scroll-snap-type: y mandatory;
}

/* Každá sekcia */
.scroll-area {
  height: 100vh;
  /* Zaberá celú výšku okna */
  scroll-snap-align: start;
  /* Snap je na hornú hranu sekcie */
}

/* Jednoduchá definícia tlačidla */
.btn {
  padding: 0.75rem 1rem;
  background-color: #2563eb;
  /* bg-blue-600 */
  color: #ffffff;
  /* text-white */
  border-radius: 0.375rem;
  /* rounded */
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #1d4ed8;
  /* hover:bg-blue-700 */
}
</style>
