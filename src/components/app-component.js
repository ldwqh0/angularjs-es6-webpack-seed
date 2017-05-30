import '../css/style.css'
import app from '../app'

let component = {
  controller: AppController,
  template: `<ui-view class="app-content"></ui-view>`,
  bindings: {
    Binding: '='
  }
}

AppController.inject = []
function AppController () {
  var ctrl = this
  ctrl.onInit = function () {
  }
  ctrl.onChanges = function (changesObj) {
  }
  ctrl.onDestory = function () {
  }
}
app.component('app', component)

export default 'app'
