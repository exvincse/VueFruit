<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div class="d-flex w-100 justify-content-between align-items-center p-2">
         <span class="text-white d-lg-block d-none" href="#">控制面板</span>
         <button class="d-block d-lg-none btn btn-white" href="#"
           @click="showmenu()">
           <i class="fas fa-bars"></i>
         </button>
         <a href="#" class="btn btn-Lorange"
            @click.prevent="loginout()">登出</a>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods: {
    loginout () {
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.$router.push('/login')
        }
        this.$store.dispatch('updateLoading', false)
      })
    },
    showmenu () {
      $('.sidemenu').toggleClass('sideshow')
      $('.slide-bg').toggleClass('d-block')
    }
  }
}
</script>
