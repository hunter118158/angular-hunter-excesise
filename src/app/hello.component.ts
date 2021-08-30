import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <button (click)="childRun()">子组件</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Input() hunter: string;
  @Input() childRun: any;
  @Input() all: any;
  @Output() private outer = new EventEmitter<string>();

  ngOnInit() {
    console.log(this.hunter);
    console.log(this.all.name);
    this.sendParent();
  }

  sendParent() {
    this.outer.emit('子组件传父组件值');
  }
}
