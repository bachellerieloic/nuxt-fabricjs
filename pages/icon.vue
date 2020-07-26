<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card min-width="600">
        <v-card-title class="headline flex-column">
          <v-row>
            <v-col cols="12" class="text-center">
              Select an Icon
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row justify="center" class="mx-autod">
            <v-col v-for="(iconItem, iconIndex) in icons" :key="iconIndex" cols="5" class="text-center mx-auto">
              <v-btn @click="setIcon(iconIndex)" :style="{fontSize: '4em'}"
                     :class="iconIndex === icon ? 'active-font' : ''"  class="px-12" x-large height="100" elevation="10" >
                <v-icon v-text="iconIndex"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="secondary" nuxt to="/font" x-large>
            <v-icon left>mdi-arrow-left-circle-outline</v-icon>
            Back
          </v-btn>
          <v-btn color="primary" nuxt to="/fabric" x-large>
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

      }
    },
    methods: {
      setIcon(icon) {
        this.icon = icon;
        // this.$router.push('/fabric')
      },
    },
    computed: {
      ...mapFields(['companyName', 'icon', 'icons']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray

    .v-btn.active-font
      border: 1px solid lightgreen
</style>
