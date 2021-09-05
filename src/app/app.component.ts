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

  showHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, intitial-scale=1.0"
      />
      <title>后盾人</title>
      <style>
        * {
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          height: 100vh;
        }

        main nav {
          background: blue;
          width: 80px;
        }

        main article{

        }

      </style>
    </head>

    <body>
      <main>
        <nav>112</nav>
        <article>cc</article>
      </main>
    </body>
  </html>
`;

  parentRun() {
    console.log('点击子组件的button触发父组件中的方法');
  }

  runParent(val) {
    console.log(val);
  }
  update() {
    console.log(this.son.hunter);
  }
}
