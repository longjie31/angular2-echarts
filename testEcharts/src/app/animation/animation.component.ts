import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('openOrClose', [
      state('open', style({height: '200px', opacity: 1, backgroundColor: 'yellow'})),
      state('closed', style({height: '100px', width: '200px', opacity: 0.5, backgroundColor: 'green'})),
      transition('* => closed', [
        animate('1s 0.5s ease-out')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in')
      ]),
      /*transition('* => open', [
        animate('2s', style({opacity: '*'}))
      ])*/
      transition('* => open', [
        animate('2s', keyframes([
          style({backgroundColor: 'blue'}),
          style({backgroundColor: 'red'}),
          style({backgroundColor: 'orange'})
        ]))
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      /*transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('1s')
      ]),*/
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('1s')
      ]),
      transition(':leave', [
        animate('1s', style({transform: 'translateX(100%)'}))
      ])
      /*transition('* => void', [
        animate('1s', style({transform: 'translateX(100%)'}))
      ])*/
    ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen = true;
  isChange = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  changeFunc() {
    this.isChange = !this.isChange;
  }

  constructor() {
  }

  ngOnInit() {
  }

  onAnimationEvent(event: AnimationEvent) {
    console.log('动画结束:');
    console.log(event);
  }
}
