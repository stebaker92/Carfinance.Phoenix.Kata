<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Phoenix"/>
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BookingList from "./components/BookingList.vue";
import BookingAdd from "./components/BookingAdd.vue";
import BookingEdit from "./components/BookingEdit.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    BookingList,
    BookingAdd,
    BookingEdit
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 3%;
}
</style>
