import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <button (click)="onEditClick()">子组件</button>
    <div *ngIf="canEdit; else noEdit">
      <p>You can edit the following paragraph.</p>
    </div>
    <ng-template #noEdit>
      <p>The following paragraph is read only. Try clicking the button!</p>
    </ng-template>
    <p [contentEditable]="canEdit">{{ message }}</p>
    <table border="1">
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      <tr>
        <td>hunter</td>
        <td>16</td>
      </tr>
    </table>
  `
})
export class HelloComponent {
  @Input() name: string;
  @Input() hunter: string;
  @Input() childRun: any;
  @Input() all: any;
  @Output() private outer = new EventEmitter<string>();
  message = "I'm read only!";
  canEdit = false;

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

        main nav {
          width: 80px;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: blueviolet;
        }
      </style>
    </head>

    <body>
      <main>
        <nav></nav>
        <article></article>
      </main>
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

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
