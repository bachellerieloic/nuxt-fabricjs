<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <canvas id="canvas" height="400" width="600"></canvas>
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
    mounted() {
      console.log('Component created!')
      let canvas = new fabric.Canvas('canvas');
      var rect = new fabric.Rect({
        left: 150,
        top: 200,
        originX: 'left',
        originY: 'top',
        width: 150,
        height: 120,
        angle: -10,
        fill: 'rgba(255,0,0,0.5)',
        transparentCorners: false
      });

      canvas.add(rect).setActiveObject(rect);
      console.log(JSON.stringify(canvas))
    }
  }
</script>
<style>
  #canvas {
    background-color: gray;
  }
</style>


