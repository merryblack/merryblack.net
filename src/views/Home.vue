<template lang="pug">
  div.home
    hello(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue';

export default {
  name: 'home',
  components: {
    Hello,
  },
};
</script>

<style lang="scss">
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
