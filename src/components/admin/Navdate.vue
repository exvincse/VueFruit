<template>
  <div>
    <div class="d-lg-flex d-block">
      <select class="custom-select"
              v-model="getyear"
              @change="changeMonth(getyear,getmonth)">
        <option value=""
                selected
                disabled>請選擇年份</option>
        <option :value="item"
                v-for='item in selectYear'
                :key="item">{{item}}</option>
      </select>

      <select class="custom-select"
              v-model="getmonth"
              @change="changeMonth(getyear,getmonth)">
        <option value=""
                selected
                disabled>請選擇月份</option>
        <option :value="item"
                v-for='item in month'
                :key="item">{{item}}</option>
      </select>
      <button type="button"
              class="btn btn-primary clear-input"
              @click="clear()">清除欄位</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getmonth: '',
      getyear: '',
      month: null
    }
  },
  watch: {
    // 監聽年份，並顯示符合年份的月份
    getyear () {
      let NowYear = new Date().getFullYear()
      let NowMonth = new Date().getMonth() + 1
      if (this.getyear === NowYear) {
        this.month = NowMonth
      } else {
        this.month = 12
      }
    }
  },
  computed: {
    // 顯示現在年份-5年為區間
    selectYear () {
      let ary = []
      let NowYear = new Date().getFullYear()
      let MinYear = new Date().getFullYear() - 5
      for (let i = MinYear; i <= NowYear; i++) {
        ary.push(i)
      }
      return ary
    }
  },
  methods: {
    // 改變年份或月份時呼叫父層元件方法並傳遞資料
    changeMonth () {
      this.$emit('changeMonth', this.getyear, this.getmonth)
    },
    // 清空年月份
    clear () {
      this.getmonth = ''
      this.getyear = ''
      this.changeMonth()
    }
  }
}
</script>
