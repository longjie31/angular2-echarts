import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [QuestionService]
})
export class FormComponent implements OnInit {
  favoriteColorControl = new FormControl('');
  favoriteColor = '';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
