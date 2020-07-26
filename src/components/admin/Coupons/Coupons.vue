<template>
    <div>
        <div class="container mt-4">
            <div class="row">
                <NavDate class="col-lg-5 mb-3" @changeMonth="changeMonth"></NavDate>
                <NavSelect class="col-lg-3 mb-3" @select="select"></NavSelect>
                <div class="text-right col-lg-4">
                    <button class="btn btn-primary" @click="openCouponModal(true)">
                        建立新的優惠券
                    </button>
                </div>
            </div>
            <div class="text-center h3 mt-2">已搜尋到{{ary.length}}筆</div>
            <div class="mt-2" v-if="ary.length">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>名稱</th>
                                <th style="min-width: 110px;">折扣百分比</th>
                                <th>到期日</th>
                                <th style="min-width: 90px;">是否啟用</th>
                                <th style="min-width: 130px;">編輯</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, key) in pagedata" :key="key">
                                <td><span>{{ item.title }}</span></td>
                                <td>{{ item.percent }}%</td>
                                <td>{{ item.due_date | DateFilter }}</td>
                                <td>
                                    <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                                    <span v-else class="text-muted">未起用</span>
                                </td>
                                <td>
                                    <button class="btn btn-outline-primary btn-sm mr-2" @click="openCouponModal(false,item)">編輯</button>
                                    <button class="btn btn-outline-danger btn-sm" @click="delCouponModal(item)">刪除</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <pages :ary="ary" :makeout="pay" @getPageData="getPageData">
                </pages>
            </div>

            <div class="mt-5" v-else>
                <div class="text-center h1">
                    請建立優惠卷
                </div>
            </div>
            <add-edit-popup :tempCoupon="tempCoupon" @updateCoupons="updateCoupons"></add-edit-popup>

            <del-popup :item="tempCoupon" @reloadList="reloadList"></del-popup>
        </div>

    </div>
</template>

<script>
import $ from 'jquery'
import NavDate from '@/components/admin/Navdate'
import NavSelect from '@/components/admin/Navselect'
import pages from '@/components/common/Pages'
import addEditPopup from '@/components/admin/Coupons/method/addEditPopup'
import delPopup from '@/components/admin/delPopup'
import axios from '@/ajaxHandler/index';
export default {
    components: {
        NavDate,
        NavSelect,
        pages,
        addEditPopup,
        delPopup
    },
    data() {
        return {
            pay: 'enable',
            getCoupon: [],
            ary: [],
            pagedata: [],
            tempCoupon: {},
            newold: true
        }
    },
    created() {
        // created時呼叫ajax把data資料準備好
        this.getCoupons()
    },
    methods: {
        // ajax獲取資料
        async getCoupons() {
            this.getCoupon = []
            let res = await this.$store.dispatch('dashboardModules/getCouponList', 1);
            if (res.success) {
                let totalpage = res.pagination.total_pages
                let totalapi = []
                for (let i = 1; i <= totalpage; i++) {
                    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${i}`
                    let get = this.$http.get(api)
                    totalapi.push(get)
                }
                let allRes = await axios.all(totalapi);
                let response = allRes.map(item => item.data.coupons)
                if (response.length === 1) {
                    this.getCoupon = response[0]
                } else {
                    for (let i = 1; i < response.length; i++) {
                        this.getCoupon = response[0].concat(response[i])
                    }
                }
                this.ary = this.getCoupon
            }
        },
        // 開啟新增修改modal
        openCouponModal(get, item) {
            if (get === true) {
                this.tempCoupon = {}
                this.newold = true
            } else {
                this.tempCoupon = Object.assign({}, item)
                this.newold = false
            }
            $('#couponModal').modal('show')
        },
        // 接收新增或修改modal子元件資料並發送ajax
        updateCoupons(duedate) {
            this.$validator.validate().then(async (valid) => {
                if (valid) {
                    this.$store.dispatch('updateLoading', true)
                    let timestemp = new Date(duedate).getTime()
                    this.tempCoupon.due_date = timestemp
                    let params = {
                        data: this.tempCoupon
                    }
                    let res = '';
                    if (this.newold) {
                        res = await this.$store.dispatch('dashboardModules/addCoupon', params)
                    } else {
                        params.id = this.tempCoupon.id
                        res = await this.$store.dispatch('dashboardModules/modifyCoupon', params)
                    }
                    $('#couponModal').modal('hide')
                    this.getCoupons()
                    let message = res.message
                    if (res.success) {
                        this.$store.dispatch('updateMessage', { message, status: 'success' })
                    } else {
                        this.$store.dispatch('updateMessage', { message, status: 'danger' })
                    }
                }
            })
        },
        // 開啟刪除modal
        delCouponModal(item) {
            this.tempCoupon = Object.assign({}, item)
            $('#delModal').modal('show')
        },
        // 接收NavDate子元件資料，並篩選當前年月資料
        changeMonth(year, month) {
            if (year === '' && month === '') {
                this.getCoupons()
                return
            }

            this.ary = this.getCoupon.map((item) => {
                let date = new Date(item.due_date)
                item.due_date = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
                return item
            }).filter((item) => {
                let time = item.due_date.split('/')
                //  月份存在時，必須配合年份篩選
                if (month) {
                    return Number(time[0]) === year && Number(time[1]) === month
                }
                return Number(time[0]) === year
            })
        },
        // 接收NavSelect子元件資料，並以輸入關鍵字來篩選當前資料
        select(selectname) {
            this.ary = []
            if (selectname === '') {
                this.ary = this.getCoupon
            } else {
                this.ary = this.getCoupon.filter((item) => {
                    //  全部符合
                    //  let toAry = item.title.split(',');
                    //  console.log(toAry.indexOf(selectname));
                    return item.title.indexOf(selectname) !== -1
                })
            }
        },
        // 接收Pages子元件資料，來切換當頁資料
        getPageData(getdata) {
            this.pagedata = getdata
        },
        reloadList() {
            this.getCoupons();
        }
    }
}
</script>
