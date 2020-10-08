<template>
  <v-layout column justify-center align-center>
        <v-row justify="center" class="mx-auto" style="height:60vh;overflow-y: scroll; border:1px solid lightgray; border-radius:40px">
          <v-col v-for="fontItem in fonts" :key="fontItem" :cols="columnSize" class="text-center mx-auto">
            <v-btn @click="setFontFamily(fontItem)" :style="{fontFamily: fontItem, textTransform: 'none', fontSize: fontSize}"
                   :class="fontItem === font ? 'active-font' : ''"  class="px-12" x-large height="100" elevation="6" >
              {{ companyName }}
            </v-btn>
            <small class="d-block mx-auto">{{ fontItem }}</small>
          </v-col>
        </v-row>
  </v-layout>
</template>
<script>
  import { mapFields } from 'vuex-map-fields';

  export default {
    data () {
      return {
        fontSize: '4em',
        columnSize: 4,
      }
    },
    methods: {
      setFontFamily(font) {
        this.font = font;
      },
    },
    mounted() {
      switch(true) {
        case this.companyName.length >= 18:
          this.fontSize = '3em'
          this.columnSize = 12;
          break;
        case this.companyName.length >= 16:
          this.fontSize = '2em'
          this.columnSize = 12;
          break;
        case this.companyName.length >= 14:
          this.fontSize = '2em'
          this.columnSize = 6;
          break;
        case this.companyName.length >= 12:
          this.fontSize = '2.2em'
          this.columnSize = 6;
          break;
        case this.companyName.length >= 9:
          this.fontSize = '3em'
          this.columnSize = 6;
          break;
        case this.companyName.length >= 8:
          this.fontSize = '3.5em'
          this.columnSize = 6;
          break;
        case this.companyName.length >= 6:
          this.fontSize = '4em'
          this.columnSize = 6;
          break;
        default:
          this.fontSize = '4em'
          this.columnSize = 6;
      }
    },
    computed: {
      ...mapFields(['companyName', 'font', 'fonts']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray

  .v-btn.active-font
    border: 1px solid lightgreen!important
</style>
