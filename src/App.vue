<template>
  <div>
    <Header />
    <Navigation />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Header,
    Footer,
    Navigation,
  },
};
</script>
