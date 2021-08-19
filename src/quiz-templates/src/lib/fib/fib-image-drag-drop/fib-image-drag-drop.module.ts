import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibImageDragDropLayoutComponent } from './components/fib-image-drag-drop-layout/fib-image-drag-drop-layout.component';
import { QstemModule } from '../../sharedComponents/qstem/qstem.module';
import { OptModule } from '../../sharedComponents/opt/opt.module';
import { AddOptionsModule } from '../../sharedComponents/add-options/add-options.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModalModule } from '../../sharedComponents/image-upload-modal/image-upload-modal.module';
import { CorrectResponsesModule } from '../../sharedComponents/correct-responses/correct-responses.module';
import { FormsModule } from '@angular/forms';

import { FeedbackModule } from '../../sharedComponents/feedback/feedback.module';
import { QuillToolbarModule } from '../../sharedComponents/quill-toolbar/quill-toolbar.module';
// import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [FibImageDragDropLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    QstemModule,
    OptModule,
    AddOptionsModule,
    DragDropModule,
    NgbModule,
    ImageUploadModalModule,
    CorrectResponsesModule,
    FeedbackModule,
    QuillToolbarModule,
    // NbIconModule
  ],
  entryComponents: [FibImageDragDropLayoutComponent]
})
export class FibImageDragDropModule {
  static defaultEntryComponent = FibImageDragDropLayoutComponent;
}
