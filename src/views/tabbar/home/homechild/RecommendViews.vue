<template>
  <div class="recommend_item">
    <div v-for="item in recommends" :key="item.id" class="reitem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendviews",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style >
.recommend_item {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 25px;
  border-bottom: 8px solid #eee;
}
.reitem {
  flex: 1;
}
.reitem img {
  width: 90%;
  margin-bottom: 5px;
}
</style>