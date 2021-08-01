require('./bootstrap');
import Vue from 'vue';
import App from './vue/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash, faSearch, faList, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrettyCheckbox from 'pretty-checkbox-vue';

library.add(faPlusSquare, faTrash, faSearch, faList, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(PrettyCheckbox);

const app = new Vue({
    el:'#app',
    components:{ App }
});
