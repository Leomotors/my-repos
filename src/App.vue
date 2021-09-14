<template>
  <UserCard :user="user_data" />
  <div id="Cards">
    <RepoCard :repo="repo" v-for="repo in repos_data" :key="repo.name" />
  </div>
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

  const ures = await fetch(`https://api.github.com/users/${user}`);
  const utxt = await ures.text();
  const uobj = JSON.parse(utxt);

  const user_data = {
    login: uobj.login,
    avatar_url: uobj.avatar_url,
    html_url: uobj.html_url,
    bio: uobj.bio,
    public_repos: uobj.public_repos,
  };

  const rres = await fetch(`https://api.github.com/users/${user}/repos`);
  const rtxt = await rres.text();
  const robj = JSON.parse(rtxt);

  for (const repo of robj) {
    const repodata: Repo = {
      name: repo.name,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
    };

    repos_data.push(repodata);
  }

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
  user_data: User = DefaultUser;
  repos_data: Repo[] = [];

  async created(): Promise<void> {
    const { user_data, repos_data } = await loadData(default_user);
    this.user_data = user_data;
    this.repos_data = repos_data;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#Cards {
  display: grid;
  grid-template-columns: repeat(3, 33%);
}
</style>
