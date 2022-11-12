<template>
  <div style="position:fixed; z-index:1; margin-left:90px;">
    <nav class="navbar navbar-expand ">
      <div class="container">

        <div>
          <div class="dropdown open">
            <button
              style="width:70px;border:none;"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ><v-icon style="color:orange;">mdi-cart-variant</v-icon><span class="ty-minicart-title">{{cartItemCount}}</span> </button>
            <div @click="$event.stopPropagation()">
              <cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.ty-minicart-title{
    position: absolute;
    top: -15px;
    right: -10px;
    display: block;
    min-width: 26px;
    height: 26px;
    padding: 0;
    font-size: 12px;
    line-height: 26px;
    color: #fff;
    text-align: center;
    background: #00cc6a;
    border-radius: 50%;
    transition: all .4s ease-in-out;
    transform: translate3d(0,0,0);

}
</style>

<script>
import Cart from "./Cart";
import {  mapGetters } from "vuex";
export default {
  components: { Cart },
  computed: {
    ...mapGetters({
                cartItemCount: 'cartItemCount',
            })
  }
};
</script>

<style>
</style>