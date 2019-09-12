import Mock from "mockjs"
import data from "./data.json";

Mock.mock('/getlunbo',{code:0,data:data.lunbo})
Mock.mock('/getnewslist',{code:0,data:data.newslist})
Mock.mock('/getnewsinfo',{code:0,data:data.newsinfo})