import Vue from 'vue';
import RockInput from './components/RockInput.vue';
import RockCheckbox from './components/RockCheckbox.vue';
import RockSelect from './components/RockSelect.vue';
import RockTextArea from './components/RockTextArea.vue';

const Componetns = {
  RockInput,
  RockCheckbox,
  RockSelect,
  RockTextArea,
};

Object.keys(Componetns).forEach((name) => {
  Vue.component(name, Componetns[name]);
});

export default Componetns;
