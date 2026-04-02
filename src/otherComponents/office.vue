<script setup></script>
<template>
  <div class="page">
    <ul>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/1.png" alt="">
          <h5>电脑</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/2.png" alt="">
          <h5>打印机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/3.png" alt="">
          <h5>复印机</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/4.png" alt="">
          <h5>扫描仪</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/5.png" alt="">
          <h5>会议平板</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/6.png" alt="">
          <h5>投影仪</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/7.png" alt="">
          <h5>音响话筒</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/8.png" alt="">
          <h5>办公桌椅</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/9.png" alt="">
          <h5>文件柜</h5>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../asset/images/office.sort/10.png" alt="">
          <h5>茶水设备</h5>
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