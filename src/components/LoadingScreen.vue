<template>
  <div class="loading-screen" :class="isLoading ? '' : 'hidden'">
    <!-- TODO : Something sexier -->
    <span class="text-white text-4xl">
      This is a loading animation.
    </span>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    isLoading: Boolean
  }
};
</script>