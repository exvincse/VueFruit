<template>
  <div v-if="orders.length">
    <div class="container mt-4">
      <div class="row">
        <NavDate class="col-lg-5 mb-4 mb-lg-0"
                 @changeMonth="changeMonth"></NavDate>
        <NavSelect class="col-lg-3"
                   @select="select"></NavSelect>
      </div>
      <div class="text-center h3 mt-2">已搜尋到{{ary.length}}筆</div>
      <div class="mt-2"
           v-if="ary.length">
        <div class="table-responsive">
          <table class="table w-100">
            <thead>
              <tr>
                <th>購買時間</th>
                <th>Email</th>
                <th style="min-width: 170px;">購買款項</th>
                <th style="min-width: 100px;">應付金額</th>
                <th style="min-width: 100px;">是否付款</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in pagedata"
                  :key="key"
                  :class="{'text-secondary': !item.is_paid}">
                <td>{{ item.create_at | DateFilter }}</td>
                <td><span v-text="item.user.email"
                        v-if="item.user"></span></td>
                <td>
                  <ul class="list-unstyled">
                    <li v-for="(product, i) in item.products"
                        :key="i">
                      {{ product.product.title }} 數量：{{ product.qty }}
                      {{ product.product.unit }}
                    </li>
                  </ul>
                </td>
                <td class="text-right">{{ item.total | currency }}</td>
                <td>
                  <strong v-if="item.is_paid"
                          class="text-success">已付款</strong>
                  <span v-else
                        class="text-muted">尚未起用</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <pages :ary="ary"
               :makeout="pay"
               @getPageData="getPageData">
        </pages>
      </div>

      <div v-else
           class="mt-5">
        <div class="text-center h1">
          無任何資料
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavDate from '@/components/admin/Navdate'
import NavSelect from '@/components/admin/Navselect'
import pages from '@/components/common/Pages'
export default {
  data () {
    return {
      pay: 'pay',
      orders: [],
      ary: [],
      pagedata: []
    }
  },
  components: {
    NavDate,
    NavSelect,
    pages
  },
  created () {
    // created時呼叫ajax把data資料準備好
    this.get()
  },
  methods: {
    // ajax獲取資料
    get (page = 1) {
      this.orders = []
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${1}`
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          let totalpage = response.data.pagination.total_pages
          let totalapi = []

          for (let i = 1; i <= totalpage; i++) {
            let totaldata = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${i}`
            let api = this.$http.get(totaldata)
            totalapi.push(api)
          }
          this.$http.all(totalapi).then(
            this.$http.spread((...res) => {
              let mapdata = res.map(item => item.data)
              mapdata.forEach((item) => {
                let list = item.orders
                list.forEach((item) => {
                  item.create_at = Number(item.create_at * 1000)
                  this.orders.push(item)
                })
              })
              this.ary = this.orders
              this.$store.dispatch('updateLoading', false)
            })
          )
        }
      })
    },
    // 接收NavDate子元件資料，並篩選當前年月資料
    changeMonth (year, month) {
      let CopyAry = Array.prototype.slice.call(this.orders)
      let DateAry = CopyAry.map((item) => {
        let date = new Date(item.create_at)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let gettime = year + '/' + month + '/' + day
        item.create_at = gettime
        return item
      })
      if (year === '' && month === '') {
        this.get()
        return
      }

      let FilterAry = DateAry.filter((item) => {
        let time = item.create_at.split('/')
        if (month) {
          if (Number(time[0]) === year && Number(time[1]) === month) {
            return item
          }
        } else {
          if (Number(time[0]) === year) {
            return item
          }
        }
      })
      this.ary = FilterAry
    },
    // 接收NavSelect子元件資料，並以輸入關鍵字來篩選當前資料
    select (selectname) {
      this.ary = []
      if (selectname === '') {
        this.ary = this.orders
      } else {
        let FilterAry = this.orders.filter((item, index, ary) => {
          //  全部符合
          //  let toAry = item.user.email.split(',');
          //  console.log(toAry.indexOf(this.selectname));
          return item.user.email.includes(selectname)
        })
        this.ary = FilterAry
      }
    },
    // 接收Pages子元件資料，來切換當頁資料
    getPageData (getdata) {
      this.pagedata = getdata
    }
  }
}
</script>
