<template>
  <a :href="user.html_url" target="_blank" id="UserCard">
    <div id="InnerCard">
      <img class="pfp" alt="User Profile" :src="user.avatar_url" />
      <div id="Details">
        <p>{{ user.login }}</p>
        <p>{{ user.bio }}</p>
        <p>Repos: {{ user.public_repos }}</p>
      </div>
    </div>
  </a>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#UserCard {
  height: 120px;
  width: 500px;
  border-radius: 1em;

  margin: 1em;
  padding: 0.5em;
}

.pfp {
  height: 100px;
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
