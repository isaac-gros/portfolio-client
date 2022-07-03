<template>
  <div class="intro" :class="(containerFluid) ? 'intro-fluid' : 'container m-auto'">
    <!-- TODO : Clean up this misery -->
    <div class="intro-container" :style="`position: ${displayLinks ? 'relative' : 'static'}; padding-top: ${content.length > 240 ? '25vh' : '0'};`">
      <article class="intro-article">
        <div class="intro-article-text">
          <div v-if="semanticTitle">
            <h1 class="title">{{ title }}</h1>
          </div>
          <div v-else>
            <span class="title">{{ title }}</span>
          </div>
          <div v-html="content"></div>
        </div>
        <div class="intro-article-image">
          <img 
            v-if="image !== ''"
            :src="image">
        </div>
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
    semanticTitle: Boolean,
    content: String,
    displayLinks: Boolean,
    displayAboutLink: Boolean,
    image: String,
    imageAlt: String,
    containerFluid: Boolean
  }
}
</script>