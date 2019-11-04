<template>
    <div>
      <div class="coupon-bg bg-cover"
      :style="{'background-image':`url(${require('../../assets/img/coupon-bg.jpg')})`}">
      <div class="container">
        <div class="row justify-content-center">
          <div class="coupon-exp col-lg-5 my-6 p-5" v-if="!star">
            <span class="h2">獲取免費優惠卷</span><br>
            <span class="h4">說明:</span>
            <p class="h5 text-center">
              請根據題目答題，總共有3題<br>
              <span class="text-danger">並且只有3次機會</span>，只要3題都答對就能享有90%優惠<br>
              當然有答對也有優惠
              <ul class="p-0" style="list-style: none;">
                <li>1題，30%</li>
                <li>2題，50%</li>
                <li>3題，90%</li>
              </ul>
            </p>
            <button class="btn btn-primary" @click="start()">開始</button>
          </div>

          <div class="coupon-exp col-lg-5 my-6 p-5 bg-white" v-else>
            <div v-if="chance">
              <div class="text-center text-danger h4">你還有{{chance}}次機會</div>
              <div v-for="(item, index) in onequestion" :key="index">
              <div class="card mx-auto" v-if="index === id">
                <img v-if="item.img" :src="item.img" class="card-img-top" style="max-height:250px;">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  <div class="custom-control custom-radio"
                    v-for="(name,number) in item.chenckq" :key="number">
                    <input type="radio" class="custom-control-input"
                      ref="radio"
                      :id="name" :value="name" v-model="check" :checked='checkeed'>
                    <label class="custom-control-label cursor"
                      :for="name">{{name}}</label>
                  </div>
                  <a href="#" class="btn btn-primary mt-3"
                    v-if = !corss
                    @click.prevent="sub()">送出</a>
                </div>
              </div>
              </div>
            </div>
            <div class="py-5 my-6" v-else>
              <h2>恭喜!</h2>
              <div class="h5 text-center" v-if="qcount===0">甚麼都沒有</div>
              <div class="h5 text-center" v-else-if="qcount===1">您答對1題，獲得30%折扣，優惠碼333</div>
              <div class="h5 text-center" v-else-if="qcount===2">您答對2題，獲得50%折扣，優惠碼222</div>
              <div class="h5 text-center" v-else-if="qcount===3">您答對3題，獲得90%折扣，優惠碼111</div>
              <router-link to="/products"
                class="btn btn-outline-primary mt-2">去購物</router-link>
            </div>
          </div>

          <div class="modal fade coupon-modal" id="exampleModal" tabindex="-1">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header bg-success"
                  :class="{'bg-danger': !modalshow}">
                  <h5 v-if="modalshow" class="modal-title" id="exampleModalLabel">答對了</h5>
                  <h5 v-else class="modal-title" id="exampleModalLabel">答錯了</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-center">
                  你還有{{chance}}次機會
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                </div>
              </div>
            </div>
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
      question: [],
      onequestion: {},
      ans: '',
      check: '',
      id: 0,
      corss: false,
      chance: 3,
      qcount: 0,
      star: false,
      checkeed: false,
      modalshow: false
    }
  },
  methods: {
    // ajax獲取firebase資料
    getjson () {
      // proxyTable跨域代理
      // this.$store.dispatch('updateLoading', true)
      // const api = '/jsondata/data.json'
      // this.$http.get(api).then((response) => {
      //   this.question = response.data.data
      //   this.getquest()
      //   this.$store.dispatch('updateLoading', false)
      // })
      this.$store.dispatch('updateLoading', true)
      this.$firebase.database().ref('/question/').once('value').then((snapshot) => {
        this.question = Object.values(snapshot.val())
        this.getquest()
        this.$store.dispatch('updateLoading', false)
      })
    },
    // 隨機抽3題
    getquest () {
      let ary = []
      for (let i = 0; i <= 2; i++) {
        let item = Math.floor(Math.random() * this.question.length)
        ary.push(this.question.splice(item, 1)[0])
      }
      this.onequestion = ary

      // let ary = []
      // let item = this.question[Math.floor(Math.random() * this.question.length)]
      // ary.push(item)
      // while (ary.length >= 0) {
      //   if (ary.length >= 3) break
      //   let it = this.question[Math.floor(Math.random() * this.question.length)]
      //   let count = 0
      //   ary.forEach((item) => {
      //     if (item.id !== it.id) {
      //       count += 1
      //       if (count >= ary.length) {
      //         ary.push(it)
      //       }
      //     }
      //   })
      // }
      // this.onequestion = ary
    },
    // 驗證是否答對
    sub () {
      this.$store.dispatch('updateLoading', true)
      if (this.onequestion[this.id].ans === this.check) {
        this.ans = '答對了'
        this.corss = true
        this.qcount += 1
        let time = setTimeout(() => {
          this.modalshow = true
          if (this.id < 2) {
            $('#exampleModal').modal('show')
          }
          this.nextq()
          clearTimeout(time)
          this.$nextTick(() => {
            this.$refs.radio.forEach((item) => {
              item.checked = false
            })
          })
          this.$store.dispatch('updateLoading', false)
        }, 1000)
      } else {
        let time = setTimeout(() => {
          this.modalshow = false
          this.chance -= 1
          if (this.chance) {
            $('#exampleModal').modal('show')
          }
          clearTimeout(time)
          this.$store.dispatch('updateLoading', false)
        }, 1000)
        this.corss = false
      }
    },
    // 前往下一題
    nextq () {
      this.ans = ''
      this.coustomans = ''
      this.corss = false
      if (this.id >= 2) this.chance = 0
      if (this.id > 2) return false
      this.id += 1
    },
    // 點選開始鈕
    start () {
      this.getjson()
      this.star = true
    }
  }
}
</script>
