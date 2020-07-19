<template>
    <v-layout column justify-center align-center>
      <v-flex xs12>
        <canvas id="canvas" height="400" width="600"></canvas>
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