<template>
  <div class="main-container">
    <SearchArea />
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" class="item">
      <CategoryList />
      <CategoryDetail />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchArea from "~/components/pages/SearchArea.vue";
import CategoryList from "~/components/pages/CategoryList.vue";
import CategoryDetail from "~/components/pages/CategoryDetail.vue";

export default {
  components: {
    SearchArea,
    CategoryList,
    CategoryDetail,
  },
  computed: {
    ...mapGetters({ loading: "loading" }),
  },
};
</script>

<style scoped>
.main-container {
  padding: 30px 70px;
  min-height: 100vh;
}
.item {
  display: flex;
}
@media (max-width: 480px) {
  .main-container {
    padding: 5px 10px;
  }
  #list {
    display: none;
  }
}
</style>
