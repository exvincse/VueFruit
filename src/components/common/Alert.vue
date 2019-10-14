<template>
  <div class="message-alert">
    <div class="alert alert-dismissible l-alert"
         :class="'alert-' + item.status"
         v-for="(item, i) in messages"
         :key="i">
      <div v-if="item.status === 'success'"
        class="d-flex align-items-cneter justify-content-between">
        <i class="far fa-check-circle fa-lg mr-2" style="line-height:1"></i>
        <span>{{ item.message }}</span>
      </div>
      <div v-else
        class="d-flex align-items-cneter justify-content-between">
        <div class="alert-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 286.054 286.054" style="enable-background:new 0 0 286.054 286.054;" xml:space="preserve">
            <g>
              <path style="fill:#E2574C;" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
                c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236
                c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209
                S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972
                c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723
                c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843
                C160.878,195.732,152.878,187.723,143.036,187.723z"/>
            </g>
          </svg>
        </div>
        <span>{{ item.message }}</span>
      </div>
      <button type="button"
              id="close" class="close"
              @click="removeMessage(i)">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // 接收vuex計算資料
    ...mapGetters(['messages'])
  },
  methods: {
    // 刪除時呼叫vuex方法並傳遞資料
    removeMessage (num) {
      this.$store.dispatch('removeMessage', num)
    }
  }
}
</script>

<style lang='scss' scope>
.fa-times{
  color: #000;
}
#close{
  outline: none;
}
.alert-icon{
  width: 21px;
  height: 24px;
  svg{
    vertical-align: top;
  }
}
.l-alert{
  width: 220px;
}
.message-alert {
  position: fixed;
  max-width: 70%;
  top: 70px;
  right: 20px;
  z-index: 1100;
}
</style>
