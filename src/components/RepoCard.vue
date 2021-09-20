<template>
  <div class="card">
    <div class="card-header py-3">
      <span class="float-left align-left text-muted">
        <strong>{{ index }}</strong>
      </span>
      <img
        class="lang-logo px-1"
        :src="LanguageLogo(repo.language)"
        height="32"
        alt="Language"
      />
      <span class="h4 px-1">
        {{ repo.name }}
        <span
          class="badge badge-pill badge-primary bg-dark px-1"
          v-if="repo.fork"
        >
          FORK
        </span>
      </span>
    </div>

    <div
      class="
        card-body
        d-flex
        flex-column
        align-items-center
        justify-content-between
      "
    >
      <p class="card-text">{{ repo.description }}</p>
      <div class="card-footer container row align-items-baseline pt-3">
        <p class="col-sm">Stars: {{ repo.stargazers_count }}</p>
        <button
          class="btn btn-outline-success col-5"
          @click="openUrl(repo.html_url)"
        >
          View Repo
        </button>
        <button
          class="btn btn-outline-primary col-3 ms-1"
          @click="openUrl(repo.homepage)"
          v-if="repo.homepage"
        >
          Visit Web
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
    index: Number,
  },
})
export default class RepoCard extends Vue {
  repo!: Repo;
  index!: number;
  LanguageLogo = LanguageLogo;

  openUrl(url: string): void {
    window.open(url, "_blank");
  }
}
</script>

<style scoped lang="scss">
.lang-logo {
  position: relative;
  top: -0.25em;
  margin-left: 0.2em;
}
</style>
