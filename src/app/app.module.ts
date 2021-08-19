import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizTemplatesModule } from 'src/quiz-templates/src/lib/quiz-templates.module';
import { McqSingleSelectModule } from 'src/quiz-templates/src/lib/mcq-single-select/mcq-single-select.module';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { QuestionTemplatesComponent } from './question-templates/question-templates.component';
import { QuestionPaperModule } from 'src/question-paper/src';
import { QuestionPaperEditorModule } from 'src/question-paper/src/lib/modules/question-paper-editor/question-paper-editor.module';

@NgModule({
  declarations: [AppComponent, QuestionTemplatesComponent],
  imports: [
    QuillModule.forRoot(),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    QuizTemplatesModule,
    McqSingleSelectModule,
    QuestionPaperModule,
    QuestionPaperEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
