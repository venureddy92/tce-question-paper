import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QpSetupComponent } from './components/qp-setup/qp-setup.component';
import { QpToolbarComponent } from './components/qp-toolbar/qp-toolbar.component';
import { QuestionPaperEditorModule } from './modules/question-paper-editor/question-paper-editor.module';
import { QuestionPaperService } from './services/question-paper.service';
import { QpPreviewComponent } from './components/qp-preview/qp-preview.component';

@NgModule({
  imports: [CommonModule,QuestionPaperEditorModule],
  declarations: [
    ],
  exports:[QuestionPaperEditorModule],
  providers: [QuestionPaperService]    
})
export class QuestionPaperModule {}
