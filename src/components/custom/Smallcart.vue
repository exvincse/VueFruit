<template>
    <div>
        <div class="dropdown">
            <a class="btn btn-cart btn-sm" href="#" @click.prevent="show=!show">
                <div class="cart">
                    <i class="fas fa-shopping-cart fa-2x text-white"></i>
                    <span class="number">{{data.carts.length}}</span>
                </div>
            </a>

            <div class="dropdown-menu mt-2 d-inline-block" v-if="show">
                <div class="px-4 py-3 h-100">
                    <div class="h-100 d-flex flex-column justify-content-between" v-if="data.carts.length">
                        <div>
                            <h5>已選擇商品</h5>
                            <div class="table-reponsive">
                                <table class="table">
                                    <tbody>
                                        <tr v-for="item in data.carts" :key="item.id">
                                            <td>
                                                <button class="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#del" @click="removeCart(item.id)" :disabled="isdisabled === item.id">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                            <td>{{item.product.title}}</td>
                                            <td>{{item.qty}} {{item.product.unit}}</td>
                                            <td class="text-right" v-if="item.product.price">${{item.product.price*item.qty}}</td>
                                            <td class="text-right" v-else>${{item.product.origin_price*item.qty}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <router-link to="/cart" class="btn btn-primary btn-block"><i class="fas fa-cart-arrow-down"></i>
                                結帳去</router-link>
                        </div>
                    </div>
                    <div class="h-100 d-flex flex-column justify-content-between" v-else>
                        <h5>無任何商品</h5>
                        <router-link to="/products" class="btn btn-danger btn-block"><i class="fas fa-cart-plus"></i>
                            看商品</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            show: false
        }
    },
    computed: {
        // 取得vuex計算資料
        ...mapGetters('cartModules', ['data', 'isdisabled'])
    },
    created() {
        // ajax獲取資料
        this.getCart()
    },
    methods: {
        // 呼叫Vuex modules Mcart/getCart方法，並使用promise等待當前ajax結束後才取得資料
        ...mapActions('cartModules', ['getCart']),
        async removeCart(id) {
            await this.$store.dispatch('cartModules/removeCart', id)
            this.getCart()
        }
    }
}
</script>

<style lang="scss" scope>
.dropdown {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.table td {
    vertical-align: middle;
}
.table-reponsive {
    max-height: 200px;
    overflow-y: auto;
}
</style>
