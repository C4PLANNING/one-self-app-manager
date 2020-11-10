<template>
  <div id="search" class="item-contents">
    <div v-if="$route.path == '/'">
      <ul>
        <li style="width:220px;">
          <input
            type="text"
            value
            placeholder="トレーニング名を入力してください"
            style="border-style:inset; background-color: #f0f8ff; width: 200px;"
          />
        </li>
        <li style="width:80px;">
          <div id="searchCompany" class="button" @click="searchCompany()">
            検 索
          </div>
        </li>
      </ul>
      <div id="registCompany" class="button" @click="regist()">
        新 規 登 録 へ
      </div>
    </div>
    <div v-else>
      <ul>
        <li style="width:220px;">
          <input
            type="text"
            value
            placeholder="トレーニングカテゴリー名を入力してください"
            style="border-style:inset; background-color: #f0f8ff; width: 200px;"
          />
        </li>
        <li style="width:80px;">
          <div id="searchCompany" class="button" @click="searchCompany()">
            検 索
          </div>
        </li>
      </ul>
      <div id="registCategory" class="button" @click="registCategory()">
        新 規 登 録 へ
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    async searchCompany() {
      alert("Coming Soon...");
    },
    regist() {
      this.clearCompany();
      this.$router.push(`/new`);
    },
    registCategory() {
      this.clearCategory();
      this.$router.push(`/new_category`);
    },
    ...mapActions(["clearCompany", "clearCategory"]),
  },
};
</script>

<style scoped>
#search {
  margin-top: 50px;
  padding: 20px 30px;
}
#search ul {
  display: flex;
  margin-bottom: 25px;
}
#searchCompany {
  width: 60px;
  background-color: #6495ed;
}
#registCompany {
  width: 120px;
  background-color: #6495ed;
}
#registCategory {
  width: 120px;
  background-color: #6495ed;
}
@media (max-width: 480px) {
  #search {
    margin-top: 80px;
  }
  #search ul {
    margin-bottom: 0;
  }
  #registCompany {
    display: none;
  }
}
</style>
