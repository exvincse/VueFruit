<template>
  <div>
    <div class="bg-color3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link class="item-link"
                    to="/index">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link class="item-link"
                    to="/newmsg">最新消息</router-link>
            </li>
            <li class="breadcrumb-item">
                <span class="text-secondary"
                    v-if="data.category === 'new'">最新訊息</span>
                <span class="text-secondary"
                    v-else-if="data.category === 'activity'">活動消息</span>
                <span class="text-secondary"
                    v-else-if="data.category === 'exposition'">展覽資訊</span>
            </li>
        </ol>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-9">
          <div class="now-article mb-4">
            <div class="now-article-title">
              <h4 v-if="data.category === 'new'">最新訊息</h4>
              <h4 v-else-if="data.category === 'activity'">活動消息</h4>
              <h4 v-else-if="data.category === 'exposition'">展覽資訊</h4>
            </div>
            <h2 class="mt-5 text-center">{{data.title}}</h2>
            <div class="my-4 text-center">
              <span class="now-article-time p-1">{{data.date}}</span>
            </div>
            <div class="mb-5 now-article-content">
              <p>{{data.content}}</p>
            </div>

            <div class="row">
              <div class="col-lg-6 d-flex flex-column flex-lg-row mb-5">
                <img class="now-article-content-img img-fluid" :src="require('../../assets/img/newspic1.jpg')" alt="">
                <p class="p-2 mb-0">我們發現水果店中出現了休閒食品的蹤跡，那麼水果店渠道對未來休閒食品發展又怎樣的意義呢？本期針對這個問題邀請了經銷商與大家一起共同探討。</p>
              </div>
              <div class="col-lg-6 d-flex flex-column flex-lg-row">
                <img class="now-article-content-img img-fluid" :src="require('../../assets/img/newspic2.jpg')" alt="">
                <p class="p-2 mb-0">我發現如今消費者除了去商超、便利店等傳統渠道購買零食外，往往會在購買其他產品例如水果時順便購買一些零食，像乾果、休閒小食品之類的。</p>
              </div>
            </div>
            <img class="img-fluid my-5" :src="data.img" alt=""
              style="min-width:100%">
            <p>{{data.content}}</p>
          </div>
        </div>

        <div class="col-lg-3 mb-5 d-lg-block d-none">
          <div class="hot-article">
            <h5 class="hot-article-title mb-3">熱門文章</h5>
            <div class="hot-article-item mb-3"
                  @click.prevent="view(item.id)"
                  v-for="item in hotdata" :key="item.id"
                  :title="item.title">
                <div class="mb-2">
                  <img :src='item.img'
                      width="255px"
                      height="180px">
                </div>
                <p class="item-text mb-0">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotdata: [],
      data: {}
    }
  },
  // created時呼叫ajax把data資料準備好
  created () {
    this.getdata()
  },
  watch: {
  // 監聽路由，發生變化執行方法
    '$route' () {
      this.getdata()
    }
  },
  methods: {
    // ajax呼叫github上的json
    getdata () {
      this.hotdata = []
      const api = '/jsondata/newmsg.json'
      let id = Number(this.$route.query.id)
      this.$http.get(api).then((response) => {
        let data = response.data.data
        let filter = data.filter((item) => {
          return item.id === id
        })
        this.data = Object.assign({}, filter)[0]
        this.random(data, this.data)
      })
    },
    // 亂數隨機抽取文章
    random (data, remove) {
      data.splice(remove.id - 1, 1)
      for (let i = 0; i <= 4; i++) {
        let item = Math.floor(Math.random() * data.length)
        this.hotdata.push(data.splice(item, 1)[0])
      }
    },
    // 呼叫vuex傳遞資料
    view (id) {
      this.$store.dispatch('view', id)
    }
  }
}
</script>
