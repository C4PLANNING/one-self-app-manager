<template>
  <div id="detail" class="item-contents" v-if="category === null">
    <p style="padding: 15px 0 15px 15px;">
      トレーニングカテゴリー名を選択してください!!
    </p>
  </div>
  <div id="detail" class="item-contents" v-else>
    <div>
      <p class="column">◾️作成日時</p>
      <p class="value">{{ category._createdAt }}</p>
    </div>
    <div>
      <p class="column">◾️更新日時</p>
      <p class="value">{{ category._updatedAt }}</p>
    </div>
    <div>
      <p class="column">◾️カテゴリー名</p>
      <p class="value">{{ category.name }}</p>
    </div>
    <div>
      <p class="column">◾️場所</p>
      <p class="value">{{ category.muscleArea }}</p>
    </div>
    <div>
      <p class="column">◾️カテゴリーID</p>
      <p class="value">{{ category.categoryID }}</p>
    </div>
    <div>
      <p class="column">◾️トレーニングID</p>
      <div id="usedSkills">
        <div
          class="skill"
          v-for="traningID in Object.keys(category.traningIDs)" :key="traningID"
        >
          <div class="value">
            <p>{{ traningID }}</p>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="editCompany button" @click="editData($store.state.index, category.name)">
      編 集
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({ category: "category" }),
  },
  methods: {
    async editData(index, name) {
      this.fetchCategory({ index: index });
      this.$router.push(`/edit_category`);
    },
    ...mapActions([
      "fetchCategory",
    ]),
  }
};
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

#usedSkills {
  /* display: flex;
  flex-wrap: wrap; */
  width: 485px;
  padding: 10px;
  border: 1px solid silver;
  border-radius: 2px;
  background-color: #f0f8ff;
}

.skill {
  /* display: inline-block; */
  /* margin: 10px 15px 10px 15px; */
}

.editCompany {
  background-color: #6495ed;
}

@media (max-width: 480px) {
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
  .editCompany {
    background-color: #6495ed;
  }
}
</style>
