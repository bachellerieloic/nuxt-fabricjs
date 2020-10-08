<template>
  <v-layout column justify-center align-center>
    <canvas id="canvas" height="400" width="400"></canvas>
    <v-btn class="mt-6" color="success" outlined rounded @click="download">
      <v-icon>mdi-download-circle-outline</v-icon>
      Download
    </v-btn>
  </v-layout>
</template>
<script>
  import { fabric } from 'fabric'
  import { mapFields } from 'vuex-map-fields';

  export default {
    data () {
      return {
        defaultTextSize: '',
        svg: '',
        canvas: {},
        textFabric: {},
        href: '',
      }
    },
    mounted() {
      this.setFabricJs()
    },
    methods: {
      setFabricJs() {
        this.canvas = new fabric.Canvas('canvas');

        //TEXT
        this.textFabric =  new fabric.IText(this.companyName+'', {fontFamily: this.font, width:300, textAlign:'center' })
        this.canvas.add(this.textFabric);

        //BACKGROUND-COLOR
        this.canvas.backgroundColor = this.color;

        //ICON
        let $this = this;
        fabric.loadSVGFromString(this.icons[this.icon],function(objects,options) {
          var loadedObjects = fabric.util.groupSVGElements(objects, options);

          loadedObjects.set({
            left: 100,
            top: 100,
            width: 200,
            height: 200
          });

          $this.canvas.add(loadedObjects);
          $this.canvas.discardActiveObject();
          $this.canvas.renderAll();
          // $this.canvasSave = Object.assign({}, $this.canvas);
        });
      },
      updateFabricJs() {
        this.canvas.clear();
        //TEXT
        this.textFabric = new fabric.IText(this.companyName+'', {fontFamily: this.font, width:200, textAlign:'center' })
        this.canvas.add(this.textFabric);

        //BACKGROUND-COLOR
        this.canvas.backgroundColor = this.color;

        //ICON
        let $this = this;
        fabric.loadSVGFromString(this.icons[this.icon],function(objects,options) {
          $this.canvas.add(
            fabric.util.groupSVGElements(objects, options).set({
              left: 100,
              top: 100,
              scaleToWidth: 400,
              scaleToHeight: 400,
            })
          );
          $this.canvas.renderAll();
        });

        this.canvas.discardActiveObject();
        this.canvas.renderAll();
      },
      download() {
        this.canvas.discardActiveObject();
        const dataURL = this.canvas.toDataURL({
          left: 0,
          top: 0,
          format: 'png',
        });
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
    computed: {
      ...mapFields(['companyName', 'font', 'icons', 'icon', 'color', 'canvasSave']),
    },
    watch: {
      companyName(newValue, oldValue) {
        this.updateFabricJs();
      },
      font(newValue, oldValue) {
        this.updateFabricJs();
      },
      color(newValue, oldValue) {
        this.updateFabricJs();
      },
      icon(newValue, oldValue) {
          this.updateFabricJs();
      }
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray
</style>
