import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store} from 'vuex';
import { Product } from '../interface';

export interface State{
	shoppingCart: Product[]
}

// 创建唯一类型key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state:{
		shoppingCart:[]
	},
	getters:{
		isInCart(state){
			return (data:any)=>{
				return state.shoppingCart.findIndex(item=>item.id === data.id) > -1 ? true : false;
			}
		}
	},
	mutations:{
		// 添加购物车
		ADD_TO_CARD(state,data){
			state.shoppingCart.push(data);
		},
		// 更新购物车数量
		CHANGE_COUNT(state,{type,data}){
		 return	state.shoppingCart.map(item=>{
			 if(data.id=== item.id){
				 item.count += type === 'add' ? 1 : -1;
			 }
			 return item;
		 })
		},
		// 删除购物车
		REMOVE_BY_ID(state,id){
			state.shoppingCart = state.shoppingCart.filter(item=>item.id!==id);
		}
	}
})
export function useStore(){
	// 通过key给store提供类型
	return baseUseStore(key)
}