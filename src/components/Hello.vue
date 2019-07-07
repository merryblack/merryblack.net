<template lang="pug">
  div#hello
    div.layer.layer1
    div.layer.layer2
    div.layer.layer3
    div.layer.layer4
    div.layer.layer5
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hello {
  .layer {
    width: 100vw;
    height: 100vh;

    &.layer1 {
      background-color: #fff;
      opacity: 0;
    }
    &.layer2 {
      background-color: #fff;
      opacity: 0.1;
    }
    &.layer3 {
      background-color: #fff;
      opacity: 0.2;
    }
    &.layer4 {
      background-color: #fff;
      opacity: 0.3;
    }
    &.layer5 {
      background-color: #fff;
      opacity: 0.4;
    }
  }

}
</style>
