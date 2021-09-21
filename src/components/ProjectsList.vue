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
		hover: Boolean
	},
  data() {
    let fakeProjects = [
      { id: 0, title: "Hello 0", desc: "This is a fake project.", slug: "hello-0" },
      { id: 1, title: "Lorem 1", desc: "This is a fake project.", slug: "hello-1" },
      { id: 2, title: "Ipsum 2", desc: "This is a fake project.", slug: "hello-2" },
      { id: 3, title: "World 3", desc: "This is a fake project.", slug: "hello-3" },
    ];
    return {
      projects: fakeProjects,
			hover: false,
    };
  }
};
</script>
