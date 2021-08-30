import { Component, VERSION, ViewChild } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  hunter = 'hunter gogo';
  @ViewChild(HelloComponent) son: HelloComponent;

  parentRun() {
    console.log('点击子组件的button触发父组件中的方法');
    this.son.sonfun();
  }

  runParent(val) {
    console.log(val);
  }
}
