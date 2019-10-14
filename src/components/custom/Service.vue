<template>
  <div>
    <div class="bg-color3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-color2 link-hov"
             to="/index">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-color2 link-hov"
             to="/newmsg/service">服務項目</router-link>
        </li>
      </ol>
    </div>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-3 msg">
        <div class="new-bg bg-cover text-center mb-3">
          <div class="text-white bg-success p-1">服務項目</div>
        </div>
      </div>

      <div class="col-lg-9">
        <div class="top-title p-2 mb-4">
          <h5>服務項目</h5>
        </div>
        <div class="row mb-4">
          <div class="col-lg-4 mt-4" style="line-height:1.8rem">
            <h3>伏入特邀請您</h3>
            <p class="my-4">體驗採水果＆製做水果茶<br>給自己假日一天芬多精之旅</p>
            <p>聞聞水果茶，品味生活中的細緻韻味</p>
        </div>
          <div class="col-lg-8">
            <img class="img-fluid" src="../../assets/img/service-banner.jpg" alt="">
          </div>
        </div>
        <div>
          <p class="mb-4" style="line-height:2rem">伏入特擁有自己的綠色海洋，邀請您來體驗種植的樂趣．遠離都市的紛擾，給自己假日一天休閒之旅。
            不但能放鬆，還能帶精美的體驗水果禮品回家．體驗完還能坐在古色古香的休憩區，挑望一片綠油油的美景，聞聞水果茶，
            喝一杯能讓自己即使回到忙碌的城市工作，只要下午Tea time時，總能想起的放鬆好茶。</p>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-lg-0 mb-3">
            <img class="service-pic img-fluid" src="../../assets/img/list-img1.jpg" alt="">
            <span class="mt-lg-3">體驗採水果樂趣</span>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-3">
            <img class="service-pic img-fluid" src="../../assets/img/list-img2.jpg" alt="">
            <span class="mt-lg-3">製作水果茶好好玩</span>
          </div>
          <div class="col-lg-4">
            <img class="service-pic img-fluid" src="../../assets/img/list-img3.jpg" alt="">
            <span class="mt-lg-3">品嘗水果好茶</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.new-bg{
  background-image:url('../../assets/img/service-bg.jpg');
  position:relative;
  padding: 90px 0px 0px 0px;
};
</style>
