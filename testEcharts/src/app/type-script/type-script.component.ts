import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-type-script',
    templateUrl: './type-script.component.html',
    styleUrls: ['./type-script.component.scss']
})
export class TypeScriptComponent implements OnInit {
    t1: string;

    constructor() {
    }

    ngOnInit() {
        this.t1='左姑娘是全世界最美的姑娘'
    }

}
