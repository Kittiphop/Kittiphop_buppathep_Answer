<template>
    <div class="user_Res">
        <v-container fluid grid-list-md>
            <v-data-iterator :items="Posts" :rows-per-page-items="rowsPerPageitems" :pagination.sync="pagination"
                content-tag="v-layout" row wrap>
                <template v-slot:item="props">
                    <v-flex xs12 sm6 md4 lg4 >

                        <v-card exact :style="{ cursor: 'pointer'}">
                            <v-card-title>
                                <v-icon color="indigo">format_list_numbered</v-icon>
                                <h4>PostID: {{ props.item.id }}</h4>
                            </v-card-title>
                            <v-divider></v-divider>
                            <router-link v-bind:to="'/Comment/'+ props.item.id">
                                <v-list dense two-line>
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="props.item.title"></v-list-tile-title>
                                        </v-list-tile-content>

                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>{{ props.item.body }}</v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </router-link>
                        </v-card>

                    </v-flex>
                </template>
            </v-data-iterator>
        </v-container>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        created() {
            this.getPostData();
        },
        methods: {
            async getPostData() {
                try {
                    let Response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                    this.Posts = Response.data;
                    //console.log(this.Posts);
                } catch (error) {
                    console.log(error);
                }
            },
        },

        data() {
            return {
                rowsPerPageitems: [3, 6, 9, 12],
                pagination: {
                    rowsPerPage: 3
                },
                Posts: [],
            }
        },
    }
</script>