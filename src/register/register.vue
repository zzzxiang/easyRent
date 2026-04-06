<script setup>
import {ref} from 'vue'
import { useUserStore } from '@/stores/user'
import { useNavStore } from '@/stores/nav'
const store1=useUserStore()
const store2=useNavStore()
const username=ref()
const pwd=ref()
const atext=ref('发送验证码')
const checkvalue=ref()
const j1=function(e){
  const reg=/^[A-Za-z0-9]{1,6}$/
  if(reg.test(e.target.value)){
    e.target.nextElementSibling.innerHTML=''
  }
  else{
    e.target.nextElementSibling.innerHTML='应由1-6位字母数字组成'
  }
}
const j2=function(e){
  const reg=/^[A-Za-z0-9_]{8,18}$/
  if(reg.test(e.target.value)){
    e.target.nextElementSibling.innerHTML=''
  }
  else{
    e.target.nextElementSibling.innerHTML='应由8-18位字母数字下划线组成'
  }
}
const j3=function(e){
  if(pwd.value==e.target.value){
    e.target.nextElementSibling.innerHTML=''
  }
  else{
    e.target.nextElementSibling.innerHTML='与原密码不同'
  }
}
const j4=function(e){
  if(e.target.value.length==4){
    e.target.nextElementSibling.nextElementSibling.innerHTML=''
  }
  else{
    e.target.nextElementSibling.nextElementSibling.innerHTML='请输入四位验证码'
  }
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
const detect=function(e,username,pwd){
  e.preventDefault()
  if(checkvalue.value){
    const msg=document.querySelectorAll('form .message')
    let flag=true
    for(let i=0;i<=msg.length-1;i++){
      if(msg[i].innerHTML!=''){
        flag=false
      }
    }
    if(flag){
      location.href="/index"
      store1.keep(username,pwd)
      store2.reset()
    }
  }
  else{
    alert('请先勾选协议！')
  }

}
</script>
<template>
<div class="page">
  <div class="reg">
    <h2>注册</h2>
    <form action="" @submit="detect($event,username,pwd)">
      <div class="un">
        <p class="topic">用户名</p>
      <input type="text" class="uname" @change="j1" required v-model="username">
      <p class="message"></p>
      </div>
      <div class="password">
        <p class="topic">密码</p>
      <input type="password" class="pwd1" @change="j2" required v-model="pwd">
      <p class="message"></p>
      </div>
      <div class="confirm">
        <p class="topic">确认密码</p>
      <input type="password" class="pwd2" @change="j3" required>
      <p class="message"></p>
      </div>
      <div class="verify">
        <p class="topic">验证码</p>
      <input type="text" class="code" @change="j4" required><a href="#" @click.prevent @click="receive" v-html="atext"></a>
      <p class="message"></p>
      </div>
        <input type="checkbox" class="check" v-model="checkvalue"><span class="read">我已阅读<i>《隐私协议》</i></span>
      <button class="regbtn">注册</button>
    </form>
    <router-link to="/login"><p class="login">已有账号？去登录 >></p></router-link>
  </div>
</div>
</template>
<style src="../css/common.css"></style>
<style scoped>
.page{
  position: fixed;
  width: 100vw;
  min-height:100vh;
  background-image: url(../asset/images/registerbgi.png);
  background-size: cover;
  /* background-position: center; */
}
.reg{
  width: 250px;
  height: 350px;
  background-color: rgba(0,0,0,0.5);
  margin-top: 130px;
  margin-left: 495px;
  border-radius: 15px;
  color: #fff;
  border:1px solid rgb(185, 182, 182);
  text-align: center;

}
form div{
  margin-left: 40px;
  text-align: left;
}
form div .topic{
  font-size: 13px;
}
form div input{
  height: 23px;
}
form .verify .code{
  width: 60px;
  height: 25px;
}
form .verify a{
  display:inline-block;
  width: 60px;
  height: 25px;
  font-size: 12px;
  background-color: #e7e1e1;
  vertical-align: bottom;
  border-radius: 2px;
  line-height: 25px;
  text-align: center;
}
form .regbtn{
  width: 140px;
}
.reg form .check{
  margin-bottom: 0px;
  vertical-align: middle;
}
.reg form .read{
  font-size: 10px;
  margin-left: 3px;
}
.reg form .read i{
  color: rgb(240, 252, 6);
  text-decoration: underline;
  cursor:pointer;
}
.reg .login{
  margin-top: 25px;
margin-left: 120px;
font-size: 10px;
text-decoration: underline;
color: #fff;
}
form .message{
  height: 10px;
  color: rgb(255, 0, 0);
  font-size: 10px;
}
</style>