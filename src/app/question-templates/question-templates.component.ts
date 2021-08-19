import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FibTextLayoutComponent, McqSingleSelectLayoutComponent, EssayTextLayoutComponent } from 'src/quiz-templates/src';
// import { EssayTextLayoutComponent } from 'src/quiz-templates/src/lib/written-n-record/essay-text/essay-text/components/essay-text-layout/essay-text-layout.component';

@Component({
  selector: 'app-question-templates',
  templateUrl: './question-templates.component.html',
  styleUrls: ['./question-templates.component.scss']
})
export class QuestionTemplatesComponent implements OnInit {
  public templates = [
    {
      reference: 'c3805d10-0cd7-4057-a85c',
      data: {
        options: [
          {
            label: '',
            value: '0',
            feedbackInline: '',
            image: ''
          }
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
          image: ''
        },
        type: 'mcq',
        validation: {
          scoring_type: 'exactMatch',
          valid_response: {
            score: 1,
            value: []
          },
          penalty: 0
        },
        ui_style: {
          type: 'vertical',
          theme: 'light',
          _comment: ''
        },
        metadata: {
          name: 'Multiple choice – standard',
          template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
          subjects: []
        },
        media: {
          src: ''
        }
      },
      type: 'SCQ',
      name: 'Multiple Choice - single select',
      widget_type: 'response'
    },
    {
      reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e2',
      data: {
        options: [
          {
            label: '',
            value: '0',
            feedbackInline: '',
            image: ''
          }
        ],
        stimulus: {
          label: '',
          value: '0',
          feedbackInline: '',
          imgMode: 'medium'
        },
        stimulus_audio: '',
        penalty_score: 0,
        _comment: '',
        response_id: '',
        feedback_attempts: 1,
        instant_feedback: false,
        multiple_responses: false,
        type: 'mcq',
        validation: {
          scoring_type: 'exactMatch',
          valid_response: {
            score: 1,
            value: []
          },
          penalty: 0
        },
        ui_style: {
          type: 'vertical',
          theme: 'light',
          _comment: ''
        },
        metadata: {
          name: 'Multiple choice – standard',
          template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
          subjects: []
        },
        media: {
          src: ''
        }
      },
      type: 'MCQ',
      name: 'Multiple Choice - multiple select',
      widget_type: 'response'
    },
    {
      reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e4',
      data: {
        options: [
          {
            label: 'True',
            value: '0',
            feedbackInline: ''
          },
          {
            label: 'False',
            value: '1',
            feedbackInline: ''
          }
        ],
        stimulus: {
          label: '',
          value: '0',
          feedbackInline: '',
          placeholder: 'Compose The Question...',
          imgMode: 'medium',
          image: ''
        },
        stimulus_audio: '',
        penalty_score: 0,
        _comment: '',
        response_id: '',
        feedback_attempts: 1,
        instant_feedback: false,
        multiple_responses: false,
        type: 'mcq',
        validation: {
          scoring_type: 'exactMatch',
          valid_response: {
            score: 1,
            value: []
          },
          penalty: 0
        },
        ui_style: {
          type: 'horizontal',
          theme: 'light',
          _comment: ''
        },
        metadata: {
          name: 'Multiple choice – standard',
          template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
          subjects: []
        }
      },
      type: 'mcq-tf',
      name: 'Multiple choice - true or false',
      widget_type: 'response'
    },
    {
      reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
      data: {
        stimulus: {
          label: '',
          value: '0',
          placeholder: 'Compose The Question...'
        },
        template: '',
        type: 'FIB',
        validation: {
          scoring_type: 'exactMatch',
          valid_response: {
            score: 1,
            value: []
          }
        },
        ui_style: {
          type: 'horizontal'
        }
      },
      metadata: {
        name: 'Fill in the blanks – standard',
        template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
      },
      type: 'fib-text',
      name: 'FIB - text',
      widget_type: 'response'
    },
    {
      reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
      data: {
        stimulus: {
          label: '',
          value: '0'
        },
        template: '',
        type: 'FIB',
        possible_responses: [],
        validation: {
          scoring_type: 'exactMatch',
          valid_response: {
            score: 1,
            value: []
          }
        },
        ui_style: {
          type: 'horizontal'
        }
      },
      metadata: {
        name: 'Fill in the blanks – dropdown',
        template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
      },
      type: 'fib-dropdown',
      name: 'FIB - dropdown',
      widget_type: 'response'
    },
    {
      reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
      data: {
        stimulus: {
          label: '',
          value: '0'
        },
        template: '',
        type: 'FIB',
        possible_responses: [],
        validation: {
          scoring_type: 'exactMatch',
          valid_response: {
            score: 1,
            value: []
          }
        },
        ui_style: {
          type: 'horizontal'
        }
      },
      metadata: {
        name: 'Fill in the blanks – dropdown',
        template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
      },
      type: 'fib-drag-drop',
      name: 'FIB - drag-drop',
      widget_type: 'response'
    },
    {
      reference: 'c3805d10-0cd7-4057-a85c-4061ef2cc29e1',
      data: {
        type: 'essay',
        metadata: {
          name: 'Essay with Plain Text',
          template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163',
          subjects: []
        },
        stimulus: {
          label: '',
          value: '0',
          feedbackInline: ''
        }
      },
      show_copy: true,
      show_cut: true,
      show_paste: true,
      show_word_limit: 'visible',
      max_length: '10000',
      showSampleAnswer: false,
      spellcheck: true,
      type: 'plain-text',
      name: 'Plain text',
      sample_answer: ''
    }
  ];
  templateData: any;
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
    essay: EssayTextLayoutComponent
  };
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.selectTemplate('SCQ');
  }

  selectTemplate(type){
    console.log('select Temp ', type);
    
    this.templates.forEach(template=>{
      console.log('select Temp ', template.type);
      
      if(type === template.type){
        this.templateData = template
      }
    });
    this.loadTemplate()
  }

  loadTemplate() {
      console.log('select Temp ', this.templateData);
      // this.vcRef = (this.currentAdIndex + 1) % this.ads.length;
      // const adItem = this.ads[this.currentAdIndex];
      if(this.templateData){
      let componentTemplate: any;
      if (this.templateData.data.type) {
        componentTemplate = this.componentHashmap[this.templateData.data.type];
      } else {
        componentTemplate = this.componentHashmap[this.templateData.type];
      }
      this.viewRef.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        componentTemplate
      );
  
      const componentRef = this.viewRef.createComponent<any>(componentFactory);
  
      componentRef.instance.templateData = this.templateData;
      componentRef.instance.previewState = this.previewState;
      componentRef.instance.showAnsStateFlag = this.showAnsState;
      componentRef.instance.submit = this.submit;
      componentRef.instance.save = this.save;
      componentRef.instance.metadataSidebar = this.metadata;
      componentRef.instance.viewDevice = this.viewDevice;
      componentRef.instance.layoutView = this.layoutView;
      }
    }

}
