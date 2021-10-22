<template>
  <div class="loading-screen" :class="isLoading ? '' : 'loading-screen-hidden'">
    <span class="text-white">...</span>
  </div>
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
        // Animation enter
      } else if (this.isLoading == false) {
        // Animation leave
      }
    },
  },
};
</script>
