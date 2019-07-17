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
        t11: null,
        t12: null,
        t13: null,
        t14: null,
        t15: null,
        t16: null,
        t17: null,
        t18: null,
        t19: null,
        t20: null,
        t21: null,
        t22: null,
        t23: null,
        t24: null,
        t25: null,
        t26: null,
        t27: null,
        t28: null,
        t29: null,
        t30: null,
        t31: null,
        t32: null,
        t33: null
    };
    setTime = {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
        s15: null,
        s16: null,
        s17: null,
        s18: null,
        s19: null,
        s20: null,
        s21: null,
        s22: null,
        s23: null,
        s24: null,
        s25: null,
        s26: null,
        s27: null,
        s28: null,
        s29: null,
        s30: null,
        s31: null,
        s32: null,
        s33: null


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
        this.getTime.t10 = moment().format('X');
        this.getTime.t11 = moment().unix();
        this.getTime.t12 = moment().format('x');
        this.getTime.t13 = moment().valueOf();
        this.getTime.t14 = moment().year();
        this.getTime.t15 = moment().get('year');
        this.getTime.t16 = moment().month();
        this.getTime.t17 = moment().get('month');
        this.getTime.t18 = moment().date();
        this.getTime.t19 = moment().get('date');
        this.getTime.t20 = moment().day();// (0~6,0:sunday,6:saturday)
        this.getTime.t21 = moment().weekday(); // (0~6,0:sunday,6:staurday)
        this.getTime.t22 = moment().isoWeekday(); // (1~7,1:monday,7:sunday)
        this.getTime.t23 = moment().get('day');
        this.getTime.t24 = moment().get('weekday');
        this.getTime.t25 = moment().get('isoWeekday');
        this.getTime.t26 = moment().hours();
        this.getTime.t27 = moment().get('hours');
        this.getTime.t28 = moment().minutes();
        this.getTime.t29 = moment().get('minutes');
        this.getTime.t30 = moment().seconds();
        this.getTime.t31 = moment().get('seconds');
        // [years,months,date,hours,minutes,seconds,milliseconds]
        this.getTime.t32 = moment().toArray();
        // {years:xxx,months:x,date:xx...}
        this.getTime.t33 = moment().toObject();


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
