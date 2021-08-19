import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
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
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}
  
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
