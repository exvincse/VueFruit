<template>
  <div>
    <div class="my-5">
      <h2 class="step">STEP2. 填寫付款資訊</h2>
      <div v-if="category === 'union' || category === 'credit'">
        <div class="text-center mb-5">信用卡/金融卡</div>
        <form @submit.prevent="submitpage()">
          <div class="form-group">
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="pay" name="pay" class="custom-control-input" checked>
              <label class="custom-control-label cursor" for="pay">一次付款</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="installments" name="pay" class="custom-control-input">
              <label class="custom-control-label cursor" for="installments">分期付款</label>
            </div>
          </div>

          <div class="form-group">
            <label for="cardnumber">信用卡號 :</label>
            <div class="d-flex align-items-center card-outer">
              <div class="card-number mr-4">
                <input type="text" class="form-control" maxlength="4" id="cardnumber"
                  name="cardnumber"
                  v-model="card"
                  :class="{'is-invalid': errors.has('cardnumber')}"
                  v-validate="'required'">
              </div>
              <div class="card-number mr-4">
                <input type="text" class="form-control" maxlength="4" id="cardnumber"
                  name="cardnumber"
                  :class="{'is-invalid': errors.has('cardnumber')}"
                  v-validate="'required'">
              </div>
              <div class="card-number mr-4">
                <input type="text" class="form-control" maxlength="4" id="cardnumber"
                name="cardnumber"
                :class="{'is-invalid': errors.has('cardnumber')}"
                  v-validate="'required'">
              </div>
              <div class="card-number">
                <input type="text" class="form-control" maxlength="4" id="cardnumber"
                name="cardnumber"
                :class="{'is-invalid': errors.has('cardnumber')}"
                  v-validate="'required'">
              </div>
              <div class="d-none d-lg-block">
                <i class="card-color fab fa-cc-visa fa-2x mx-2"
                :class="{'text-primary':active === 'visa'}"></i>
                <i class="card-color fab fa-cc-mastercard fa-2x mr-2"
                  :class="{'text-primary':active === 'mastercard'}"></i>
                <i class="card-color fab fa-cc-jcb fa-2x"
                  :class="{'text-primary':active === 'jcb'}"></i>
              </div>
            </div>
            <span class="text-danger"
                  v-if="errors.has('cardnumber')">信用卡號不得留空</span>
          </div>

          <div class="form-group">
              <label for="date">有效年月 :</label>
              <div class="d-flex align-items-center">
                <select name="month" id="month" class="custom-select w-30">
                  <option v-for="n in 12"
                    :value='n' :key="n">{{n}}</option>
                </select>

                <div class="mx-2">/</div>
                <select name="year" id="year" class="custom-select w-30">
                  <option v-for="n in date" v-if="n >= 1990"
                    :value='n' :key="n">{{n}}</option>
                </select>
                <span>年</span>
              </div>
          </div>

          <div class="form-group">
            <label for="lastcard">背面末三碼</label>
            <div class="d-flex align-items-center">
              <input type="text" id="lastcard" class="form-control w-25 mr-2" maxlength="3"
                  name="lastcard"
                  :class="{'is-invalid': errors.has('lastcard')}"
                  v-validate="'required'">
              <i class="fas fa-credit-card fa-2x card-color"></i>
            </div>
            <span class="text-danger"
                  v-if="errors.has('lastcard')">背面末三碼不得留空</span>
          </div>

          <div class="form-group">
            <label for="email">填寫付款人信箱 :</label>
            <input type="email" id="email" class="form-control w-50"
                  name="email"
                  :class="{'is-invalid': errors.has('email')}"
                  v-validate="'required|email'">
            <span class="text-danger"
                  v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>

          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="check"
                name="check"
                :class="{'is-invalid': errors.has('check')}"
                v-validate="'required'">
              <label class="custom-control-label cursor" for="check">
                請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱
              </label>
              <div class="text-color6">第三方支付金流平台服務條款</div>
               <span class="text-danger"
                  v-if="errors.has('check')">請勾選並同意</span>
            </div>
          </div>
          <div class="form-group d-flex justify-content-between">
            <a href="#" class="btn btn-secondary"
              @click.prevent="back()">回上一步</a>
            <button class="btn btn-primary">確認付款</button>
          </div>
        </form>
      </div>

      <div v-if="category === 'store'">
        <div class="text-center mb-5">超商付款</div>
        <form @submit.prevent="submitpage()">
          <div class="form-group mb-4">
            <label for="store">付款超商 :</label>
            <select id="store" class="custom-select w-50 d-block"
                name="store"
                v-model="chstore"
                :class="{'is-invalid': errors.has('store')}"
                v-validate="'required'">
              <option value='' selected disabled>選擇 :</option>
              <option v-for="(item, index) in store" :key="index"
                  :value="item">{{item}}</option>
            </select>
            <span class="text-danger"
                  v-if="errors.has('store')">請選擇超商</span>
          </div>
          <div class="form-group mb-4">
            <label for="email">填寫付款人信箱 :</label>
            <input type="email"  id="email" class="form-control w-50"
                  name="email"
                  :class="{'is-invalid': errors.has('email')}"
                  v-validate="'required|email'">
            <span class="text-danger"
                  v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>

          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="check"
                name="check"
                :class="{'is-invalid': errors.has('check')}"
                v-validate="'required'">
              <label class="custom-control-label cursor" for="check">
                請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱
              </label>
              <div class="text-color6">第三方支付金流平台服務條款</div>
               <span class="text-danger"
                  v-if="errors.has('check')">請勾選並同意</span>
            </div>
          </div>

          <div class="form-group d-flex justify-content-between">
            <a href="#" class="btn btn-secondary"
              @click.prevent="back()">回上一步</a>
            <button class="btn btn-primary">確認付款</button>
          </div>
        </form>
      </div>

      <div v-if="category === 'webatm' || category === 'atm'">
        <div class="text-center mb-5">Web ATM</div>
        <form @submit.prevent="submitpage()">
          <div class="form-group">
            <label for="bank">付款銀行 :</label>
            <select id="bank" class="custom-select w-50 d-block"
                name="bank"
              :class="{'is-invalid': errors.has('bank')}"
              v-validate="'required'">
              <option v-for="(item, index) in bank" :key="index"
                  :value="item">{{item}}銀行</option>
            </select>
              <span class="text-danger"
                v-if="errors.has('bank')">請選擇超商</span>
          </div>

          <div class="form-group">
            <ol class="pl-3 note">
              <li>
                請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。
              </li>
              <li>
                持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程
              </li>
            </ol>
          </div>

          <div class="form-group mb-4">
            <label for="email">填寫付款人信箱 :</label>
            <input type="email"  id="email" class="form-control w-50"
                name="email"
                :class="{'is-invalid': errors.has('email')}"
                v-validate="'required|email'">
            <span class="text-danger"
                v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>

          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="check"
                name="check"
                :class="{'is-invalid': errors.has('check')}"
                v-validate="'required'">
              <label class="custom-control-label cursor" for="check">
                請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱
              </label>
              <div class="text-color6">第三方支付金流平台服務條款</div>
                <span class="text-danger"
                v-if="errors.has('check')">請勾選並同意</span>
            </div>
          </div>

          <div class="form-group d-flex justify-content-between">
            <a href="#" class="btn btn-secondary"
              @click.prevent="back()">回上一步</a>
            <button class="btn btn-primary">確認付款</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card: null,
      active: '',
      date: 0,
      category: '',
      chstore: '',
      store: ['7-11', '全家', '萊爾富', 'OK'],
      bank: ['玉山', '台灣', '彰化', '第一']
    }
  },
  watch: {
    // 監聽信用卡後3碼
    card () {
      this.cardkind()
    }
  },
  created () {
    // 獲取route params，並取得當期年份
    this.category = this.$route.query.choose
    this.date = new Date().getFullYear()
  },
  methods: {
    // 篩選後三碼開頭第一碼決定是哪家信用卡
    cardkind () {
      let cardfirst = String(this.card).split('')
      if (cardfirst.length === 0) this.active = ''
      if (cardfirst[0] === '4') this.active = 'visa'
      if (cardfirst[0] === '6' && cardfirst[1] === '2') this.active = 'mastercard'
      if (cardfirst[0] === '3') this.active = 'jcb'
    },
    // 回去上一步
    back () {
      this.$router.push(`/checkout/${this.$route.params.id}/paytype`)
    },
    // 驗證輸入欄位
    submitpage () {
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store.dispatch('updateLoading', true)
          const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${this.$route.params.id}`
          this.$http.post(api).then((response) => {
            if (response.data.success) {
              this.$router.replace({
                path: `/checkout/${this.$route.params.id}/paysuccess`,
                query: {
                  category: this.category,
                  chstore: this.chstore
                }
              })
            }
            this.$store.dispatch('updateLoading', false)
          })
        }
      })
    }
  }
}
</script>
