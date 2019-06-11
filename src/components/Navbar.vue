<template>
    <nav>
        <v-toolbar flat app class="blue-grey darken-1 white--text">
            <v-toolbar-side-icon class="blue-grey darken-1 white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Test-Paiduay</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="blue-grey darken-1">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [{
                        icon: 'account_box',
                        text: 'Users',
                        route: '/'
                    },
                    {
                        icon: 'table_chart',
                        text: 'PostsTable',
                        route: '/Posts_Table'
                    },
                    {
                        icon: 'comment',
                        text: 'Posts',
                        route: '/Posts_Resource'
                    },
                ]
            }
        }
    }
</script>