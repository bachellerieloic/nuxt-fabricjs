<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="headline">
          {{ companyName }}
        </v-card-title>
        <v-card-text>
          <v-text-field label="company name" v-model="companyName" @input="setText"></v-text-field>
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
        canvas: {},
        textFabric: {}
      }
    },
    mounted() {
      this.canvas = new fabric.Canvas('canvas');
      this.textFabric =  new fabric.IText(this.companyName+'', {
        fontFamily: 'Comic Sans', fontWeight: 'bold', left: 100, top: 100 })

      let rect = new fabric.Rect({
        left: 100,
        top: 100,
        originX: 'left',
        originY: 'top',
        width: 140,
        height: 120,
        angle: 0,
        fill: 'rgba(255,0,0,0.5)',
        transparentCorners: false
      });
      this.canvas.add(rect).setActiveObject(rect);
      this.canvas.add(this.textFabric);
    },
    methods: {
      setText() {
        this.textFabric.text = this.companyName;
        this.canvas.renderAll()
      }
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
