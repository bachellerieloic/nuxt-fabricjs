<template>
  <v-responsive max-width="900" class="mx-auto">
    <v-row align="center" justify="center" class="mx-0 my-0 mt-0">
      <v-col cols="12" class="mx-auto">
        <v-card class="py-12 pb-6" style="border-radius:40px">

          <v-card-title class="justify-center flex-column">
            <h1 class="text-h4">
              <v-icon size="1em">mdi-image-edit-outline</v-icon>
              Image Maker
            </h1>
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
                      <p class="text-center">Enter the name of your company</p>
                      <v-text-field label="Company Name" v-model="companyName" class="text-center" style="font-size:2em" height="2em" outlined @keyup.enter="step++"></v-text-field>
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

              </v-window>
              <v-divider></v-divider>
              <v-flex>
                <v-row class="pt-4 px-4" align="center">
                  <v-col cols="4">
                    <v-btn :disabled="step === 1" color="warning" outlined rounded @click="step--">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <v-avatar color="warning" class="subtitle-3 white--text" size="30" v-text="step+'/3'"></v-avatar>
                  </v-col>
                  <v-col cols="4" class="text-right">
                    <v-btn :disabled="step === 5 || companyName.length === 0" color="warning" rounded @click="step++">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <span class="font-weight-thin">Have a question?</span>
                    <v-btn text small to="/" color="warning" class="px-2">See our FAQ</v-btn>
                  </v-col>
                </v-row>
              </v-flex>

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

  export default {
    auth: false,
    layout: 'auth',
    transitions: 'auth',
    components: { Fonts, Colors, Icons },
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
          case 1: return 'Company Name'
          case 2: return 'Fonts'
          case 3: return 'Colors'
          case 4: return 'Icons'
          case 5: return 'Fabric'
          default: return 'You\'re done!'
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
