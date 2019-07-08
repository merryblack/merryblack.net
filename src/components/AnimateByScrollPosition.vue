<template lang="pug">
  div#anime1
    div.layer.layer1
    div.layer.layer2
    div.layer.layer3
    div.layer.layer4
    div.layer.layer5
</template>

<script>
export default {
  name: 'AnimateByScrollPosition',
  props: {
    msg: String,
  },
  created() {
    window.addEventListener('wheel', this.onWheel);
  },
  destroyed() {
    window.removeEventListener('wheel', this.onWheel);
  },
  methods: {
    onWheel() {
      // TODO 스크롤 위치가 필요해
    },
  },
};
</script>

<style scoped lang="scss">
#anime1 {
  width: 100vw;
  height: 100vh;

  .layer {
    width: 100vw;
    height: 100vh;
    background-color: darkseagreen;

    &.layer1 {
      opacity: 0;
    }
    &.layer2 {
      opacity: 0.1;
    }
    &.layer3 {
      opacity: 0.2;
    }
    &.layer4 {
      opacity: 0.3;
    }
    &.layer5 {
      opacity: 0.4;
    }
  }

}
</style>
