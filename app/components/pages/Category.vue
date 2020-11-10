<template>
  <div id="category">
    <ul>
      <li class="column">作成日時.</li>
      <li>
        <input
          id="_createdAt"
          type="number"
          v-model="$data._createdAt"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>

    <ul>
      <li class="column">更新日時.</li>
      <li>
        <input
          id="_updatedAt"
          type="number"
          v-model="$data._updatedAt"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>

    <ul>
      <li class="column">カテゴリー名.</li>
      <li>
        <input
          id="name"
          type="text"
          v-model="name"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>
    <ul>
      <li class="column">場所.</li>
      <li>
        <input
          id="muscleArea"
          type="text"
          v-model="muscleArea"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>

    <ul>
      <li class="column">カテゴリーID.</li>
      <li>
        <input
          id="categoryID"
          type="text"
          v-model="categoryID"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>
    <ul>
      <li class="column">トレーニングID.</li>
      <li>
        <div>
          <input
            id="traningIDSearch"
            type="text"
            v-model=traningIDSearch
            ref="traningIDSearch"
            style="border-style:inset; background-color: #f0f8ff;"
          />
        </div>
      </li>
      <li style="margin-left:10px;">
        <button type="button" @click="addTraningID()">追 加</button>
      </li>
    </ul>
    <ul>
      <li class="column"></li>
      <li id="traningCategoryID">
        <div id="traningIDs" v-if="traningIDs !== null">
          <div v-for="trID in Object.keys(traningIDs)" :key="trID">
            <span>{{ trID }}</span>
            <!-- <span @click="deleteTraningID(trID)">✖</span> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      _createdAt: moment(new Date()).format("YYYYMMDDHHmm"),
      _updatedAt: moment(new Date()).format("YYYYMMDDHHmm"),
      name: null,
      muscleArea: null,
      categoryID: null,
      traningIDSearch: null,
      traningIDs: {},
    };
  },
  computed: {
    ...mapGetters({ category: "category" }),
  },
  mounted() {
    if (this.category !== null) {
      this.init();
      this.createObject();
    }
  },
  methods: {
    init() {
      this.$data._createdAt = this.category._createdAt,
      this.$data._updatedAt = (moment(new Date()).format("YYYYMMDDHHmm")),
      this.name = this.category.name,
      this.muscleArea = this.category.muscleArea,
      this.categoryID = this.category.categoryID,
      this.traningIDSearch = this.category.traningIDSearch,
      this.traningIDs = (this.category.traningIDs === undefined) ? {} : this.category.traningIDs
    },
    createObject() {
      const targetData = {
        _createdAt: this.$data._createdAt,
        _updatedAt: this.$data._updatedAt,
        name: this.name,
        muscleArea: this.muscleArea,
        categoryID: this.categoryID,
        traningIDs: this.traningIDs,
      };
      this.createTargetCategoryData({ category: targetData });
    },
    addTraningID() {
      if (this.traningIDSearch === null || this.traningIDSearch === "") {
        this.$refs.traningIDSearch.focus();
        return;
      }
      if (Object.keys(this.traningIDs).includes(this.traningIDSearch)) {
        this.traningIDSearch = "";
        this.$refs.traningIDSearch.focus();
        return;
      }
      // const traningIDLower = this.traningIDSearch.toLowerCase();
      // let path = null;
      // try {
      //   path = require(`../../assets/img/${traningIDLower}.svg`);
      // } catch (e) {
      //   path = null;
      // }
      this.traningIDs[this.traningIDSearch] = true;
      this.traningIDSearch = "";
      this.createObject();
      this.$refs.traningIDSearch.focus();
    },
    // deleteTraningID(traningID) {
    //   console.log(traningID);
    //   delete this.traningIDs[traningID];
    //   this.createObject();
    // },
    onChange() {
      this.createObject();
    },
    ...mapActions(["createTargetCategoryData"]),
  },
};
</script>

<style scoped>
ul {
  display: flex;
  margin-bottom: 20px;
}
.column {
  width: 160px;
}
#link {
  width: 300px;
}
#address {
  width: 450px;
}
#salary {
  width: 450px;
}
#bonus {
  width: 450px;
}
#worktime {
  width: 450px;
}
.welfare {
  width: 500px;
  margin-bottom: 10px;
}
#traningID {
  display: flex;
  flex-wrap: wrap;
  width: 485px;
  padding: 10px;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  background-color: #f0f8ff;
}
#traningID div {
  margin: 3px;
  padding: 7px 10px;
  font-size: 12px;
  background-color: #000000;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}
#traningID span {
  color: #ffffff;
}

#traningCategoryID div {
  /* display: flex;
  flex-wrap: wrap;
  width: 485px; */
  padding: 10px;
  border: 1px solid silver;
  border-radius: 2px;
  background-color: #f0f8ff;
}

#traningIDs div {
  margin: 3px;
  padding: 7px 10px;
  font-size: 12px;
  background-color: lemonchiffon;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}

@media (max-width: 480px) {
  .column {
    width: 70px;
    margin-right: 10px;
  }
  input {
    width: 220px !important;
  }
  #traningID {
    width: 270px;
    padding: 10px;
  }
}
</style>
