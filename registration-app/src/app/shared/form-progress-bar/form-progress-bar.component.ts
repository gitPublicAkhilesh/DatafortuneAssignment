import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-form-progress-bar',
  templateUrl: './form-progress-bar.component.html',
  styleUrls: ['./form-progress-bar.component.scss']
})
export class FormProgressBarComponent implements OnInit {
@Input() currentStep: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
