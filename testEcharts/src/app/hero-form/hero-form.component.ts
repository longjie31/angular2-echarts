import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit, AfterViewInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, '慕湮剑圣', this.powers[1], '破军云焕');
  submitted = false;

  saveForm() {
    this.submitted = true;
    console.log(this.model);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() {
  }

  ngOnInit() {
    setTimeout(function () {
      layui.form.render();
    }, 300);
  }

  ngAfterViewInit() {
    layui.form.render();
  }

  newHero() {
    this.model = new Hero(19, '', '');
  }

}
