<template>
  <div>
    <nav class="nav-fixed l-nev navbar navbar-expand-lg navbar-light justify-content-between" style="z-index:5000;">
      <router-link to="/index"
                    class="text-white">
        <div style="width:30px;height:30px"
        :style="{'background-image':`url(${require('../assets/img/logo.png')})`}"></div>
      </router-link>

      <div class="d-flex align-items-center">
        <div class="d-lg-block d-none">
        <ul class="navbar-nav ml-auto h6">
          <li class="l-nav-item mr-4">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/newmsg">最新消息</router-link>
          </li>
          <li class="l-nav-item mr-4">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/index">首頁</router-link>
          </li>

          <li class="l-nav-item mr-4">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/products">商品</router-link>

          </li>
          <li class="l-nav-item mr-4">
            <router-link to="/getcoupon"
                        class="nav-link l-border"
                        exact-active-class="l-active">
              獲取優惠卷</router-link>
          </li>
        </ul>
        </div>

        <div class="d-flex">
          <button class="navbar-toggler" style="height:34px"
                  type="button"
                  data-toggle="collapse"
                  data-target="#ClientNav">
            <i class="fas fa-bars text-white"></i>
          </button>
        </div>
      </div>

      <div class="collapse navbar-collapse"
            id="ClientNav">
        <ul class="navbar-nav ml-auto h6">
          <li class="l-nav-item p-2 mr-lg-3"
            @click="DropHide()">
            <router-link to="/getcoupon"
                        class="nav-link l-border"
                        exact-active-class="l-active">
              獲取優惠卷</router-link>
          </li>
          <li class="l-nav-item p-2 mr-lg-3"
            @click="DropHide()">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/newmsg">最新消息</router-link>
          </li>
          <li class="l-nav-item p-2 mr-lg-3"
              @click="DropHide()">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/index">首頁</router-link>
          </li>
          <li class="l-nav-item p-2 mr-lg-3"
              @click="DropHide()">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/products">商品</router-link>

          </li>
          <li class="p-2 mr-lg-3">
            <router-link class="nav-link l-border"
                          exact-active-class="l-active"
                          to="/login">後台</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods: {
    DropHide () {
      $('.navbar-toggler').click()
    }
  }
}
</script>
