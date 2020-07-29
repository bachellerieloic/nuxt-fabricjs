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
          <v-btn color="secondary" nuxt to="/icon">
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
        fontFamily: this.font, fontWeight: this.fontWeight, textAlign:'justify-center' })

      let rect = new fabric.Rect({
        left: 150,
        top: 100,
        originX: 'left',
        originY: 'top',
        width: 300,
        height: 200,
        angle: 0,
        fill: 'rgba(255,255,255,1)',
        textAlign: 'justify-center',
        transparentCorners: false
      });
      this.canvas.add(rect).sendToBack(rect)
      this.canvas.add(this.textFabric);
      let $this = this;
      fabric.loadSVGFromString(this.icons[this.icon],function(objects,options) {

        var loadedObjects = fabric.util.groupSVGElements(objects, options);

        // loadedObjects.set({
        //   width: 100,
        //   height: 100
        // });

        $this.canvas.add(loadedObjects);
        $this.canvas.renderAll();
      });
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
      ...mapFields(['companyName', 'font', 'fontWeight', 'icons', 'icon']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray
</style>
