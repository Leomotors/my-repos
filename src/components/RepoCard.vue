<template>
  <a :href="repo.html_url" target="_blank" id="RepoCard">
    <div id="InnerCard">
      <p>{{ repo.name }}</p>
      <p>Stars: {{ repo.stargazers_count }}</p>
      <p>Language: {{ repo.language }}</p>
    </div>
  </a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Repo } from "@/backend/Repo";

@Options({
  props: {
    repo: Object,
  },
})
export default class RepoCard extends Vue {
  repo!: Repo;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#RepoCard {
  height: 120px;
  border-radius: 1em;
  background-color: lavender;
  margin: 1em;
  padding: 0.5em;
}

#InnerCard {
  padding: 1em;
}

a {
  color: black;
  text-decoration: none;
}
</style>
