<<<<<<< HEAD
export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, text) {
      state.list.push({
        text,
        done: false
      })
    },
    remove (state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
      todo.done = !todo.done
    }
  }
=======
export const namespaced = true
import { getField, updateField } from 'vuex-map-fields';

export const state = {
  companyName: ''
};

export const mutations = {
  updateField,
};

export const actions = {

}

export const getters = {
  getField,
}
>>>>>>> a1c5380... nuxt fabric js working
