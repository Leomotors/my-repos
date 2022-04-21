<template>
  <div class="card">
    <div class="card-header py-3">
      <span class="float-left align-left text-muted fs-5">
        <strong>{{ index }}</strong>
      </span>
      <img
        class="lang-logo px-1"
        :src="LanguageLogo(repo.language)"
        height="32"
        alt="Language"
      />
      <span class="h4 px-1">
        <span>{{ repo.name }}&nbsp;</span>
        <!-- Fork Icon (From F12 in GitHub) -->
        <svg
          v-if="repo.fork"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
          />
        </svg>
        <!-- Archived Icon -->
        <svg
          v-if="repo.archived"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
          />
        </svg>
      </span>
    </div>

    <div
      class="card-body d-flex flex-column align-items-center justify-content-between"
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
import { Repo } from "@/backend/types";
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
