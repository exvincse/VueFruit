<template>
  <div>
    <navbar></navbar>
    <alert></alert>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <main role="main"
              class="col-md-9 ml-sm-auto col-lg-10 px-lg-4 px-2">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/admin/Navbar'
import sidebar from '@/components/admin/Sidebar'
import alert from '@/components/common/Alert'
export default {
  components: {
    navbar,
    sidebar,
    alert
  }
}
</script>
