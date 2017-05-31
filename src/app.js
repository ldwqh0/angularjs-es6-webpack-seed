// 导入全局样式
import './css/style.css'
// 导入项目全局依赖
import 'es6-promise/auto'
import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import oclazyload from 'oclazyload'
// 导入路由配置
import route from './router'
const app = angular.module('app', [uiRouter, oclazyload])
app.config(route)
export default app
