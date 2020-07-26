<template>
    <div style="position: relative;">
        <div class="container mb-5">
            <div v-if="emptyCartDataTime">
                <section class="mt-3">
                    <div class="container mb-3">
                        <h1 class="text-center">結帳頁</h1>
                        <div class="form-row text-center d-lg-flex d-none">
                            <div class="col-sm col-12">
                                <div class="alert alert-primary alert-border" role="alert">
                                    1.輸入訂單資料
                                </div>
                            </div>
                            <div class="col-sm col-12">
                                <div class="alert alert-light alert-border" role="alert">
                                    2.金流付款
                                </div>
                            </div>
                            <div class="col-sm col-12">
                                <div class="alert alert-light alert-border" role="alert">
                                    3.完成
                                </div>
                            </div>
                        </div>
                        <div class="d-flex box-out text-center d-lg-none">
                            <div class="item d-flex flex-column align-items-center">
                                <div class="box box-conduct">
                                    1
                                </div>
                                <span>輸入訂單資料</span>
                            </div>
                            <div class="item d-flex flex-column align-items-center">
                                <div class="box">
                                    2
                                </div>
                                <span>金流付款</span>
                            </div>
                            <div class="item d-flex flex-column align-items-center">
                                <div class="box">
                                    3
                                </div>
                                <span>完成</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 d-xl-block d-none" v-if="emptyCartDataTime">
                                <div class="order-im p-4">
                                    <h5 class="title">商品資訊</h5>
                                    <div>
                                        <span class="font-title">已選購商品 :</span><br>
                                        <div id="table">
                                            <table class="table">
                                                <thead>
                                                    <th></th>
                                                    <th>品名</th>
                                                    <th>數量</th>
                                                    <th>單價</th>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in cartData.carts" :key="item.id">
                                                        <td class="align-middle">
                                                            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCart(item.id)" :disabled="isdisabled === item.id">
                                                                <i class="far fa-trash-alt"></i>
                                                            </button>
                                                        </td>

                                                        <td class="align-middle">
                                                            {{ item.product.title }}
                                                            <div class="text-success" v-if="item.coupon">
                                                                套用優惠券
                                                            </div>
                                                        </td>
                                                        <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                                                        <td class="align-middle text-right">{{ item.final_total }}</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="3" :class="{'discount':cartData.final_total !== cartData.total}" class="text-right">總計</td>
                                                        <td :class="{'discount':cartData.final_total !== cartData.total}" class="text-right">{{ cartData.total }}</td>
                                                    </tr>
                                                    <tr v-if="cartData.final_total !== cartData.total">
                                                        <td colspan="3" class="text-right text-success">折扣價</td>
                                                        <td class="text-right text-success">{{ data.final_total }}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="input-group input-group-sm">
                                            <input type="text" class="form-control p-2" placeholder="請輸入優惠碼" v-model.trim="coupons">
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-primary" type="button" @click="UseCoupons()">
                                                    套用優惠碼
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="couponsath" class="text-danger mb-3">優惠碼輸入錯誤</div>
                                </div>
                            </div>
                            <div class="col-lg-8 p-lg-5 pay">
                                <CostomForm></CostomForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center h3 d-flex align-items-center justify-content-center" style="height:500px;">
                <div class="d-flex align-items-center flex-column">
                    <span>沒有選購任何商品{{time}}秒後跳回商品頁...</span>
                    <span>
                        沒有回應時請點
                        <router-link to="/products">商品頁</router-link>
                    </span>
                </div>
            </div>
        </div>
        <div class="m-pos" v-if="emptyCartDataTime">
            <div class="d-xl-none d-block m-order px-2 py-4" style="position:relative">
                <div class="order-im">
                    <div>
                        <span class="font-title">商品名稱 :</span><br>
                        <div id="table">
                            <table class="table">
                                <thead>
                                    <th class="m-padding"></th>
                                    <th class="m-padding" width="75">品名</th>
                                    <th class="m-padding">數量</th>
                                    <th class="m-padding">單價</th>
                                </thead>
                                <tbody>
                                    <tr v-for="item in cartData.carts" :key="item.id">
                                        <td class="align-middle m-padding">
                                            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCart(item.id)" :disabled="isdisabled === item.id">
                                                <i class="far fa-trash-alt"></i>
                                            </button>
                                        </td>

                                        <td class="align-middle m-padding">
                                            {{ item.product.title }}
                                            <div class="text-success" v-if="item.coupon">
                                                套用優惠券
                                            </div>
                                        </td>
                                        <td class="align-middle m-padding">{{ item.qty }}{{ item.product.unit }}</td>
                                        <td class="align-middle m-padding text-right">{{ item.final_total }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3" :class="{'discount':cartData.final_total !== cartData.total}" class="text-right m-padding">總計</td>
                                        <td :class="{'discount':cartData.final_total !== cartData.total}" class="text-right m-padding">{{ cartData.total }}</td>
                                    </tr>
                                    <tr v-if="cartData.final_total !== cartData.total">
                                        <td colspan="3" class="text-right text-success">折扣價</td>
                                        <td class="text-right text-success">{{ cartData.final_total }}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="input-group mb-3 input-group-sm">
                            <input type="text" class="form-control p-2" placeholder="請輸入優惠碼" v-model="coupons">
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary" type="button" @click="UseCoupons()">
                                    套用優惠碼
                                </button>
                            </div>
                        </div>
                        <span v-if="couponsath" class="text-danger">優惠碼輸入錯誤</span>
                    </div>
                </div>
                <a href="#" class="order-btn" @click.prevent="ordershow()">商品資訊</a>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import CostomForm from '@/components/custom/Checkpage'
import { mapState } from 'vuex'
export default {
    components: {
        CostomForm
    },
    data() {
        return {
            coupons: '',
            timeSender: null,
            couponsath: false,
            time: 3
        }
    },
    watch: {
        // 監聽購物車都無商品時，3秒跳回商品頁
        'cartData.carts'() {
            if (this.cartData.carts.length === 0) {
                this.$store.dispatch('cartModules/setEmptyCartDataTime', false);
                this.timeout()
            }
        }
    },
    created() {
        // ajax獲取資料
        this.getCart()
    },
    beforeDestroy() {
        // beforeDestroy hook銷毀setInterval
        clearInterval(this.timeSender)
    },
    computed: {
        ...mapState({
            cartData: state => state.cartModules.data,
            isdisabled: state => state.cartModules.isDisable,
            emptyCartDataTime: state => state.cartModules.emptyCartDataTime
        })
    },
    methods: {
        // 呼叫Vuex modules Mcart/getCart方法，並使用promise等待當前ajax結束後才取得資料
        getCart() {
            this.$store.dispatch('cartModules/getCart')
        },
        // 計時3秒
        timeout() {
            this.time = 3
            let timeSender = setInterval(() => {
                this.time -= 1
                if (this.time === 0) {
                    this.$router.replace(`/products`)
                    this.$store.dispatch('cartModules/setEmptyCartDataTime', true);
                }
            }, 1000)
            this.timeSender = timeSender
        },
        // 呼叫Vuex modules Mcart/removeCart方法，並使用promise等待當前ajax結束後才取得資料
        async removeCart(id) {
            await this.$store.dispatch('cartModules/removeCart', id)
            this.getCart()
        },
        // 使用優惠卷
        async UseCoupons() {
            if (this.coupons === '') {
                this.couponsath = true
                return false
            }
            let data = {
                data: {
                    code: this.coupons
                }
            }
            let res = await this.$store.dispatch('clientModules/useCoupon', data)
            if (res.success) {
                this.couponsath = false
                this.getCart()
                return false
            }
            this.couponsath = true
        },
        // 裝置寬度小於某個斷點時左上方顯示按鈕，購物車則隱藏
        ordershow() {
            $('.m-pos').toggleClass('m-pos-show')
        }
    }
}
</script>
<style lang="scss" scope>
#table {
    max-height: 200px;
    overflow-y: auto;
}
.discount {
    text-decoration: line-through;
}
</style>
