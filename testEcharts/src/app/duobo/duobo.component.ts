import {Component, OnInit} from '@angular/core';
import {interval, Observable, of, pipe} from 'rxjs';
import {fromEvent} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {Config, UserService} from '../user.service';

@Component({
  selector: 'app-duobo',
  templateUrl: './duobo.component.html',
  styleUrls: ['./duobo.component.scss']
})
export class DuoboComponent implements OnInit {
  config: Config;
  httpFinish: string;
  completeRes: any;

  constructor(private myUserService: UserService) {
  }

  ngOnInit() {
    const nums = of(2, 4, 6, 3, 1);
    const squareValues = map((val: number) => val * val + 1);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(item => {
      console.log(item);
    });
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe({
      next(item) {
        console.log('管道处理后的数值:' + item);
      },
      complete() {
        console.log('管理后的信息收到完成');
      }
    });
    // 生成可观测对象
    /*const sequence = new Observable(this.sequenceSubscriber);
    // 参数里的观察者调用订阅方法
    sequence.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log('可观察对象发送值完成');
      }
    });*/
    /* const mySequence = new Observable(this.mySeqSub);
     mySequence.subscribe({
       next(observableItem) {
         console.log('可观察对象的值：' + observableItem);
       },
       complete() {
         console.log('可观测对象发送值完成啦');
       }
     });*/
    /*setTimeout(function () {
      mySequence.subscribe({
        next(item) {
          console.log('第二个观察者：' + item);
        },
        complete() {
          console.log('第二个观察者值接受完成');
        }
      });
    }, 500);*/
    const duoboSequence = new Observable(this.duoboMySeqsub());
    duoboSequence.subscribe({
      next(item) {
        console.log('多播1接受到的信息：' + item);
      },
      complete() {
        console.log('多播1信息接受完成');
      }
    });
    setTimeout(function () {
      duoboSequence.subscribe(a);
    }, 1500);
    const a = {
      next(num) {
        console.log('多播2接收到的信息：' + num);
      },
      complete() {
        console.log('多播2信息接受完成');
      }
    };
    /*const secondsCounter = interval(1000);
    secondsCounter.subscribe(item => {
      console.log(`It's been ${item}`);
    });*/
    const el = document.getElementById('myInput');
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      console.log(`坐标：${evt.clientX} X ${evt.clientY}`);
      if (evt.clientX < 50 && evt.clientY < 50) {
        subscription.unsubscribe();
      }
    });
  }

  showConfigResponse() {
    this.myUserService.getConfigResponse().subscribe(resp => {
      this.completeRes = resp;
    });
  }

  showConfig() {
    this.myUserService.getConfig().subscribe((data: Config) => {
      this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile
      };
    }, error => {
      console.log('致命的错误');
    }, () => {
      this.httpFinish = 'http传输完成';
    });
  }

  sequenceSubscriber(observer) {
    const seq = [1, 2, 3];
    let timeoutId;

    function doSequence(arr, idx) {
      timeoutId = setTimeout(function () {
        // 调用观察者的next方法
        observer.next(arr[idx]); // arr[0]
        if (idx === arr.length - 1) {  // 0不等于2
          observer.complete(); // 当idx=2是调用观测者的complete方法
        } else {
          doSequence(arr, ++idx); // 接着调用参数是a[1,2,3], 1
        }
      }, 1000);
    }

    // 第一次调用时：[1,2,3] 和0
    doSequence(seq, 0);
    return {
      unsubscribe() {
        // 解除订阅的方法里有一个清除定时的方法
        clearTimeout(timeoutId);
      }
    };
  }

  mySeqSub(observer) {
    const arr = ['鸭脑壳', '和', '左小妹'];
    let timeoutId = 0;
    let times = 0;

    function timeout(array, index) {
      timeoutId = setTimeout(function () {
        if (array.length > index) {
          observer.next(arr[times]);
          timeout(arr, ++times);
        } else {
          observer.complete();
        }
      }, 1000);
    }

    timeout(arr, times);
    return {
      unsubscribe() {
        clearTimeout(timeoutId);
      }
    };
  }

  duoboMySeqsub() {
    const seq = ['鸭脑壳', '和', '左小妹'];
    const observers = [];
    let timeoutId;
    return (observer) => {
      observers.push(observer);
      if (observers.length === 1) {
        timeoutId = this.duoboSequence({
          next(val) {
            observers.forEach(obs => obs.next(val));
          },
          complete() {
            observers.slice(0).forEach(obs => obs.complete());
          }
        }, seq, 0);
      }
      return {
        unsubscribe() {
          observers.splice(observers.indexOf(observer), 1);
          if (observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      };
    };
  }

  duoboSequence(observer, arr, idx) {
    const that = this;
    return setTimeout(function () {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        that.duoboSequence(observer, arr, ++idx);
      }
    }, 1000);
  }
}
