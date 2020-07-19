<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Enter your company name
        </v-card-title>
        <v-card-text>
          <v-text-field label="Company name" ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { fabric } from 'fabric'
  export default {
    data() {
      return {
        
      }
    }
  }
</script>
<style>
  #canvas {
    background-color: gray;
  }
</style>


