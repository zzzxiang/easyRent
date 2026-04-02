<script setup>
const addActive=function(e){
  if(e.target.tagName==='A'){
    document.querySelector('.all .left .active').classList.remove('active')
    e.target.parentNode.classList.add('active')
  }
}
</script>
<template>
  <div class="all">
    <div class="left">
      <ul @click="addActive">
        <li class="active">
          <router-link to="/index/all/digital">
            数码3C
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/office">
            办公设备
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            家电家居
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            服饰美妆
        </router-link>
        </li>
        <li>
        <router-link to="/index/all/digital">
            母婴用品
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            运动户外
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            活动庆典
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            工程机械
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            工具五金
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            宠物用品
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            医疗健康
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            汽车交通
        </router-link>
        </li>
        <li>
      <router-link to="/index/all/digital">
            临时生活
        </router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scr="../../css/common.css"></style>
<style scoped>
.active{
  background-color: #e1dfdf;
}
.all{
  display: flex;
  width: 900px;
  height: 550px;
  margin: 0px auto;
}
.all .left{
  width: 15%;
  height: 550px;
  background-color: #fff;
  text-align: center;
  padding-top: 15px;
  border-left:1px solid black;
  border-right:1px solid black;
}
.all .left ul{
  width: 100%;
  height: 550px;
}
.all .left li{
  width: 100%;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
}
.all .left li:hover{
  background-color: #e1dfdf;
}
.all .left a{
  display: block;
  width: 100%;
  height: 40px;
}
.all .right{
  width: 85%;
  height: 550px;
  background-color: #fff;
}
</style>