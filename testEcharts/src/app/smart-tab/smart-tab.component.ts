import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

// 这里的“ Local ”一词表示数据在浏览器中本地处理，而不是在服务器端
@Component({
  selector: 'app-smart-tab',
  templateUrl: './smart-tab.component.html',
  styleUrls: ['./smart-tab.component.scss']
})
export class SmartTabComponent implements OnInit {
  localSource: LocalDataSource;
  data = [
    {
      id: 1,
      name: '李白',
      username: '太白',
      email: '唐'
    },
    {
      id: 2,
      name: '杜甫',
      username: '子美',
      email: '唐'
    },
    {
      id: 3,
      name: '辛弃疾',
      username: '稼轩',
      email: '宋'
    }
  ];
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: '字',
        filter: false
      },
      email: {
        title: '朝代',
        filter: false
      }
    }
  };

  // 复选，下拉框的配置和数据
  dataOne = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Yes',
    },
  ];
  settingsOne = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: '全名',
        filter: {
          type: 'list',
          config: {
            selectText: '请选择下拉内容',
            list: [
              {value: 'Glenna Reichert', title: 'Glenna Reichert'},
              {value: 'Kurtis Weissnat', title: 'Kurtis Weissnat'},
              {value: 'Chelsey Dietrich', title: 'Chelsey Dietrich'},
            ],
          },
        },
      },
      email: {
        title: '邮箱',
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: this.dataOne,
              searchFields: 'email',
              titleField: 'email',
            },
          },
        },
      },
      passed: {
        title: '通过',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: '重置',
          },
        },
      },
    },
  };

  constructor() {
    this.localSource = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

  onSearch(query: string = '') {// 这里是指参数类型为string，如果不传参,默认值为''
    this.localSource.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
    // 第二个参数是执行and还是or搜索，意思是所有列都应包含搜索查询或至少一个查询，
    // 默认为and，这里设置为false将更改为or
  }

}
