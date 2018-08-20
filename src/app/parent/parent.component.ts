import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {

  counter: number = 0;

  dataFromChild: string;

  @ViewChild(ChildComponent) childComponent: ChildComponent;

  data2FromChild: string;
  data3FromChild: number;

  constructor() { }

  ngOnInit() {
    // this.data2FromChild = this.childComponent.anotherProperty;
    // this.data3FromChild = this.childComponent.oneMoreProperty;
  }

  ngAfterViewInit() {
   
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.data2FromChild = this.childComponent.anotherProperty;
      }, 0);
      this.data3FromChild = this.childComponent.oneMoreProperty;
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

  refreshViewChild() {
    this.data2FromChild = this.childComponent.anotherProperty;
    this.data3FromChild = this.childComponent.oneMoreProperty;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
