<script setup></script>
<template>
  <div class="box">
    <h3>消息列表</h3>
    <hr>
    <div class="list">
    <ul>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/1.jpg" alt="">
            <span>用户123</span>
          </div>
          <div class="right">
            22:18
          </div>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/2.jpg" alt="">
            <span>用户789</span>
          </div>
          <div class="right">
            21:23
          </div>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/3.jpg" alt="">
            <span>用户666</span>
          </div>
          <div class="right">
            20:54
          </div>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/4.jpg" alt="">
            <span>用户888</span>
          </div>
          <div class="right">
            20:12
          </div>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/5.jpg" alt="">
            <span>用户111</span>
          </div>
          <div class="right">
            19:16
          </div>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/6.jpg" alt="">
            <span>用户01</span>
          </div>
          <div class="right">
            昨天
          </div>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <div class="left">
            <img src="../../asset/images/tx/7.jpg" alt="">
            <span>用户995</span>
          </div>
          <div class="right">
            昨天
          </div>
        </li>
      </router-link>
  </ul>
  </div>
  <div class="btn">
    <button>一键已读</button>
  <button>删除已读</button>
</div>
  </div>
</template>
<style src="../../css/common.css"></style>
<style scoped>
.box{
  width: 1000px;
  height: 550px;
  background-color: #fff;
  margin: 0px auto;
  padding: 30px;
  position: relative;
}
hr{
  margin-bottom: 20px;
}
.box .list{
  width: 720px;
  height: 400px;
  overflow:scroll;
  overflow-x: hidden;
  margin-left: 30px;
}
.box .list li{
  display: flex;
  width: 700px;
  height: 60px;
  background-color: rgb(229, 229, 247);
  padding-left: 20px;
  padding-right: 20px;
  align-items:center;
  border-radius: 5px;
  margin-bottom: 5px;
}
.box .list li .left{
  flex:1
}
.box .list li .left img{
  width: 50px;
  height: 50px;
  border-radius:25px ;
  vertical-align: top;
  margin-right: 10px;
}
.box .list li .right{
  font-size: 12px;
  color: #706f6f;
}
.box .btn{
  position: absolute;
  right:30px;
  bottom:30px;
}
.box .btn button{
  margin-right: 20px;
}
</style>