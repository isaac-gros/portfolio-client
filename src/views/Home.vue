<template>
  <Heading 
    title="An interesting title." 
    content="<p>Well hello there. This is some fake text.</p>"
    :displayLinks="true"
    :displayAboutLink="true"
  />
  <ScrollingText repeat="8" word="Projects"/>
</template>

<script>
import ScrollingText from '../components/ScrollingText.vue'
import Heading from '../components/Heading.vue'

export default {
  name: "Home",
  components: {
    ScrollingText,
    Heading
  },
};
</script>
