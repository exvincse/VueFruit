<template>
  <div>
    <div class="product-search input-group mb-5 mt-3 mt-lg-0 mx-auto">
         <input type="text"
             class="form-control pr-5"
             placeholder="搜尋商品"
             v-model.trim="searchname"
             @keyup.enter="search()">
          <button class="btn product-search-clear" style="z-index:20"
            v-if="claer"
            @click="ClearSearch()">
            <i class="fas fa-times"></i>
          </button>
      <div class="input-group-append">
        <button class="btn btn-outline-primary"
                @click="search()">搜尋</button>
      </div>
    </div>

    <div v-if="ary.length">
      <div class="text-center h3" v-if="searchshow">已搜尋到{{ary.length}}個商品</div>
      <div class="row">
        <div class="col-lg-6 col-xl-4 mb-4"
             v-for="item in pageproduct"
             :key="item.id">
            <div class="product-item">
              <div class="product-item-img"
                   :style="{backgroundImage:`url(${item.imageUrl})`}">
                <div class="d-none d-md-block">
                  <!-- <a href="#" class="product-item-link"
                    @click.prevent="gotoproduct(item.id)">
                      <span class="product-more">更多資訊</span>
                  </a> -->
                  <!-- <router-link :to="{name:'moreproduct',params:{id:item.id}}" class="product-item-link">
                     <span class="product-more">更多資訊</span>
                  </router-link> -->
                  <router-link :to="{path:'/moreproduct',query:{id:item.id}}" class="product-item-link">
                     <span class="product-more">更多資訊</span>
                  </router-link>
                </div>
              </div>

              <div class="product-item-content">
                <div class="product-item-title mb-3">
                  <h5 class="card-title mb-0">
                    <span href="#"
                          class="text-dark">{{item.title}}</span>
                  </h5>

                  <h6 class="mb-0">
                    <span class="badge ml-2"
                          :class="item.color">{{item.category}}</span></h6>
                </div>

                <p class="product-item-text card-text">{{item.content}}</p>

                <div class="product-item-price">
                  <div class="h5"
                       v-if="!item.origin_price">售價 {{item.price}} 元</div>
                  <del class="h6 text-secondary"
                       v-if="item.origin_price">原價 {{item.origin_price}} 元</del>
                  <div class="h5 text-primary"
                       v-if="item.origin_price">特價 {{item.price}} 元</div>
                </div>
              </div>

              <div class="product-item-footer d-flex bg-white">
                <button type="button"
                        class="btn btn-outline-primary btn-sm d-md-none d-block"
                        @click="gotoproduct(item.id)">
                  查看更多
                </button>
                <button type="button"
                        class="btn btn-primary ml-auto ml-md-0 addbtn"
                        @click="addtoCart(item.id)"
                        :disabled="loading===item.id">
                  <i class="fas fa-spinner fa-spin"
                     v-if="loading===item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="h3 text-center vh-100"
         v-else>
      沒有符合的商品
    </div>
    <pages :ary="ary"
           :makeout="'product'"
           @getPageData="getPageData"></pages>
  </div>
</template>

<script>
import pages from '@/components/common/Pages'
import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  components: {
    pages
  },
  props: ['active', 'getproduct'],
  data () {
    return {
      ary: [],
      pageproduct: [],
      products: [],
      product: {},
      searchname: '',
      claer: false,
      searchshow: false,
      filterdata: []
    }
  },
  watch: {
    // 點選分頁至頂或移動到特定地方
    getproduct () {
      this.ary = this.getproduct
      this.datafilter()
    },
    active () {
      this.datafilter()
      let target = $('.scroll-top')
      let targetHeight = target.offset().top
      let NavbarHeight = $('.nav').outerHeight()
      $('html, body').animate({
        scrollTop: targetHeight - (NavbarHeight * 2)
      }, 500, 'swing')
    }
  },
  // 接收vuex計算的資料
  computed: {
    ...mapState({
      loading: state => state.cartModules.loading
    })
  },
  methods: {
    // 呼叫時render分類
    datafilter () {
      this.ary = []
      this.searchname = ''
      this.claer = false
      this.searchshow = false
      if (this.active === 'all') {
        this.ary = Array.prototype.slice.call(this.getproduct)
        this.filterdata = Array.prototype.slice.call(this.ary)
      } else {
        this.getproduct.forEach((item) => {
          if (item.is_enabled === 1 && item.category.indexOf(this.active) !== -1) {
            this.ary.push(item)
          }
        })
        this.filterdata = Array.prototype.slice.call(this.ary)
      }
      this.ary.forEach((item) => {
        if (item.category === '水果') {
          item.color = 'badge-primary'
        } else if (item.category === '飲料') {
          item.color = 'badge-info'
        }
      })
    },
    // 新增至購物車
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
    },
    // 接收Pages子元件資料，來切換當頁資料
    getPageData (PageData) {
      this.pageproduct = PageData
    },
    // 輸入關鍵字來篩選當前資料
    search () {
      if (this.searchname === '') {
        return false
      }
      this.claer = true
      this.searchshow = true
      this.ary = this.filterdata.filter((item) => {
        return item.title.indexOf(this.searchname) !== -1
      })
    },
    // 清空搜尋欄位，並已全部資料顯示
    ClearSearch () {
      this.ary = []
      this.claer = false
      this.searchshow = false
      this.searchname = ''
      if (this.active === 'all') {
        this.ary = Array.prototype.slice.call(this.getproduct)
      } else {
        this.getproduct.forEach((item) => {
          if (item.is_enabled === 1 && item.category.indexOf(this.active) !== -1) {
            this.ary.push(item)
          }
        })
      }
    },
    // 點選商品查看更多
    gotoproduct (id) {
      // this.$router.push({
      //   name: 'productsid',
      //   params: {
      //     id
      //   }
      // })
      this.$router.push({
        path: '/moreproduct',
        query: {
          id
        }
      })
    }
  }
}
</script>
