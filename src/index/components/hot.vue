<script setup>
import request from '../../axios/request.js'
import {reactive} from 'vue'
const hotbrands=reactive([{list:[]}]);
const goodrent=reactive([{list:[]}]);
const hotneed=reactive([{list:[]}]);
(function(){
  request({
    url:'/mock/gethotbrands',
    method:'get'
  }).then(res=>{
    hotbrands.list=res.data.data
    console.log(res.data.data)
  }).catch(error=>{
    console.log(error)
  })
})();

(function(){
  request({
    url:'/mock/getgoodrent',
    method:'get'
  }).then(res=>{
    goodrent.list=res.data.data
    console.log(res.data.data)
  }).catch(error=>{
    console.log(error)
  })
})();

(function(){
  request({
    url:'/mock/gethotneed',
    method:'get'
  }).then(res=>{
    hotneed.list=res.data.data
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
<div class="banner container">
    <div class="block text-center">
    <span class="demonstration">
    </span>
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
  <div class="hotbrand container">
    <div class="head">
      <h2>热租品牌</h2>
      <a href="#">查看全部></a>
    </div>
    <div class="body">
      <ul>
          <li v-for="item in hotbrands.list" :key="item.id">
            <router-link to="">
              <img :src="getImageUrl(item)"  alt="">
            <h4>{{ item.name }}</h4>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="goodrent container">
     <div class="head">
      <h2>好物出租</h2>
      <a href="#">查看全部></a>
    </div>
    <div class="body">
      <ul>
        <li v-for="item in goodrent.list">
          <router-link>
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
  </div>
  <div class="hotneed container">
    <div class="head">
      <h2>热门求租</h2>
      <a href="#">查看全部></a>
    </div>
    <div class="body">
      <ul>
        <li v-for="item in hotneed.list">
          <router-link>
            <h6>{{ item.title }}</h6>
            <p>预算：{{item.budget}}/天</p>
            <p>天数：{{ item.day }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style src="../../css/common.css"></style>
<style scoped>
.container{
  margin: 0px auto;
}
.banner{
  width: 800px;
  height: 400px;
}
.el-carousel__item:nth-child(1) {
  background-image: url(../../asset/images/banner1.png);
  background-size: cover;
  background-position: center;
}
.el-carousel__item:nth-child(2) {
  background-image: url(../../asset/images/banner2.png);
    background-size: cover;
  background-position: center;
}.el-carousel__item:nth-child(3) {
  background-image: url(../../asset/images/banner3.png);
    background-size: cover;
  background-position: center;
}.el-carousel__item:nth-child(4) {
  background-image: url(../../asset/images/banner4.png);
    background-size: cover;
  background-position: center;
}
.hotbrand{
  margin-top: 20px;
  width: 800px;
  height: 400px;
  border:2px solid rgb(46, 46, 149);
  border-radius: 10px;
  background-color: #fff;
}
.hotbrand .head,.goodrent .head,.hotneed .head{
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom:2px solid rgb(46, 46, 149) ;
}
.hotbrand .head h2,.goodrent .head h2,.hotneed .head h2{
  font-weight: normal;
}
.hotbrand .head a,.goodrent .head a,.hotneed .head a{
  font-size: 12px;
  color: #9e9e9e;
}
.hotbrand .body{
  height: 350px;
  overflow:hidden;
}
.hotbrand .body ul{
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  width: 800px;
  height: 350px;

}
.hotbrand .body li {
  width: 150px;
  height: 150px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: 20px;

}
.hotbrand .body img{
  width: 120px;
  height: 100px;
}
.goodrent{
  margin-top: 20px;
  width: 800px;
  height: 500px;
  border:2px solid rgb(46, 46, 149);
  border-radius:10px ;
  background-color:f7f4f4 ;
}
.goodrent .head{
  border-bottom:2px solid rgb(46, 46, 149);
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.goodrent .body{
  height: 450px;
  overflow:hidden;
}
.goodrent .body li{
  width: 130px;
  height: 165px;
  margin-top: 40px;
  margin-right: 5px;
}

.goodrent .body li .img{
  width: 130px;
  height: 100px;
}
.goodrent .body li img{
  width: 130px;
  height: 100px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.goodrent .body li .text{
  height: 65px;
  font-size: 11px;
  background-color: #fff;
  line-height: 16px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.goodrent .body li .text h6{
  font-size: 13px;
}
.goodrent .body ul{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
.goodrent .body li span{
  margin-right: 5px;
}
.goodrent .body li .text .price i{
  font-style: normal;
  color: rgb(184, 3, 3);
  font-size: 15px;
}
.hotneed{
  margin-top: 20px;
  width: 800px;
  height: 400px;
  border:2px solid rgb(46, 46, 149);
  border-radius: 10px;
  background-color: #fff;
}
.hotneed .body{
  height: 350px;
  overflow:hidden;
}
.hotneed .body li{
  width: 650px;
  height: 50px;
  background-color: rgb(231, 232, 247);
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 25px;
  padding-left: 20px;
  font-size: 9px;
}
.hotneed .body li h6{
  font-size: 13px;
}
</style>