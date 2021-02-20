import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({


  // ___________________________________________________________________________________LINE______________________________________________
  // STATE - ЭТО ХРАНИЛИЩЕ СОСТОЯНИЙ - ОБЩИЕ на все компоненты
  // Менять состояние STATE МОЖНО ТОЛЬКО С ПОМОЩЬЮ МУТАЦИЙ (синхронные)
  state: {
    isDropDownVisible: false,
    // 
    // мой код второй
    dropDownSecond: false
  },
  // ___________________________________________________________________________________LINE______________________________________________


  // Мутации синхронны, будут выполняться по очереди
  // Мутация меняет STATE - НАПРИМЕР => state.isDropDownVisible; на что-то  (true/false)
  mutations: {
    CHANGE_DROPDOWN: (state) => {
      state.isDropDownVisible = !state.isDropDownVisible;
    },
    // 
    // 
    // МОЙ ВАРИАНТ ТЕСТА
    CHANGE_DROPDOWN_SECOND: (state) => {
      state.dropDownSecond = !state.dropDownSecond;
    }
  },
  // ___________________________________________________________________________________LINE______________________________________________


  // Экшены асинхронные в отличие от мутаций(синхронные)
  // Commit - это как обращаемся к мутации
  // ACTIONS - это действия

  // Экшен вызывает (асинхронно) мутацию через коммит - commit('CHANGE_DROPDOWN')
  actions: {
    TOGGLE_DROPDOWN({ commit }) {
      commit('CHANGE_DROPDOWN')
    },

    // 
    // 
    // МОЙ ВАРИАНТ ТЕСТА
    TOGGLE_DROPDOWN_SECOND({ commit }) {
      commit('CHANGE_DROPDOWN_SECOND')
    }
  },
  // ___________________________________________________________________________________LINE______________________________________________


  // Геттер в себе несет, и следит  за значением переменной - состояния state.isDropDownVisible;

  getters: {
    DROPDOWN_STATE(state) {
      return state.isDropDownVisible;
    },


    // МОЙ ВАРИАНТ ТЕСТА
    DROPDOWN_SECOND_STATE(state) {
      return state.dropDownSecond;
    }
  }
})

export default store;
// ___________________________________________________________________________________LINE______________________________________________

// АЛГОРИТМ И РЕКОМЕНДАЦИИ 
// 
// 

// во Vue есть mapActions, mapGetters и другие - вспомогательные методы


// Чтобы приминять mapGetters в компоненте нужно создать COMPUTED и в нем создать ...mapGetters( ['TOOGE'] )
// если все ок, проверить можно через devtoolse vue - смотреть в структуре компонентов 
// конкретно в компоненте, где вызвал mapGetters , будет vuex buildings состояние в dev-tools, видишь геттер


// Пишем в компоненте, в разделе methods()

// как обратиться к мутации или действию из компонента


// MUTATION - к мутации напрямую - this.$store.commit('TOOGLE') - и название мутации()

// ACTION - к действию(actions) this.$store.dispatch('TOOGLE2')


// если сократить обращения к действиям пишем import mapActions и вызываем в компоненте в methods()
// и, ...mapActions(['TOOGLE-action-store'])
// и в methods создаем функцию, например btn() {
//   this.TOOGLE - action - store
// }


// mapGetters => COMPUTED(...mapGetters(['TOOGLE-getters']))
// magActions => METHODS(...mapActions(['TOGGLE-actions']))

// смотреть компоненты где вся суть v-catalog-item, v-header


// НЕОБХОДИМО ТАК ЖЕ В КАРТОЧКЕ ВЫЗЫВАТЬ GETTERS , ACTIONS , А В HEADER Я ВЫЗЫВАЛ  ТОЛЬКО GETTERS