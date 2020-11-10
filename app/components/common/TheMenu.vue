<template>
  <div id="nav-drawer">
    <input id="nav-input" type="checkbox" class="nav-unshown">
    <label id="nav-open" for="nav-input"><span></span></label>
    <label class="nav-unshown" id="nav-close" for="nav-input"></label>
    <div id="nav-content">
      <div v-for="(company, index) in companys" :key="company.id" for="nav-input">
        <label for="nav-input"><div class="company-link" @click="detailData(index)">{{ company.name }}</div></label>
      </div>
      <div style="margin-bottom: 50px;"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted() {
    this.init()
  },
  computed: {
    ...mapGetters({'companys' : 'companys'})
  },
  methods: {
    async init() {
      await this.fetchCompanys()
      this.clearCompany()
    },
    async detailData(index) {
      this.fetchCompany({ index : index })
    },
    ...mapActions(['fetchCompanys', 'fetchCompany', 'clearCompany'])
  }
}
</script>

<style scoped>
template {
  padding: 10px;
}
#nav-drawer {
  display: none;
}
.nav-unshown {
  display: none;
}
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}
#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 60vw;
  max-width: 330px;
  height: 100vh;
  transition: .3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
  padding: 20px 10px;
  background-color: #000000;
}
#nav-input:checked ~ #nav-close {
  display: block;
  opacity: .5;
}
#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
.company-link {
  padding : 10px 0 10px 10px;
  color: #ffffff;
  border-bottom: solid 1px #ffffff;
}
@media (max-width: 480px){
  #nav-drawer {
    display: inline;
    position: relative;
  }
}
</style>
