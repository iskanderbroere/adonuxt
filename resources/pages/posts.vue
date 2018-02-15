<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex 
        v-for="(post, index) in localPosts"
        :key="index"
        xs12 
        sm6 >
        <v-card class="pa-4">
          <v-card-media
            class="white--text"
            height="200px"
            src="https://source.unsplash.com/1600x900/?architecture"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn>Share</v-btn>
            <v-btn>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  async fetch({ store, app }) {
    try {
      const posts = await app.$axios.$get("/posts")
      store.commit("setPosts", posts)
    } catch (error) {
      console.error(error)
    }
  },
  // async asyncData({ $axios }) {
  //   const posts = await $axios.$get(`/posts`)
  //   return { posts }
  // },
  computed: mapState({
    localPosts: "posts"
  }),
  methods: {
    async createPost() {
      try {
        return await this.$axios.$post("/posts", {
          title: "Harm",
          body: "Whatever"
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
