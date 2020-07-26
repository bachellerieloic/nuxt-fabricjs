<template>
  <v-bottom-navigation v-model="page" fixed>
    <v-btn color="primary" nuxt to="/fabric" x-large>Next
      <v-icon right>mdi-arrow-right-circle-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>


<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        page: 'Name',
        pages: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
