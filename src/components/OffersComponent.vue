<template>
  <div class="offers">
    <div class="title">
      <glitching-text value="Čo ponúkam" :static-size="60" :speed-in-ms="10" />
    </div>

    <div class="list">
      <ul>
        <li>
          <glitching-text
            icon="👨‍💻"
            value="Pomôžem ti zamestnať sa v IT!"
            :static-size="25"
            :speed-in-ms="10"
            color="white"
            :is-title="false" />
        </li>
        <li>
          <glitching-text
            icon="👾"
            value="Naučím ťa programovať!"
            :static-size="25"
            :speed-in-ms="10"
            color="white"
            :is-title="false" />
        </li>
        <li>
          <glitching-text
            icon="💻"
            value="Vzdelám ťa v IT!"
            :static-size="25"
            :speed-in-ms="10"
            color="white"
            :is-title="false" />
        </li>
        <li>
          <glitching-text
            icon="🕸️"
            value="Webové aplikácie"
            :static-size="25"
            :speed-in-ms="10"
            color="white"
            :is-title="false" />
        </li>
        <li>
          <glitching-text
            icon="🔍"
            value="SEO optimalizácia"
            :static-size="25"
            :speed-in-ms="10"
            color="white"
            :is-title="false" />
        </li>
        <li>
          <glitching-text
            icon="🛒"
            value="E-shopy"
            :static-size="25"
            :speed-in-ms="10"
            color="white"
            :is-title="false" />
        </li>
      </ul>
    </div>

    <div class="text">
      <glitching-text
        value="Ponúkam ti dlhodobú spoluprácu za výhodnú cenu!"
        :static-size="24"
        :speed-in-ms="10"
        :max-width="300"
        color="#aeaeae" />
      <glitching-text
        value="Kontaktuj ma a dohodneme sa na podmienkach spolupráce!"
        :static-size="24"
        :speed-in-ms="10"
        :max-width="300"
        color="#aeaeae" />
      <glitching-text
        value="Odporúč ma svojim známym a získaj zľavu na moje služby!"
        :static-size="24"
        :speed-in-ms="10"
        :max-width="300"
        color="#aeaeae" />
      <glitching-text
        value="Teším sa na našu spoluprácu!"
        :static-size="24"
        :speed-in-ms="10"
        :max-width="300"
        color="#aeaeae" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GlitchingText from "./GlitchingTextComponent.vue";

export default defineComponent({
  name: "SkillsComponent",
  components: {
    GlitchingText,
  },
});
</script>

<style scoped>
.offers {
  border-top: 1px solid #444;
  margin-top: 10px;

  text-align: -webkit-center;
}

.title {
  margin-top: 50px;
  width: 100%;
  padding: 20px;
  font-size: 2rem;
  color: #fff;
}

.list {
  width: 100%;
  padding: 20px;
  font-size: 1.5rem;
  color: #fff;
  text-align: left;
  text-align: -webkit-center;
}

.list ul {
  list-style-type: none;
  width: fit-content;
  text-align: left;
}

.list ul li {
  width: fit-content;
}

.text {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  padding: 20px;
  font-size: 1.5rem;
  color: #fff;
  text-align: left;
  text-align: -webkit-center;
  padding-bottom: 50px;
  place-items: center;
}

@media (min-width: 1920px) {
  .text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
