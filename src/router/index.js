export default ['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $stateProvider.state({
    name: 'home',
    url: '/',
    component: 'home',
    resolve: {
      component: ['$ocLazyLoad', function ($ocLazyLoad) {
        return require(['../components/home'], () => {
          $ocLazyLoad.inject('app')
        })
      }]
    }
  })
}]
