<template>
    <div>
        <section class="my-3">
            <div class="container">
                <div class="d-lg-block d-none">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="item in total_sort" :key="item.product.id" style="width: 350px; margin-right: 30px;">
                            <div class="card mb-5">
                                <div class="product-item">
                                    <div class="product-item-img" :style="{backgroundImage:`url(${item.product.imageUrl})`}" style="height:220px">
                                        <span class="hot-product-icon"></span>
                                        <span class="hot-product-title">HOT</span>
                                        <div class="d-none d-md-block">
                                            <router-link :to="{path:'/moreproduct',query:{id:item.product.id}}" class="product-item-link">
                                                <span class="product-more">更多資訊</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex text-center">
                                    <div class="col-7">
                                        <div class="border-right py-3 text-tea">
                                            <strong class="h5">{{item.product.title}}</strong>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="py-3 text-tea">
                                            <strong class="h6" v-if="item.product.origin_price">{{item.product.price}} 元</strong>
                                            <strong class="h6" v-else>{{item.product.origin_price}} 元</strong>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-w-color1 btn-lg rounded-0" @click="addtoCart(item.product.id)" :disabled="loading===item.product.id">
                                    <span class="h4 font-weight-bold text-tea">
                                        <i class="fas fa-spinner fa-spin" v-if="loading===item.product.id"></i>
                                        加入購物車</span>
                                </button>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>

                <div class="d-lg-none d-block">
                    <swiper :options="RWDswiperOption">
                        <swiper-slide v-for="item in total_sort" :key="item.product.id" style="width: 350px; margin-right: 30px;">
                            <div class="card mb-5">
                                <div class="product-item">
                                    <div class="product-item-img" :style="{backgroundImage:`url(${item.product.imageUrl})`}" style="height:220px">
                                        <span class="hot-product-icon"></span>
                                        <span class="hot-product-title">HOT</span>
                                        <div class="d-none d-md-block">
                                            <router-link :to="{path:'/moreproduct',query:{id:item.product.id}}" class="product-item-link">
                                                <span class="product-more">更多資訊</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex text-center">
                                    <div class="col-7">
                                        <div class="border-right py-3 text-tea">
                                            <strong class="h5">{{item.product.title}}</strong>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="py-3 text-tea">
                                            <strong class="h6" v-if="item.product.origin_price">{{item.product.price}} 元</strong>
                                            <strong class="h6" v-else>{{item.product.origin_price}} 元</strong>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-w-color1 btn-lg rounded-0" @click="addtoCart(item.product.id)" :disabled="loading===item.product.id">
                                    <span class="h4 font-weight-bold text-tea">
                                        <i class="fas fa-spinner fa-spin" v-if="loading===item.product.id"></i>
                                        加入購物車</span>
                                </button>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['topdata'],
    data() {
        return {
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 30,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 1000,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            RWDswiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 1000,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            orders: [],
            ary: [],
            total_sort: []
        }
    },
    watch: {
        topdata() {
            this.getOrderData()
        }
    },
    computed: {
        // 取得vuex計算資料
        ...mapGetters('cartModules', ['loading'])
    },
    methods: {
        // ajax獲取資料
        async getOrderData(page = 1) {
            this.orders = []
            let res = await this.$store.dispatch('clientModules/getOrderList', 1)
            if (res.success) {
                let totalpage = res.pagination.total_pages
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
                        this.sort()
                    })
                )
            }
        },
        // 排序所有資料銷售數
        sort() {
            let order = []
            let popular = []
            this.total_sort = []
            this.ary.forEach((item) => {
                let val = Object.values(item.products)
                val.forEach((item) => {
                    order.push(item)
                })
            })
            this.topdata.forEach((item, index) => {
                let title = item.title
                let num = index
                popular.push({
                    product: item,
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

            for (let i = 0; i <= 5; i++) {
                this.total_sort.push(popular[i])
            }
        },
        // 加入購物車
        addtoCart(id, qty = 1) {
            this.$store.dispatch('cartModules/addCart', { id, qty })
        }
    }
}
</script>
