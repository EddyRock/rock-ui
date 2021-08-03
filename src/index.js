import Vue from 'vue';

const Componetns = {};

Object.keys(Componetns).forEach((name) => {
  Vue.component(name, Componetns[name]);
});

export default Componetns;
