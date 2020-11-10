<template>
  <div id="list" class="item-contents">
    <div v-for="(category, index) in categorys" :key="category.id">
      <div class="list-contents">
        <div class="editCompany button" @click="editData(index, category.name)">
          編 集
        </div>
        <div
          class="button"
          @click="deleteData(index, category.name)"
          style="display:none;"
        >
          削 除
        </div>
        <div class="company-link" @click="detailData(index)">
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    this.init();
  },
  computed: {
    ...mapGetters({ categorys: "categorys", category: "category" }),
  },
  methods: {
    async init() {
      await this.fetchCategorys();
      this.clearCategory();
    },
    async detailData(index) {
      this.fetchCategory({ index: index });
      this.$vuetify.goTo(0);
    },
    async editData(index, name) {
      //   const masterList = [
      //     "Yahoo JAPAN",
      //     "ペンシル",
      //     "ヌーラボ",
      //     "しくみデザイン",
      //     "GMOペパボ",
      //     "エニセンス",
      //     "キャッチアップ",
      //     "さくらインターネット",
      //     "クラウドエース",
      //     "ラック",
      //     "レベルファイブ",
      //     "クラスメソッド",
      //     "チームラボ",
      //     "ヤマップ",
      //     "オンサイト",
      //     "アジアクエスト"
      //   ];
      //   if (masterList.find(item => item === name)) {
      //     alert("マスターデータは変更できません");
      //     return;
      //   }
      this.fetchCategory({ index: index });
      this.$router.push(`/edit_category`);
    },
    async deleteData(index, name) {
      //   const masterList = [
      //     "Yahoo JAPAN",
      //     "ペンシル",
      //     "ヌーラボ",
      //     "しくみデザイン",
      //     "GMOペパボ",
      //     "エニセンス",
      //     "キャッチアップ",
      //     "さくらインターネット",
      //     "クラウドエース",
      //     "ラック",
      //     "レベルファイブ",
      //     "クラスメソッド",
      //     "チームラボ",
      //     "ヤマップ",
      //     "オンサイト",
      //     "アジアクエスト"
      //   ];
      //   if (masterList.find(item => item === name)) {
      //     alert("マスターデータは削除できません");
      //     return;
      //   }
      try {
        await this.deleteCategory({ index: index });
        this.$notify({
          type: "success",
          title: "削除成功",
          position: "bottom-right",
          duration: 1000,
        });
      } catch (e) {
        this.$notify.error({
          title: "削除失敗",
          position: "bottom-right",
          duration: 1000,
        });
      }
      this.clearCategory();
    },
    ...mapActions([
      "fetchCategorys",
      "fetchCategory",
      "deleteCategory",
      "clearCategory",
    ]),
  },
};
</script>

<style scoped>
#list {
  width: 35vw;
  min-height: 60vh;
}
.list-contents {
  margin: 15px 0;
  padding-bottom: 15px;
  border-collapse: separate;
  border-spacing: 15px 0;
  border-bottom: solid 1px #c0c0c0;
}
.list-contents div {
  display: table-cell;
  vertical-align: middle;
}
.editCompany {
  background-color: #6495ed;
}
.company-link {
  color: #6495ed;
}
.company-link:hover {
  color: #ff69b4;
}
</style>
