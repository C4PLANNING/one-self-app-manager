<template>
  <div class="main-container">
    <div id="contents">
      <Category />
      <ul style="justify-content: center; margin-bottom:0px;">
        <li>
          <button type="button" style="width:110px;" @click="regist">
            新 規 登 録
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Category from "~/components/pages/Category.vue";

export default {
  components: {
    Category,
  },
  methods: {
    async regist() {
      try {
        await this.registCategory();
        this.$router.push(`/index_category`);
      } catch (e) {
        this.$notify.error({
          title: "登録失敗",
          position: "bottom-right",
          duration: 1000,
        });
      }
    },
    ...mapActions(["registCategory"]),
  },
};
</script>

<style scoped>
.main-container {
  padding: 80px 250px 30px;
  min-height: 100vh;
}
#contents {
  margin: 10px;
  padding: 30px 30px;
  background-color: #ffffff;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}
ul {
  display: flex;
  margin-bottom: 20px;
}
@media (max-width: 480px) {
  .main-container {
    padding: 5px 10px;
  }
}
</style>
