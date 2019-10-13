<template>
  <div>
    <div class="bg-lightgray">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link class="text-lgray link-hov"
                    to="/index">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link class="text-lgray link-hov"
                    to="/newmsg">最新消息</router-link>
            </li>
        </ol>
    </div>
    <div class="container mb-5">
        <div class="row">
            <div class="col-lg-3 msg">
                <div class="new-bg bg-cover text-center mb-3">
                    <div class="text-white bg-Lorange p-1">最新消息</div>
                </div>

                <a href="#" class="msg-title d-block py-1 px-3 text-dark bg-lightgray mb-3"
                    :class="{'msgactive':active === 'new'}"
                    @click.prevent="active = 'new'">最新訊息</a>
                <a href="#" class="msg-title d-block py-1 px-3 text-dark bg-lightgray mb-3"
                    :class="{'msgactive':active === 'activity'}"
                    @click.prevent="active = 'activity'">活動消息</a>
                <a href="#" class="msg-title d-block py-1 px-3 text-dark bg-lightgray mb-3"
                    :class="{'msgactive':active === 'exposition'}"
                    @click.prevent="active = 'exposition'">展覽資訊</a>
            </div>

            <div class="col-lg-9">
                <div class="top-title p-2 mb-4">
                    <h5>全部最新消息</h5>
                </div>
                <div v-if="active==='new'">
                  <div class="row d-lg-flex d-none">
                      <div class="new-message-item col-lg-3 mb-3"
                            @click.prevent="view(item.id)"
                            v-for="item in newdata" :key="item.id">
                          <div class="pic mb-2">
                            <div class="pic-animate bg-cover"
                                style="height:180px"
                                :style="{'background-image':`url(${item.img})`}">
                            </div>
                            <div class="pic-bg"></div>
                            <span href="#" class="pic-view">VIEW</span>
                          </div>
                          <p class="text mb-0 text-secondary">{{item.title}}</p>
                          <span>{{item.date}}</span>
                      </div>
                  </div>

                  <section class="d-flex flex-column mb-5 d-lg-none">
                      <div class="box"
                          v-for="item in newdata" :key="item.id">
                        <a href="#" class="text mb-1 text-secondary"
                            @click.prevent="view(item.id)">
                        <span class="badge badge-secondary h3">重要</span>
                        <span>{{item.date}}</span>
                        {{item.title}}</a>
                      </div>
                  </section>
                </div>

                <div v-if="active==='activity'">
                  <div class="row d-lg-flex d-none">
                      <div class="new-message-item col-lg-3 mb-3"
                            @click.prevent="view(item.id)"
                            v-for="item in activity" :key="item.id">
                          <div class="pic mb-2">
                            <div class="pic-animate bg-cover"
                                style="height:180px"
                                :style="{'background-image':`url(${item.img})`}">
                            </div>
                            <div class="pic-bg"></div>
                            <span href="#" class="pic-view">VIEW</span>
                          </div>
                          <p class="text mb-0 text-secondary">{{item.title}}</p>
                          <span>{{item.date}}</span>
                      </div>
                  </div>
                  <div class="d-flex flex-column mb-5 d-lg-none">
                      <div class="box"
                          v-for="item in activity" :key="item.id">
                        <a href="#" class="box-text mb-1 text-secondary"
                            @click.prevent="view(item.id)">
                        <span class="badge badge-secondary h3">重要</span>
                        <span>{{item.date}}</span>
                        {{item.title}}</a>
                      </div>
                  </div>
                </div>

                <div v-if="active==='exposition'">
                  <div class="row d-lg-flex d-none">
                      <div class="new-message-item col-lg-3 mb-3"
                            @click.prevent="view(item.id)"
                            v-for="item in exposition" :key="item.id">
                          <div class="pic mb-2">
                            <div class="pic-animate bg-cover"
                                style="height:180px"
                                :style="{'background-image':`url(${item.img})`}">
                            </div>
                            <div class="pic-bg"></div>
                            <span href="#" class="pic-view">VIEW</span>
                          </div>
                          <p class="text mb-0 text-secondary">{{item.title}}</p>
                          <span>{{item.date}}</span>
                      </div>
                  </div>
                  <div class="d-flex flex-column mb-5 d-lg-none">
                      <div class="box"
                          v-for="item in exposition" :key="item.id">
                        <a href="#" class="box-text mb-1 text-secondary"
                            @click.prevent="view(item.id)">
                        <span class="badge badge-secondary h3">重要</span>
                        <span>{{item.date}}</span>
                        {{item.title}}</a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'new',
      data: []
    }
  },
  computed: {
    newdata () {
      return this.data.filter((item) => {
        return item.category === 'new'
      })
    },
    activity () {
      return this.data.filter((item) => {
        return item.category === 'activity'
      })
    },
    exposition () {
      return this.data.filter((item) => {
        return item.category === 'exposition'
      })
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      const api = '/jsondata/newmsg.json'
      this.$http.get(api).then((response) => {
        this.data = response.data.data
      })
    },
    view (id) {
      this.$store.dispatch('view', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-bg{
     background-image:url('https://images.unsplash.com/photo-1549248287-f371a6246ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60');
     position:relative;
     padding: 90px 0px 0px 0px;
  };
</style>
