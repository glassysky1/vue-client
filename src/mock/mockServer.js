import Mock from "mockjs"
import data from "./data.json";

Mock.mock('/getlunbo',{code:0,data:data.lunbo})