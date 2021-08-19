import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QpEditorComponent } from './components/qp-editor/qp-editor.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { QuestionPaperTemplateEditiorComponent } from './components/question-paper-template-editior/question-paper-template-editior.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionPaperViewComponent } from '../../components/question-paper-view/question-paper-view.component';
import { QpPreviewComponent } from '../../components/qp-preview/qp-preview.component';
import { QpSetupComponent } from '../../components/qp-setup/qp-setup.component';
import { QuizTemplatesModule } from '../../../../../quiz-templates/src/lib/quiz-templates.module';
import { McqSingleSelectModule } from 'src/quiz-templates/src/lib/mcq-single-select/mcq-single-select.module';
import { FibTextModule } from 'src/quiz-templates/src';
import { QpToolbarComponent } from '../../components/qp-toolbar/qp-toolbar.component';
import { QpTemplateLoaderComponent } from './components/qp-template-loader/qp-template-loader.component';
import { QpQuestionEditorComponent } from './components/qp-question-editor/qp-question-editor.component';
import { QpPrintableViewComponent } from '../../components/question-paper-printable-view/question-paper-printable-view.component';

@NgModule({
  declarations: [
    QpEditorComponent,
    ToolbarComponent,
    QuestionPaperTemplateEditiorComponent,
    QuestionPaperViewComponent,
    QpPreviewComponent,
    QpSetupComponent,
    QpToolbarComponent,
    QpTemplateLoaderComponent,
    QpQuestionEditorComponent,
    QpPrintableViewComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuizTemplatesModule,
    McqSingleSelectModule,
    FibTextModule,
      ],
  exports:[
    QpEditorComponent,
    QuestionPaperTemplateEditiorComponent,
    ToolbarComponent,
    FormsModule,
    ReactiveFormsModule,
    QuestionPaperViewComponent,
    QpPreviewComponent,
    QpSetupComponent,
    QpTemplateLoaderComponent,
    QpQuestionEditorComponent,
    QpPrintableViewComponent
  ]
})
export class QuestionPaperEditorModule { }
