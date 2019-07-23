<template lang="pug">
  div#hello
    div.layers(:class="bg")
</template>

<script>
import { getRandomIntInclusive } from '@/helpers/utils';

export default {
  name: 'Hello',
  props: {
    msg: String,
  },
  data() {
    return {
      bg: '',
    };
  },
  mounted() {
    this.bg = `bg-${getRandomIntInclusive(1, 30)}`;
    console.log(this.bg);
  },
  destroyed() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/style/mixins";

#hello {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: hidden;
  top: 0;

  .layers {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

}
</style>
