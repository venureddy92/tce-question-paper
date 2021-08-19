import {
  Component,
  OnInit,
  Input,
  HostBinding,
  HostListener,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'tce-flyout',
  templateUrl: './flyout.component.html',
  styleUrls: ['./flyout.component.scss']
})
export class FlyoutComponent implements OnInit {
  constructor(private eRef: ElementRef) {}

  ngOnInit() {}
}
