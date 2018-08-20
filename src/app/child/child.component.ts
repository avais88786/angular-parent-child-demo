import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  inputs: ['countThruMetadata'],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  dataChanged: EventEmitter<string> = new EventEmitter();

  @Input()
  count: number;

  childData: string;

  @Input('counterUsingAlias')
  countX: number;

  constructor() { }

  ngOnInit() {
  }

  sendDataToParent() {
    this.dataChanged.emit(this.childData);
  }

}
