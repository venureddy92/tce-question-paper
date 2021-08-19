import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EssayTextLayoutComponent, FibTextLayoutComponent, McqSingleSelectLayoutComponent } from 'src/quiz-templates/src';

@Component({
  selector: 'app-qp-template-loader',
  templateUrl: './qp-template-loader.component.html',
  styleUrls: ['./qp-template-loader.component.scss']
})
export class QpTemplateLoaderComponent implements OnInit {
  @Input() public templateData: any;
  @Input() public previewState: any;
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
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    console.log('in loader ', this.templateData);
    
    this.loadTemplate();
  }

  loadTemplate() {
    console.log('select Temp ', this.templateData);
    // this.vcRef = (this.currentAdIndex + 1) % this.ads.length;
    // const adItem = this.ads[this.currentAdIndex];
    if (this.templateData) {
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
    }
  }
}
