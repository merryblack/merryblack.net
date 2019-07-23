<template lang="pug">
  div#hello
    div.layers(:class="bg")
      div.self-wrap(:class="wrap")
        //div.avatar
</template>

<script>
import { getRandomIntInclusive } from '@/helpers/utils';

export default {
  name: 'Hello',
  props: {
  },
  data() {
    return {
      bg: '',
    };
  },
  mounted() {
    this.bg = `bg-${getRandomIntInclusive(1, 30)}`;
    this.wrap = `wrap-${getRandomIntInclusive(1, 2)}`;
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
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;

  .layers {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .self-wrap {
      position: absolute;
      width: 600px;
      height: 800px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;

      &.wrap-1 {
        background: rgba(255,255,255,0.5);
      }

      &.wrap-2 {
        width: 750px;
        height: 950px;
        border: solid 75px rgba(255,255,255,0.5);
      }

      .avatar {
        width: 300px;
        height: 300px;
        margin-top: 120px;
        background: rgba(255,255,255,0.5);
        border-radius: 150px;
      }
    }

    /*tablet*/
    @media only screen and (min-width: 480px) and (max-width: 767px){
      .self-wrap {
        width: 360px;
        height: 480px;

        &.wrap-2 {
          width: 450px;
          height: 570px;
          border: solid 45px rgba(255,255,255,0.5);
        }

        .avatar {
          width: 180px;
          height: 180px;
          margin-top: 60px;
          background: rgba(255,255,255,0.5);
          border-radius: 90px;
        }
      }
    }
    /*iphone*/
    @media only screen and (min-width: 0px) and (max-width: 479px){
      .self-wrap {
        width: 240px;
        height: 320px;

        &.wrap-2 {
          width: 300px;
          height: 380px;
          border: solid 30px rgba(255,255,255,0.5);
        }

        .avatar {
          width: 120px;
          height: 120px;
          margin-top: 40px;
          background: rgba(255,255,255,0.5);
          border-radius: 60px;
        }
      }
    }
  }
}
</style>
