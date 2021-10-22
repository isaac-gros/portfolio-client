<template>
  <Heading 
    :title="content.headingTitle" 
    :content="content.headingText"
    :displayLinks="true"
    :displayAboutLink="false"
  />
  <ScrollingText :repeat="8" word="Projects"/>
  <ProjectsList/>
</template>

<script>
import ScrollingText from '../components/ScrollingText.vue'
import ProjectsList from '../components/ProjectsList.vue'
import Heading from '../components/Heading.vue'

import ApiService from '../services/ApiService';

export default {
  name: "Home",
  props: {
    isLoading: Boolean,
    startLoading: Function,
    finishLoading: Function
  },
  components: {
    ScrollingText,
    ProjectsList,
    Heading,
    ApiService
  },
  data() {
    return {
      isLoading: true,
      content: {
        headingTitle: '',
        headingText: '',
      },
      projects: [],
    }
  },
  beforeMount() {
    this.startLoading();
  },
  mounted() {
    ApiService.get('pages', {
      param: 'slug',
      equals: 'accueil'
    }).then(content => {
      let pageContent = content[0];
      this.content.headingTitle = pageContent.title.rendered;
      this.content.headingText = pageContent.acf.contenu;
      this.finishLoading();
    }).catch(error => {
      // TODO
      // this.$router.push({name: 'error', params: { status: 500, message: error.message}});
      this.finishLoading();
    });
  },
  beforeUnmount() {
    this.startLoading();
  }
};
</script>
