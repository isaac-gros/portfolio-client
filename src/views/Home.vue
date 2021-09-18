<template>
  <div class="home-container container m-auto">
    <article class="home-article">
      <span class="title">An interesting title.</span>
      <p>Well hello there. This is some fake text.</p>
    </article>
    <ul class="social-links">
      <li><router-link class="link-hover" to="/about">About</router-link></li>
      <li><a class="link-hover" href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a class="link-hover" href="https://github.com" target="_blank" rel="noopener">Github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
