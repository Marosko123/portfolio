<template>
  <div class="footer">
    <div class="footer-section">
      <div class="anchors">
        <a
          href="https://www.doucma.sk/272129-doucovanie-informatika-a-matematika-su-so-mnou-hracka"
          target="_blank">
          <img src="doucma-logo.svg" alt="doucma" style="font-size: 48px" />
        </a>
        <a href="https://www.instagram.com/bednar.maros/" target="_blank">
          <i class="fa fa-instagram" style="font-size: 48px" />
        </a>
        <a href="https://www.linkedin.com/in/marosbednar/" target="_blank">
          <i class="fa fa-linkedin" style="font-size: 48px" />
        </a>
        <a href="mailto:bednarmaros341@gmail.com" target="_blank">
          <i class="fa fa-google" style="font-size: 48px" />
        </a>
        <a href="https://github.com/Marosko123" target="_blank">
          <i class="fa fa-github" style="font-size: 48px" />
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Maroš Bednár. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
.footer {
  width: auto;
  background: rgb(0, 3, 9);
  color: #ddd;
  padding: 40px 20px;
  border-top: 1px solid #444;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  margin: 10px;
  text-align: center;
  width: fit-content;
  width: 100%;
}

.anchors {
  display: flex;
  justify-content: center;
  gap: 20px;
}

a {
  color: #ddd;
  transition: 0.5s;
  height: 48px;
  width: 48px;
}

a:hover {
  color: #fff;
  scale: 1.2;
  transition: 0.5s;

  border-radius: 50%;
  background: none;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px cyan;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 10px;
  color: #ddd;
  user-select: none;
}

i,
img {
  width: 48px;
  height: 48px;
}
</style>
