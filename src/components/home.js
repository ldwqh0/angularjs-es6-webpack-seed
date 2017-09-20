import app from '../app'
import template from './home.html'

class HomeController {
  static $inject = ['$q']

  constructor ($q) {
    this.msg = 'Hello Angularjs'
  }
}

app.component('home', {
  controller: HomeController,
  template,
  bindings: {
    Binding: '='
  }
})

export default app
