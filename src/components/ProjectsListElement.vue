<template>
  <router-link
    to="?"
    class="project-element-container"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="project-element-recap">
      <h2 class="text-2xl md:text-4xl">{{ project.title }}</h2>
      <p
        class="flex transition-all py-3"
        :class="hover ? 'md:visible md:py-3' : 'md:invisible md:py-0' ">
        {{ project.desc }}
      </p>
    </div>
    <div class="project-element-link" :class="hover ? 'md:visible' : 'md:invisible' ">
      <span class="mr-4 text-lg hidden md:block">Go</span>
      <Arrow/>
    </div>
  </router-link>
</template>

<script>
import Arrow from './Arrow.vue';

export default {
	name: 'ProjectsListElement',
  components: { Arrow },
	props: {
		project: Object,
		index: Number,
		hover: Boolean,
	}
};
</script>

<style></style>
