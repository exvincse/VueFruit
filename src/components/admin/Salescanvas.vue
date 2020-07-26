<template>
    <div v-if="orders.length">
        <div class="container-fluid mt-4">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card rounded-0 h-100">
                        <div class="card-body d-flex align-items-center">
                            <div class="text-secondary d-sm-block d-none"><i class="far fa-money-bill-alt fa-3x"></i></div>
                            <div class="text-center w-100">
                                <div class="h5">當前營收</div>
                                <div class="display-4 display-lg-1">{{monthmoney | currency}}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card rounded-0 h-100">
                        <div class="card-body d-flex align-items-center">
                            <div class="text-secondary d-sm-block d-none"><i class="far fa-id-card fa-3x"></i></div>
                            <div class="text-center w-100">
                                <div class="h5">訂單數</div>
                                <div class="display-4 display-lg-1">{{ary.length}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-4">
            <div class="card rounded-0 h-100">
                <div class="card-header">統計圖</div>
                <div class="card-body">
                    <div class="d-flex flex-column flex-lg-row">
                        <select class="custom-select mr-2 mb-3 mb-lg-0 l-select" v-model="chooseyear" @change="checkdate()">
                            <option value="" disabled>請選擇年份</option>
                            <option :value="year" v-for="year in selectYear" :key="year">{{year}}</option>
                        </select>
                        <select class="custom-select mr-2 mb-3 mb-lg-0 l-select" v-model="choosemonth" :disabled="!chooseyear || check" @change="checkdate()">
                            <option value="" disabled>請選擇月份</option>
                            <template v-if="chooseyear < getnowdate.year">
                                <option :value="month" v-for="month in 12" :key="month">{{month}}</option>
                            </template>
                            <template v-else>
                                <option :value="month" v-for="month in getnowdate.month + 1" :key="month">{{month}}</option>
                            </template>
                        </select>
                        <div class="d-flex align-items-center mr-2">
                            <input type="checkbox" id="checkbox" v-model="check">
                            <label class="mb-0" for="checkbox">
                                只看年營收
                            </label>
                        </div>
                        <button class="btn btn-primary" @click="checkdate(true)">總營收</button>
                    </div>
                    <div class="chart">
                        <chart v-if="loaded" :chartData="chartData" :flag="flag"></chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import chart from './Chart'
export default {
    components: {
        chart
    },
    data() {
        return {
            orders: [],
            ary: [],
            loaded: false,
            flag: false,
            check: false,
            getnowdate: {},
            chooseyear: '',
            choosemonth: '',
            monthmoney: 0,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: '銷售數',
                        data: [],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ]
                    }
                ]
            }
        }
    },
    computed: {
        // 顯示現在年份-5年為區間
        selectYear() {
            let ary = []
            let NowYear = new Date().getFullYear()
            for (let i = NowYear - 5; i <= NowYear; i++) {
                ary.push(i)
            }
            return ary
        }
    },
    created() {
        // created時呼叫ajax把data資料準備好
        this.getOrderData()
        this.getProducts()
    },
    watch: {
        // 監聽年份，年份選擇時才可選擇月份
        check() {
            if (this.check === true) {
                this.choosemonth = ''
                this.checkdate()
            }
        }
    },
    methods: {
        // 呼叫Vuex modules/getProducts方法，並使用promise等待當前ajax結束後才取得資料
        async getProducts() {
            let res = await this.$store.dispatch('productModules/getProducts')
            this.product = this.$store.state.productModules.product
        },
        // 取得當前時間
        getdate(date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate()
            }
        },
        // 取得ajax資料
        async getOrderData() {
            this.loaded = false
            this.orders = []
            this.getnowdate = this.getdate(new Date())
            let res = await this.$store.dispatch('dashboardModules/getOrderList', 1)
            if (res.success) {
                let totalpage = res.pagination.total_pages
                let totalapi = []

                for (let i = 1; i <= totalpage; i++) {
                    let totaldata = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${i}`
                    let api = this.$http.get(totaldata)
                    totalapi.push(api)
                }
                let allRes = await axios.all(totalapi)
                let mapdata = allRes.map(item => item.data)
                mapdata.forEach((item) => {
                    let list = item.orders
                    list.forEach((item) => {
                        item.create_at = Number(item.create_at * 1000)
                        this.orders.push(item)
                    })
                })
                this.checkdate(true)
            }
        },
        // 年月份改變時，篩選符合的資料
        checkdate(total = false) {
            this.monthmoney = 0
            this.ary = []
            if (total) {
                this.chooseyear = ''
                this.choosemonth = ''
                this.ary = this.orders
            } else {
                this.ary = this.orders.filter((item) => {
                    if (this.choosemonth !== '') {
                        return this.chooseyear === this.getdate(new Date(item.create_at)).year && this.choosemonth === this.getdate(new Date(item.create_at)).month + 1
                    } else {
                        return this.chooseyear === this.getdate(new Date(item.create_at)).year
                    }
                })
            }
            this.monthmoney = this.ary.map((item) => {
                return item.total
            }).reduce((prev, next) => {
                return prev + next
            }, 0)
            this.sort()
        },
        // 排序所有資料銷售數
        sort() {
            let order = []
            let popular = []
            this.chartData.labels = []
            this.chartData.datasets[0].data = []
            this.ary.forEach((item) => {
                let val = Object.values(item.products)
                val.forEach((item) => {
                    order.push(item)
                })
            })
            this.product.forEach((item, index) => {
                let title = item.title
                let num = index
                popular.push({
                    product: item.title,
                    total_num: 0
                })
                order.forEach((item) => {
                    if (title.indexOf(item.product.title) !== -1) {
                        popular[num].total_num += item.qty
                    }
                })
            })

            popular.sort((a, b) => {
                return b.total_num - a.total_num
            })
            for (let i = 0; i < popular.length; i++) {
                this.chartData.labels.push(popular[i].product)
                this.chartData.datasets[0].data.push(popular[i].total_num.toString())
            }
            this.flag = !this.flag
            this.loaded = true
        }
    }
}
</script>
