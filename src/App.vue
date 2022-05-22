<template>
  <div>
    <LoadingScreen :isLoading="isLoading" />
    <Header />
    <Navigation />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Header,
    Footer,
    Navigation,
    LoadingScreen,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    ...mapActions(["fetchProjects"]),
  },
  async created() {
    try {
      await this.fetchProjects();
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  },
};
</script>
