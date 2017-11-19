/**
 * 将所有的第三方依赖加到这里
 */
import 'babel-polyfill'
import angular from 'angular'
import 'angular-i18n/zh-cn' // 导入angular中文资源
import ngSanitize from 'angular-sanitize'
import uiRouter from '@uirouter/angularjs'
import oclazyload from 'oclazyload'
import ngResourcce from 'angular-resource'
import ngAnimate from 'angular-animate'

export {
  angular,
  uiRouter,
  oclazyload,
  ngResourcce,
  ngSanitize,
  ngAnimate
}
