<template>
  <div class="scrolling-text-cache" :class="(auto) ? 'hide-container' : ''">
    <div class="flex scrolling-text">
      <span
        v-for="number in repeat"
        :key="number"
        class="scrolling-text--word"
        :class="highlightText(number) ? 'highlight' : ''"
      >
			{{ word }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollingText",
  props: {
    word: String,
    repeat: String,
    auto: Boolean
  },
  data() {
    return {
      initScrollPos: 0,
      scrollPos: 0,
    }
  },
  methods: {
    highlightText(number) {
      return (!this.auto) && (number == Math.round(this.repeat / 2))
    },
    clearAutoScroll() {
      clearInterval(this.initAutoScroll());
    },
    initAutoScroll() {
      let context = this;
      let scrollingTextElement = document.querySelector('.scrolling-text');
      this.initScrollPos = scrollingTextElement.getBoundingClientRect().x;
      this.scrollPos = this.initScrollPos;

      return setInterval(function() {
        context.performAutoScroll(scrollingTextElement, context)
      }, 10);
    },
    performAutoScroll(scrollingTextElement, context) {

      // When second word is exactly at x: 0,
      // move the first element to the end
      let secondWordX = scrollingTextElement.firstElementChild.nextElementSibling.getBoundingClientRect().x;
      if (secondWordX && secondWordX <= 0) {
        context.scrollPos = context.initScrollPos;
        scrollingTextElement.appendChild(scrollingTextElement.firstElementChild);
      }
      
      // Perform negative translate
      scrollingTextElement.style.transform = "translateX(-" + context.scrollPos + "px)";
      context.scrollPos = context.scrollPos + 1;
    }
  },
  mounted() {
    if(this.auto) this.initAutoScroll()
  }
};
</script>
