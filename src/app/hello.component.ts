import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit() {
    console.log(this.hunter);
  }
}
