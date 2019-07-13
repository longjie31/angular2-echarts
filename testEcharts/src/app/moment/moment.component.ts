import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-moment',
    templateUrl: './moment.component.html',
    styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {
    current = 0;
    moment1: any;
    moment2: any;
    moment3: any;
    moment4: any;
    moment5: any;
    moment6: any;
    moment7: any;
    moment8: any;
    moment9: any;
    moment10: any;
    day1: any;
    day2: any;
    getTime = {
        t1: null,
        t2: null,
        t3: null,
        t4: null,
        t5: null,
        t6: null,
        t7: null,
        t8: null,
        t9: null,
        t10: null,
        t11: null
    };

    constructor(private message: NzMessageService) {
    }

    ngOnInit() {
        this.moment1 = moment();
        this.moment2 = moment('6-23-1993', 'MM-DD-YYYY');
        this.moment3 = moment('6/23/1993', 'MM-DD-YYYY');
        this.moment4 = moment('2019-7-11 7:00', 'YYYY-MM-DD HH');
        this.moment5 = moment('6-23-1993', ['MM-DD-YYYY', 'YYYY-MM-DD']);
        this.moment6 = moment('2010-01-12', ['YYYY', moment.ISO_8601]);
        this.moment7 = moment({y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123});
        this.moment8 = moment({years: 2010, months: 3, days: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123});
        this.day1 = moment(1318781876406);
        this.day2 = moment.unix(1318781876.721);
        this.moment9 = moment(new Date());
        this.moment10 = moment([2019, 6, 23, 15, 25, 50]);
        this.getTime.t1 = moment().startOf('day');
        this.getTime.t2 = moment().startOf('week');
        this.getTime.t3 = moment().startOf('isoWeek');
        this.getTime.t4 = moment().startOf('month');
        this.getTime.t5 = moment().endOf('day');
        this.getTime.t6 = moment().endOf('week');
        this.getTime.t7 = moment().endOf('isoWeek');
        this.getTime.t8 = moment().endOf('month');
        this.getTime.t9 = moment().daysInMonth();
    }

    pre() {
        this.current -= 1;
    }

    next() {
        this.current += 1;
    }

    done() {
        this.message.info('亲，已经是最后一页啦');
    }
}
