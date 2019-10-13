<template>
  <div>
    <nav class="nav">
      <router-link to="/index" class="text-white">
        <div style="width:30px;height:30px"
        :style="{'background-image':`url(${require('../assets/img/logo.png')})`}"></div>
      </router-link>

      <button class="menu-btn" type="button"
        @click="navshow = !navshow">
        <i class="fas fa-bars text-white"></i>
      </button>
      <div class="menu" :class="{'menu-show':navshow}">
        <ul class="h6">
          <li class="menu-item">
            <router-link class="menu-item-border"
                          exact-active-class="l-active"
                          to="/newmsg">最新消息</router-link>
          </li>
          <li class="menu-item">
            <router-link class="menu-item-border"
                          exact-active-class="l-active"
                          to="/index">首頁</router-link>
          </li>
          <li class="menu-item">
            <router-link class="menu-item-border"
                          exact-active-class="l-active"
                          to="/products">商品</router-link>

          </li>
          <li class="menu-item">
            <router-link to="/getcoupon"
                        class="menu-item-border"
                        exact-active-class="l-active">
              獲取優惠卷</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navshow: false
    }
  },
  watch: {
    '$route' () {
      this.navshow = false
    }
  }
}
</script>
