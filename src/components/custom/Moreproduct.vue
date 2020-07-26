<template>
    <div style="min-height: 100vh;">
        <section class="mt-lg-2 mb-7" v-if="Product.title">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent px-0">
                        <li class="breadcrumb-item">
                            <router-link to="/">首頁</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/products">商品</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">{{Product.title}}</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-lg-6">
                        <img class="w-100 mb-4 mb-lg-0" :src="Product.imageUrl" alt="">
                    </div>
                    <div class="col-lg-6">
                        <h1 class="h2">{{Product.title}}</h1>
                        <div class="d-flex justify-content-end align-items-end">
                            <del class="text-secondary" v-if="Product.origin_price">原價 ${{Product.origin_price}}</del>
                            <div class="ml-auto text-danger h3 mb-0" v-if="!Product.origin_price">
                                <small>售價</small>
                                <strong>NT$ {{Product.price}}</strong>
                            </div>
                            <div class="ml-auto text-danger h3 mb-0" v-if="Product.origin_price">
                                <small>特價</small>
                                <strong>NT$ {{Product.price}}</strong>
                            </div>
                        </div>
                        <hr>
                        <p class="card-text body">{{Product.content}}</p>
                        <select class="form-control mb-4" v-model="Product.num">
                            <option :value="item" v-for="item in 10" :key="item">{{item}}{{Product.unit}}</option>
                        </select>

                        <div class="d-flex justify-content-between align-items-center">
                            <div v-if="Product.price" class="text-left h5">總價:NT$ {{Product.num*Product.price}}</div>
                            <div v-else class="text-left h5">總價:NT$ {{Product.num*Product.origin_price}}</div>
                            <button class="btn btn-primary" @click.prevent="addCart(Product.id,Product.num)" :disabled="loading === Product.id">
                                <i class="fas fa-spinner fa-spin" v-if="loading === Product.id"></i>
                                加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import $ from 'jquery'
export default {
    data() {
        return {
            Product: {},
            ProductId: '',
            error: ''
        }
    },
    computed: {
        ...mapState({
            loading: state => state.cartModules.loading
        })
    },
    created() {
        // ajax獲取資料，並獲取route params
        this.ProductId = this.$route.query.id
        this.getProduct()
    },
    methods: {
        // ajax獲取單一商品資料
        async getProduct() {
            let res = await this.$store.dispatch('clientModules/getSingleProduct', this.ProductId);
            if (res.success) {
                this.Product = res.product
                this.$set(this.Product, 'num', 1)
            } else {
                this.error = res.message
            }
            $('.smallcart').css('bottom', '10px')
        },
        // 加入購物車
        addCart(id, qty = 1) {
            this.$store.dispatch('cartModules/addCart', { id, qty })
        }
    }
}
</script>
