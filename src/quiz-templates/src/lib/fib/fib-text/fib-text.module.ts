import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMarkupModule } from '../../sharedComponents/template-markup/template-markup.module';
import { QstemModule } from '../../sharedComponents/qstem/qstem.module';
import { OptModule } from '../../sharedComponents/opt/opt.module';
import { FibSetCorrectAnsOptionsModule } from '../../sharedComponents/fib-set-correct-ans-options/fib-set-correct-ans-options.module';
import { CorrectResponsesModule } from '../../sharedComponents/correct-responses/correct-responses.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FibTextLayoutComponent } from './components/fib-text-layout/fib-text-layout.component';
import { FeedbackModule } from '../../sharedComponents/feedback/feedback.module';
import { QuillToolbarModule } from '../../sharedComponents/quill-toolbar/quill-toolbar.module';
// import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [FibTextLayoutComponent],
  imports: [
    CommonModule,
    QstemModule,
    TemplateMarkupModule,
    FibSetCorrectAnsOptionsModule,
    DragDropModule,
    OptModule,
    FeedbackModule,
    QuillToolbarModule,
    // NbIconModule
  ],
  entryComponents: [FibTextLayoutComponent]
})
export class FibTextModule {
  static defaultEntryComponent = FibTextLayoutComponent;
}
