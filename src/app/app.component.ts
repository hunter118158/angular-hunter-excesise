import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  hunter = 'hunter gogo';

  parentRun() {
    console.log('点击子组件的button触发父组件中的方法');
  }
}
