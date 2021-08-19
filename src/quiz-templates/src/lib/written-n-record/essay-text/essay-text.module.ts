import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssayTextLayoutComponent } from './essay-text/components/essay-text-layout/essay-text-layout.component';
import { QstemModule } from '../../sharedComponents/qstem/qstem.module';
import { CorrectResponsesModule } from '../../sharedComponents/correct-responses/correct-responses.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuillModule } from 'ngx-quill';
import { QuillToolbarModule } from '../../sharedComponents/quill-toolbar/quill-toolbar.module';
import { FeedbackModule } from '../../sharedComponents/feedback/feedback.module';
// import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [EssayTextLayoutComponent],
  imports: [
    CommonModule,
    QstemModule,
    FormsModule,
    CommonModule,
    CorrectResponsesModule,
    DragDropModule,
    QuillToolbarModule,
    FeedbackModule,
    // NbIconModule
  ],
  entryComponents: [EssayTextLayoutComponent]
})
export class EssayTextModule {
  static defaultEntryComponent = EssayTextLayoutComponent;
}
