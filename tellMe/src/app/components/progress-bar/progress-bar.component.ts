import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() animation: boolean;
  @Input() pause: boolean;

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges): void {


  // }


}
