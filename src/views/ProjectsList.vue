<template>
  <section id="projects-list">
    <ScrollingText :repeat="7" word="Projects" :auto="true"/>
    <ProjectsList :projects="projects" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import Heading from "../components/Heading.vue";
import Gallery from "../components/Gallery.vue";
import ScrollingText from "../components/ScrollingText.vue";
import ProjectsList from "../components/ProjectsList.vue";

import ApiService from "../services/ApiService";

export default {
  components: { Heading, ScrollingText, Gallery, ProjectsList },
  name: "Project",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    ...mapActions(["fetchProjects"]),
  },
  async created() {
    let storeProjects = this.$store.getters.getProjects;
    this.projects = (storeProjects.length > 0) ? storeProjects : await this.fetchProjects();
  },
};
</script>
