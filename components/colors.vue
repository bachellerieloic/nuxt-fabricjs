<template>
  <v-row justify="center">
    <v-col cols="6" md="3" v-for="colorItem in colors" :key="colorItem" class="text-center mx-auto">
      <v-btn :elevation="colorItem === color ? 12 : 0" :class="colorItem === color ? 'active-color' : ''" @click="setColor(colorItem)" height="100" width="100" :color="colorItem">
        {{ colorItem }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
  import { mapFields } from 'vuex-map-fields';

  export default {
    data () {
      return {
      }
    },
    methods: {
      setColor(color) {
        this.color = color;
      },
    },
    mounted() {
    },
    computed: {
      ...mapFields(['companyName', 'colors', 'color']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray

  .v-btn.active-color
    border: 2px solid lightgreen!important
</style>
