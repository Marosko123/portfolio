<template>
  <div class="glitching-text">
    <div class="text" :style="getStyle()">{{ value }}</div>
  </div>
</template>

<script>
import { KeyboardCharacters } from "../common/keyboard-characters.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GlitchingTextComponent",
  components: {},
  mixins: [],
  emits: [],
  data: () => ({
    interval: null,
    iteration: 0,
    element: null,
  }),
  props: {
    value: {
      type: String,
      required: true,
    },
    staticSize: {
      type: Number,
      default: 0,
    },
    // Speed of glitching in milliseconds
    // Lower value means faster glitching
    speedInMs: {
      type: Number,
      default: 50,
    },
    isUppercase: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "gold",
    },
    maxWidth: {
      type: Number,
      default: 0,
    },
  },
  computed: {},
  watch: {},
  methods: {
    bind() {
      document.querySelectorAll(".text").forEach((element) => {
        if (element.innerHTML === this.value) {
          this.element = element;
        }
      });

      if (this.element) {
        this.element.addEventListener("mouseover", this.glitch);
      }
    },
    glitch() {
      clearInterval(this.interval);
      this.interval = setInterval(() => this.changeLetter(), this.speedInMs);
      this.iteration = 0;
    },
    changeLetter() {
      if (!this.element) {
        return;
      }

      const startWidth = this.element.offsetWidth;

      this.element.innerText = this.element.innerText
        .split("")
        .map((_, index) => {
          if (this.value[index] === " ") return " ";

          return index < this.iteration
            ? this.value[index]
            : KeyboardCharacters.lowerCaseLetters[
                Math.floor(Math.random() * 26)
              ];
        })
        .join("");

      if (this.iteration >= this.value.length) {
        clearInterval(this.interval);
      }

      this.iteration += 0.25;
    },
    getStyle() {
      return {
        fontSize: this.staticSize ? `${this.staticSize}px` : "4vh",
        textTransform: this.isUppercase ? "uppercase" : "none",
        color: this.color,
        maxWidth: this.maxWidth ? `${this.maxWidth}px` : "auto",
      };
    },
  },
  mounted() {
    this.bind();
  },
});
</script>

<style scoped>
.text {
  line-height: 1.1em;
  padding: 0rem 10px;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  user-select: none;
  pointer-events: visible;
  width: fit-content;
}
</style>
