<template>
  <div id="home">
    <!-- <h1>首页</h1> -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import { getHome } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
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
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>