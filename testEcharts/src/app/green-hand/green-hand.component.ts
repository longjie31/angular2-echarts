import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-green-hand',
    templateUrl: './green-hand.component.html',
    styleUrls: ['./green-hand.component.scss']
})
export class GreenHandComponent implements OnInit {
    test1 = null;
    message1 = null;
    message2 = null;
    message3 = null;
    myWindow;

    constructor() {
    }

    ngOnInit() {
    }

    testOne() {
        try {
            switch (this.test1) {
                case '':
                    throw {
                        name: 'TypeErrow',
                        message: '值为空',
                        content: this.test1
                    };
                case '123':
                    throw {
                        name: 'TypeErrow',
                        message: '值为123',
                        content: this.test1
                    };
                default:
                    throw {
                        name: 'TypeErrow',
                        message: '其他数值',
                        content: this.test1
                    };
            }
        } catch (e) {
            this.message1 = e.message;
        }
    }

    // 打开窗口
    openWindow() {
        this.myWindow = window.open('', '', 'width=400,height=200');
    }

    // 关闭窗口
    closeWindow() {
        if (this.myWindow) {
            this.myWindow.close();
        }
    }

    // 检查窗口是否关闭
    isClosed() {
        if (!this.myWindow) {
            this.message2 = '窗口没有打开';
        } else {
            if (this.myWindow.closed) {
                this.message2 = '窗口关闭啦';
            } else {
                this.message2 = '窗口没有关闭哦';
            }
        }
    }

    // localStorage点击
    localStorageClick() {
        if (localStorage.clickCount) {
            localStorage.clickCount = 1 + 1;
        } else {
            localStorage.setItem('clickCount', '1');
        }
        this.message3 = localStorage.clickCount;
    }
}
