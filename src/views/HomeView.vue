<template>
  <div class="home">
    <!-- section containing all posts -->
    <main>
      <!-- loops through posts and displays each post using the PostComponent -->
      <!-- post is current post (single post object), index is the current index of the loop  -->
      <PostComponent v-for="(post, index) in posts" :key="index" :post="post" :index="index" />

      <!-- reset likes button -->
      <button class="reset-likes-button" @click="resetLikes">Reset likes</button>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: 'HomeView',
  components: {
    PostComponent
  },
  computed: {
    // fetches posts data from the Vuex store
    ...mapState(["posts"]),
  },
  methods: {
    ...mapActions(["resetLikes"]),
  },
}
</script>

<style scoped>
/* styling for the main container */
main {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* styling for the reset button */
.reset-likes-button {
  width: 30%;
  min-width: 50px;
  max-width: 250px;
  padding: 10px;
  background-color: rgb(19, 45, 196);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.reset-likes-button:hover {
  background-color: #447ed0d6;
}
</style>