<template>
  <nav-bar :count="count" :active="activeRouteName"></nav-bar>
  <div class="body">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from './store/index'
import NavBar from "@components/NavBar/index.vue";

export default defineComponent({
  name: 'App',
  components:{
    NavBar
  },
  setup() {
    const store = useStore();
    const route  = useRoute();
    const count = computed(():number=>{
      return store.state.shoppingCart.length;
    })
    const activeRouteName = computed(():string =>{
       // 由于name 可能有RouteRecordName | null | undefined类型
      return route.name?.toString() || '';
    })
    return {
      count,
      activeRouteName
    }
  },
})
</script>
