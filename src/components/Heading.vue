<template>
  <div class="intro container m-auto">
    <div class="intro-container">
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
        <div 
          v-if="image !== ''" 
          class="intro-article-image" 
          :style="`background-image: url('${image}');`">
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
    imageAlt: String 
  }
}
</script>