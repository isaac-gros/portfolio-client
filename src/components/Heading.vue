<template>
  <div class="intro container m-auto">
    <div class="intro-container">
      <article class="intro-article">
        <span class="title">{{ title }}</span>
        <div v-html="content"></div>
      </article>
      <BottomMenu v-if="displayLinks" :displayAboutLink="displayAboutLink" />
    </div>
  </div>
</template>

<script>
import BottomMenu from './BottomMenu.vue';

export default {
  name: 'Heading',
  components: { BottomMenu },
  props: {
    title: String,
    content: String,
    displayLinks: Boolean,
    displayAboutLink: Boolean, 
  }
}
</script>