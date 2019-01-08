import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');

  constructor() {
  }

  ngOnInit() {
    this.name.setValue('鸭脑壳帅哥哥');
  }

  updateName(): void {
    this.name.setValue('左妹妹小仙女');
  }
}
