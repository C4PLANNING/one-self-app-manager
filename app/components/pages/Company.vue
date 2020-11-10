<template>
  <div id="company">
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
      <li class="column">トレーニング名.</li>
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
      <li class="column">かな.</li>
      <li>
        <input
          id="kanaName"
          type="text"
          v-model="kanaName"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>
    <ul>
      <li class="column">ID.</li>
      <li>
        <input
          id="id"
          type="text"
          v-model="id"
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
          autocomplete="on"
          list="category_suggest"
        />
        <datalist id="category_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'categoryID')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">分類.</li>
      
      <li>
        <input
          id="type"
          type="text"
          v-model="type"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="type_suggest"
        />
        <datalist id="type_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'type')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">オーソリティー.</li>
      <li>
        <input
          id="authority"
          type="text"
          v-model="authority"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="authority_suggest"
        />
        
        <datalist id="authority_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'authority')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">BGM.</li>
      <li>
        <input
          id="bgm"
          type="text"
          v-model="bgm"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="bgm_suggest"
        />
        <datalist id="bgm_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'bgm')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">フォルダ.</li>
      <li>
        <input
          id="directoryPath"
          type="text"
          v-model="directoryPath"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="directoryPath_suggest"
        />
        <datalist id="directoryPath_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'directoryPath')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">ハウトゥームービー.</li>
      <li>
        <input
          id="howToMovie"
          type="text"
          v-model="howToMovie"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="howToMovie_suggest"
        />
        <datalist id="howToMovie_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'howToMovie')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">ムービー.</li>
      <li>
        <input
          id="movie"
          type="text"
          v-model="movie"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="movie_suggest"
        />
        <datalist id="movie_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'movie')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">サムネイル.</li>
      <li>
        <input
          id="thumbnail"
          type="text"
          v-model="thumbnail"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
          autocomplete="on"
          list="thumbnail_suggest"
        />
        <datalist id="thumbnail_suggest">  
          <option v-for="n in suggest_array(Object.values($store.state.companys), 'thumbnail')" :key="n">{{n}}</option>
        </datalist>
      </li>
    </ul>
    <ul>
      <li class="column">デフォルトカウント.</li>
      <li>
        <input
          id="defaultCount"
          type="number"
          v-model="defaultCount"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>
    <ul>
      <li class="column">デフォルトインターバル.</li>
      <li>
        <input
          id="defaultInterval"
          type="number"
          v-model="defaultInterval"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>
    <ul>
      <li class="column">デフォルトセット.</li>
      <li>
        <input
          id="defaultSet"
          type="number"
          v-model="defaultSet"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
      </li>
    </ul>
    <ul>
      <li class="column">デフォルトスピード.</li>
      <li>
        <input
          id="defaultSpeed"
          type="number"
          v-model="defaultSpeed"
          @change="onChange"
          style="border-style:inset; background-color: #f0f8ff;"
        />
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
      kanaName: null,
      id: null,
      categoryID: null,
      type: null,
      authority: null,
      bgm: null,
      directoryPath: null,
      howToMovie: null,
      movie: null,
      thumbnail: null,
      defaultCount: null,
      defaultInterval: null,
      defaultSet: null,
      defaultSpeed: null,
    };
  },
  computed: {
    ...mapGetters({ companys: "companys", company: "company" }),
  },
  mounted() {
    if (this.company !== null) {
      this.init();
      this.createObject();
    }
  },
  methods: {
    init() {
      this.$data._createdAt = this.company._createdAt;
      (this.$data._updatedAt = moment(new Date()).format("YYYYMMDDHHmm")),
        (this.name = this.company.name),
        (this.kanaName = this.company.kanaName),
        (this.id = this.company.id),
        (this.categoryID = this.company.categoryID),
        (this.type = this.company.type),
        (this.authority = this.company.authority),
        (this.bgm = this.company.bgm),
        (this.directoryPath = this.company.directoryPath),
        (this.howToMovie = this.company.howToMovie),
        (this.movie = this.company.movie),
        (this.thumbnail = this.company.thumbnail),
        (this.defaultCount = this.company.defaultCount),
        (this.defaultInterval = this.company.defaultInterval),
        (this.defaultSet = this.company.defaultSet),
        (this.defaultSpeed = this.company.defaultSpeed);
    },
    createObject() {
      const targetData = {
        _createdAt: this.$data._createdAt,
        _updatedAt: this.$data._updatedAt,
        name: this.name,
        kanaName: this.kanaName,
        id: this.id,
        categoryID: this.categoryID,
        type: this.type,
        authority: this.authority,
        bgm: this.bgm,
        directoryPath: this.directoryPath,
        howToMovie: this.howToMovie,
        movie: this.movie,
        thumbnail: this.thumbnail,
        defaultCount: this.defaultCount,
        defaultInterval: this.defaultInterval,
        defaultSet: this.defaultSet,
        defaultSpeed: this.defaultSpeed,
      };
      this.createTargetData({ company: targetData });
    },
    // addSkill() {
    //   if (this.usedSkillsSearch === null || this.usedSkillsSearch === "") {
    //     this.$refs.usedSkillsSearch.focus();
    //     return;
    //   }
    //   if (this.usedSkills.find(item => item.key === this.usedSkillsSearch)) {
    //     this.usedSkillsSearch = "";
    //     this.$refs.usedSkillsSearch.focus();
    //     return;
    //   }
    //   const skillLower = this.usedSkillsSearch.toLowerCase();
    //   let path = null;
    //   try {
    //     path = require(`../../assets/img/${skillLower}.svg`);
    //   } catch (e) {
    //     path = null;
    //   }
    //   const params = { key: this.usedSkillsSearch, path: path };
    //   this.usedSkills.push(params);
    //   this.usedSkillsSearch = "";
    //   this.createObject();
    //   this.$refs.usedSkillsSearch.focus();
    // },
    // deleteSkill(skillKey) {
    //   for (let i in this.usedSkills) {
    //     if (this.usedSkills[i].key === skillKey) {
    //       this.usedSkills.splice(i, 1);
    //       this.createObject();
    //       break;
    //     }
    //   }
    // },
    onChange() {
      this.createObject();
    },
    suggest_array(arr, str) {
      const res = [];
      arr.forEach(function(traning) {

        if (!res.includes(traning[str])) {
          
          res.push(traning[str]);
        }
      });
      return res.sort();
    },
    ...mapActions(["createTargetData"]),
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
#usedSkills {
  display: flex;
  flex-wrap: wrap;
  width: 485px;
  padding: 10px;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  background-color: #f0f8ff;
}
#usedSkills div {
  margin: 3px;
  padding: 7px 10px;
  font-size: 12px;
  background-color: #000000;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}
#usedSkills span {
  color: #ffffff;
}
.requiredSkill {
  width: 500px;
  margin-bottom: 10px;
}
.welcomedSkill {
  width: 500px;
  margin-bottom: 10px;
}
@media (max-width: 480px) {
  .column {
    width: 70px;
    margin-right: 10px;
  }
  input {
    width: 220px !important;
  }
  #usedSkills {
    width: 270px;
    padding: 10px;
  }
}
</style>
