<template>
  <ul class="social-links">
    <li>
      <router-link class="link-hover cursor-pointer" to="/about" v-if="displayAboutLink">
        About
      </router-link>
    </li>
    <li>
      <a class="link-hover cursor-pointer" @click="copyMailToClipboard()">Mail</a>
    </li>
    <li>
      <a class="link-hover" href="https://linkedin.com" target="_blank" rel="noopener">
        LinkedIn
      </a>
    </li>
    <li>
      <a class="link-hover" href="https://github.com" target="_blank" rel="noopener">
        Github
      </a>
    </li>
  </ul>
</template>

<script>
import useClipboard from "vue-clipboard3";

const { toClipboard } = useClipboard();

export default {
  name: "BottomMenu",
  props: {
    displayAboutLink: Boolean,
  },
  data() {
    return {
      email: "hello@world.com",
    };
  },
  methods: {
    async copyMailToClipboard() {
      try {
        await toClipboard(this.email);
        console.log("Copied to clipboard");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
