<template>
  <header>
    <nav class="container m-auto">
      <ul class="nav-links">
        <li class="nav-link">
          <router-link to="/" class="link-hover">Home</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/projects" class="link-hover">Projects</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/about" class="link-hover">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
