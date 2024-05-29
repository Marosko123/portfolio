<template>
  <div class="circle-progress-bar">
    <div class="title" :style="titleStyle">{{ title }}</div>
    <div
      ref="progressBar"
      role="progressbar"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :style="progressBarStyle"
      :aria-valuenow="value"
      @mouseover="reset"
      @click="reset"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CircleProgressBarComponent",
  props: {
    title: {
      type: String,
      default: "title",
    },
    value: {
      type: Number,
      default: 10,
    },
    textColor: {
      type: String,
      default: "#abc",
    },
    color1: {
      type: String,
      default: "#369",
    },
    color2: {
      type: String,
      default: "#adf",
    },
    fontSize: {
      type: String,
      default: "2rem",
    },
    trackWidth: {
      type: String,
      default: "0.5rem",
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    progressBarStyle() {
      return {
        "--value": this.value,
        "--primary": this.color1,
        "--secondary": this.color2,
        "--text-color": this.textColor,
        "--font-size": this.fontSize,
        "--track-width": this.trackWidth,
      };
    },
    titleStyle() {
      return {
        "--text-color": this.textColor,
        "--font-size": this.fontSize,
        "--primary": this.color1,
      };
    },
  },
  methods: {
    reset() {
      this.$refs.progressBar.style.animation = "none";
      void this.$refs.progressBar.offsetHeight;
      this.$refs.progressBar.style.animation = null;

      console.log("reset");
    },
  },
});
</script>

<style scoped>
@keyframes progress {
  0% {
    --percentage: 0;
  }
  100% {
    --percentage: var(--value);
  }
}

@property --percentage {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

[role="progressbar"] {
  --percentage: var(--value);
  --primary: var(--primary);
  --secondary: var(--secondary);
  --size: 150px;
  --text-color: var(--text-color);
  --font-size: var(--font-size);
  --track-width: var(--track-width);
  animation: progress 3s 0.1s forwards;
  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 0 1.5rem 0.1rem var(--primary);
  transition: 0.7s;
}

[role="progressbar"]:hover {
  scale: 1.1;
  transition: 0.7s;
  box-shadow: 0 0 10rem 0.1rem var(--primary);
  position: relative;
  z-index: 5;
}

[role="progressbar"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    var(--primary) calc(var(--percentage) * 1%),
    var(--secondary) 0
  );
  mask: radial-gradient(white calc(50% - var(--track-width)), transparent 0);
  mask-mode: alpha;
  -webkit-mask: radial-gradient(#0000 calc(50% - var(--track-width)), #000 0);
  -webkit-mask-mode: alpha;

  /* glow */
  box-shadow: 0 0 5rem 0.5rem yellow;
}

[role="progressbar"]::after {
  counter-reset: percentage var(--value);
  content: counter(percentage) "%";
  font-size: var(--font-size);
  color: var(--text-color);
  font-weight: bold;
  text-align: center;
  line-height: calc(var(--size) / 5);
  z-index: 1;
  text-shadow: 0 0 2rem black;
  box-shadow: 0 0 3rem 1rem var(--primary);
  border-radius: 50%;
  width: 30%;
  height: 30%;
  text-align: center;
  display: grid;
  place-items: center;
}

.circle-progress-bar {
  display: grid;
  place-items: center;
  transition: 0.7s;
}

.circle-progress-bar:hover {
  scale: 1.1;
  transition: 0.5s;
}

.title {
  width: 150px;
  text-align: center;
  font-size: 2rem;
  user-select: none;
  color: var(--text-color);
  margin-bottom: 5px;
  font-weight: bold;
  text-shadow: 0 0 1em var(--primary);
  transition: 0.7s;
}

.title:hover {
  scale: 1.1;
  transition: 0.5s;
  text-shadow: 0 0 2em var(--primary);
  z-index: 5;
  position: relative;
}
</style>
