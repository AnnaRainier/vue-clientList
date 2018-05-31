import Vue from 'vue';
import Vuex from 'vuex';
import Clients from './Clients';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Clients
    }
})

export default store;