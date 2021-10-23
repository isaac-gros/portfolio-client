<template>
  <div class="projects-list-container">
    <ul class="projects-list">
      <li v-for="(project, index) in projects" :key="project.id" class="project-element">
        <ProjectsListElement :project="project" :index="index"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectsListElement from './ProjectsListElement.vue'

export default {
  name: "ProjectsList",
	components: {
		ProjectsListElement
	},
	props: {
		projects: Array
	}
}
</script>
