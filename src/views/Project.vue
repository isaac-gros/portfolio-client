<template>
  <section>
    <Heading
      :title="projectTitle"
      :semanticTitle="true"
      :content="projectContent"
      :displayLinks="false"
      :displayAboutLink="false"
    />
    <ScrollingText :repeat="7" word="Preview" />
    <Gallery :images="projectImages" :subtitle="subtitle" />
    <ProjectsList :projects="otherProjects" />
  </section>
</template>

<script>
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
      projectSlug: this.$route.params?.slug ?? "",
      projectTitle: "",
      projectContent: "",
      projectImages: [],
      otherProjects: [],
      subtitle: "",
    };
  },
  watch: {
    $route(to) {
      if(to.name == "Project") {
        this.projectSlug = to.params.slug;
        this.updateProject();
      }
    },
  },
  methods: {
    nextProjectsSentence: function () {
      let sentences = [
        "Discover more",
        "Other projects",
        "Other works",
        "See more of my work",
      ];
      return sentences.at(Math.floor(Math.random() * sentences.length));
    },
    updateProject: function () {
      // Update project content
      ApiService.get("project", {
        param: "slug",
        equals: this.projectSlug,
      })
        .then((response) => {
          let project = response[0];
          let image = project.acf.galerie.image_1;
          this.projectTitle = project.title.rendered;
          this.projectContent = project.acf.contenu;
          this.projectImages = project.acf.galerie;

          // Update other projects list
          let projectsStore = this.$store.getters.getProjects;
          this.otherProjects = projectsStore.filter(
            (el) => el.id != project.id
          );

          // Update random sentence
          this.subtitle = this.nextProjectsSentence();
        })
        .catch((projectError) => {
          console.log(projectError);
          this.updating = false;
        });
    },
  },
  mounted() {
    this.updateProject();
  },
};
</script>
