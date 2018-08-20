import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter: number = 0;

  dataFromChild: string;

  @ViewChild(ChildComponent) childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  incrementCounter(increment: boolean) {
    if (increment) {
      this.counter++;
    } else {
      this.counter--;
    }
  }

  receivedDataFromChild(childData: string) {
    this.dataFromChild = childData;
  }
}
