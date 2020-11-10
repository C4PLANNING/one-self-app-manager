<template>
  <div id="footer-container">
    <p>copyright(c) 2019 Shintarou Tanaka</p>
  </div>
</template>

<style scoped>
#footer-container {
  padding: 10px 0;
  text-align: center;
  background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8));
  animation: huerotator 5s infinite alternate;
}
#footer-container p {
  color: #ffffff;
}
@media (max-width: 480px){
  #footer-container {
    display: none;
  }
}
</style>