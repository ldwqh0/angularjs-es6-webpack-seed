// 导入全局样式
import './css/style.css'
import './css/test.less'
// 导入项目全局依赖
import * as vendor from './vendor'
// 导入路由配置
import route from './router'

const app = vendor.angular.module('app', [
  vendor.uiRouter,
  vendor.oclazyload,
  vendor.ngResourcce,
  vendor.ngSanitize,
  vendor.ngAnimate
])
app.config(route)
export default app
