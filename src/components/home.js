import app from '../app'

class HomeController {
  static $inject = ['$q']

  constructor ($q) {
    this.msg = 'Hello Angularjs!'
  }
}

app.component('home', {
  controller: HomeController,
  templateUrl: './home.html',
  bindings: {
    bindings: '='
  }
})

export default app
