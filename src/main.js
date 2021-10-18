import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'
import router from './router'
import VueSimpleSVG, {SimpleSVG} from "vue-simple-svg";
import '@/assets/style.css'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.component('simple-svg', SimpleSVG)

const opts = {
    theme: {
        dark: true,
        themes: {
            light: {
                accent: '#2A2F45',
                basic: '#161B30',
                fontDisable: "#8A91AB",

            },
            dark: {
                accent: "#2A2F45",
                basic: '#161B30',
                fontDisable: "#8A91AB",
            }
        },
    },
}
Vue.use(Vuetify, VueSimpleSVG);


new Vue({
    vuetify: new Vuetify(opts),
    router,
    render: h => h(App)
}).$mount('#app')
