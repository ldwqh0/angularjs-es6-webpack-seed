// 导入全局样式
import './css/style.css'
import angular from 'angular'
import 'es6-promise/auto'
import uiRouter from '@uirouter/angularjs'
import oclazyload from 'oclazyload'
const app = angular.module('app', [uiRouter, oclazyload])
export default app
