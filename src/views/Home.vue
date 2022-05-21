<template>
  <div>
    <Heading
      :title="content.headingTitle"
      :content="content.headingText"
      :displayLinks="true"
      :displayAboutLink="false"
    />
    <ScrollingText :repeat="8" word="Projects" />
    <ProjectsList :projects="projects" />
  </div>
</template>

<script>
import ScrollingText from "../components/ScrollingText.vue";
import ProjectsList from "../components/ProjectsList.vue";
import Heading from "../components/Heading.vue";

import ApiService from "../services/ApiService";

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
  mounted() {
    ApiService.get("pages", {
      param: "slug",
      equals: "accueil",
    })
      .then((content) => {
        let pageContent = content[0];

        // Update intro
        this.content.headingTitle = pageContent.title.rendered;
        this.content.headingText = pageContent.acf.contenu;

        // Fetch projects
        ApiService.get("project", {
          param: "status",
          equals: "publish",
        })
          .then((projects) => {
            this.projects = projects;
          })
          .catch((projectsError) => {
            console.log(projectsError);
          });
      })
      .catch((homeError) => {
        // TODO
        // this.$router.push({name: 'error', params: { status: 500, message: homeError.message}});
      });
  },
};
</script>
