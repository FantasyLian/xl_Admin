// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 全局注册axios
Vue.prototype.$http = axios

// 设置全局访问接口
// axios.defaults.baseURL = 'http://25912xa672.zicp.vip/appservice'

new Vue({
	router,
	components: { App },
	template: '<App/>'
}).$mount('#app');
