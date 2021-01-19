import data from './data';
import { Product } from "@src/interface/index.ts";

/**
 * 获取产品列表
 */
export const apiGetProducts = ()=>{
  return new Promise<Product[]>((resolve)=>{
    // 模拟接口请求
    setTimeout(()=>{
      resolve(data);
    },1000)
  })
}
