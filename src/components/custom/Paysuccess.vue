<template>
  <div>
    <div class="d-flex flex-column align-items-center my-5"
      v-if="this.$route.query.category !== 'store'">
      <h2 class="step mb-5">您的訂單已完成付款！</h2>
      <div class="success-bg mb-5 text-center">
        <i class="far fa-thumbs-up fa-5x" style="line-height:130px"></i>
      </div>
      <div class="mb-4">稍後將寄送訂單詳細資訊至您的E-mail</div>
      <a href="#" class="btn btn-primary"
        @click.prevent="index()">返回首頁</a>
    </div>

    <div class="d-flex flex-column my-5"
      v-else>
      <h2 class="step mb-5">您的訂單已成立！</h2>
      <div class="mb-5">
        <span>付款超商 :</span>
        <div class="text-font mb-4">{{this.$route.query.chstore}}便利商店</div>
        <span>付款代碼 :</span>
        <div class="text-font mb-4">HSD6DSK2349</div>
        <span>付款期限 :</span>
        <div class="text-font">2019-08-08 23:59:59</div>
      </div>
      <div class="mb-4">* 請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</div>
      <div class="text-right">
        <a href="#" class="btn btn-primary"
          @click.prevent="index()">返回首頁</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 回主頁
    index () {
      this.$router.replace(`/index`)
    }
  }
}
</script>

<style lang="scss">
  .text-font{
    font-size:24px;
    letter-spacing: 2.51px;
  }
</style>
