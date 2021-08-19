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

  // public templates = [
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c',
  //     data: {
  //       options: [
  //         {
  //           label: '',
  //           value: '0',
  //           feedbackInline: '',
  //           image: ''
  //         }
  //       ],
  //       stimulus_audio: '',
  //       penalty_score: 0,
  //       _comment: '',
  //       response_id: '',
  //       feedback_attempts: 1,
  //       instant_feedback: false,
  //       multiple_responses: false,
  //       stimulus: {
  //         label: '',
  //         value: '0',
  //         feedbackInline: '',
  //         imgMode: 'medium',
  //         image: ''
  //       },
  //       type: 'mcq',
  //       validation: {
  //         scoring_type: 'exactMatch',
  //         valid_response: {
  //           score: 1,
  //           value: []
  //         },
  //         penalty: 0
  //       },
  //       ui_style: {
  //         type: 'vertical',
  //         theme: 'light',
  //         _comment: ''
  //       },
  //       metadata: {
  //         name: 'Multiple choice – standard',
  //         template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
  //         subjects: []
  //       },
  //       media: {
  //         src: ''
  //       }
  //     },
  //     type: 'SCQ',
  //     name: 'Multiple Choice - single select',
  //     widget_type: 'response'
  //   },
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e2',
  //     data: {
  //       options: [
  //         {
  //           label: '',
  //           value: '0',
  //           feedbackInline: '',
  //           image: ''
  //         }
  //       ],
  //       stimulus: {
  //         label: '',
  //         value: '0',
  //         feedbackInline: '',
  //         imgMode: 'medium'
  //       },
  //       stimulus_audio: '',
  //       penalty_score: 0,
  //       _comment: '',
  //       response_id: '',
  //       feedback_attempts: 1,
  //       instant_feedback: false,
  //       multiple_responses: false,
  //       type: 'mcq',
  //       validation: {
  //         scoring_type: 'exactMatch',
  //         valid_response: {
  //           score: 1,
  //           value: []
  //         },
  //         penalty: 0
  //       },
  //       ui_style: {
  //         type: 'vertical',
  //         theme: 'light',
  //         _comment: ''
  //       },
  //       metadata: {
  //         name: 'Multiple choice – standard',
  //         template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
  //         subjects: []
  //       },
  //       media: {
  //         src: ''
  //       }
  //     },
  //     type: 'MCQ',
  //     name: 'Multiple Choice - multiple select',
  //     widget_type: 'response'
  //   },
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e4',
  //     data: {
  //       options: [
  //         {
  //           label: 'True',
  //           value: '0',
  //           feedbackInline: ''
  //         },
  //         {
  //           label: 'False',
  //           value: '1',
  //           feedbackInline: ''
  //         }
  //       ],
  //       stimulus: {
  //         label: '',
  //         value: '0',
  //         feedbackInline: '',
  //         placeholder: 'Compose The Question...',
  //         imgMode: 'medium',
  //         image: ''
  //       },
  //       stimulus_audio: '',
  //       penalty_score: 0,
  //       _comment: '',
  //       response_id: '',
  //       feedback_attempts: 1,
  //       instant_feedback: false,
  //       multiple_responses: false,
  //       type: 'mcq',
  //       validation: {
  //         scoring_type: 'exactMatch',
  //         valid_response: {
  //           score: 1,
  //           value: []
  //         },
  //         penalty: 0
  //       },
  //       ui_style: {
  //         type: 'horizontal',
  //         theme: 'light',
  //         _comment: ''
  //       },
  //       metadata: {
  //         name: 'Multiple choice – standard',
  //         template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
  //         subjects: []
  //       }
  //     },
  //     type: 'mcq-tf',
  //     name: 'Multiple choice - true or false',
  //     widget_type: 'response'
  //   },
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
  //     data: {
  //       stimulus: {
  //         label: '',
  //         value: '0',
  //         placeholder: 'Compose The Question...'
  //       },
  //       template: '',
  //       type: 'FIB',
  //       validation: {
  //         scoring_type: 'exactMatch',
  //         valid_response: {
  //           score: 1,
  //           value: []
  //         }
  //       },
  //       ui_style: {
  //         type: 'horizontal'
  //       }
  //     },
  //     metadata: {
  //       name: 'Fill in the blanks – standard',
  //       template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
  //     },
  //     type: 'fib-text',
  //     name: 'FIB - text',
  //     widget_type: 'response'
  //   },
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
  //     data: {
  //       stimulus: {
  //         label: '',
  //         value: '0'
  //       },
  //       template: '',
  //       type: 'FIB',
  //       possible_responses: [],
  //       validation: {
  //         scoring_type: 'exactMatch',
  //         valid_response: {
  //           score: 1,
  //           value: []
  //         }
  //       },
  //       ui_style: {
  //         type: 'horizontal'
  //       }
  //     },
  //     metadata: {
  //       name: 'Fill in the blanks – dropdown',
  //       template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
  //     },
  //     type: 'fib-dropdown',
  //     name: 'FIB - dropdown',
  //     widget_type: 'response'
  //   },
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
  //     data: {
  //       stimulus: {
  //         label: '',
  //         value: '0'
  //       },
  //       template: '',
  //       type: 'FIB',
  //       possible_responses: [],
  //       validation: {
  //         scoring_type: 'exactMatch',
  //         valid_response: {
  //           score: 1,
  //           value: []
  //         }
  //       },
  //       ui_style: {
  //         type: 'horizontal'
  //       }
  //     },
  //     metadata: {
  //       name: 'Fill in the blanks – dropdown',
  //       template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
  //     },
  //     type: 'fib-drag-drop',
  //     name: 'FIB - drag-drop',
  //     widget_type: 'response'
  //   },
  //   {
  //     reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
  //     data: {
  //       type: 'essay',
  //       metadata: {
  //         name: 'Essay with Plain Text',
  //         template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
  //         subjects: []
  //       },
  //       stimulus: {
  //         label: '',
  //         value: '0',
  //         feedbackInline: ''
  //       }
  //     },
  //     show_copy: true,
  //     show_cut: true,
  //     show_paste: true,
  //     show_word_limit: 'visible',
  //     max_length: '10000',
  //     showSampleAnswer: false,
  //     spellcheck: true,
  //     type: 'plain-text',
  //     name: 'Plain text',
  //     sample_answer: ''
  //   }
  // ];
  // templateData: any;
  // public previewState: boolean = false;
  // public showAnsState: boolean = false;
  // public submit: Subject<void> = new Subject<void>();
  // public save: Subject<void> = new Subject<void>();
  // public metadata: Subject<void> = new Subject<void>();
  // public viewDevice: Subject<void> = new Subject<void>();
  // public layoutView: Subject<void> = new Subject<void>();

  // private componentHashmap = {
  //   mcq: McqSingleSelectLayoutComponent,
  //   MCQ: McqSingleSelectLayoutComponent,
  //   SCQ: McqSingleSelectLayoutComponent,
  //   'mcq-tf': McqSingleSelectLayoutComponent,
  //   FIB: FibTextLayoutComponent,
  //   essay: EssayTextLayoutComponent
  // };
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private componentFactoryResolver: ComponentFactoryResolver,public questionPaperService:QuestionPaperService,) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  getToolBarEvent(key:string){
    switch(key){
      case "template":
        this.createNewQuestion();
        break;
      case "add":
        this.addSection();
        break;
        case "question":
          this.addQuestion()
          break;
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

  SetisPrintable(status:boolean){
    this.isPrintable = status;
  }
  
  // addSection() {
  //   var json = JSON.parse(JSON.stringify(this.defaultSection));
  //   json.sectionNo = this.sections.length+1;
  //   json.contents.push({name:"mcq",options:[],title:"untitled question"})
  //   this.pageSections.push(json);
    
  //   // this.sections.push('section ' + this.sections.length);
  // }

  navigateToHome(){
    this.questionPaperService.qpHomePage.next("home");
  }
  pageSections:any[] = [];
  // [{"name":""}]
  defaultSection = {"name":"Untitled Section",contents:[],"sectionNo":0}
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

  addQuestion(){
    this.pageSections[0].contents.push({name:"mcq",type:"mcq",options:[],title:"untitled question"})
  }

  
  addSection() {
    var json = JSON.parse(JSON.stringify(this.defaultSection));
    json.sectionNo = this.sections.length+1;
    json.contents.push({name:"mcq",options:[],title:"untitled question"})
    this.pageSections.push(json);
  }


  ngOnInit(): void {
    this.addSection();
    setTimeout(() => {
      // this.openToolbarContent(this.content);
    }, 3000)
    // this.templateData = {
    //   reference: 'c3805d10-0cd7-4057-a85c',
    //   data: {
    //     options: [
    //       {
    //         label: '',
    //         value: '0',
    //         feedbackInline: '',
    //         image: ''
    //       }
    //     ],
    //     stimulus_audio: '',
    //     penalty_score: 0,
    //     _comment: '',
    //     response_id: '',
    //     feedback_attempts: 1,
    //     instant_feedback: false,
    //     multiple_responses: false,
    //     stimulus: {
    //       label: '',
    //       value: '0',
    //       feedbackInline: '',
    //       imgMode: 'medium',
    //       image: ''
    //     },
    //     type: 'mcq',
    //     validation: {
    //       scoring_type: 'exactMatch',
    //       valid_response: {
    //         score: 1,
    //         value: []
    //       },
    //       penalty: 0
    //     },
    //     ui_style: {
    //       type: 'vertical',
    //       theme: 'light',
    //       _comment: ''
    //     },
    //     metadata: {
    //       name: 'Multiple choice – standard',
    //       template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
    //       subjects: []
    //     },
    //     media: {
    //       src: ''
    //     }
    //   },
    //   type: 'SCQ',
    //   name: 'Multiple Choice - single select',
    //   widget_type: 'response'
    // }
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
    this.pageSections[0].contents.push({name:"template",type:"template",options:[],title:"untitled template"})

    // this.isdefaultQuestion = !this.isdefaultQuestion;
    // this.sections.push('section ' + this.sections.length);

    // this.selectTemplate('SCQ');
  }

  // selectTemplate(type) {
  //   console.log('select Temp ', type);

  //   this.templates.forEach(template => {
  //     console.log('select Temp ', template.type);

  //     if (type === template.type) {
  //       this.templateData = template
  //     }
  //   });
  //   // this.loadTemplate()
  // }

  // loadTemplate() {
  //   console.log('select Temp ', this.templateData);
  //   // this.vcRef = (this.currentAdIndex + 1) % this.ads.length;
  //   // const adItem = this.ads[this.currentAdIndex];
  //   if (this.templateData) {
  //     let componentTemplate: any;
  //     if (this.templateData.data.type) {
  //       componentTemplate = this.componentHashmap[this.templateData.data.type];
  //     } else {
  //       componentTemplate = this.componentHashmap[this.templateData.type];
  //     }
  //     this.viewRef.clear();
  //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
  //       componentTemplate
  //     );

  //     const componentRef = this.viewRef.createComponent<any>(componentFactory);

  //     componentRef.instance.templateData = this.templateData;
  //     componentRef.instance.previewState = this.previewState;
  //     componentRef.instance.showAnsStateFlag = this.showAnsState;
  //     componentRef.instance.submit = this.submit;
  //     componentRef.instance.save = this.save;
  //     componentRef.instance.metadataSidebar = this.metadata;
  //     componentRef.instance.viewDevice = this.viewDevice;
  //     componentRef.instance.layoutView = this.layoutView;
  //   }
  // }
}
