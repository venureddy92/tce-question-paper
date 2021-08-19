import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tce-qp-qp-preview',
  templateUrl: './qp-preview.component.html',
  styleUrls: ['./qp-preview.component.scss']
})
export class QpPreviewComponent implements OnInit {

  @ViewChild('content')
  private content!: QpPreviewComponent;
  data = [];
  @Input() isPrintable = false;
  public questionPaperJson:any;
  constructor(private config: NgbModalConfig, private modalService: NgbModal) {

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.questionPaperJson = [
      {
        reference: 'c3805d10-0cd7-4057-a85c',
        data: {
          options: [
            {
              label: "India",
              value: '0',
              feedbackInline: '',
              image: ''
            },
            {
              label: "Sri Lanka",
              value: '0',
              feedbackInline: '',
              image: ''
            },
          ],
          title: "who won the world cup 2011",
          stimulus_audio: '',
          penalty_score: 0,
          _comment: '',
          response_id: '',
          feedback_attempts: 1,
          instant_feedback: false,
          multiple_responses: false,
          stimulus: {
            label: 'SCQ question - who won the world cup 2011',
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
              label: "option 1",
              value: '0',
              feedbackInline: '',
              image: ''
            },
            {
              label: "option 2",
              value: '0',
              feedbackInline: '',
              image: ''
            }
          ],
          stimulus: {
            label: 'MCQ question',
            value: '0',
            feedbackInline: '',
            imgMode: 'medium'
          },
          stimulus_audio: '',
          penalty_score: 0,
          title: "are you born in 2011",
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
            label: 'MCQ True or False question',
            value: '0',
            feedbackInline: '',
            placeholder: 'Compose The Question...',
            imgMode: 'medium',
            image: ''
          },
          title: "are you HERO",
  
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
            label: 'FIB Question',
            value: '0',
            placeholder: 'Compose The Question...'
          },
          template: 'This is the FIB statement with {{response}} and {{response}}',
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
          },
          title: "gggg"
        },
        metadata: {
          name: 'Fill in the blanks – standard',
          template_reference: '9e8149bd-e4d8-4dd6-a751-1a113a4b9163'
        },
        type: 'fib-text',
        name: 'FIB - text',
        widget_type: 'response'
      }
    ]
  }
  getQuestions(question: any) {
    return question.type.toString();
  }
  open(content: any) {
    this.modalService.open(content.content, { windowClass: 'dark-theme-modal', size: 'lg', centered: true });
  }
}
