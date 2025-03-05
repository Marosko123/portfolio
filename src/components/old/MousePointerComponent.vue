<template>
  <div class="mouse-pointer">
    <div id="blob"></div>
    <div id="blur"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MousePointerComponent",
  data: () => ({
    blob: null,
  }),
  methods: {
    bind() {
      this.blob = document.getElementById("blob");

      this.addEventListeners();
    },
    addEventListeners() {
      document.addEventListener("mousemove", this.onMouseMove);
    },
    onMouseMove(event) {
      if (!this.blob || event.clientY > window.innerHeight - 150) {
        return;
      }

      const { pageX, pageY } = event;

      this.blob.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        },
        {
          duration: 20000,
          fill: "forwards",
        }
      );
    },
  },
  mounted() {
    this.bind();
  },
});
</script>

<style scoped>
.mouse-pointer {
  z-index: 200;
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}

#blob {
  background-color: gold;
  height: 150px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 10s infinite;
  filter: blur(50px);
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(50px);
}
</style>
