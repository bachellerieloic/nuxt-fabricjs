<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="headline">
          Enter your company name
        </v-card-title>
        <v-card-text>
<<<<<<< HEAD
          <v-text-field label="Company name" ></v-text-field>
=======
          <v-text-field label="company name" v-model="companyName"></v-text-field>
>>>>>>> a1c5380... nuxt fabric js working
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/fabric">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
<<<<<<< HEAD
  import { fabric } from 'fabric'
  export default {
    data() {
      return {
        
      }
=======

  import { mapActions, mapGetters } from 'vuex';
  import { mapFields } from 'vuex-map-fields';

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapFields(['companyName']),
>>>>>>> a1c5380... nuxt fabric js working
    }
  }
</script>
<style>
  #canvas {
    background-color: gray;
  }
</style>


