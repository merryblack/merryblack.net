<template lang="pug">
  div#nav
    div.burger
    div.bar
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
  #nav {
    height: 92px;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;

    .bar {
      position: absolute;
      height: 92px;
      background: linear-gradient(to bottom, #0f0834, #000);
      width: 100vw;
      top: -92px;
      transition: top .3s ease-in-out;
    }

    .burger {
      z-index: 10;
      position: absolute;
      height: 100%;
      width: 92px;
      left: 0;
    }

    &:hover .bar {
      top: 0;
    }
  }
</style>
