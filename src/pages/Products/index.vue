<template>
  <div class="products">
    <div v-if="!loading">
      <div class="product-list" 
        v-for="(item,index) in products" 
        :key="index" 
      >
        <!-- 笔者比较懒没有封装成组件，大家请无视 -->
        <span class="name">{{item.title}}</span>
        <span class="price">{{item.price}}元</span>
        <van-button 
          type="primary" 
          size="small" 
          @click="addHandle(item)"
        >加入购物车</van-button>
      </div>
    </div>
    <van-loading v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent,ref }from 'vue';
import { Product } from '@src/interface/index.ts';
import { apiGetProducts } from '@src/api/index.ts';
import { useStore } from '@src/store/index.ts';
import { toast } from '@src/utility/index.ts';

export default defineComponent({
  name: "Products",
  setup(){
    const products= ref<Product[]>([]);
    const loading = ref(false);
    const { commit, getters } = useStore();

    // 获取产品列表
    const getProducts = async () => {
      loading.value = true;
      products.value = await apiGetProducts();
      loading.value = false;
    }
    // 加入购物车
    const addToCart = (product:Product) => {
      commit('ADD_TO_CARD',{
        title:product.title,
        count:1,
        id:product.id
      })
    }
    // 判断是否在购物车中已存在
    const isInCart = (product:Product)=>{
      return getters.isInCart(product);
    }
    
    const addHandle = (product:Product) => {
      // 如果已经存在
      if(isInCart(product)) return toast('已存在');
      addToCart(product);
      toast('添加成功')
    }

    getProducts();
    return {
      loading, // 加载状态
      products, // 商品列表
      addHandle // 添加购物车
    }
  },
})
</script>
<style lang="less" scoped>
  @import './index.less';
</style>