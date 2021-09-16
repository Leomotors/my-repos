<template>
  <div class="card">
    <div class="card-header">
      <img
        class="col-sm"
        :src="LanguageLogo(repo.language)"
        height="32"
        alt="Language"
      />
      <span class="col-sm h4">
        {{ repo.name }}
        <span class="badge badge-pill badge-primary" v-if="repo.fork">
          FORK
        </span>
      </span>
    </div>

    <div class="card-body">
      <p class="card-text">{{ repo.description }}</p>
      <div class="card-footer container row">
        <p class="col-sm">Stars: {{ repo.stargazers_count }}</p>
        <button
          class="btn btn-outline-success col-md-5"
          @click="openUrl(repo.html_url)"
        >
          Visit
        </button>
        <button
          class="btn btn-outline-primary col-md-3"
          @click="openUrl(repo.homepage)"
          v-if="repo.homepage"
        >
          Web
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Repo } from "@/backend/Repo";
import { LanguageLogo } from "@/backend/Language";

@Options({
  props: {
    repo: Object,
  },
})
export default class RepoCard extends Vue {
  repo!: Repo;
  LanguageLogo = LanguageLogo;

  openUrl(url: string): void {
    window.open(url, "_blank");
  }
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
