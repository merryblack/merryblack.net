<template lang="pug">
  div#hello
    div.layers(:class="'page'+pageIndex")
      div.layer.layer1
      div.layer.layer2
      div.layer.layer3
      div.layer.layer4
      div.layer.layer5
    div.pagination
      div.dot(:class="{selected: (pageIndex===1)}")
      div.dot(:class="{selected: (pageIndex===2)}")
      div.dot(:class="{selected: (pageIndex===3)}")
      div.dot(:class="{selected: (pageIndex===4)}")
      div.dot(:class="{selected: (pageIndex===5)}")
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String,
  },
  data() {
    return {
      wheeling: false,
      pageIndex: 1,
    };
  },
  created() {
    window.addEventListener('wheel', this.onWheel);
  },
  destroyed() {
    window.removeEventListener('wheel', this.onWheel);
  },
  methods: {
    onWheel(e) {
      if (e.deltaY > 30 && !this.wheeling && this.pageIndex < 5) {
        this.wheeling = true;
        this.pageIndex += 1;
      } else if (e.deltaY < -30 && !this.wheeling && this.pageIndex > 1) {
        this.wheeling = true;
        this.pageIndex -= 1;
      } else if (e.deltaY < 5 && e.deltaY > -5) {
        this.wheeling = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hello {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: hidden;

  @media (max-device-width: 768px) {
    overflow-y: scroll;
  }

  .layers {
    width: 100vw;
    height: 500vh;
    position: absolute;
    top: 0;

    transition: top .5s ease-in-out;
    @media (min-device-width: 768px) {
      &.page2 {
        top: -100vh;
      }
      &.page3 {
        top: -200vh;
      }
      &.page4 {
        top: -300vh;
      }
      &.page5 {
        top: -400vh;
      }
    }
  }

  .layer {
    width: 100vw;
    height: 100vh;
    background-color: pink;

    &.layer1 {
      opacity: 1;
    }
    &.layer2 {
      opacity: 0.75;
    }
    &.layer3 {
      opacity: 0.5;
    }
    &.layer4 {
      opacity: 0.25;
    }
    &.layer5 {
      opacity: 0;
    }
  }

  .pagination {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2080;
    @media (max-device-width: 768px) {
      display: none;
    }
  }
  .pagination .dot {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    margin: 10px 10px;
    transition: background-color ease 0.5s;
    cursor: pointer;
  }
  .pagination.black .dot.selected {
    background: #333;
  }
  .pagination.black .dot {
    background: rgba(100, 100, 100, 0.4);
  }
  .pagination .dot.selected {
    background: white;
  }
}
</style>
