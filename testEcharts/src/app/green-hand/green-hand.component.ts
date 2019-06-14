import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-green-hand',
    templateUrl: './green-hand.component.html',
    styleUrls: ['./green-hand.component.scss']
})
export class GreenHandComponent implements OnInit {
    test1 = null;
    test2 = '';
    message1 = null;
    message2 = null;
    message3 = null;
    message4 = null;
    message5 = null;
    message6 = null;
    message7 = null;
    message8 = null;
    setTime1;
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

    // sessionStorage点击
    sessionStorageClick() {
        if (sessionStorage.getItem('sessionClick')) {
            sessionStorage.setItem('sessionClick', (parseInt(sessionStorage.getItem('sessionClick'), 10) + 1).toString());
            this.message4 = parseInt(sessionStorage.getItem('sessionClick'), 10);
        } else {
            sessionStorage.setItem('sessionClick', '1');
            this.message4 = parseInt(sessionStorage.getItem('sessionClick'), 10);
        }
    }

    sessionRemove() {
        if (sessionStorage.getItem('sessionClick')) {
            sessionStorage.removeItem('sessionClick');
            this.message4 = parseInt(sessionStorage.getItem('sessionClick'), 10);
        }
    }

    // 加密
    myBtoa() {
        this.message5 = btoa(this.test2);
    }

    // 解密
    myAtob() {
        this.message6 = atob(this.message5);
    }

    // 创建定时器
    createSetInterval() {
        const that = this;
        this.setTime1 = setInterval(function () {
            if (that.setTime1) {
                that.message7 += 1;
            } else {
                that.message7 = 1;
            }
        }, 1000);
    }

    // 清除定时器
    removeSetInterval() {
        clearInterval(this.setTime1);
        this.message7 = 0;
    }

    // 关闭浏览器
    closeBrowser() {
        // Window.close();
    }

    // 打开确认框
    openConfirm() {
        const x = confirm('按下按钮:');
        this.message8 = x ? '按下了确定按钮' : '按下了取消按钮';

    }
}
