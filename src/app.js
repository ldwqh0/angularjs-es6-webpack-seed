// 导入全局样式
import './css/style.css'
import 'es6-promise/auto'
import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import oclazyload from 'oclazyload'

import route from './router'
const app = angular.module('app', [uiRouter, oclazyload])
app.config(route)
export default app
