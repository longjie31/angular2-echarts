import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ztree',
  templateUrl: './ztree.component.html',
  styleUrls: ['./ztree.component.scss']
})
export class ZtreeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const setting = {};
    const zNodes = [
      {
        name: '李白',
        open: true,
        children: [
          {name: '杜甫'},
          {name: '辛弃疾'}
        ]
      },
      {
        name: '王昌龄',
        open: true,
        children: [
          {name: '杜牧'},
          {name: '李清照'}
        ]
      }
    ];
    const zTreeobj = $.fn.zTree.init($('#firstTreeDemo'), setting, zNodes);
  }

}
