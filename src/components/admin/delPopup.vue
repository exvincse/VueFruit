<template>
    <div>
        <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ item.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="submitDelData()">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props: ['item'],
    methods: {
        async submitDelData() {
            let res = null
            switch (this.$router.history.current.name) {
                case 'coupons':
                    res = await this.$store.dispatch('dashboardModules/deleteCoupon', this.item.id);
                    break;
                case 'products':
                    res = await this.$store.dispatch('dashboardModules/deleteProduct', this.item.id);
                    break;
            }
            let params = {
                message: res.message,
                status: 'danger'
            }
            this.$store.dispatch('updateMessage', params)
            // 刪除資料時觸發父層元件方法並傳遞資料
            this.$emit('reloadList')
            $('#delModal').modal('hide')
        }
    }
}
</script>
