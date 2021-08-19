import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { QuestionPaperViewComponent } from 'src/question-paper/src/lib/components/question-paper-view/question-paper-view.component';
import { QuestionPaperTemplateEditiorComponent } from 'src/question-paper/src/lib/modules/question-paper-editor/components/question-paper-template-editior/question-paper-template-editior.component';
import { QuestionPaperService } from 'src/question-paper/src/lib/services/question-paper.service';
import { FibTextLayoutComponent, McqSingleSelectLayoutComponent } from 'src/quiz-templates/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quiz-templates';
  templateData = {
    reference: 'c3805d10-0cd7-4057-a85c',
    data: {
      options: [
        {
          label: '',
          value: '0',
          feedbackInline: '',
          image: '',
        },
      ],
      stimulus_audio: '',
      penalty_score: 0,
      _comment: '',
      response_id: '',
      feedback_attempts: 1,
      instant_feedback: false,
      multiple_responses: false,
      stimulus: {
        label: '',
        value: '0',
        feedbackInline: '',
        imgMode: 'medium',
        image: '',
      },
      type: 'mcq',
      validation: {
        scoring_type: 'exactMatch',
        valid_response: {
          score: 1,
          value: [],
        },
        penalty: 0,
      },
      ui_style: {
        type: 'vertical',
        theme: 'light',
        _comment: '',
      },
      metadata: {
        name: 'Multiple choice – standard',
        template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
        subjects: [],
      },
      media: {
        src: '',
      },
    },
    type: 'SCQ',
    name: 'Multiple Choice - single select',
    widget_type: 'response',
  };
  public previewState: boolean = false;
  public showAnsState: boolean = false;
  public submit: Subject<void> = new Subject<void>();
  public save: Subject<void> = new Subject<void>();
  public metadata: Subject<void> = new Subject<void>();
  public viewDevice: Subject<void> = new Subject<void>();
  public layoutView: Subject<void> = new Subject<void>();
  @ViewChild('targetRefView', { read: ViewContainerRef, static: true })
  viewRef: ViewContainerRef;
  private componentHashmap = {
    mcq: McqSingleSelectLayoutComponent,
    MCQ: McqSingleSelectLayoutComponent,
    SCQ: McqSingleSelectLayoutComponent,
    'mcq-tf': McqSingleSelectLayoutComponent,
    FIB: FibTextLayoutComponent,
    QPV: QuestionPaperViewComponent,
    QPE:QuestionPaperTemplateEditiorComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver,private questionPaperService:QuestionPaperService){}
  
  ngOnInit(){
    setTimeout(()=>{
       this.loadQuestionPaperView("QPV");
    },2000)
    this.questionPaperService.qpHomePage.subscribe(res=>{
       console.log(res);
      //  if(res =="close")
      //  this.viewRef.clear();
      //  else
      //  this.loadQuestionPaperView("QPV");

       if(res == "editor")
       {
          this.loadQuestionPaperView("QPE");
       }else{
        this.loadQuestionPaperView("QPV");
       }

    })
  }

  loadQuestionPaperView(type){
    if(this.viewRef){
      this.viewRef.clear();
    }

    let componentTemplate = this.componentHashmap[type];

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentTemplate
    );
      //   const componentRef = this.viewRef.createComponent<any>(componentFactory);
        const componentRef = this.viewRef.createComponent<any>(componentFactory);
  }
  // ngOnInit(){
  //   this.loadTemplate('MCQ')
  // }
  // loadTemplate(templateData) {
  //   // console.log('select Temp ', this.templateData, this.templateComponent);
  //   // this.vcRef = (this.currentAdIndex + 1) % this.ads.length;
  //   // const adItem = this.ads[this.currentAdIndex];
  //   let componentTemplate: any;
  //   if (templateData.data.type) {
  //     componentTemplate = this.componentHashmap[templateData.data.type];
  //   } else {
  //     componentTemplate = this.componentHashmap[templateData.type];
  //   }
  //   this.viewRef.clear();
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
  //     componentTemplate
  //   );

  //   const componentRef = this.viewRef.createComponent<any>(componentFactory);

  //   componentRef.instance.templateData = templateData;
  //   componentRef.instance.previewState = this.previewState;
  //   componentRef.instance.showAnsStateFlag = this.showAnsState;
  //   componentRef.instance.submit = this.submit;
  //   componentRef.instance.save = this.save;
  //   componentRef.instance.metadataSidebar = this.metadata;
  //   componentRef.instance.viewDevice = this.viewDevice;
  //   componentRef.instance.layoutView = this.layoutView;
  // }
}
function componentTemplate(componentTemplate: any) {
  throw new Error('Function not implemented.');
}

