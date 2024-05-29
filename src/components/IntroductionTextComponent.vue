<template>
  <div class="introduction-text">
    <glitching-text
      value="Ahoj, volám sa"
      :static-size="20"
      :speed-in-ms="30"
      color="#ffecb3" />
    <glitching-text value="Maroš Bednár." :static-size="60" :speed-in-ms="30" />
    <glitching-text
      value="Tvorím veci na webe."
      :static-size="60"
      :speed-in-ms="20"
      color="#f5f0f6" />
    <glitching-text
      value="Som programátor, učiteľ a svoju prácu milujem. Preto ti rád pomôžem zamilovať si ju tiež! Neváhaj a kontaktuj ma ešte dnes."
      :static-size="15"
      :speed-in-ms="2"
      :max-width="450"
      color="#aeaeae" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GlitchingText from "./GlitchingTextComponent.vue";

export default defineComponent({
  name: "IntroductionTextComponent",
  components: {
    GlitchingText,
  },
});
</script>

<style scoped></style>
