import { createApp } from 'vue'
import { Button,Loading,Toast,Icon } from 'vant';
import App from './App.vue'
import router from './router';
import { store , key} from './store/index';
import './index.less'
import 'vant/lib/index.css';

const app = createApp(App);

// vant组件引入
app.use(Button).use(Loading).use(Toast).use(Icon);

// 添加全局方法
app.config.globalProperties.$toast = (msg:string)=>{
	return Toast(msg)
};


app.use(router);
app.use(store,key);
app.mount('#app')
