<template>
  <div class="UserCard container-xl">
    <div class="row">
      <div
        height="100%"
        class="pfp col-md-2"
        :style="{ backgroundImage: `url(${user.avatar_url})` }"
      ></div>
      <div class="col-lg-6">
        <h3>{{ user.login }}</h3>
        <p>{{ user.bio }}</p>
        <p>Has {{ user.public_repos }} Public Repositories</p>
        <div class="row mx-auto">
          <button
            class="btn btn-primary col-md-4"
            @click="openUrl(user.html_url)"
          >
            Visit User Profile
          </button>
          <button
            class="btn btn-outline-primary col-md-4"
            @click="openUrl(`${user.html_url}?tab=repositories`)"
          >
            Visit User Repositories
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { User } from "@/backend/User";

@Options({
  props: {
    user: Object,
  },
})
export default class UserCard extends Vue {
  user!: User;

  openUrl(url: string): void {
    window.open(url, "_blank");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#UserCard {
  height: 200px;
  width: 400px;
  border-radius: 1em;

  margin: 1em;
  padding: 0.5em;
}

.pfp {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#InnerCard {
  display: flex;
  flex-direction: row;
  background-color: lavender;
  border-radius: 1em;
  padding: 1em;
}

a {
  color: black;
  text-decoration: none;
}
</style>
