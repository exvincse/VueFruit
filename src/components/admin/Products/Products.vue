<template>
    <div>
        <div class="text-right mt-4">
            <button class="btn btn-primary" @click="openModal(true)">建立新的產品</button>
        </div>
        <div v-if="products.length">
            <div class="table-responsive">
                <table class="table mt-4">
                    <thead>
                        <tr>
                            <th style="min-width: 80px;">分類</th>
                            <th style="min-width: 90px;">產品名稱</th>
                            <th style="min-width: 100px;">原價</th>
                            <th style="min-width: 100px;">售價</th>
                            <th style="min-width: 90px;">是否啟用</th>
                            <th style="min-width: 120px;">編輯/刪除</th>
                        </tr>
                    </thead>
                    <tbody v-if="PageData">
                        <tr v-for="item in PageData" :key="item.id">
                            <td>{{item.category}}</td>
                            <td>{{item.title}}</td>
                            <td class="text-right">
                                {{item.origin_price | currency}}
                            </td>
                            <td class="text-right">
                                {{item.price | currency}}
                            </td>
                            <td>
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-else>未啟用</span>
                            </td>
                            <td style="width:150px;">
                                <div class="btn-group">
                                    <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
                                    <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <pages :ary="products" @getPageData="getPageData"></pages>
        </div>

        <div v-else class="h1 text-center">請建立商品</div>
        <AddEdit :tempproduct="tempproduct" :status="status" @updateproduct="updateproduct"></AddEdit>

        <Delete :tempproduct="tempproduct" @delData="delData"></Delete>
    </div>
</template>

<script>
import $ from 'jquery'
import pages from '@/components/common/Pages'
import Delete from '@/components/admin/Products/method/Delete'
import AddEdit from '@/components/admin/Products/method/AddEdit'

export default {
    components: {
        pages,
        Delete,
        AddEdit
    },
    data() {
        return {
            products: [],
            PageData: [],
            tempproduct: {
                //  imageUrl: ''
            },
            pagination: {},
            isNew: false,
            status: {
                fileUploading: false
            }
        }
    },
    created() {
        // created時呼叫ajax把data資料準備好
        this.getProducts()
    },
    methods: {
        // 呼叫Vuex modules getProducts方法，並使用promise等待當前ajax結束後才取得資料
        async getProducts() {
            let res = await this.$store.dispatch('productModules/getProducts')
            this.products = this.$store.state.productModules.product.slice()
        },
        // 開啟新增修改modal
        openModal(isNew, item) {
            if (isNew) {
                this.tempproduct = {}
                this.isNew = true
            } else {
                this.tempproduct = Object.assign({}, item)
                this.isNew = false
            }
            $('#productModal').modal('show')
        },
        // 接收新增或修改modal子元件資料並發送ajax
        async updateproduct() {
            let params = {
                data: this.tempproduct
            }
            let res = '';
            if (this.isNew) {
                res = await this.$store.dispatch('dashboardModules/addProduct', params)
            } else {
                params.id = this.tempproduct.id
                res = await this.$store.dispatch('dashboardModules/modifyProduct', params)
            }
            $('#productModal').modal('hide')
            this.getProducts()
            let message = res.message
            if (res.success) {
                this.$store.dispatch('updateMessage', { message, status: 'success' })
            } else {
                this.$store.dispatch('updateMessage', { message, status: 'danger' })
            }
        },
        // 開啟刪除modal
        delModal(item) {
            this.tempproduct = Object.assign({}, item)
            $('#delProductModal').modal('show')
        },
        // 接收刪除modal子元件資料並發送ajax
        async delData() {
            let res = await this.$store.dispatch('dashboardModules/deleteProduct', this.tempproduct.id);
            $('#productModal').modal('hide')
            this.getProducts()
            let message = res.message
            this.$store.dispatch('updateMessage', { message, status: 'danger' })
        },
        // 接收Pages子元件資料，來切換當頁資料
        getPageData(get) {
            this.PageData = get
        }
    }
}
</script>
