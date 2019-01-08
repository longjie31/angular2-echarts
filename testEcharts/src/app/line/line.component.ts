import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  chartOption: any;
  chartOptionOne: any;

  constructor() {
  }

  ngOnInit() {
    this.chartOption = {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    this.chartOptionOne = {
      title: {
        text: '一天用电量发布'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '00:00', '01:15', '02:30', '03:45',
          '05:00', '06:15', '07:30', '08:45',
          '10:00', '11:15', '12:30', '13:45',
          '15:00', '16:15', '17:30', '18:45',
          '20:00', '21:15', '22:30', '23:45'
        ]
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W'
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          {
            lte: 6,
            color: 'green'
          }, {
            gt: 6,
            let: 8,
            color: 'red'
          }, {
            gt: 8,
            let: 14,
            color: 'green'
          }, {
            gt: 14,
            let: 17,
            color: 'red'
          }, {
            gt: 17,
            color: 'green'
          }
        ]
      },
      series: [
        {
          name: '用电量',
          type: 'line',
          smooth: true,
          data: [
            300, 280, 250, 260, 270,
            300, 550, 500, 400, 390,
            380, 390, 400, 500, 600,
            750, 800, 700, 600, 400
          ],
          markArea: {
            data: [
              [
                {
                  name: '早高峰',
                  xAxis: '07:30'
                },
                {
                  xAxis: '10:00'
                }
              ], [
                {
                  name: '晚高峰',
                  xAxis: '17:30'
                }, {
                  xAxis: '21:15'
                }
              ]
            ]
          }

        }
      ]
    };
  }
}
