<template>
  <div id="list" class="item-contents">
    <div v-for="item in sortCompanys(companys)" :key="item[1].id">
      <div class="list-contents">
        <div class="editCompany button" @click="editData(item[0], item[1].name)">
          編 集
        </div>
        <div
          class="button"
          @click="deleteData(item[0], item[1].name)"
          style="display:none;"
        >
          削 除
        </div>
        <div class="company-link" @click="detailData(item[0])">
          {{ item[1].name }}
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
    ...mapGetters({ companys: "companys", company: "company" }),
  },
  methods: {
    async init() {
      await this.fetchCompanys();
      this.clearCompany();
    },
    async detailData(index) {
      this.fetchCompany({ index: index });
      this.$vuetify.goTo(0);
    },
    async editData(index, name) {
      this.fetchCompany({ index: index });
      this.$router.push(`/edit`);
    },
    async deleteData(index, name) {
      try {
        await this.deleteCompany({ index: index });
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
      this.clearCompany();
    },
    
    sortCompanys(companys) {
      const sortItem = function(a, b){
        // function katakanaToHiragana(src) {
        //   return src.replace(/[\u30a1-\u30f6]/g, function(match) {
        //     var chr = match.charCodeAt(0) - 0x60;
        //     return String.fromCharCode(chr);
        //   });
        // };

        // categoryIDでソート
        a = a[1]['categoryID'];
        b = b[1]['categoryID'];

        if(a < b){
          return -1;
        }else if(a > b){
          return 1;
        }
        return 0;
      }
      var sortedData = [].slice.call(Object.entries(companys)).sort(sortItem);
      // console.info(sortedData);
      return sortedData;
    },
    
    ...mapActions([
      "fetchCompanys",
      "fetchCompany",
      "deleteCompany",
      "clearCompany",
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
