<template>
    <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <div class="d-flex w-100 justify-content-between align-items-center p-2">
                <span class="text-white d-lg-block d-none" href="#">控制面板</span>
                <button class="d-block d-lg-none btn btn-white" href="#" @click="showmenu()">
                    <i class="fas fa-bars"></i>
                </button>
                <a href="#" class="btn btn-primary" @click.prevent="loginout()">登出</a>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods: {
        // 登出後台
        async loginout() {
            let res = await this.$store.dispatch('dashboardModules/signOut');
            if (res.success) {
                this.$router.push('/login')
            }
        },
        // 裝置寬度小於某個斷點時左上方顯示按鈕，SideBar則隱藏
        showmenu() {
            $('.sidemenu').toggleClass('sideshow')
            $('.slide-bg').toggleClass('d-block')
        }
    }
}
</script>
