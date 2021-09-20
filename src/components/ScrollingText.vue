<template>
  <div class="scrolling-text-cache">
    <div class="flex">
      <span
        v-for="number in repeat"
        :key="number"
        class="scrolling-text text-3xl md:text-5xl"
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
    repeat: String
  },
  methods: {
    highlightText(number) {
      return (number == Math.round(this.repeat / 2))
    }
  }
};
</script>
