export default ['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $stateProvider.state({
    name: 'home',
    url: '/',
    component: 'home',
    resolve: {
      component: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
        return $q(resolve => {
          require.ensure([], function () {
            require('../components/home')
            $ocLazyLoad.load({ name: 'app' })
            resolve()
          })
        })
      }]
    }
  })
}]
