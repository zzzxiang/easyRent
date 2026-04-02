<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const store=useUserStore()
const {username}=storeToRefs(store)
</script>
<template>
  <div class="me">
    <div class="left">
      <div class="info">
        <img src="../../asset/images/tx/8.jpg" alt="">
        <span>{{username}}</span>
      </div>
      <div class="function">
        <ul>
          <li>
            <router-link to="/index/me/renting" >
              我的收藏
            </router-link>
          </li>
          <li>
            <router-link to="/index/me/renting">
              历史浏览
            </router-link>
          </li>
          <li>
            <router-link to="/index/me/renting">
              我的关注
            </router-link>
          </li>
          <li>
            <router-link to="/index/me/renting">
              红包卡券
            </router-link>
          </li>
          <li>
            <router-link to="/index/me/renting">
              地址管理
            </router-link>
          </li>
          <li>
            <router-link to="/index/me/renting">
              个人资料
            </router-link>
          </li>
          <li>
            <router-link to="/index/me/renting">
              未成年模式
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              退出登录
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="middle">
      <router-view></router-view>
    </div>
    <div class="right">
      <ul>
        <li>
          <router-link to="/index/me/renting">
            <p class="iconfont icon-rentfillmtui"></p>
            <p class="title">正在出租</p>
          </router-link>
        </li>
        <li>
          <router-link to="/index/me/renter">
            <p class="iconfont icon-rent"></p>
            <p class="title">我要出租</p>
          </router-link>
        </li>
        <li>
          <router-link to="/index/me/require">
            <p class="iconfont icon-iconfont15"></p>
            <p class="title">我要求租</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style src="../../css/common.css"></style>
<style src="../../iconfont/iconfont.css"></style>
<style scoped>
.me{
  display: flex;
  width: 1000px;
  height: 550px;
  background-color: #fff;
  margin: 0px auto;
}
.me .left{
  width: 20%;
  height: 100%;
}
.me .left .info{
  width: 100%;
  height: 100px;
  margin-top: 50px;
  text-align: center;
}
.me .left .info img{
  width: 80px;
  height: 80px;
  border-radius: 40px;
  vertical-align: middle;
  margin-right: 30px;

}
.me .left .function{
  width: 70%;
  height: 340px;
  margin-left: 15%;
  margin-top: 30px;
}
.me .left .function li{
  width: 100%;
  height: 40px;
  background-color: rgb(254, 252, 230);
  border:2px solid rgb(247, 239, 175);
  margin-bottom: 2px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
}
.me .left .function li a{
  display: block;
    width: 100%;
  height: 40px;
  color: #f29437;
}
.me .left .function li:hover{
  background-color: rgb(248, 244, 198);
}
.me .middle{
  width: 70%;
  height: 100%;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
.me .right{
  width: 10%;
  height: 100%;
  padding: 15px;
}
.me .right li{
  width: 70px;
  height: 70px;
  background-color: rgb(253, 233, 233);
  border: 2px solid rgb(250, 207, 207);
  border-radius: 10px;
  margin-bottom: 130px;

}
.me .right li:hover{
  background-color: rgb(252, 194, 194);
}
.me .right li a{
  padding-top: 10px;
  display: block;
  width: 70px;
  height: 70px;
  color: rgb(122, 61, 57);
  text-align: center;
}
.me .right li a .iconfont{
  font-size: 30px;
}
.me .right li a .title{
  font-size: 13px;
}

</style>