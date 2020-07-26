<template>
    <div>
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-warning text-white" v-if="tempproduct.id">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>編輯產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-header bg-primary text-white" v-else>
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="image">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" v-model="tempproduct.imageUrl" placeholder="請輸入圖片連結">
                                </div>
                                <div class="form-group">
                                    <label for="customFile">或 上傳圖片
                                        <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                                    </label>
                                    <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile()">
                                </div>
                                <img class="img-fluid" alt="" :src="tempproduct.imageUrl">
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" name="title" v-model="tempproduct.title" placeholder="請輸入標題" v-validate="'required'">
                                    <span class="text-danger" v-if="errors.has('title')">標題不得為空</span>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" name="category" v-model="tempproduct.category" placeholder="請輸入分類" v-validate="'required'">
                                        <span class="text-danger" v-if="errors.has('category')">分類不得為空</span>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit" name="unit" v-model="tempproduct.unit" placeholder="請輸入單位" v-validate="'required'">
                                        <span class="text-danger" v-if="errors.has('unit')">單位不得為空</span>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input type="number" class="form-control" id="origin_price" v-model="tempproduct.origin_price" placeholder="請輸入原價">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price" name="price" v-model="tempproduct.price" placeholder="請輸入售價" v-validate="'required'">
                                        <span class="text-danger" v-if="errors.has('price')">售價不得為空</span>
                                    </div>
                                </div>
                                <hr>

                                <div class="form-group">
                                    <label for="description">產品描述</label>
                                    <textarea type="text" class="form-control" id="description" name="description" v-model="tempproduct.description" placeholder="請輸入產品描述" v-validate="'required'"></textarea>
                                    <span class="text-danger" v-if="errors.has('description')">產品描述不得為空</span>
                                </div>
                                <div class="form-group">
                                    <label for="content">說明內容</label>
                                    <textarea type="text" class="form-control" id="content" name="content" v-model="tempproduct.content" placeholder="請輸入產品說明內容" v-validate="'required'"></textarea>
                                    <span class="text-danger" v-if="errors.has('content')">內容不得為空</span>
                                </div>
                                <div class="form-group">
                                    <div class="checkbox">
                                        <div class="custom-control custom-checkbox">
                                            <input class="custom-control-input" type="checkbox" v-model="tempproduct.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
                                            <label class="custom-control-label" for="is_enabled">
                                                是否啟用
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-outline-primary" @click="updateproduct">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tempproduct', 'status'],
    watch: {
        // 開啟修改，新增資料的modal時清除裡面資料
        tempproduct() {
            this.errors.clear()
        }
    },
    methods: {
        // 新增或修改商品資料
        uploadFile() {
            const img = this.$refs.files.files[0]
            const formData = new FormData()
            formData.append('file-to-upload', img)
            this.status.fileUploading = true
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
            this.$http.post(url, formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                if (response.data.success) {
                    this.$set(this.tempproduct, 'imageUrl', response.data.imageUrl)
                    this.$store.dispatch('updateMessage', { message: '上傳圖片成功', status: 'success' })
                } else {
                    this.$store.dispatch('updateMessage', { message: '上傳圖片失敗', status: 'danger' })
                }
                this.status.fileUploading = false
                this.$refs.files.value = ''
            })
        },
        // 通過驗證時觸發父層元件方法並傳遞資料
        updateproduct() {
            this.$validator.validate().then((valid) => {
                if (valid) {
                    this.$emit('updateproduct')
                }
            })
        }
    }
}
</script>
