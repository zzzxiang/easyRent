<script setup>
import request from '../axios/request.js'
import{ref,reactive} from 'vue'
const title=ref()
const budget=ref()
const day=ref()
const describe=ref()
const need=reactive({
  title:title,
  budget:budget,
  day:day,
  describe:describe
})
const submit=function(e){
  alert('发布成功！')
  request({
    url:'/mock/postneed',
    method:'post',
    data:{need}
  }).then(res=>{
    console.log(res)
  }).catch(error=>{
    console.log(error)
  })
  title.value=''
  budget.value=''
  day.value=''
  describe.value=''
}
</script>
<template>
<div class="info">
<form action="" @submit.prevent  @submit="submit" >
  标题：<input class="title" type="text" placeholder="请输入标题" v-model="title" required><br>
  预算：<input class="budget" type="text" v-model="budget" required>/天<br>
  天数：<input class="day" type="text" v-model="day" required><br>
  详细描述：<textarea class="describe" name="" id="" v-model="describe" required></textarea>
  <button class="submit">发布</button>
</form>
</div>
</template>
<style src="../css/common.css"></style>
<style scoped>
.info{
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: rgb(251, 247, 253);
}
form{
    width: 100%;
  height: 100%;
  position: relative;
}
form .title{
  height: 25px;
  margin-bottom: 40px;
}
form .budget{
  width: 30px;
  margin-right: 5px;
  margin-bottom: 40px;
}
form .day{
  margin-bottom: 40px;
  width: 50px;
}
form .describe{
  width: 400px;
  height: 200px;
  vertical-align: top;
  resize:none;
}
form .submit{
  width: 120px;
  height: 40px;
  position: absolute;
  right:0;
  bottom:0;
}
</style>