import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /* const locations = new Observable((observer) => {
       const {next, error} = observer;
       let watchId;
       if ('geolocation' in navigator) { // navigator导航 geolocation地理定位
         watchId = navigator.geolocation.watchPosition(next, error);
       } else {
         error('Geolocation not available'); // available 可获得的
       }
       return {
         unsubscribe() {
           navigator.geolocation.clearWatch(watchId);
         }
       };
     });
     const locationsSubscription = locations.subscribe({
       next(position) {
         console.log('Current Position:', position);
       },
       error(msg) {
         console.log('Error Getting Location', msg);
       }
     });
     setTimeout(() => {
       locationsSubscription.unsubscribe();
     }, 10000);

     const myObservable = of(1, 2, 3); // 用of生成一个可观察对象
     const myObserver = { // 观察者
       next: x => console.log('Observer got a next value:' + x),
       error: err => console.log('Observer got an error:' + err),
       complete: () => console.log('Observer got a complete notification')// notification 通知
     };
     // 可观察对象被观察者订阅（可观察对象调用订阅方法，把观察者作为参数）
     myObservable.subscribe(myObserver);*/
    const sequence = new Observable(this.sequenceSubscriber);
    sequence.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log('可观察对象发送完成');
      }
    });
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const subscription = this.fromEvent(nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
          if (e.keyCode === ESC_KEY) {
            nameInput.value = '';
          }
        }
      );

    function myObs(observer) {
      observer.next('lj');
      observer.next('and');
      observer.next('xiaozuo');
      observer.complete();
      return {
        unsubscribe() {
        }
      };
    }

    const mySeq = new Observable(myObs);
    mySeq.subscribe({
      next(item) {
        console.log('自定义的可观察对象：' + item);
      },
      error() {
        console.error('生成错误');
      },
      complete() {
        console.log('观察者接受完毕');
      }
    });
  }

  sequenceSubscriber(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    return {
      unsubscribe() {
      }
    };
  }

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);
      // 将事件监听程序添加到目标上
      target.addEventListener(eventName, handler);
      return () => {
        // 目标删除事件监听程序
        target.removeEventListener(eventName, handler);
      };
    });
  }
}
