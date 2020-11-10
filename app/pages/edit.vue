<template>
  <div class="main-container">
    <div id="contents">
      <Company />
      <ul style="justify-content: center; margin-bottom:0px;">
        <li><button type="button" style="width:110px;" @click="update">更 新</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Company from '~/components/pages/Company.vue'

export default {
  components: {
    Company
  },
  mounted() {
    if (this.index === null) {
      this.$router.push(`/`)
    }
  },
  computed: {
    ...mapGetters({'index' : 'index'})
  },
  methods: {
    async update() {
      try {
        await this.updateCompany()
        this.$router.push(`/`)
      } catch (e) {
        this.$notify.error({
          title: '更新失敗',
          position: 'bottom-right',
          duration: 1000
        })
      }
    },
    ...mapActions(['updateCompany'])
  }
}
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
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
ul {
  display: flex;
  margin-bottom: 20px;
}
@media (max-width: 480px){
  .main-container {
    padding: 5px 10px;
  }
}
</style>
