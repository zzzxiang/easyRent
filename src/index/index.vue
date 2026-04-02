<script setup>
import {useNavStore} from '../stores/nav.js'
import {storeToRefs} from 'pinia'
import {useRouter} from 'vue-router'
const router=useRouter()
const store=useNavStore()
const {hot,all,message,me,location} =storeToRefs(store);
(function(){
  router.replace({path:location.value})
})();
const change=(x)=>{
  store.change(x)
}
</script>
<template>
  <div class="page">
  <div class="head">
    <div class="left">
      <h1><a>随心租</a></h1>
    </div>
    <div class="middle">
      <ul class="nav">
        <li @click="change('hot')" :class="hot"><router-link to="/index/hot">首页</router-link></li>
        <li @click="change('all')" :class="all"><router-link to="/index/all">全部</router-link></li>
        <li @click="change('message')" :class="message"><router-link to="/index/message">消息</router-link></li>
        <li @click="change('me')" :class="me"><router-link to="/index/me">个人</router-link></li>
      </ul>
    </div>
    <div class="right">
      <input type="text">
    </div>
  </div>
  <router-view></router-view>
  <div class="footer">
    <div class="left">
      <dl>
        <dt>关于我们</dt>
        <dd><router-link to="">开发日志</router-link></dd>
        <dd><router-link to="">创作团队</router-link></dd>
        <dd><router-link to="">联系电话</router-link></dd>
        <dd><router-link to="">在线客服</router-link></dd>
        <dd><router-link to="">意见反馈</router-link></dd>
        <dd><router-link to="">咨询</router-link></dd>
      </dl>
    </div>
    <div class="right">
      <p class="title">添加官方微信或QQ以获取最新资源</p>
      <div class="code">
      <div class="wx">
        <img src="../asset/images/add1.jpg" alt="">
        <p>微信二维码</p>
      </div>
      <div class="qq">
      <img src="../asset/images/add2.jpg" alt="">
      <p>QQ二维码</p>
      </div>
      </div>
    </div>
  </div>
</div>
</template>
<style src="../css/common.css"></style>
<style scoped>
.page{
  width: 100vw;
  min-height: 100vh;
  background-color: #ecebeb;
  padding-top: 70px;
}
.head{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 50px;
  padding-right: 50px;
  height: 70px;
  background-color: #fff;
  position:fixed;
  z-index:2;
  top:0;
  left:0;
  border-bottom: 1px solid black;
}
.head .left a{
  display:block;
  width: 130px;
  height: 50px;
  font-size: 0px;
  background-image: url(../asset/images/logo.png);
  background-size: cover;
  background-position: center;
}
.head .middle .nav{
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin-top: 10px;

}
.head .right{
  margin-top: 10px;
}
.active{
  border-bottom:2px solid blue;
}
.footer{
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  width: 100%;
  height: 200px;
  background-color: #b7b6b6;
}

.footer .left a{
  color:#545454;
}
.footer .left dt{
  color:#545454;
  margin-bottom: 10px;
}
.footer .left dd{
  font-size: 12px;
}
.footer .left dd:hover{
  text-decoration: underline;
}
.footer .right{
  text-align: center;
  color: #545454;
}
.footer .right .code{
  display: flex;
  justify-content: space-evenly;
}
.footer .right .title{
 margin-bottom: 20px;
}

.footer .right img{
  width: 50px;
  height: 50px;
}
</style>