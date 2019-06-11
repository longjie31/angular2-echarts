import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-histogram',
    templateUrl: './histogram.component.html',
    styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {
    chartOption: any;
    dataOne: any;
    yOneMax = 500;
    dataShadowOne = [];

    constructor() {
        this.dataOne = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        this.dataOne.forEach(() => {
            this.dataShadowOne.push(this.yOneMax);
        });
        this.chartOption = {
            title: {
                text: '特性示例：渐变色 阴影 点击缩放',
                subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
            },
            xAxis: {
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: this.dataShadowOne,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function () {
                                return {
                                    colorsStops: [
                                        {
                                            offset: 0,
                                            color: '#83bff6'
                                        },
                                        {
                                            offset: 0.5,
                                            color: '#188df0'
                                        },
                                        {
                                            offset: 1,
                                            color: '#188df0'
                                        }
                                    ]
                                };
                            }
                            /* new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )*/
                        },
                        emphasis: {
                            color: function () {
                                return {
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#2378f7'
                                        },
                                        {
                                            offset: 0.7,
                                            color: '#2378f7'
                                        },
                                        {
                                            offset: 1,
                                            color: '#83bff6'
                                        },
                                    ]
                                };
                            }/*new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )*/
                        }
                    },
                    data: this.dataOne
                }
            ]
        };
    }

    ngOnInit() {
    }

}
