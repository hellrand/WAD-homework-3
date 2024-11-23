<template>
  <div class="home">
    <!-- section containing all posts -->
    <main>
      <!-- loops through posts and displays each post using the PostComponent -->
      <!-- post is current post (single post object), index is the current index of the loop  -->
      <PostComponent 
      v-for="(post, index) in posts" 
      :key="index" 
      :post="post" 
      />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Header from '@/components/Header.vue';
import PostComponent from "@/components/PostComponent.vue";
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Header, PostComponent, Footer,
  },
  computed: {
    // fetches posts data from the Vuex store
    ...mapState(["posts"]),
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
}
</style>