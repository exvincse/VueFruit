<template>
  <div>
    <navbar></navbar>
    <div style="padding-top:54px;">
      <router-view></router-view>
      <smallcart class="smallcart" v-if='SmallCart'></smallcart>
    </div>
    <footer class="footer">
      <div class="p-5"
           style="background-color:#3c3c3c">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
             <div class="text-white">
                02-1111-2222<br>
              12345678@email.com<br>
              364 苗栗縣大湖鄉水果路 111 號
             </div>
            </div>

            <div class="col-lg-9">
              <div class="text-lg-right text-left mt-lg-0 mt-4 mb-2">
                <a href="#"
                   class="mr-2 text-white">
                  <i class="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="#"
                   class="mr-2 text-white">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#"
                   class="mr-2 text-white">
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div class="text-lg-right text-left text-white">
                <span>以上僅學習參考用，無任何商業用途</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import navbar from '@/components/Clientnav'
import smallcart from '@/components/custom/Smallcart'
import $ from 'jquery'
export default {
  components: {
    navbar,
    smallcart
  },
  data () {
    return {
      SmallCart: true
    }
  },
  created () {
    // ajax獲取資料
    this.CartShow()
  },
  watch: {
    // 監聽路由並呼叫vuex Mcart/getCart方法
    '$route' () {
      this.CartShow()
      this.$store.dispatch('cartModules/getCart')
    }
  },
  mounted () {
    // mounted hook資料畫面render好後註冊原生事件
    window.addEventListener('scroll', this.scroll)
  },
  beforeDestroy () {
    // beforeDestroy hook銷毀原生事件
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    // 原生scroll事件購物車
    scroll () {
      let scrollPos = $(window).scrollTop()
      let windowHeight = $(window).height()
      let footerHeight = $('footer').height()
      let htmlHeight = $('html').height() - windowHeight
      if (scrollPos >= htmlHeight - footerHeight) {
        let h = footerHeight - (htmlHeight - scrollPos)
        $('.smallcart').css('bottom', `${h + 10}px`)
      } else {
        $('.smallcart').css('bottom', '10px')
      }
    },
    // 監聽路由隱藏購物車
    CartShow () {
      if (this.$route.path === '/cart' || this.$route.path.indexOf('newmsg') !== -1) {
        this.SmallCart = false
      } else {
        this.SmallCart = true
      }
    }
  }
}
</script>
