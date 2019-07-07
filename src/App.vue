<template lang="pug">
  div#app
    div#nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #eee;
  }
}
body {
  margin: 0;
  padding: 0;
  background-color: #000;
}
</style>
