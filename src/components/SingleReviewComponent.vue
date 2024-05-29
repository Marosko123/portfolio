<template>
  <div class="single-review">
    <!-- <glitching-text
      :value="value"
      :static-size="20"
      :speed-in-ms="1"
      color="#aeaeae" />
    <glitching-text
      :value="name"
      :static-size="15"
      :speed-in-ms="50"
      color="#fff" /> -->
    <p class="review">{{ value }}</p>
    <p class="author">{{ name }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GlitchingText from "./GlitchingTextComponent.vue";

export default defineComponent({
  name: "SingleReviewComponent",
  components: {
    GlitchingText,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.single-review {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 10px;
  width: 70%;
  background-color: #333;
  color: #fff;
  text-align: left;
  max-width: 700px;
}

.review {
  font-size: 1rem;
  margin: 0;
}

.author {
  font-size: 0.8rem;
  margin-bottom: 0;
  font-weight: bold;
  user-select: none;
}
</style>
