<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>


<script>
import MainTabBar from "content/mainTabbar/MainTabBar";
// import TabBar from "components/tabbar/TabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>


<style>
@import "assets/css/base.css";
</style>
