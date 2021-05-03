<template>
  <div id="app">
    <div class="button-container">
      <button class="button-hover" v-on:mousemove="moveSmiley" v-on:mouseover="resetMoveSmiley" v-on:mouseout="resetMoveSmiley">
        Hover on me‼️😊
      </button>
      <div class="smiley">
        <div class="smiley-wrapper" v-bind:style="rotateStyle">
          <div class="eye eye-left"></div>
          <div class="eye eye-right"></div>
          <div class="blush blush-left"></div>
          <div class="blush blush-right"></div>
          <div class="mouth"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotateStyle: {},
    };
  },
  methods: {
    moveSmiley(evt) {
      const a = 25;
      const x = evt.offsetX;
      const y = evt.offsetY;
      const w = evt.target.clientWidth;
      const h = evt.target.clientHeight;
      const angleX = ((x - w / 2) / (w / 2)) * a;
      const angleY = ((h / 2 - y) / (h / 2)) * a;

      this.rotateStyle = {
        transform: `rotateX(${angleY}deg) rotateY(${angleX}deg)`,
      };
    },
    resetMoveSmiley() {
      this.rotateStyle = {
        transform: "rotateX(0deg) rotateY(0deg)",
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");

body {
  font-size: 16px;
}

#app {
  background-color: #ff9191;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
}

.button-container {
  flex-shrink: 0;
  position: relative;
}

.button-hover {
  color: #ffffff;
  font-family: "Fredoka One", cursive;
  font-size: 1.5rem;
  background-color: #148eff;
  padding: 1.4rem 2.8rem;
  border: 0;
  margin: 0;
  outline: 0;
  position: relative;
  border-radius: 2.25rem / 50%;
  box-shadow: 0 0.8rem 1.4rem rgba(0, 0, 0, 0.7),
    0 -0.3rem 0.8rem rgba(0, 0, 0, 0.3) inset;
}

.button-hover:after {
  content: "";
  background-color: #ffffff;
  width: 2rem;
  height: 0.4rem;
  position: absolute;
  top: 0.6rem;
  left: 1.6rem;
  border-radius: 50%;
  filter: blur(0.12rem);
}

.button-hover:hover ~ .smiley {
  transform: scale(1);
  transition: transform 256ms cubic-bezier(0, 0, 0.48, 1.5);
}

.smiley {
  --size: 10rem;
  background-color: #ede32b;
  width: var(--size);
  height: var(--size);
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: calc(50% - calc(var(--size) / 2));
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5),
    0 -0.6rem 1.5rem rgba(0, 0, 0, 0.3) inset;
  transform-style: preserve-3d;
  transform: scale(0);
  perspective: 50rem;
  transition: transform 256ms ease-out;
}

.smiley:after {
  content: "";
  background-color: #ffffff;
  width: 20%;
  height: 20%;
  position: absolute;
  top: 2rem;
  left: 2rem;
  border-radius: 50%;
  filter: blur(0.4rem);
}

.smiley-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 128ms ease-out;
}

.smiley-wrapper > div {
  transform-style: preserve-3d;
  transform: translateZ(5rem);
}

.eye {
  background-color: #000000;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 4.5rem;
  border-radius: 50%;
}

.eye:after {
  content: "";
  background-color: #ffffff;
  width: 25%;
  height: 25%;
  position: absolute;
  top: 20%;
  left: 20%;
  border-radius: 50%;
  filter: blur(0.02rem);
}

.eye-left {
  left: 2.5rem;
}

.eye-right {
  right: 2.5rem;
}

.blush {
  background-color: #ff4040;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 5.5rem;
  border-radius: 50%;
  filter: blur(0.5rem);
}

.blush-left {
  left: 1.2rem;
}

.blush-right {
  right: 1.2rem;
}

.mouth {
  --width: 1.8rem;
  width: var(--width);
  height: 1.2rem;
  border: solid 0.3rem #000000;
  border-top: 0;
  position: absolute;
  bottom: 2rem;
  left: calc(50% - calc(var(--width) / 2));
  border-radius: 0 0 50% 50% / 0 0 75% 75%;
  box-sizing: border-box;
}
</style>
