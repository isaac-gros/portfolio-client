<template>
  <section class="about">
    <Heading
      :title="aboutTitle"
      :semanticTitle="false"
      :content="aboutContent"
      :displayLinks="false"
      :displayAboutLink="false"
      :image="this.aboutImage"
      :containerFluid="true"
    />
    <ScrollingText :repeat="10" word="Skills" :auto="true"/>
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
  data() {
    return {
      aboutTitle: "",
      aboutContent: "",
    };
  },
  methods: {
    getAboutContent: async function() {
      // Update page content
      ApiService.get("pages", {
        param: "slug",
        equals: "about",
      }).then(response => {
        this.aboutTitle = response[0].title.rendered
        this.aboutContent = response[0].acf.contenu
        this.aboutImage = response[0].acf.image_profil.sizes.medium_large
        console.log(response[0].acf)
      })
    }
  },
  mounted() {
    this.getAboutContent();
  },
}
</script>