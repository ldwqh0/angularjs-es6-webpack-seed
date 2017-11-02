// 导入全局样式
import './css/style.css'
import './css/test.less'
// 导入项目全局依赖
import * as vendor from './vendor'

const app = vendor.angular.module('app', [
  vendor.uiRouter,
  vendor.oclazyload,
  vendor.ngResourcce,
  vendor.ngSanitize,
  vendor.ngAnimate
])

export default app
