<template>
  <div class="skills">
    <div class="title">
      <glitching-text value="Moje skúsenosti" size="title" :speed-in-ms="10" />
    </div>

    <div class="group">
      <glitching-text
        value="Programovacie jazyky a technológie"
        size="600"
        :speed-in-ms="5"
        color="#aeaeae" />

      <div class="circles">
        <circle-progress-bar
          title="HTML"
          :value="95"
          textColor="white"
          color1="#ff651d"
          color2="#fb933a"
          trackWidth="30%" />
        <circle-progress-bar
          title="CSS"
          :value="95"
          textColor="white"
          color1="#0270bb"
          color2="#27a7de"
          trackWidth="30%" />
        <circle-progress-bar
          title="Typescript"
          :value="90"
          textColor="white"
          color1="#2f7bbd"
          color2="#4b89c3"
          trackWidth="30%" />
        <circle-progress-bar
          title="Javascript"
          :value="90"
          textColor="white"
          color1="#dec244"
          color2="#fbd84c"
          trackWidth="30%" />
        <circle-progress-bar
          title="Python"
          :value="80"
          textColor="white"
          color1="#3674a7"
          color2="#fed748"
          trackWidth="30%" />
        <circle-progress-bar
          title="PostgreSQL"
          :value="80"
          textColor="white"
          color1="#336791"
          color2="#4d8eb1"
          trackWidth="30%" />
        <circle-progress-bar
          title="C#"
          :value="75"
          textColor="white"
          color1="#5c2872"
          color2="#a279b4"
          trackWidth="30%" />
        <circle-progress-bar
          title="C/C++"
          :value="75"
          textColor="white"
          color1="#004280"
          color2="#659ad2"
          trackWidth="30%" />
        <circle-progress-bar
          title="Java"
          :value="70"
          textColor="white"
          color1="#e83f3f"
          color2="#166eaa"
          trackWidth="30%" />
        <circle-progress-bar
          title="PHP"
          :value="60"
          textColor="white"
          color1="#5a69a6"
          color2="#808bb7"
          trackWidth="30%" />
      </div>
    </div>

    <div class="group">
      <glitching-text
        value="Frameworky a knižnice"
        size="600"
        :speed-in-ms="10"
        color="#aeaeae" />
      <div class="circles">
        <circle-progress-bar
          title="Vue.js"
          :value="90"
          textColor="white"
          color1="#41b883"
          color2="#34495e"
          trackWidth="30%" />
        <circle-progress-bar
          title="Quasar"
          :value="90"
          textColor="white"
          color1="#1976d2"
          color2="#2196f3"
          trackWidth="30%" />
        <circle-progress-bar
          title="Leaflet.js"
          :value="85"
          textColor="white"
          color1="#199900"
          color2="#33cc33"
          trackWidth="30%" />
        <circle-progress-bar
          title="Chart.js"
          :value="80"
          textColor="white"
          color1="#ff6384"
          color2="#ff9eb0"
          trackWidth="30%" />
        <circle-progress-bar
          title=".NET"
          :value="75"
          textColor="white"
          color1="#682f82"
          color2="#984b98"
          trackWidth="30%" />
        <circle-progress-bar
          title="Three.js"
          :value="70"
          textColor="white"
          color1="#fff"
          color2="#000000"
          trackWidth="30%" />
        <circle-progress-bar
          title="Flutter"
          :value="65"
          textColor="white"
          color1="#0270bb"
          color2="#27a7de"
          trackWidth="30%" />
        <circle-progress-bar
          title="Laravel"
          :value="55"
          textColor="white"
          color1="#ff2d20"
          color2="#ff5f52"
          trackWidth="30%" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GlitchingText from "./GlitchingTextComponent.vue";
import CircleProgressBar from "./CircleProgressBarComponent.vue";

export default defineComponent({
  name: "SkillsComponent",
  components: {
    GlitchingText,
    CircleProgressBar,
  },
});
</script>

<style scoped>
.skills {
  border-top: 1px solid #444;
  margin-top: 10px;
  padding-top: 30px;
  text-align: -webkit-center;
}

.group {
  margin-bottom: 50px;
  max-width: 1000px;
}

.group:last-child {
  border-top: 1px solid #444;
  padding-top: 30px;
  padding-bottom: 50px;
}

.circles {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
}

.title {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  padding: 20px 0;
  font-size: 2rem;
  color: #fff;
}
</style>
