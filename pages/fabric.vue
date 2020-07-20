<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="headline">
          {{ companyName }}
        </v-card-title>
        <v-card-text>
          <canvas id="canvas" height="400" width="600"></canvas>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="secondary" nuxt to="/">
            <v-icon left>mdi-arrow-left-circle-outline</v-icon>
            Back
          </v-btn>
          <v-btn color="primary" nuxt to="/fabric">
            Continue
          </v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
      <img :src="svg" alt="">
      {{ svg }}
    </v-flex>
  </v-layout>
</template>
<script>
import { fabric } from 'fabric'
import { mapFields } from 'vuex-map-fields';

export default {
  data () {
    return {
      svg: ''
    }
  },
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
      var text = new fabric.Text(this.companyName, {
        fontFamily: 'Comic Sans', fontWeight: 'bold', left: 100, top: 100 });
      canvas.add(text);

        canvas.add(rect).setActiveObject(rect);
        console.log(JSON.stringify(canvas))
    this.svg = canvas.toSVG()
    console.log(canvas.toSVG())
  },
  computed: {
    ...mapFields(['companyName']),
  }
}
</script>
<style>
#canvas {
  background-color: gray;
}
</style>
