import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'

Vue.config.productionTip = false

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
Vue.use(VueRouter)
// 1. Define route components.
// These can be imported from other files
import BookingList from "./components/BookingList"
import BookingAdd from "./components/BookingAdd"
import BookingEdit from "./components/BookingEdit"

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: BookingList },
  { path: '/add', component: BookingAdd },
  { path: '/edit', component: BookingEdit },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.filter('upper', function (value) {
  if (value === null || value === undefined)
    return value;
    
  if (typeof value !== "string") {
    return value;
  }

  return value.toLocaleUpperCase();
});