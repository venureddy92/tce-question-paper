import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from '../toolbar/toolbar.component';
// import {QuizTemplatesComponent } from '@tce-qp/quiz-templates';
import { Subject } from 'rxjs';
import { McqSingleSelectLayoutComponent, FibTextLayoutComponent, EssayTextLayoutComponent } from 'src/quiz-templates/src';
import { QuestionPaperService } from 'src/question-paper/src/lib/services/question-paper.service';
// import { QuizTemplatesModule } from '@tce-qp/quiz-templates';
// import { McqSingleSelectLayoutComponent } from '@tce-qp/quiz-templates';

@Component({
  selector: 'tce-qp-question-paper-template-editior',
  templateUrl: './question-paper-template-editior.component.html',
  styleUrls: ['./question-paper-template-editior.component.scss']
})
export class QuestionPaperTemplateEditiorComponent implements OnInit {
  // @ViewChild('targetRefView', { read: ViewContainerRef, static: true })
  // viewRef: ViewContainerRef;
  isdefaultQuestion = false;
  public isPrintable = false;
  @ViewChild('content')
  private content!: ToolbarComponent;
  sections: any = [];
  selectedSection: any;
  // defaultJson = {
  //   title: '',
  //   question_type: 'Multiple Choice',
  //   options: [
  //     'Multiple Choice',
  //     'Match the Column',
  //     'Open Ended',
  //     'Fill in the Blank',
  //     'Hotspot',
  //   ],
  // };

  modules = {
    imageResize: {
      displaySize: true,
    },
    toolbar: [['bold', 'italic'],[{ 'header': 1 }, { 'header': 2 }]],
    clipboard: true,
  };

  imageModules = {
    imageResize: {
      displaySize: true,
    },
    toolbar: [['image']],
    clipboard: true,
  };
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private componentFactoryResolver: ComponentFactoryResolver, public questionPaperService: QuestionPaperService,) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  getToolBarEvent(key: string) {
    switch (key) {
      case "template":
        this.createNewQuestion();
        break;
      case "add":
        this.addSection();
        break;
      case "question":
        this.addQuestion()
        break;
      case "text":
        this.addText()
        break;
      case "image":
        this.addImage()
    }
    // if(key == "add"){
    //    this.addSection();
    // }
    // else {
    //   this.addQuestion();
    // }
    // if(key =="section"){

    // }
  }

  addText() {
    this.pageSections[this.selectedSection].contents.push({ name: "text", type: "text", options: [], title: "untitled template" })
  }

  addImage(){
    this.pageSections[this.selectedSection].contents.push({ name: "image", type: "image", options: [], title: "untitled template" })
  }

  SetisPrintable(status: boolean) {
    this.isPrintable = status;
  }

  // addSection() {
  //   var json = JSON.parse(JSON.stringify(this.defaultSection));
  //   json.sectionNo = this.sections.length+1;
  //   json.contents.push({name:"mcq",options:[],title:"untitled question"})
  //   this.pageSections.push(json);

  //   // this.sections.push('section ' + this.sections.length);
  // }

  navigateToHome() {
    this.questionPaperService.qpHomePage.next("home");
  }
  pageSections: any[] = [];
  // [{"name":""}]
  defaultSection = { "name": "Untitled Section", contents: [], "sectionNo": 0 }
  defaultJson = {
    title: '',
    question_type: 'Multiple Choice',
    options: [
      'Multiple Choice',
      'Match the Column',
      'Open Ended',
      'Fill in the Blank',
      'Hotspot',
    ],
  };

  addQuestion() {
    this.pageSections[this.selectedSection].contents.push({ name: "mcq", type: "mcq", options: [], title: "untitled question" })
  }


  addSection() {
    var json = JSON.parse(JSON.stringify(this.defaultSection));
    json.sectionNo = this.sections.length + 1;
    json.contents.push({ name: "mcq", options: [], title: "untitled question" })
    this.pageSections.push(json);
  }

  selectSection(i) {
    console.log('index ', this.pageSections);
    this.selectedSection = i;
  }

  ngOnInit(): void {
    this.addSection();
    setTimeout(() => {
      // this.openToolbarContent(this.content);
    }, 3000)
    this.selectedSection = 0;

  }

  open(content: any) {
    content.open(content);
    // this.questionPaperService.isQpEditor = false;
  }

  toggle() {
    this.show = !this.show;
  }

  removeSection(key: any) {
    this.sections.splice(this.sections.indexOf(key), 1);
  }
  // open(content:any) {
  //   this.modalService.open(content.content, { windowClass: 'dark-theme-modal',size: 'lg', centered: true});

  // }
  openToolbarContent(content: any) {
    this.modalService.open(content.content, { windowClass: 'dark-theme-modal', size: 'lg', centered: true });
  }
  show = true;
  createNewQuestion() {
    this.pageSections[this.selectedSection].contents.push({ name: "template", type: "template", options: [], title: "untitled template" })

    // this.isdefaultQuestion = !this.isdefaultQuestion;
    // this.sections.push('section ' + this.sections.length);
  }

}
