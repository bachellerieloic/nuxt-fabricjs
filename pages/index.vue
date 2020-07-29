<template>
  <v-responsive max-width="900" class="mx-auto">
    <v-row align="center" justify="center" class="mx-0 my-0 mt-0">
      <v-col cols="12" class="mx-auto">
        <h4 class="text-h4 text-center mb-4">
          <v-icon size="1em">mdi-image-edit-outline</v-icon>
          Image Maker
        </h4>
        <v-card class="" style="border-radius:40px">
          <v-card-title class="justify-center flex-column">
            <h6 class="text-h6">{{ currentTitle }}</h6>
          </v-card-title>

          <v-card-text class="">
            <v-responsive max-width="900" class="mx-auto">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row class="title font-weight-regular">
                    <v-col class="text-center">
                      <h1>{{ companyName }}</h1>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" class="mx-auto">
                      <v-text-field label="Company Name" v-model="companyName" class="text-center" style="font-size:2em" height="2em" solo outlined @keyup.enter="step++"></v-text-field>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <Fonts></Fonts>
                </v-window-item>
                <v-window-item :value="3">
                  <Colors></Colors>
                </v-window-item>
                <v-window-item :value="4">
                  <Icons></Icons>
                </v-window-item>
                <v-window-item :value="5">
                  <Fabric></Fabric>
                </v-window-item>
                <v-window-item :value="6">
                  Payment
                </v-window-item>

              </v-window>

                <v-row class="pt-4 px-4" align="center">
                  <v-col cols="12" class="mx-auto text-center">
                    <v-btn class="mr-2" :disabled="step === 1" color="warning" outlined rounded @click="step--">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                    <v-avatar color="" class="subtitle-3 white--text" size="30" v-text="step+'/6'"></v-avatar>
                    <v-btn class="ml-2" :disabled="step === 6 || companyName.length === 0" color="warning" rounded @click="step++">
                      Next
                      <v-icon dense>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" class="text-center">
                    <span class="font-weight-thin">Have a question?</span>
                    <v-btn text small to="/" color="warning" class="px-2">See our FAQ</v-btn>
                  </v-col>
                </v-row>

            </v-responsive>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-responsive>
</template>

<script>
  import {mapFields} from "vuex-map-fields";
  import Fonts from "../components/fonts";
  import Icons from "../components/icons";
  import Colors from "../components/colors";
  import Fabric from "../components/fabric";

  export default {
    auth: false,
    layout: 'auth',
    transitions: 'auth',
    components: { Fonts, Colors, Icons, Fabric},
    data () {
      return {
        loading: false,
        error: null,
        valid: false,
        companyNameRule: [
          v => !!v || 'Comany Name is required',
        ],
        step: 1,
      }
    },
    methods: {
    },
    computed: {
      ...mapFields(['companyName']),
      currentTitle () {
        switch (this.step) {
          case 1: return 'Type your company name'
          case 2: return 'Select a font'
          case 3: return 'Chose a color'
          case 4: return 'Pick an icon'
          case 5: return 'Make Some Adjustments'
          case 6: return 'Payment'
          default: return ''
        }
      },
    }
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
