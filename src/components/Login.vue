<template>
    <div class="form-wrap">
        <div class="form-outside">
            <div class="form-sign-title">
                <h4 class="text-white">後台登入介面</h4>
                <span class="text-white">Management System For Website</span>
            </div>
            <form class="form-signin" @submit.prevent="signin">
                <div class="group">
                    <label for="inputEmail">帳號 :</label>
                    <input type="email" id="inputEmail" v-model="user.username" class="form-control" name="email" placeholder="Email address" v-validate="'required|email'" autofocus>
                    <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div class="group mb-3">
                    <label for="inputPassword">密碼 :</label>
                    <input type="password" id="inputPassword" v-model="user.password" class="form-control mb-0" name="password" v-validate="'required'" placeholder="Password">
                    <span class="text-danger" v-if="errors.has('password')">密碼不得為空</span>
                </div>
                <div class="text-danger text-center" v-if="message">{{message}}</div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            message: ''
        }
    },
    methods: {
        // 驗證登入
        signin() {
            this.$validator.validate().then(async (valid) => {
                if (valid) {
                    let res = await this.$store.dispatch('dashboardModules/signIn', this.user);
                    if (res.success) {
                        this.$router.push('/admin/products')
                    } else {
                        this.message = res.message
                    }
                }
            })
        }
    }
}
</script>
