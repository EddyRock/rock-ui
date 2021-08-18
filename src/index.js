import Vue from 'vue';
import RockInput from './components/RockInput.vue';

const Componetns = {
  RockInput,
};

Object.keys(Componetns).forEach((name) => {
  Vue.component(name, Componetns[name]);
});

export default Componetns;
