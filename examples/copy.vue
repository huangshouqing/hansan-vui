<template>
  <div id="app">
    <h1>Animation Buttons</h1>
    <hAnimationButton type='btn-1'>btn-1</hAnimationButton>
    <hAnimationButton type='btn-2'>btn-2</hAnimationButton>
    <hAnimationButton type='btn-3'>btn-3</hAnimationButton>
    <hAnimationButton type='btn-4'>btn-4</hAnimationButton>
    <hAnimationButton type='btn-5'>btn-5</hAnimationButton>
    <hAnimationButton type='btn-6'>btn-6</hAnimationButton>
    <hAnimationButton type='btn-7'>btn-7</hAnimationButton>
    <hAnimationButton type='btn-8'>btn-8</hAnimationButton>
    <hAnimationButton type='btn-9'>btn-9</hAnimationButton>
    <hAnimationButton type='btn-10'>btn-10</hAnimationButton>
    <!-- <hAnimationButton type='btn-11'>btn-1</hAnimationButton> -->
    <hAnimationButton type='btn-12'>btn-12</hAnimationButton>
    <hAnimationButton type='btn-13'>btn-13</hAnimationButton>
    <hAnimationButton type='btn-14'>btn-14</hAnimationButton>
    <hAnimationButton type='btn-15'>btn-15</hAnimationButton>
    <hAnimationButton type='btn-16'>btn-16</hAnimationButton>
    <h1>Buttons</h1>
    <hButton type="primary">按钮</hButton>
    <hButton type="success">按钮</hButton>
    <hButton type="warning">按钮</hButton>
    <hButton type="danger">按钮</hButton>
    <hButton plain type="primary">按钮</hButton>
    <hButton plain type="success">按钮</hButton>
    <hButton plain type="warning">按钮</hButton>
    <hButton plain type="danger">按钮</hButton>
    <hButton round>按钮</hButton>
    <hButton disabled>按钮</hButton>
    <hButton size='normal'>按钮</hButton>
    <hButton size='medium'>按钮</hButton>
    <hButton size='small'>按钮</hButton>
    <hButton size='mini'>按钮</hButton>
    <h1>GlowingButton</h1>
    <hGlowingButton></hGlowingButton>
  </div>
</template>

<script>
import hAnimationButton from "../packages/animationButton/button.vue";
import hButton from "../packages/button/button.vue";
import hGlowingButton from "../packages/glowingButton/button.vue";
export default {
  name: "App",
  components: {
    hAnimationButton,
    hButton,
    hGlowingButton,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {},
};
</script>

<style lang='scss'>
body {
  background: #e0e5ec;
}
#app {
  h1 {
    position: relative;
    text-align: center;
    color: #353535;
    font-size: 50px;
    font-family: "Cormorant Garamond", serif;
  }
}
</style>
