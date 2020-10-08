<template>
  <v-layout column justify-center align-center>
     <v-row justify="center" class="mx-autod">
        <v-col v-for="(iconItem, iconIndex) in icons" :key="iconIndex" cols="3" class="text-center mx-auto">
          <v-btn @click="setIcon(iconIndex)" style="font-size: 4em" :elevation="iconIndex === icon ? 12 : 2" :class="iconIndex === icon ? 'active-font' : ''"  class="px-12" x-large height="100">
            <v-icon v-text="iconIndex"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
  </v-layout>
</template>
<script>
  import { fabric } from 'fabric'
  import { mapFields } from 'vuex-map-fields';

  export default {
    data () {
      return {

      }
    },
    methods: {
      setIcon(icon) {

        this.$forceUpdate();
        this.icon = icon;
        // this.$router.push('/fabric')
      },
    },
    computed: {
      ...mapFields(['companyName', 'icon', 'icons']),
    }
  }
</script>
<style lang="sass">
  #canvas
    background-color: gray

    .v-btn.active-font
      border: 1px solid lightgreen
</style>
