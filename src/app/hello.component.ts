import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <!--div [innerHTML]="showHtml"></div-->
    <!--h1>Hello {{ name }}!</h1>
    <button (click)="childRun()">子组件</button>
    <table border="1">
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      <tr>
        <td>hunter</td>
        <td>16</td>
      </tr>
    </table-->
  `
})
export class HelloComponent {
  @Input() name: string;
  @Input() hunter: string;
  @Input() childRun: any;
  @Input() all: any;
  @Output() private outer = new EventEmitter<string>();

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
          position: relative;
        }
      </style>
    </head>

    <body>
      <main>
      </main>
      <footer>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </body>
  </html>
`;

  ngOnInit() {
    console.log(this.hunter);
    console.log(this.all.name);
    this.sendParent();
  }

  sendParent() {
    this.outer.emit('子组件传父组件值');
  }

  sonfun() {
    console.log('子组件函数');
  }
}
