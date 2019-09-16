import Mock from "mockjs"

Mock.mock('/getlunbo', 'get', {
  code: 0,
  'data|3': [{
    img: '@dataImage(500x500)',
    url: 'https://www.baidu.com'
  }]
}
)


Mock.mock('/getnewslist', 'get', {
  code: 0,
  'data|9': [{
    add_time: "2016-04-16T03:50:28.000Z",
    click: '@natural(100,300)',
    id: '@increment(1)',
    img_url: '@dataImage(484x484)',
    title: '@cword(5,20)',
    zhaiyao: '@cword(20,30)'
  }
  ]
})
Mock.mock(/\/getnewsinfo/, 'get',  {
  code:0,
  data:{
    add_time: "2016-04-16T03:50:28.000Z",
    click: '@natural(100,200)',
    id: 2,
    title: '@cword(2,10)',
    content:'@cword(2000)'
  }
})
Mock.mock(/\/getcomments/,'get',{
  code:0,
  'data|10':[
    {
      user_name:'@cword(2,6)',
      add_time: "2017-04-16T03:50:28.000Z",   
      content:'@cword(0,5)'   
    }
  ]
})
Mock.mock(/\/postcomment/,'post',function (option) {
  console.log(option);
  return Mock.mock({
    code:0,
    message:'评论成功'
  })
})

//分享图片类别
Mock.mock('/getimgcategory','get',{
  code:0,
  'data|10':[
    {
      title:'@cword(2,4)',
      id:'@increment(1)'
    }
  ]
})
//获取图片分类
Mock.mock(/\/getimages/,'get',{
  code:0,
  'data|10':[
    {
      id:'@increment(1)',
      title:'@cword(5,10)',
      img_url:'@dataImage(480x480)',
      zhaiyao:'@cword(50,100)'
    }
  ]
})
//获取图片详情
Mock.mock(/\/getimageinfo/,'get',{
  code:0,
  data:{
    id:2,
    title:'@cword(2,10)',
    click:'@natural(100,200)',
    add_time: "2019-04-16T03:50:28.000Z",
    content:'@cword(2000,2500)'
  }
})
//图片缩略图
Mock.mock(/\/getthumimages/,'get',{
  code:0,
  'data|5':[
    {
      src:'@dataImage(1200x800)',
      msrc:'@dataImage(100x100)'
    }
  ]
})
//获取商品了吧展示界面的所有数据
Mock.mock(/\/getgoods/,'get',{
  code:0,
  'data|6':[
    {
      id:'@increment(1)',
      title:'@cword(5,20)',
      add_time: "2019-04-16T03:50:28.000Z",
      click:'@natural(200,400)',
      img_url:'@dataImage(480x800)',
      sell_price:'@natural(2000,2300)',
      market_price:'@natural(3000,4000)',
      stock_quantity:'@natural(60,100)'
    }
  ]
}),
//商品详情
Mock.mock(/\/getinfo/,'get',{
  code:0,
  data:{
    id:2,
    title:"@cword(10,20)",
    add_time: "2019-04-16T03:50:28.000Z",
    goods_no:'SD39730423344',
    stock_quantity:20,
    market_price:269,
    sell_price:199
  }
})
//商品图文介绍数据goods/getdesc/
Mock.mock(/\/goods\/getdesc/,'get',{
  code:0,
  data:{
    title:'@cword(10,20)',
    content:'@cword(20,50)'
  }
})

//购物车商品列表
Mock.mock(/\/goods\/getshopcarlist/,'get',{
  code:0,
  'data|2-5':[
    {
      cou:1,
      id:'@increment(1)',
      title:'@cword(10,20)',
      sell_price:2195,
      thumb_path:'@dataImage(64x64)'
    }
  ]
})