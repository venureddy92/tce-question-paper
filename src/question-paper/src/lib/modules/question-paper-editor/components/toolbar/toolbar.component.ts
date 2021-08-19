import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tce-qp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toolBarEmittor= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getToolBar(key:string){
    this.toolBarEmittor.emit(key);
  }

}
