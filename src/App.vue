<template>
  <div>
    <Header />
    <main>
      <router-view
        :isLoading="isLoading" 
        :startLoading="startLoading" 
        :finishLoading="finishLoading"></router-view>
    </main>
    <Footer />
    <LoadingScreen :isLoading="isLoading"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  components: {
    Header,
    Footer,
    LoadingScreen
  },
  data() {
    return {
      isLoading: null
    }
  },
  methods: {
    startLoading() {
      if(this.isLoading != true) {
        this.isLoading = true
      }
    },
    finishLoading() {
      if(this.isLoading != false) {
        this.isLoading = false
      }
    }
  }
};
</script>
