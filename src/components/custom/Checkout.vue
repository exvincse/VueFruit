<template>
  <div>
    <div class="container mt-5">
      <div class="mb-3">
        <h1 class="text-center">結帳頁</h1>
        <div class="form-row text-center d-lg-flex d-none">
          <div class="col-sm col-12">
            <div class="alert alert-light alert-border"
                 role="alert">
              1.輸入訂單資料
            </div>
          </div>
          <div class="col-sm col-12">
            <div class="alert alert-primary alert-border"
                 :class="{'alert-light':check}"
                 role="alert">
              2.金流付款
            </div>
          </div>
          <div class="col-sm col-12">
            <div class="alert alert-primary alert-border"
                 :class="{'alert-light':!check}"
                 role="alert">
              3.完成
            </div>
          </div>
        </div>
        <div class="d-flex box-out text-center d-lg-none">
          <div class="item d-flex flex-column align-items-center">
            <div class="box box-success">
              1
            </div>
            <span>輸入訂單資料</span>
          </div>
          <div class="item d-flex flex-column align-items-center">
            <div class="box box-conduct"
              :class="{'box-success':check}">
              2
            </div>
            <span>金流付款</span>
          </div>
          <div class="item d-flex flex-column align-items-center">
            <div class="box"
              :class="{'box-success':check}">
              3
            </div>
            <span>完成</span>
          </div>
        </div>
      </div>
    <div class="mt-3 row justify-content-center">
      <div class="col-lg-10">
          <div class="row justify-content-center">
            <div class="col-lg-4 d-lg-block d-none" v-if="orderimfor">
              <div class="order-im p-4">
                <h5 class="title">訂單資訊</h5>
                  <div class="mb-3">
                      <span class="font-title">商品名稱 :</span><br>
                      <div class="font-msg"  v-for="item in products" :key="item.id">
                        {{item.product.title}}x{{item.qty}}
                      </div>
                  </div>
                  <div class="mb-3">
                    <span class="font-title">訂單編號 :</span><br>
                    <span class="font-msg">{{this.orderid}}</span>
                  </div>
                  <div class="mb-3">
                    <span class="font-title">訂單金額 :</span><br>
                    <span class="font-msg">NT$ {{order.total}}</span>
                  </div>
              </div>
            </div>
            <div class="col-lg-8 p-lg-5 pay">
              <router-view></router-view>
            </div>
          </div>
      </div>
      <div class="m-pos" v-if="orderimfor">
        <div class="d-lg-none d-block m-order">
          <div class="order-im p-4">
              <div class="mb-3">
                  <span class="font-title">商品名稱 :</span><br>
                  <div class="font-msg"  v-for="item in products" :key="item.id">
                    {{item.product.title}}x{{item.qty}}
                  </div>
              </div>
              <div class="mb-3">
                <span class="font-title">訂單編號 :</span><br>
                <span class="font-msg">{{this.orderid}}</span>
              </div>
              <div class="mb-3">
                <span class="font-title">訂單金額 :</span><br>
                <span class="font-msg">NT$ {{order.total}}</span>
              </div>
          </div>
          <a href="#" class="order-btn"
            @click.prevent="ordershow()">訂單資訊</a>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      check: false,
      orderid: '',
      order: {
        user: {}
      },
      products: [],
      orderimfor: true,
      step: ''
    }
  },
  created () {
    this.orderid = this.$route.params.id
    this.get()
  },
  watch: {
    '$route': function () {
      if (this.$route.path === `/checkout/${this.orderid}/paysuccess`) {
        this.orderimfor = false
        this.check = true
      } else {
        this.orderimfor = true
        this.check = false
      }
    }
  },
  methods: {
    get () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${this.orderid}`
      this.$http.get(api).then((response) => {
        this.order = response.data.order
        this.products = Object.values(this.order.products)
      })
    },
    // payOrder () {
    //   this.$store.dispatch('updateLoading', true)
    //   const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${this.orderid}`
    //   this.$http.post(api).then((response) => {
    //     if (response.data.success) {
    //       this.check = true
    //       this.get()
    //     }
    //     this.$store.dispatch('updateLoading', false)
    //   })
    // },
    ordershow () {
      $('.m-pos').toggleClass('m-pos-show')
    }
  }
}
</script>
