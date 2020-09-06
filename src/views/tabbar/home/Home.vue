<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 导航 -->
    <recommend-views :recommends="recommends"></recommend-views>
    <!-- 本周流行 -->
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendViews from "./homechild/RecommendViews";
import FeatureView from "./homechild/FeatureView";

import { getHome } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    FeatureView,
  },
  data() {
    return {
      //保存请求过来的数据
      banners: [],
      recommends: [],
    };
  },
  created() {
    //组件创建完后发送请求
    getHome().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>