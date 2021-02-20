<template>
  <div class='v-header'>
    <div class="cart-widget">
      <span class="cart">Cart</span>

      <!-- V IF => DROPDOWN_STATE - GETTER -->
      <!-- v-if="DROPDOWN_STATE"  ЭТО ДЛЯ ПЕРВОГО ВАРИАНТА, НЕ МОЕГО -->
      <div
          class="cart__dropdown"
          
          v-if="DROPDOWN_SECOND_STATE"
          
      >
<!-- DROPDOWN_SECOND_STATE    МОЙ ВТОРОЙ ВАРИАНТ -->


      <!--END  V IF => DROPDOWN_STATE - GETTER -->
        <span>Товар в корзине</span>
        <button class="to_cart">Перейти</button>
      </div>
    </div>
  </div>
</template>

<script>

// Подключаем геттеры
  import {mapGetters} from 'vuex'
//


  export default {
    name: "v-header",
    data() {
      return {}
    },
    
// подключаем геттеры 
    computed: {
      ...mapGetters([
        'DROPDOWN_STATE',

        // 
        // МОЙ ТЕСТ ВТОРОЙ
        'DROPDOWN_SECOND_STATE'
      ])
    }
  }
</script>

<style>
  .v-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    padding: 16px;
    background: cornflowerblue;
    color: #ffffff;
  }
  .cart {
    font-weight: bold;
  }
  .cart-widget {
    position: relative;
  }
  .cart__dropdown {
    position: absolute;
    top: 22px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 5px 12px 0px #9c9c9c;
    color: #2d2d2d;
    background-color: #ffffff;
    padding: 16px;
  }
  .to_cart {
    margin-top: 10px;
    padding: 8px 16px;
    border: solid 1px #e7e7e7;
    border-radius: 4px;
    background: dodgerblue;
    color: #ffffff;
    outline: none;
    cursor: pointer;
  }
  .to_cart:hover {
    background-color: #1e6bd5;
  }
</style>