<template>
  <div class="posts_Res">
    <v-layout row wrap class="justify-center">
      <v-flex xs12 sm6 sm4 lg4 class="ma-5" v-for="User in Users" :key="User.id">
        <v-card>
          <v-layout column fill-height>
            <v-card-title class="light-blue darken-2 white--text pl-4 pt-4">
              <div class="display-1 pl-1 pt-1">{{ User.name }}</div>
            </v-card-title>
          </v-layout>
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="light-blue darken-2">account_circle</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ User.username }}</v-list-tile-title>
                <v-list-tile-sub-title>Username</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="light-blue darken-2">phone</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ User.phone }}</v-list-tile-title>
                <v-list-tile-sub-title>Phone</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>chat</v-icon>
              </v-list-tile-action>
            </v-list-tile>


            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="light-blue darken-2">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ User.email }}</v-list-tile-title>
                <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="light-blue darken-2">location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ User.address.suite }} {{ User.address.street }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ User.address.city }}, {{ User.address.zipcode }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="light-blue darken-2">web</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ User.website }}</v-list-tile-title>
                <v-list-tile-sub-title>Website</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="light-blue darken-2">business</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ User.company.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ User.company.catchPhrase }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    created() {
      this.getUsersData();
    },
    data() {
      return {
        Users: [],
      }
    },
    methods: {
      async getUsersData() {
        try {
          let Response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
          this.Users = Response.data;
          //console.log(this.Users);
        } catch (error) {
          console.log(error);
        }
      },
    },
  }
</script>