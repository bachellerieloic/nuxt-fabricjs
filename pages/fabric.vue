<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="headline flex-column">
          <v-row>
            <v-col cols="12" class="text-center">
              {{ companyName }}
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <canvas id="canvas" height="400" width="600"></canvas>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="secondary" nuxt to="/font">
            <v-icon left>mdi-arrow-left-circle-outline</v-icon>
            Back
          </v-btn>
          <v-btn id="download" download="myImage.jpg" :href="href">Export</v-btn>
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
        textFabric: {},
        href: '',
      }
    },
    mounted() {
      this.canvas = new fabric.Canvas('canvas');
      this.textFabric =  new fabric.IText(this.companyName+'', {
        fontFamily: this.font, fontWeight: this.fontWeight, left: 100, top: 100 })

      let rect = new fabric.Rect({
        left: 100,
        top: 100,
        originX: 'left',
        originY: 'top',
        width: 140,
        height: 120,
        angle: 0,
        fill: 'rgba(255,255,255,1)',
        transparentCorners: false
      });
      this.canvas.add(rect).setActiveObject(rect).sendToBack()
      this.canvas.add(this.textFabric);
    },
    methods: {
      setFontFamily(font) {
        console.log('setFontFamily', font);
        this.textFabric.fontFamily = font;
        this.canvas.renderAll()
        this.href = this.canvas.toDataURL("image/jpg");
      },
      exporte() {
        // this.canvas.toDataURL({
        //   format: 'jpeg',
        // })

      }
    },
    computed: {
      ...mapFields(['companyName', 'font', 'fontWeight']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray
</style>
