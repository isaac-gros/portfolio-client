<template>
  <footer>
    <div class="footer-container">
      <div class="footer-message">
        <span class="title">{{ message }}</span>
      </div>
      <BottomMenu :displayAboutLink="true" />
    </div>
  </footer>
</template>

<script>
import BottomMenu from "./BottomMenu.vue";

export default {
  name: "Footer",
  components: {
    BottomMenu,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
		this.generateMessage();
	},
  methods: {
    generateMessage() {
			let messages = [
				"Nice to meet you !",
				"Let's talk.",
				"Continue ?",
				"Let's go further.",
			];
      let min = Math.ceil(0);
      let max = Math.floor(messages.length - 1);
      let randIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      this.message = messages[randIndex];
    },
  },
};
</script>

<style></style>
