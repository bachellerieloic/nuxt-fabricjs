<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card min-width="600">
        <v-card-title class="headline flex-column">
          Let's create your logo !
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" class="text-center">
              Type a company Name
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="text-center mx-auto">
              <v-text-field label="Company Name" v-model="companyName" class="text-center"
                            style="font-size:2em" height="2em" outlined rounded></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" nuxt to="/font" x-large>
            Next
            <v-icon right>mdi-arrow-right-circle-outline</v-icon>
          </v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import { fabric } from 'fabric'
  import { mapFields } from 'vuex-map-fields';

  export default {
    data () {
      return {
        svg: '',
        href: '',
        fonts: ['Lato', 'Montserrat', 'Roboto', 'Raleway'],
        font: 'Lato',
        fontWeight: 'bold'
      }
    },
    methods: {
    },
    computed: {
      ...mapFields(['companyName']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray
</style>
