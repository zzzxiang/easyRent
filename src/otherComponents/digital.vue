<script setup></script>
<template>
  <div class="page">
    <ul>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/1.png" alt="">
          <h5>手机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/2.png" alt="">
          <h5>平板</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/3.png" alt="">
          <h5>笔记本电脑</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/4.png" alt="">
          <h5>相机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/5.png" alt="">
          <h5>无人机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/6.png" alt="">
          <h5>运动相机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/7.png" alt="">
          <h5>游戏机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/8.png" alt="">
          <h5>手环</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/9.png" alt="">
          <h5>耳机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/10.png" alt="">
          <h5>音响设备</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/11.png" alt="">
          <h5>显示器</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/digital.sort/12.png" alt="">
          <h5>投影仪</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style src="../css/common.css"></style>
<style scoped>
.page{
width: 100%;
height: 100%;
}
.page ul{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
height: 100%;
padding: 15px;
}
.page ul li{
  width: 150px;
  height: 150px;
  text-align: center;
  padding-top: 30px;
  margin-right: 30px;
}
.page ul li h5{
  font-size: 16px;
  font-weight: normal;
}
.page ul li img{
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>