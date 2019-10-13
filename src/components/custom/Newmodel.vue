<template>
    <div>
        <header>
            <div class="bg-cover header-bg"></div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .header-bg{
     background-image:url('../../assets/img/news-bg.jpg');
     position:relative;
     height:300px;
  };
</style>
