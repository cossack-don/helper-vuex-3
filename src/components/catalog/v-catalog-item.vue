<template>
  <div class='v-catalog-item'>
    <img src="../../assets/logo.png" alt="">
    <p>Курс по Vue.js</p>
    <br>
    <p>10 000 ₽</p>
    <!-- вариант теста store -->
    <button @click="btnClick" class="to_cart">Add to cart</button>


    <!-- Мой вариант кнопки store -->
    <button @click="btnSECONDvariant" class="to_cart" style="background:red;">SECOND VARIANT</button>
  </div>
</template>

<script>
// 
// ПОДКЛЮЧАЕМ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ mapGetters,mapActions
  import {mapGetters, mapActions} from 'vuex'
// 
  export default {
    name: "v-catalog-item",
    props: {},
    data() {
      return {}
    },

    // 
    // COMPUTED
    computed: {
      // ВЫЗЫВАЕМ ГЕТТЕРЫ ИЗ STORE.GETTERS и имя геттера (DROPDOWN_STATE)
      ...mapGetters([
        'DROPDOWN_STATE',
        'DROPDOWN_SECOND_STATE'
      ])
    },
    // 
    // METHODS
    methods: {
      // ВЫЗЫВАЕМ ACTIONS ИЗ STORE.ACTIONS и имя action (TOGGLE_DROPDOWN)
      ...mapActions([
        'TOGGLE_DROPDOWN',
        'TOGGLE_DROPDOWN_SECOND'
      ]),

      btnClick() {
        this.TOGGLE_DROPDOWN()
      },
      // 
      // 
      btnSECONDvariant() {
        // имя ЭКШЕНА
        // и ВЫЗЫВАЕМ ФУНКЦИЮ С ПОМОЩЬЮ СКОБОК ()
        this.TOGGLE_DROPDOWN_SECOND()
      }
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    box-shadow: 0px 5px 12px 0px #9c9c9c;
    color: #2d2d2d;
  }
</style>