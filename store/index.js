export const namespaced = true
import { getField, updateField } from 'vuex-map-fields';

export const state = {
    companyName: '',
    font: '',
    fontWeight: '',
    fonts: ['Montserrat', 'Roboto', 'Raleway', 'Ranchers', 'Comfortaa', 'Rowdies', 'MerryWeather', 'Lobster', 'Pacifico'],
    icon: '',
    icons: {
      'mdi-file-chart': '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z" /></svg>',
      'mdi-lifebuoy': 'testing',
      'mdi-update': 'testing'
    },
};

export const mutations = {
  updateField,
};

export const actions = {

}

export const getters = {
  getField,
}
