import Vue from 'vue';
import firebase from 'firebase';
import VueFire from 'vuefire';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import App from './App.vue';
import router from './router';


Vue.use(Buefy);
Vue.use(VueFire);
Vue.config.productionTip = true;

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;

  const requiresAuth = to.matched.some(record =>
    record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
