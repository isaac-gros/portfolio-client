<template>
  <section>
    <Heading
      :title="projectTitle"
      :semanticTitle="true"
      :content="projectContent"
      :displayLinks="false"
      :displayAboutLink="false"
    />
    <ScrollingText :repeat="7" word="Preview"/>
    <Gallery :images="projectImages"/>
  </section>
</template>

<script>
import Heading from "../components/Heading.vue";
import Gallery from "../components/Gallery.vue";
import ScrollingText from "../components/ScrollingText.vue";

import ApiService from "../services/ApiService";

export default {
  components: { Heading, ScrollingText, Gallery },
  name: "Project",
  props: {
    isLoading: Boolean,
    startLoading: Function,
    finishLoading: Function,
  },
  data() {
    return {
      projectSlug: this.$route.params?.slug ?? "",
      projectTitle: "",
      projectContent: "",
      projectImages: [],
    };
  },
  beforeMount() {
    this.startLoading();
  },
  mounted() {
    ApiService.get("project", {
      param: "slug",
      equals: this.projectSlug,
    })
      .then((response) => {
        let project = response[0];
        let image = project.acf.galerie.image_1;
        console.log(image.sizes.medium_large);
        this.projectTitle = project.title.rendered;
        this.projectContent = project.acf.contenu;
        this.projectImages = project.acf.galerie;
        this.finishLoading();
      })
      .catch((projectError) => {
        console.log(projectError);
        this.finishLoading();
      });
  },
};
</script>
