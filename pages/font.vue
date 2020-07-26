<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card min-width="600">
        <v-card-title class="headline flex-column">
          <v-row>
            <v-col cols="12" class="text-center">
              Select a font
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col  v-for="font in fonts" :key="font" cols="4" class="text-center mx-auto">
              <v-btn @click="setFontFamily(font)" :style="{fontFamily: font, textTransform: 'none', fontSize: '4em'}"
                     class="px-12" x-large height="80" elevation="10" >
                {{ companyName }}
              </v-btn>
              <small class="d-block">{{ font }}</small>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="secondary" nuxt to="/" x-large>
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
      setFontFamily(font) {
        this.font = font;
        this.$router.push('/fabric')
      },
    },
    computed: {
      ...mapFields(['companyName', 'font', 'fontWeight', 'fonts']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray
</style>
