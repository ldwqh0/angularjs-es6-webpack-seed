import '../css/style.css'
import app from '../app'

class AppController {
  static $inject = []

  $onInit () {
  }

  $onChanges (changesObj) {
  }

  $onDestory () {
  }
}

let component = {
  controller: AppController,
  template: `<ui-view class="app-content"></ui-view>`,
  bindings: {}
}

app.component('app', component)

export default 'app'
