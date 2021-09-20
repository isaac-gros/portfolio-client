<template>
  <ul class="social-links">
    <li><router-link class="link-hover" to="/about" v-if="displayAboutLink">About</router-link></li>
    <li><a class="link-hover" href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
    <li><a class="link-hover" href="https://github.com" target="_blank" rel="noopener">Github</a></li>
  </ul>
</template>

<script>
export default {
  name: 'BottomMenu',
  props: {
    displayAboutLink: Boolean
  }
}
</script>