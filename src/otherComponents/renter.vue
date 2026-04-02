<script setup>
import request from '../axios/request.js'
import { ref ,reactive} from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const imageUrl = ref('')
const title=ref()
const price=ref()
const newing=ref()
const brand=ref()
const yajin=ref()
const describe=ref()
const goodrent=reactive({
  title:title,
  price:price,
  newing:newing,
  brand:brand,
  yajin:yajin,
  describe:describe,
  url:imageUrl
})

// 自定义上传函数
const customUpload = async (options) => {
  const { file, onSuccess, onError } = options
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData,
    })
    const result = await response.json()
    onSuccess(result) // 通知 el-upload 上传成功
    imageUrl.value = URL.createObjectURL(file) // 生成预览 URL
  } catch (error) {
    onError(error)
    ElMessage.error('上传失败')
  }
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
const submit=function(){
  alert('提交成功！')
  request({
    url:'/mock/postgoodrent',
    method:'post',
    data:{goodrent}
  }).then(res=>{
    console.log(res)
  }).catch(error=>{
    console.log(error)
  })
  title.value=''
  price.value=''
  yajin.value=''
  brand.value=''
  newing.value=''
  imageUrl.value=''
  describe.value=''
}
</script>
<template>
<div class="renter">
  <form action="" @submit.prevent @submit="submit">
    <div class="message">
    标题：<input class="title" type="text" placeholder="请输入标题" required v-model="title"><br>
    价格：<input class="price" type="text" required v-model="price">/天<br>
    押金：<input class="yajin" type="text" required v-model="yajin">元<br>
    品牌：<input class="brand" type="text" required v-model="brand"><br>
    成色：<input class="new" type="text" required v-model="newing"><br>
    描述：<textarea class="describe" name="" id="" required v-model="describe"></textarea>
    </div>
    <div class="img">
      上传照片：<el-upload
    class="avatar-uploader"
    :http-request="customUpload"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    </div>
    <button>提交</button>
  </form>
</div>
</template>
<style src="../css/common.css"></style>
<style scoped>
.renter{
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: rgb(251, 247, 253);
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
form{
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
form input{
  margin-bottom: 20px;
}
.renter .title{
  height: 26px;
}
.renter .price{
  width: 50px;
  margin-right: 5px;
}
.renter .yajin{
  width: 50px;
  margin-right: 5px;
}
.renter .brand{
  width: 100px;
}
.renter .new{
  width: 100px;
}
.renter .describe{
  width: 400px;
  height: 200px;
  resize:none;
  vertical-align: top;
}
form button{
  width: 100px;
  height: 40px;
  position: absolute;
  right:0;
  bottom:0;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>