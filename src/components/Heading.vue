<template>
  <div class="intro container m-auto">
    <div class="intro-container">
      <article class="intro-article">
        <span class="title">{{ title }}</span>
        <div v-html="content"></div>
      </article>
      <ul class="social-links" v-if="displayLinks">
        <li><router-link class="link-hover" to="/about" v-if="displayAboutLink">About</router-link></li>
        <li><a class="link-hover" href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a class="link-hover" href="https://github.com" target="_blank" rel="noopener">Github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: String,
    content: String,
    displayLinks: Boolean,
    displayAboutLink: Boolean, 
  }
}
</script>