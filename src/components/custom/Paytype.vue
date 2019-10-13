<template>
  <div>
    <div class="my-5">
      <h2 class="step">STEP1. 選擇付款方式</h2>
      <div class="mt-5 d-flex flex-wrap justify-content-center text-center">
        <a href="#" class="p-3 pay-ch d-block mr-3 mb-3"
          :class="{'pay-click':choose === 'credit'}"
          @click.prevent="choose = 'credit'">
          <i class="far fa-credit-card fa-3x"></i><br>
          <span>信用卡/金融卡</span>
        </a>
        <a href="#" class="p-3 pay-ch d-block mr-3 mb-3"
          :class="{'pay-click':choose === 'union'}"
          @click.prevent="choose = 'union'">
          <i class="fab fa-cc-amazon-pay fa-3x"></i><br>
          <span>銀聯卡</span>
        </a>
        <a href="#" class="p-3 pay-ch d-block mr-3 mb-3"
          :class="{'pay-click':choose === 'store'}"
          @click.prevent="choose = 'store'">
          <i class="fas fa-store fa-3x"></i><br>
          <span>超商付款</span>
        </a>
        <a href="#" class="p-3 pay-ch d-block mr-3 mb-3"
          :class="{'pay-click':choose === 'webatm'}"
          @click.prevent="choose = 'webatm'">
          <i class="fas fa-globe fa-3x"></i><br>
          <span>Web ATM</span>
        </a>
        <a href="#" class="p-3 pay-ch d-block mr-3 mb-3"
          :class="{'pay-click':choose === 'atm'}"
          @click.prevent="choose = 'atm'">
          <img v-if="choose==='atm'" src="../../assets/img/atm-white.svg" width="54px" height="48px" alt="">
          <img v-else src="../../assets/img/atm.svg" width="54px" height="48px" alt="">
          <br>
          <span>ATM 轉帳</span>
        </a>
      </div>
      <div class="d-flex justify-content-between">
        <router-link class="btn btn-secondary"
            to="/products">返回商店</router-link>
        <a href="#" class="btn btn-lwheat"
          @click.prevent="payinformation()">下一步</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      choose: 'credit'
    }
  },
  methods: {
    payinformation () {
      this.$router.replace({
        path: `/checkout/${this.$route.params.id}/payinformation`,
        query: {
          choose: this.choose
        }
      })
    }
  }
}
</script>
