export const namespaced = true
import { getField, updateField } from 'vuex-map-fields';

export const state = {
  companyName: '',
  font: '',
  fontWeight: '',
  fonts: ['Montserrat', 'Roboto', 'Raleway', 'Ranchers', 'Lobster', 'Comfortaa', 'Rowdies', 'MerryWeather'],
};

export const mutations = {
  updateField,
};

export const actions = {

}

export const getters = {
  getField,
}
