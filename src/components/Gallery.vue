<template>
  <div class="container m-auto">
    <div class="gallery">
      <div class="gallery-element" v-for="image in images" :key="image.id">
        <img class="gallery-element-image" :src="image.sizes.large">
      </div>
    </div>
    <div class="gallery-subtitle">
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: Array,
    subtitle: String
  }
};
</script>

<style>
</style>