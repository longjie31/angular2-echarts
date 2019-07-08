import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {concat, from, fromEvent, interval, merge, Observable, of, throwError, timer} from 'rxjs';
import {fromPromise} from 'rxjs-compat/observable/fromPromise';
import {delay, first, skip, startWith, take, takeLast, takeUntil} from 'rxjs/operators';


@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        const myObservable = Observable.create(function (observer) {
            observer.next('tom');
            observer.next('and');
            observer.next('jerry');
        });
        myObservable.subscribe(function (value) {
            setTimeout(function () {
                console.log(value);
            }, 1000);
        });
        // 换成箭头函数
        const myObs = Observable.create(observer => {
            observer.next('修罗');
            observer.next('破军');
        });
        myObs.subscribe({
            next: (val) => {
                console.log(val);
            },
            complete: () => {
                console.log('输出完成');
            },
            error: () => {
                console.log('出错啦');
            }
        });
        const myOf = of('of1', 'of2', 'of3');
        myOf.subscribe({
            next: val => {
                console.log(val);
            },
            complete: () => {
                console.log('of完成');
            },
            error: (error) => {
                console.log(error);
            }
        });
        const fromArray = ['from', '传输', '中'];
        const myFrom = from(fromArray);
        myFrom.subscribe({
            next: val => {
                console.log(val);
            },
            complete: () => {
                console.log('from传输完成');
            },
            error: (error) => {
                console.log(error);
            }
        });
        const myFromPromise = fromPromise(new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(['你', '好', '丫', 'rxjs', '!']);
            }, 1000);
        }));
        myFromPromise.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('fromPromise传输完成');
            },
            error: error => {
                console.log(error);
            }
        });
        const myFromEvent = fromEvent(document, 'click');
        myFromEvent.subscribe({
            next: value => {
                console.log('鼠标点击后：');
                console.log(value);
            },
            complete: () => {
                console.log('fromEvent传输完成');
            },
            error: error => {
                console.log(error);
            }
        });
        const myThrow = throwError('出错了');
        myThrow.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('throw传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });
        const myInterval = interval(1000);
        /*const mySkip = myInterval.pipe(skip(3));
        mySkip.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('mySkip传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });*/
        const myTakeUntil = myInterval.pipe(takeUntil(myFromEvent), startWith('亲，开始啦'));
        myTakeUntil.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('点击后，myTakeUntil传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });
        const myOf0 = interval(1000).pipe(take(2), delay(1000));
        myOf0.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('myOf0传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });
        /* const myOf0 = interval(1000).pipe(take(2));
         const myOf1 = of(1, 2, 3);
         const myOf2 = of(4, 5, 6);
         const myConcat = myOf0.pipe(merge(myOf1, myOf2));
         myConcat.subscribe({
             next: value => {
                 console.log(value);
             },
             complete: () => {
                 console.log('myConcat传输完成');
             },
             error: error => {
                 console.error('throw Error');
                 console.error(error);
             }
         });*/
        /*const myTakeLast = myInterval.pipe(take(6), takeLast(3));
        myTakeLast.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('myTakeLast传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });*/
        /*const myFirst = myInterval.pipe(first());
        myFirst.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('myFirst传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });*/
        /*const myTake = myInterval.pipe(take(9));
        myTake.subscribe({
            next: value => {
                console.log(value);

            },
            complete: () => {
                console.log('myInterval传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });*/
        /*const myTimer = timer(1000, 500);
        myTimer.subscribe({
            next: value => {
                console.log(value);
            },
            complete: () => {
                console.log('myTimer传输完成');
            },
            error: error => {
                console.error('throw Error');
                console.error(error);
            }
        });*/

    }

    toPie() {
        this.router.navigate(['/pie']);
    }
}
