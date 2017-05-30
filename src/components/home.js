import app from '../app'
import template from './home.html'
app.component('home', {
  controller: HomeController,
  template,
  bindings: {
    Binding: '='
  }
})

HomeController.$inject = ['$q']

function HomeController ($q) {
  console.log('ggg')
}

export default app
