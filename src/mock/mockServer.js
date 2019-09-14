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
    click: '@increment(100,200)',
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