import Vue from 'vue';
import RockInput from './components/RockInput.vue';
import RockCheckbox from './components/RockCheckbox.vue';
import RockSelect from './components/RockSelect.vue';
import RockTextArea from './components/RockTextArea.vue';
import RockPaginator from './components/RockPaginator.vue';
import RockRadiobutton from './components/RockRadiobutton.vue';
import RockLoader from './components/RockLoader.vue';
import RockLabel from './components/RockLabel.vue';
import RockProgressbar from './components/RockProgressbar.vue';
import RockButton from './components/RockButton.vue';
import RockIconButton from './components/RockIconButton.vue';

const Componetns = {
  RockInput,
  RockCheckbox,
  RockSelect,
  RockTextArea,
  RockPaginator,
  RockRadiobutton,
  RockLoader,
  RockLabel,
  RockProgressbar,
  RockButton,
  RockIconButton,
};

Object.keys(Componetns).forEach((name) => {
  Vue.component(name, Componetns[name]);
});

export default Componetns;
