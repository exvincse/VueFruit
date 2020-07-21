<template>
  <div>
    <header>
      <div class="bg-cover header-bg">
        <div class="py-5 header-content">
          <h2>不可錯過</h2>
          <p class="h5">渴望，記憶中的水果</p>
          <p class="h5">品質好的水果</p>
          <p class="h5">會讓你總是想起那個味道</p>
        </div>
      </div>
    </header>

    <section class="hot-product mt-3">
      <h2 class="my-4">熱門商品</h2>
      <topProduct class="mb-4" :topdata="data"></topProduct>
      <router-link to="/products" class="hot-product-btn btn btn-primary mb-5">
        MORE
      </router-link>
    </section>

    <section class="new-message mt-5">
      <div class="container">
        <h2 class="mb-4">最新訊息</h2>
        <section class="animate-top d-lg-flex justify-content-around mb-5 d-none">
          <div class="new-message-item"
              @click.prevent="view(item.id)"
              v-for="item in newsdata" :key="item.id">
            <div class="pic mb-2">
              <div class="pic-animate bg-cover"
                  :style="{'background-image':`url(${item.img})`}"></div>
              <div class="pic-bg"></div>
              <span href="#" class="pic-view">VIEW</span>
            </div>
            <p class="text mb-0 text-secondary">{{item.title}}</p>
            <span>{{item.date}}</span>
          </div>
        </section>

        <section class="mobile-new-message mb-5 d-lg-none">
            <div class="item"
              v-for="item in newsdata" :key="item.id">
              <a href="#" class="box-text mb-1 text-secondary"
                @click.prevent="view(item.id)">
              <span class="badge badge-secondary h3">重要</span>
              <span>{{item.date}}</span>
              {{item.title}}
              </a>
            </div>
        </section>
        <router-link to="/newmsg"
              class="btn btn-primary" style="width:120px;"
              >MORE</router-link>
      </div>
    </section>

    <section class="about mt-5 p-lg-5 p-3"
      :style="{'background-image': `url(${require('../../assets/img/about-bg.jpg')})`}">
      <div class="container">
        <div class="row mt-3">
          <div class="col-lg-5 ml-auto animate-top text-white">
              <h2 class="text-center mb-4">關於FruitFamily</h2>
              <p class="mb-4">伏入特水果成立於1995年，創始人從一輛三輪車起步，帶領伏入特水果成為國內知名的果品連鎖企業。目前伏入特水果已擁有700+家全國門店，
                近200個全球合作種植基地。</p>
              <p>回憶伏入特水果的發展歷程，創始人深有感觸：「現在是水果行業發展的黃金時代，2020年中國水果的消費量將達到2.91億噸，但市場集中度非常低，有著巨大的整合空間。而伏入特水果在20年中積累了大量行業經驗，通過線下門店渠道網絡逐漸完善與高效的供應鏈管理，已經形成巨大的先發優勢。」</p>
          </div>
        </div>
      </div>
    </section>

    <div class="about mt-5 p-5"
      style="height: 180px;"
      :style="{'background-image': `url(${require('../../assets/img/server-list.jpg')})`}">
    </div>

    <div class="service-list p-lg-5 p-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h3>服務項目</h3>
            <p class="mb-3 text-color2 text-lg-center text-left">
              伏入特擁有自己的綠色海洋，邀請您來體驗種植的樂趣．遠離都市的紛擾，給自己假日一天休閒之旅。
              不但能放鬆，還能帶精美的體驗水果禮品回家．體驗完還能坐在古色古香的休憩區，挑望一片綠油油的美景，聞聞水果茶，
              喝一杯能讓自己即使回到忙碌的城市工作，只要下午Tea time時，總能想起的放鬆好茶。</p>
            <router-link class="btn btn-primary"
                  to="/newmsg/service">MORE</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="product-pic my-5 d-lg-flex justify-content-center d-none">
      <swiper :options="Bswiper" style="height:250px">
        <swiper-slide>
          <div class="text-center py-5 bg-w-color1" style="max-height:210px">
            <div class="pic-title">
              <span class="h2">產品相簿</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide v-for="item in data" :key="item.id">
          <div class="bg-cover bg-pic mb-5" style="max-height:210px"
              :style="{backgroundImage:`url(${item.imageUrl})`}">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="product-pic my-5 d-flex justify-content-center d-lg-none">
      <swiper :options="RWDBswiper" style="height:250px">
        <swiper-slide>
          <div class="bg-pic text-center py-5 bg-w-color1" style="max-height:210px">
            <div class="pic-title">
              <span class="h2">產品相簿</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide v-for="item in data" :key="item.id">
          <div class="bg-cover bg-pic mb-5" style="max-height:210px"
              :style="{backgroundImage:`url(${item.imageUrl})`}">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>

<script>
import topProduct from '@/components/custom/Topproduct'
import $ from 'jquery'
export default {
  components: {
    topProduct
  },
  created () {
    // ajax獲取資料
    this.productpic()
    this.getdata()
  },
  data () {
    return {
      Bswiper: {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      RWDBswiper: {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      data: [],
      newsdata: [],
      top: false
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
    // 呼叫Vuex modules Mproduct/getProducts方法，並使用promise等待當前ajax結束後才取得資料
    productpic () {
      this.$store.dispatch('productModules/getProducts').then(() => {
        this.data = this.$store.state.productModules.product
      })
    },
    // 原生scroll事件向下滑顯示動畫效果
    scroll () {
      if (this.top) {
        window.removeEventListener('scroll', this.scroll)
        return false
      } else {
        let scrollPos = $(window).scrollTop()
        let windowHeight = $(window).height()
        let vm = this
        $('.animate-top').each(function () {
          let Top = $(this).offset().top
          if ((windowHeight + scrollPos) >= Top) {
            $(this).addClass('animate-top-show')
          }
          if (scrollPos >= 1700) vm.top = true
        })
      }
    },
    // ajax呼叫github上的json
    getdata () {
      const api = '/jsondata/newmsg.json'
      this.$http.get(api).then((response) => {
        let data = response.data.data
        for (let i = 0; i <= 4; i++) {
          this.newsdata.push(data[i])
        }
      })
    },
    // 呼叫vuex傳遞資料
    view (id) {
      this.$store.dispatch('view', id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header-bg{
     background-image:url('../../assets/img/banner-bg.jpg');
     position:relative;
     height:450px;
  }
</style>
