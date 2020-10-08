export const namespaced = true
import { getField, updateField } from 'vuex-map-fields';

export const state = {
    companyName: '',
    font: '',
    fonts: ['Montserrat', 'Roboto', 'Raleway', 'Ranchers', 'Comfortaa', 'Rowdies', 'MerryWeather', 'Lobster', 'Pacifico'],
    icon: null,
    icons: {
      'mdi-file-chart': '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z" /></svg>',
      'mdi-airplane': '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /><svg>',
      'mdi-hammer-wrench' : '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" /></svg>'
    },
    color: '',
    colors: ['#F44336', '#4CAF50', '#9e9e9e', '#ff9800', '#2196F3'],
    canvasSave: {},
};

export const mutations = {
  updateField,
};

export const actions = {

}

export const getters = {
  getField,
}
