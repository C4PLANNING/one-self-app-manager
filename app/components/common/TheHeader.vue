<template>
  <div id="header-container">
    <ul id="header">
      <li id="h-menu">
        <TheMenu />
      </li>
      <li>
        <nuxt-link to="/" class="logo">OneSelF+</nuxt-link>
      </li>
      <li v-if="$route.path=='/' || $route.path=='/new_category' || $route.path=='/edit_category'" class="button" style="background-color: #6495ed; width:300px;">
        <v-btn
          to="/index_category"
          nuxt
          style="background-color:inherit; box-shadow:none; margin:0 auto;"
        >トレーニングカテゴリへ</v-btn>
      </li>
      <li v-else class="button" style="background-color: #6495ed; width:300px;">
        <v-btn
          to="/"
          nuxt
          style="background-color:inherit; box-shadow:none; margin:0 auto;"
        >トレーニングメニューへ</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import TheMenu from "~/components/common/TheMenu.vue";

export default {
  components: {
    TheMenu
  }
};
</script>

<style scoped>
#header-container {
  position: fixed;
  width: 1700px;
  padding: 15px 0;
  background: linear-gradient(
    -45deg,
    rgba(246, 255, 0, 0.8),
    rgba(255, 0, 161, 0.8)
  );
  /* animation: huerotator 5s infinite alternate; */
}
#header {
  display: flex;
}
#header .button {
  /*  ▼装飾など  */
  /* margin-left: 10px;
  padding: 10px; */
  /* border: 1px solid #333;
  background: pink; */
  margin: 0 auto;
}
#header li {
  display: flex;
  margin: 0 20px;
  font-weight: bold;
}
#header a {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 480px) {
  #header li {
    margin: 0;
  }
  #header #h-menu {
    margin: 0 10px;
  }
}
</style>
