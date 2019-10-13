<template>
    <div>
      <div class="bg-cover bg-up"
      style="background-image:url('https://images.unsplash.com/photo-1555406952-814eb7de8cde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80');
            ">
      <div class="container">
        <div class="row justify-content-center">
        <div class="col-lg-5 coupon-box my-6 bg-white p-5 text-center" v-if="!star">
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

        <div class="col-lg-5 coupon-box my-6 p-5 bg-white text-center" v-else>
            <div v-if="chance">
              <div class="text-center text-danger h4">你還有{{chance}}次機會</div>
              <div v-for="(item, index) in onequestion" :key="index">
              <div class="card mx-auto" style="width: 18rem;" v-if="index === id">
                <img v-if="item.img" :src="item.img" class="card-img-top" style="max-height:250px;">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  <p class="card-text text-danger text-center h5">{{ans}}</p>
                  <div class="custom-control custom-radio"
                    v-for="(name,number) in item.chenckq" :key="number">
                    <input type="radio" class="custom-control-input"
                      :id="name" :value="name" v-model="check" :checked='checkeed'>
                    <label class="custom-control-label"
                      :for="name">{{name}}</label>
                  </div>
                  <a href="#" class="btn btn-primary mt-3"
                  v-if = !corss
                  @click.prevent="sub()">送出</a>
                  <!-- <a href="#" class="btn btn-danger"
                  v-else
                  @click.prevent="nextq()">下一題</a> -->
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
                class="btn btn-outline-Lorange mt-2">去購物</router-link>
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
      question: [],
      onequestion: {},
      ans: '',
      check: '',
      id: 0,
      corss: false,
      chance: 3,
      qcount: 0,
      star: false,
      checkeed: false
    }
  },
  methods: {
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
    sub () {
      if (this.onequestion[this.id].ans === this.check) {
        this.ans = '答對了'
        this.corss = true
        this.checkeed = false
        this.qcount += 1
        this.$store.dispatch('updateLoading', true)
        setTimeout(() => {
          this.nextq()
          this.$store.dispatch('updateLoading', false)
        }, 2000)
      } else {
        this.ans = '答錯了'
        this.chance -= 1
        this.corss = false
      }
    },
    nextq () {
      this.ans = ''
      this.coustomans = ''
      this.corss = false
      if (this.id >= 2) this.chance = 0
      if (this.id > 2) return
      this.id += 1
    },
    start () {
      this.getjson()
      this.star = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .coupon-box{
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px
  }
  .bg-up{
    position: relative;
    &::before{
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0.6;
    }
  }
</style>
