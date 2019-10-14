<template>
  <div>
    <div class="slide-bg d-none" @click="hide()"></div>
    <nav class="col-md-2 bg-light sidebar sidemenu">
      <div class="sidebar-sticky">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span class="h5">管理員</span>
          <a class="d-flex align-items-center text-muted"
             href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="side-list flex-column mb-2">
          <li class="side-list-item"
            :class="{'active':showname === 'product'}"
            @click="hide(),showname = 'product'">
            <router-link class="nav-link"
                         to="/admin/products">
              <i class="fas fa-box-open"></i>
              產品列表
            </router-link>
          </li>

          <li class="nav-item"
            :class="{'active':showname === 'order'}"
            @click="hide(),showname = 'order'">
            <router-link class="nav-link"
                         to="/admin/orderlist">
              <i class="far fa-list-alt"></i>
              訂單列表
            </router-link>
          </li>

          <li class="nav-item"
            :class="{'active':showname === 'coupon'}"
            @click="hide(),showname = 'coupon'">
            <router-link class="nav-link"
                         to="/admin/coupons">
              <i class="fas fa-money-bill-alt"></i>
              優惠卷
            </router-link>
          </li>

          <li class="nav-item"
            :class="{'active':showname === 'question'}"
            @click="hide(),showname = 'question'">
            <router-link class="nav-link"
                         to="/admin/question">
              <i class="fas fa-question"></i>
              優惠卷題目
            </router-link>
          </li>

          <li class="nav-item"
            :class="{'active':showname === 'sales'}"
            @click="hide(),showname = 'sales'">
            <router-link class="nav-link"
                         to="/admin/salescanvas">
              <i class="far fa-chart-bar"></i>
              銷售統計圖表
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      showname: 'product'
    }
  },
  methods: {
    // 裝置寬度小於某個斷點時左上方顯示按鈕，SideBar則隱藏
    hide () {
      $('.sidemenu').removeClass('sideshow')
      $('.slide-bg').removeClass('d-block')
    }
  }
}
</script>
<style lang="scss" scope>
  .active{
    background-color: #000;
    .nav-link{
      color: #fff;
    }
  }
</style>
