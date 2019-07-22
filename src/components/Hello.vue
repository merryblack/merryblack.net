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
  /*@import "../assets/style/mixins";*/

#hello {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: hidden;
  background: url("../assets/images");

  .layers {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

  .bg-1 {
    background: url("../assets/images/bg-1.jpg");
    background-size: cover;
  }
  .bg-2 {
    background: url("../assets/images/bg-2.jpg");
    background-size: cover;
  }
  .bg-3 {
    background: url("../assets/images/bg-3.jpg");
    background-size: cover;
  }
  .bg-4 {
    background: url("../assets/images/bg-4.jpg");
    background-size: cover;
  }
  .bg-5 {
    background: url("../assets/images/bg-5.jpg");
    background-size: cover;
  }
  .bg-6 {
    background: url("../assets/images/bg-6.jpg");
    background-size: cover;
  }
  .bg-7 {
    background: url("../assets/images/bg-7.jpg");
    background-size: cover;
  }
  .bg-8 {
    background: url("../assets/images/bg-8.jpg");
    background-size: cover;
  }
  .bg-9 {
    background: url("../assets/images/bg-9.jpg");
    background-size: cover;
  }
  .bg-10 {
    background: url("../assets/images/bg-10.jpg");
    background-size: cover;
  }
  .bg-11 {
    background: url("../assets/images/bg-11.jpg");
    background-size: cover;
  }
  .bg-12 {
    background: url("../assets/images/bg-12.jpg");
    background-size: cover;
  }
  .bg-13 {
    background: url("../assets/images/bg-13.jpg");
    background-size: cover;
  }
  .bg-14 {
    background: url("../assets/images/bg-14.jpg");
    background-size: cover;
  }
  .bg-15 {
    background: url("../assets/images/bg-15.jpg");
    background-size: cover;
  }
  .bg-16 {
    background: url("../assets/images/bg-16.jpg");
    background-size: cover;
  }
  .bg-17 {
    background: url("../assets/images/bg-17.jpg");
    background-size: cover;
  }
  .bg-18 {
    background: url("../assets/images/bg-18.jpg");
    background-size: cover;
  }
  .bg-19 {
    background: url("../assets/images/bg-19.jpg");
    background-size: cover;
  }
  .bg-20 {
    background: url("../assets/images/bg-20.jpg");
    background-size: cover;
  }
  .bg-21 {
    background: url("../assets/images/bg-21.jpg");
    background-size: cover;
  }
  .bg-22 {
    background: url("../assets/images/bg-22.jpg");
    background-size: cover;
  }
  .bg-23 {
    background: url("../assets/images/bg-23.jpg");
    background-size: cover;
  }
  .bg-24 {
    background: url("../assets/images/bg-24.jpg");
    background-size: cover;
  }
  .bg-25 {
    background: url("../assets/images/bg-25.jpg");
    background-size: cover;
  }
  .bg-26 {
    background: url("../assets/images/bg-26.jpg");
    background-size: cover;
  }
  .bg-27 {
    background: url("../assets/images/bg-27.jpg");
    background-size: cover;
  }
  .bg-28 {
    background: url("../assets/images/bg-28.jpg");
    background-size: cover;
  }
  .bg-29 {
    background: url("../assets/images/bg-29.jpg");
    background-size: cover;
  }
  .bg-30 {
    background: url("../assets/images/bg-30.jpg");
    background-size: cover;
  }

}
</style>
