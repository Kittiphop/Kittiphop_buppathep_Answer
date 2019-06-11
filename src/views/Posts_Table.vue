<template>
    <div class="posts_Res">
        <v-container fluid class="my-4">
            <v-card-title>
                <h4> Posts </h4>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="Posts" :search="search">
                <template v-slot:items="props" router :to="'/Comment/'+ props.item.id">
                    <td class="text-xs-left">{{ props.item.id }}</td>
                    <td class="text-xs-left">{{ props.item.userId }}</td>
                    <td class="text-xs-left">{{ props.item.title }}</td>
                    <td class="text-xs-left">{{ props.item.body }}</td>
                    <td class="text-xs-center">
                        <router-link v-bind:to="'/Comment/'+ props.item.id">
                            <v-btn color="info">Comment</v-btn>
                        </router-link>
                    </td>
                </template>
            </v-data-table>

        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'

    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    export default {
        created() {
            this.getPostsData();
        },
        methods: {
            getPostsData() {
                axios.get(`${ endpoint}`).then(Response => {
                    this.Posts = Response.data;
                    //console.log(this.Posts);
                })
            }
        },
        data() {
            return {
                headers: [{
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: 'UserId',
                        value: 'userId'
                    },
                    {
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'Body',
                        value: 'body'
                    },
                    {
                        text: 'Link',
                        align: 'Right',
                        value: 'link'
                    }
                ],
                Posts: [],
                search: ""
            }
        }
    }
</script>