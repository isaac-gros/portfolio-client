<template>
  <div class="container m-auto">
    <div class="gallery">
      <div class="gallery-element" v-for="image in images" :key="image.id">
        <div class="gallery-element-image" :style="setBackgroundImage(image.sizes.large)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: Array,
  },
  methods: {
    setBackgroundImage: function(imageUrl) {
      return `background-image: url("${imageUrl}");`;
    }
  }
};
</script>

<style>
</style>