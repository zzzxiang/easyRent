<script setup>
import {ref} from 'vue'
import { useUserStore } from '@/stores/user'
const store=useUserStore()
const username=ref()
const pwd=ref()
const atext=ref('获取')
const flag=ref(1)
const active=function(e){
  document.querySelector('.choose .active').classList.remove('active')
  e.target.classList.add('active')
  flag.value=e.target.id
}
const receive=function(e){
  atext.value='10s'
  e.target.style.pointerEvents="none"
  let time=setInterval(function(){
    if(parseInt(atext.value)>0) atext.value=(parseInt(atext.value)-1)+'s'
    else {
      atext.value='重试'
      clearInterval(time)
      e.target.style.pointerEvents='auto'
    }
  },1000)
}
const keep=(username,pwd)=>{
  store.keep(username,pwd)
}
</script>

<template>
  <div class="page">
  <div class="container">
    <div class="left">
      <img src="../asset/images/left.png" alt="">
    </div>
    <div class="right">
      <div class="top">
        <ul class="choose">
          <li id="1" class="active" @click="active">账户登录</li>
          <li id="2" @click="active">扫码登录</li>
        </ul>
      </div>
      <div class="middle1" v-show="flag==1">
      <form action="/index" @submit="keep(username,pwd)">
        <input class="username" type="text" placeholder="用户名" required v-model="username">
        <input class="pwd" type="password" placeholder="密码" required v-model="pwd"><br>
        <div class="verify">
        <input type="text" placeholder="验证码" required><a href="#" @click.prevent @click="receive" v-text="atext"></a>
      </div>
      <input class="check" type="checkbox">记住账号
      <button class="login">登录</button>
      </form>
      <router-link to="/register"><div class="register">注册账号</div></router-link>
      </div>
      <div class="middle2" v-show="flag==2">
        <img src="../asset/images/code.jpg" alt="">
        <p>微信扫码登录</p>
      </div>
    </div>
  </div>
  </div>
</template>

<style src="../css/common.css"></style>
<style scoped>
.page{
  position:fixed;
  width: 100vw;
  min-height: 100vh;
  background-image: url("../asset/images/bg.png");
  background-size: cover;
  background-position: center;
}
.container{
  display: flex;
  width: 600px;
  height: 250px;
  margin: 150px auto;
  border: 3px solid rgb(70, 128, 190);
  border-radius: 10px;
}
img{
  width: 400px;
  height: 100%;
  border-radius: 8px;
}
.right{
  width: 200px;
  height: 100%;
  /* background-color: #fff; */

}
.choose{
  display: flex;
}
.choose li{
  width: 98px;
  height: 30px;
  text-align: center;
  cursor:pointer;
}
.middle1{
  width: 120px;
  margin-top: 30px;
  margin-left: 40px;
  font-size: 12px;
}
form input{
  margin-bottom: 7px;
}
.middle1 .username,.middle1 .pwd{
  width: 120px;
  height: 25px;
}
.verify input{
  width: 50px;
  height: 20px;
vertical-align: top;

}
.verify a{
  display: inline-block;
  width: 30px;
  font-size:12px;
  border:1px solid black;
  text-align: center;
  background-color: #a6a1a1;
}
.check{
  margin-bottom: 0px;
  vertical-align: middle;
  margin-right: 3px;

}
.login{
  margin-top: 5px;
  width: 120px;
  
}
.active{
  border-bottom: 2px solid rgb(72, 105, 138);
}
.middle2{
  text-align: center;
  margin-top: 10px;
}
.middle2 img{
  width: 150px;
  height: 150px;
}
.register{
  font-size: 10px;
  margin-top: 20px;
  text-align: right;
  text-decoration: underline;
  cursor:pointer;

}
</style>
