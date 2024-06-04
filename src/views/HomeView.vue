<template>
  <div class="home-view">
    <mouse-pointer />

    <div class="main-wrapper">
      <introduction-text />
      <waves />
      <offers class="add-padding" />
      <skills class="add-padding" />
      <reviews class="add-padding" />
      <footer-component />
    </div>
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import Waves from "../components/WavesComponent.vue";
import MousePointer from "../components/MousePointerComponent.vue";
import IntroductionText from "../components/IntroductionTextComponent.vue";
import Skills from "../components/SkillsComponent.vue";
import Offers from "../components/OffersComponent.vue";
import Reviews from "../components/ReviewsComponent.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    MousePointer,
    Waves,
    IntroductionText,
    Skills,
    Offers,
    Reviews,
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

.add-padding {
  padding: 0 50px;
}

@media (max-width: 768px) {
  .introduction-text {
    padding-left: 0;
    padding-top: 50px;
    margin-bottom: 100px;
  }

  .add-padding {
    padding: 0 20px;
  }
}
</style>
