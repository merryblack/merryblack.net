<template lang="pug">
  div#app
    //navigation
      <!--router-link(to="/") Home-->
      <!--router-link(to="/about") About-->
    router-view
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
  background-color: #000;
}
</style>
