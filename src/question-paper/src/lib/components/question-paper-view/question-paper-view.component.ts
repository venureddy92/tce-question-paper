import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tce-qp-question-paper-view',
  templateUrl: './question-paper-view.component.html',
  styleUrls: ['./question-paper-view.component.scss']
})
export class QuestionPaperViewComponent implements OnInit {
  public tabsOptions = [
    {title: "All", selected:true, content: "All data"},
    {title: "Question Paper", selected:false, content: "Question Paper Data"},
    {title: "Worksheet",selected:false, content: "Worksheet data"},
    {title: "Digital Tests",selected:false, content: "Digital Tests data"},
    {title: "Templates",selected:false, content: "Templates data"}
  ]
  openAdditionPopUp = false;

  constructor() { }

  ngOnInit(): void {
  }
  open(content:any){
    content.open(content);
    this.openAdditionPopUp = false;
  }

  selectPage(i, event){
    this.tabsOptions = this.tabsOptions.map(option => {
      option.selected = false;
      return option;
    });
    this.tabsOptions[i].selected = true;
  }

  openPlanningMode() {
    this.openAdditionPopUp = !this.openAdditionPopUp;
  }
}
