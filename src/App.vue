<template>
    <div id="app">
        <alert></alert>
        <div class="loading" v-show="loading">
            <i class="fas fa-spinner fa-pulse fa-4x"></i>
            <span>請稍後...</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import alert from '@/components/common/Alert'
export default {
    components: {
        alert
    },
    computed: {
        ...mapState({
            loading: state => state.isLoading
        })
    }
}
</script>

<style lang='scss' scope="this api replaced by slot-scope in 2.5.0+">
@import "./assets/all";
.loading {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 9999;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.75);
        z-index: -1;
    }
}
</style>
