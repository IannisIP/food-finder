import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
