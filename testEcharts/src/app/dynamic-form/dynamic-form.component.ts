import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlServiceService} from '../question-control-service.service';
import {QuestionBase} from '../question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlServiceService]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private questionControlService: QuestionControlServiceService) {
  }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
    layui.form.render();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
