<template>
  <div class="main-container">
    <SearchArea />
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" class="item">
      <CompanyList />
      <CompanyDetail />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchArea from "~/components/pages/SearchArea.vue";
import CompanyList from "~/components/pages/CompanyList.vue";
import CompanyDetail from "~/components/pages/CompanyDetail.vue";

export default {
  components: {
    SearchArea,
    CompanyList,
    CompanyDetail,
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
