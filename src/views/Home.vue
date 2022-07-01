<template>
  <section>
    <Heading
      :title="content.headingTitle"
      :content="content.headingText"
      :displayLinks="true"
      :displayAboutLink="false"
    />
    <ScrollingText :repeat="8" word="Projects" :auto="true" />
    <ProjectsList :projects="projects" />
  </section>
</template>

<script>
import ApiService from "../services/ApiService";
import ScrollingText from "../components/ScrollingText.vue";
import ProjectsList from "../components/ProjectsList.vue";
import Heading from "../components/Heading.vue";

export default {
  name: "Home",
  components: {
    ScrollingText,
    ProjectsList,
    Heading,
    ApiService,
  },
  data() {
    return {
      isLoading: true,
      content: {
        headingTitle: "",
        headingText: "",
      },
      projects: [],
    };
  },
  async mounted() {
    try {
      let homePage = await ApiService.get("pages", {
        param: "slug",
        equals: "accueil",
      })
      let pageContent = homePage[0];

      // Update intro
      this.content.headingTitle = pageContent.title.rendered;
      this.content.headingText = pageContent.acf.contenu;
      
      let storeProjects = this.$store.getters.getProjects;
      this.projects = (storeProjects.length > 0) ? storeProjects : await this.fetchProjects();
    } catch(error) {
      // TODO
      // this.$router.push({name: 'error', params: { status: 500, message: homeError.message}});
    }
  },
};
</script>
