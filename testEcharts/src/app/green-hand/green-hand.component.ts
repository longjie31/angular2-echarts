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
    message9 = null;
    message10 = null;
    message11 = null;
    hash = null;
    host = null;
    hostname = null;
    href = null;
    pathname = null;
    port = null;
    protocol = null;
    search = null;
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

    // 屏幕高度
    showAvailHeight() {
        this.message9 = screen.availHeight;
    }

    // 屏幕宽度
    showAvailWidth() {
        this.message10 = screen.availWidth;
    }

    // 历史url长度
    showHistoryLength() {
        this.message11 = history.length;
    }

    // 朝后一步
    goBack() {
        window.history.back();
    }

    // 朝前一页
    goForward() {
        window.history.forward();
    }

    // 展示location对象
    showLocation() {
        this.hash = location.hash;
        this.host = location.host;
        this.hostname = location.hostname;
        this.href = location.href;
        this.pathname = location.pathname;
        this.port = location.port;
        this.protocol = location.protocol;
        this.search = location.search;
        location.replace('https://www.runoob.com');
    }

    documentOpen() {
        const doc = document.open('text/html', 'replace');
        const txt = '<!DOCTYPE html><html><h1>文件流</h1></html>';
        doc.write(txt);
        doc.close();
    }
}
