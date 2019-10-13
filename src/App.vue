<template>
  <div id="app">
    <alert></alert>
    <!-- <loading :active.sync="loading"
             style="z-index:9999;overflow-y:hidden;"></loading> -->
    <div class="loading" v-show="loading">
      <i class="fas fa-spinner fa-pulse fa-4x"></i>
      <span>請稍後...</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import alert from '@/components/common/Alert'
export default {
  components: {
    alert
  },
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>

<style lang='scss'>
  @import "./assets/all";
  .loading{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 9999;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background:rgba(255, 255, 255, 0.75);
      z-index: -1;
    }
  }
</style>
