<template>
  <!-- Change class behavior by JS animation -->
  <transition 
    name="loading"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    appear
    >
    <div class="loading-screen" v-if="isLoading">
      <span class="text-white">...</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      isAnimating: false
    };
  },
  mounted() {
    this.handleLoading();
  },
  updated() {
    this.handleLoading();
  },
  methods: {
    handleLoading() {
      if (this.isLoading) {
        this.isAnimating = true;
      } else if (this.isLoading == false) {
        this.isAnimating = false;
      }
    },

    beforeEnter(el) {
      console.log('Before enter, scale 0')
      el.style.opacity = "0"
    },
    enter(el) {
      console.log('Enter , scale 1')
      el.style.opacity = "1"
    },
    beforeLeave(el) {
      console.log('Enter , scale 1')
      el.style.opacity = "1"
    },
    leave(el) {
      console.log('Before enter, scale 0')
      el.style.opacity = "0"
    },
  },
};
</script>

<style scoped>
  .loading-enter {
    transform: scaleX(0);
  }

  .loading-enter-to {
    transform: scaleX(1);
  }

  .loading-leave-active {

  }

  .loading-enter-active,
  .loading-leave-active {
    width: 100%;
    transition: all 0.6s ease;
  }
</style>
