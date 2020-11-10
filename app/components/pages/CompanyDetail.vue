<template>
  <div id="detail" class="item-contents" v-if="company === null">
    <p style="padding: 15px 0 15px 15px;">トレーニング名を選択してください!!</p>
  </div>
  <div id="detail" class="item-contents" v-else>
    
    <div>
      <p class="column">◾️作成日時</p>
      <p class="value">{{ company._createdAt }}</p>
    </div>
    <div>
      <p class="column">◾️更新日時</p>
      <p class="value">{{ company._updatedAt }}</p>
    </div>
    <div>
      <p class="column">◾️トレーニング名</p>
      <p class="value">{{ company.name }}</p>
    </div>
    <div>
      <p class="column">◾️かな</p>
      <p class="value">{{ company.kanaName }}</p>
    </div>
    <div>
      <p class="column">◾️ID</p>
      <p class="value">{{ company.id }}</p>
    </div>
    <div>
      <p class="column">◾️カテゴリーID</p>
      <p class="value">{{ company.categoryID }}</p>
    </div>
    <div>
      <p class="column">◾️分類</p>
      <p class="value">{{ company.type }}</p>
    </div>
    <div>
      <p class="column">◾️オーソリティー</p>
      <p class="value">{{ company.authority }}</p>
    </div>
    <div>
      <p class="column">◾️BGM</p>
      <p class="value">{{ company.bgm }}</p>
    </div>
    <div>
      <p class="column">◾️フォルダ名</p>
      <p class="value">{{ company.directoryPath }}</p>
    </div>
    <div>
      <p class="column">◾️ハウトゥームービー</p>
      <p class="value">{{ company.howToMovie }}</p>
    </div>
    <div>
      <p class="column">◾️ムービー</p>
      <p class="value">{{ company.movie }}</p>
    </div>
    <div>
      <p class="column">◾️サムネイル</p>
      <p class="value">{{ company.thumbnail }}</p>
    </div>
    <div>
      <p class="column">◾️デフォルトカウント</p>
      <p class="value">{{ company.defaultCount }}</p>
    </div>
    <div>
      <p class="column">◾️デフォルトインターバル</p>
      <p class="value">{{ company.defaultInterval }}</p>
    </div>
    <div>
      <p class="column">◾️デフォルトセット</p>
      <p class="value">{{ company.defaultSet }}</p>
    </div>
    <div>
      <p class="column">◾️デフォルトスピード</p>
      <p class="value">{{ company.defaultSpeed }}</p>
    </div>
    <br>
    <div class="editCompany button" @click="editData($store.state.index, company.name)">
      編 集
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({'company' : 'company'})
  },
  methods: {
    async editData(index, name) {
      this.fetchCompany({ index: index });
      this.$router.push(`/edit`);
    },
     ...mapActions([
      "fetchCompany",
    ]),
  }
}
</script>

<style scoped>
#detail {
  width: 65vw;
}
.column {
  margin: 10px;
  font-weight: bold;
}
.value {
  margin: 10px 10px 10px 20px;
  font-size: 13px;
}
.value div {
  margin: 0px !important;
}
.value div img {
  width: 30px;
  height: 30px;
}
.skill {
  display: inline-block;
  margin: 10px 15px 10px 15px;
}
.skill-img {
  margin: 0px !important;
}
.skill-img p {
  font-size: 10px;
  text-align: center;
}
.editCompany {
  background-color: #6495ed;
}
@media (max-width: 480px){
  #detail {
    width: 100vw;
  } 
  #address-area {
    width: 85vw;
  }
  #address-area .value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .r-skill {
    width: 85vw;
  }
  .r-skill .value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
