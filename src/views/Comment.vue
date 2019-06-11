<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-toolbar color="light-blue darken-2" dark>
          <v-toolbar-title>Title: {{ post.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list three-line>
          <template>
            <v-list-tile v-for="item in comments" :key="item.id">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }} , {{ item.email }}</v-list-tile-title>
                <v-list-tile-sub-title>: {{ item.body }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios'

  export default {
    created() {
      this.getCommentsData();
      this.getPostData();
    },
    data() {
      return {
        comments: [],
        post:[],
        id: this.$route.params.id,

      }
    },
    methods: {
      async getCommentsData() {
        try {
          let Response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
          this.comments = Response.data;
          //console.log(this.id);
        } catch (error) {
          console.log(error);
        }
      },
      async getPostData() {
        try {
          let Response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
          this.post = Response.data;
          //console.log(this.id);
        } catch (error) {
          console.log(error);
        }
      },
    },
  }
</script>