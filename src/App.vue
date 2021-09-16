<template>
  <h1 class="display-3 fw-bold mt-5 mb-lg-10">My Repositories</h1>
  <UserCard class="mx-auto" :user="user_data" />
  <hr class="mt-5 mb-5" />
  <div id="Cards" class="container-fluid row center mx-auto">
    <RepoCard
      class="col-md-4 col-lg-3"
      :repo="repo"
      v-for="repo in repos_data"
      :key="repo.name"
    />
  </div>
  <hr />
  <form id="FooterBar" class="container-md justify-content-center">
    <input
      class="col-sm gx-5"
      type="text"
      id="SearchUser"
      placeholder="Leomotors"
      v-model.trim="user_to_view"
    />
    <button
      class="col-sm gx-5 btn-success btn-sm"
      type="button"
      id="SearchBtn"
      @click.prevent="viewUser"
    >
      View User
    </button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserCard from "@/components/UserCard.vue";
import RepoCard from "@/components/RepoCard.vue";

import { Repo } from "@/backend/Repo";
import { User, DefaultUser } from "@/backend/User";

const default_user = "Leomotors";

async function loadData(
  user: string
): Promise<{ user_data: User; repos_data: Repo[] }> {
  let repos_data = [];

  console.log(`Querying User Data of ${user}`);
  const ures = await fetch(`https://api.github.com/users/${user}`);
  const utxt = await ures.text();
  const uobj = JSON.parse(utxt);

  const user_data = {
    ...uobj,
  };

  // * Do not fetch more than 10 times, meaning more than 1k Repo is not supported
  const PAGE_HARD_LIMIT = 10;
  let page = 1;

  while (page <= PAGE_HARD_LIMIT) {
    console.log(`Querying Repos Page #${page}`);
    const rres = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&page=${page}`
    );
    page++;
    const rtxt = await rres.text();
    const robj = JSON.parse(rtxt);

    for (const repo of robj) {
      const repodata: Repo = {
        ...repo,
      };
      repos_data.push(repodata);
    }

    if (robj.length < 100) break;
  }

  repos_data.sort((a: Repo, b: Repo) => {
    const ad = a.pushed_at;
    const bd = b.pushed_at;
    if (ad > bd) return -1;
    else if (ad < bd) return 1;
    else return 0;
  });

  console.log(`Successfully fetched all data of ${user}`);
  return { user_data, repos_data };
}

@Options({
  components: {
    UserCard,
    RepoCard,
  },
})
export default class App extends Vue {
  user_to_view = "";
  user_data: User = DefaultUser;
  repos_data: Repo[] = [];

  async created(): Promise<void> {
    const uri = window.location.search.substring(1);
    const params = new URLSearchParams(uri);
    const target_user = params.get("user") ?? default_user;

    const { user_data, repos_data } = await loadData(target_user);
    this.user_data = user_data;
    this.repos_data = repos_data;
  }

  viewUser(): void {
    window.location.href =
      window.location.href.split("?")[0] + `?user=${this.user_to_view}`;
  }
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// hr {
//   margin: 5em;
// }
</style>
