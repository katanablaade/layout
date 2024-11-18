import Vue from 'vue';

Vue.filter('addMore', (value) => {
  return value.slice(0, 400);
});
