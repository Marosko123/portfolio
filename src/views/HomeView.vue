<template>
  <div class="home-view">
    <mouse-pointer />

    <div class="main-wrapper">
      <introduction-text />
      <waves />
      <footer-component />
    </div>
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import Waves from "../components/WavesComponent.vue";
import MousePointer from "../components/MousePointerComponent.vue";
import IntroductionText from "../components/IntroductionTextComponent.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    MousePointer,
    Waves,
    IntroductionText,
  },
  mounted() {
    document.title = "Maroš Bednár";
  },
};
</script>

<style scoped>
.main-wrapper {
  z-index: 5;
  position: relative;
}

.introduction-text {
  padding-left: 100px;
  padding-top: 100px;
  text-align: left;
  margin-bottom: 300px;
}
</style>
