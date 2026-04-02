import Mock from 'mockjs'
import hotbrands from './hotbrand.json'
import goodrent from './goodrent.json'
import hotneed from './hotneed.json'
import myrent from './myrent.json'
Mock.mock('/mock/gethotbrands', 'get', {
  code: 200,
  data: hotbrands
})

Mock.mock('/mock/getgoodrent', 'get', {
  code: 200,
  data: goodrent
})

Mock.mock('/mock/gethotneed', 'get', {
  code: 200,
  data: hotneed
})
Mock.mock('/mock/postneed', 'post', options => {
  const body = JSON.parse(options.body)
  return {
    code: 200,
    message: '添加成功',
    data: body
  }
})
Mock.mock('/mock/postgoodrent', 'post', option => {
  const body = JSON.parse(option.body)
  return {
    code: 200,
    message: '添加成功',
    data: body
  }
})
Mock.mock('/mock/getmyrent', 'get', {
  code: 200,
  data: myrent
})