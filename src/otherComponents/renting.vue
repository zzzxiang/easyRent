<script setup>
import request from '../axios/request.js'
import{reactive} from 'vue'
const myrent=reactive([{list:[]}]);
(function(){
  request({
    url:'/mock/getmyrent',
    method:'get'
  }).then(res=>{
    myrent.list=res.data.data
    console.log(res.data.data)
  }).catch(error=>{
    console.log(error)
  })
})();
const getImageUrl = (item) => {
  return new URL(`${item.url}`, import.meta.url).href
}
</script>
<template>
  <div class="renting">
    <ul>
      <li v-for="item in myrent.list">
          <router-link to="">
            <div class="img">
              <img :src="getImageUrl(item)" alt="">
            </div>
            <div class="text">
              <h6>{{item.title}}</h6>
              <p class="price">￥<i>{{item.price}}</i>/天</p>
              <p class="yajin">押金:{{ item.yajin }}元</p>
              <span>品牌:{{ item.brand }}</span>
              <span>成色:{{ item.newing }}</span>
            </div>
          </router-link>
        </li>
    </ul>
  </div>
</template>
<style src="../css/common.css"></style>
<style scoped>
.renting{
  width: 100%;
  height: 100%;
  background-color: rgb(251, 247, 253);
}
ul{
  width: 100%;
  height: 100%;
}
ul li{
  width: 130px;
  height: 165px;
  margin-top: 40px;
  margin-right: 5px;
}
ul li .img{
    width: 130px;
  height: 100px;
}
ul li img{
  width: 130px;
  height: 100px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
ul li .text{
  height: 65px;
  font-size: 11px;
  background-color: #fff;
  line-height: 16px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
ul li .text h6{
  font-size: 13px;
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
ul li span{
  margin-right: 5px;
}
ul li .text .price i{
  font-style: normal;
  color: rgb(184, 3, 3);
  font-size: 15px;
}
</style>