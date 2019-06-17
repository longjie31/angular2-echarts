import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
    condition = true;
    color = 'green';
    choiseColor = '';
    chartOption = {
        title: {// 标题设置
            text: '饼图-南丁格尔图', // 标题文本
            left: 'center', // 是否居中
            top: 20, // 与图的距离
            textStyle: { // 标题的样式
                color: '#ccc'
            }
        },
        backgroundColor: '#2c343c', // 背景色
        visualMap: {// vusyalMap：视觉映射组件，用于明暗度的映射
            show: false, // 是否显示visualMap-continuous组件，false不会显示
            min: 80, // 指定visualMapContinuous,组件允许的最小值
            max: 600, // 指定visualMapContinuous,组件允许的最大值
            inRange: {// 定义在选中范围中的视觉元素
                colorLightness: [0, 1]// 颜色的明暗度
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                    {value: 235, name: '视频广告'},
                    {value: 274, name: '联盟广告'},
                    {value: 310, name: '邮件营销'},
                    {value: 335, name: '直接访问'},
                    {value: 400, name: '搜索引擎'}
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        // color: 'red',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chartOption1 = {
        tooltip: {// 提示框组件
            trigger: 'item', // 触发类型，item数据项图形触发
            formatter: '{a} <br/>{b}: {c} ({d}%)'// 提示框浮层内容格式器
            // 模板变量有{a}，{b}，{c}，{d}，{e}分别表示系列名称，数据项名称，数值，百分比
        },
        legend: {// 图例组件，展示不同系列的标记，颜色和名字
            orient: 'horizontal', // 图例列表的布局朝向，horizontal水平，vertical垂直
            x: 'center', // 在图像的哪边
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']// 图例的数据数组，数组项通常为字符串，代表系列的name
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
    };
    nameList = [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋',
        '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹',
        '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦',
        '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马',
        '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费',
        '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬',
        '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元',
        '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪',
        '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈',
        '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮',
        '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
    chartOption2: any;
    birthday = new Date(1988, 3, 15); // April 15, 1988
    toggle = true; // start with true == shortDate

    power = 5;
    factor = 1;
    eventMessage;
    currentClass;
    currentStyle;
    chartOption3: any;
    chartOption4: any;

    constructor() {
    }

    ngOnInit() {
        const data3 = this.genData(25);
        this.chartOption2 = {
            title: {
                text: '同名数量统计',
                subtext: '--破军',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c}({d}%)'
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: data3.legendData,
                selected: data3.selected
            },
            series: [
                {
                    name: '姓名',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: data3.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0,0,0,0.5)'
                        }
                    }
                }
            ]
        };
        this.currentClass = {
            'testNgClass': this.power
        };
        this.currentStyle = {
            'color': 'red'
        };
        this.chartOption3 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: '直达', selected: true},
                        {value: 679, name: '营销广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: 335, name: '直达'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1048, name: '百度'},
                        {value: 251, name: '谷歌'},
                        {value: 147, name: '必应'},
                        {value: 102, name: '其他'}
                    ]
                }
            ]
        };
        this.chartOption4 = {
            title: {
                text: '南丁格尔玫瑰图',
                subtest: '修罗-破军',
                x: 'center'
            },
            tooltip: {
                x: 'center',
                y: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    radius: [20, 110],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                }
            ]
        };
    }

    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }

    makeWord(max: number, min: number): String {
        // Math.ceil对一个属进行上舍入0.1变为1，-5.9变为-5
        // 0到1的随机数乘以max+min
        const nameLen = Math.ceil(Math.random() * max + min);
        const name = [];
        for (let i = 0; i < nameLen; i++) {
            // Math.random产生0到1的随机数乘以nameList的长度-1，然后4舍5入这样的一个数
            // name pushnamelist这一位置上的成员
            name.push(this.nameList[Math.round(Math.random() * this.nameList.length - 1)]);
        }
        // 返回name字符串
        return name.join('');
    }

    genData(count: number): any {
        const legendData = [], seriesData = [], selected = {};
        for (let i = 0; i < count; i++) {
            // Math.random返回0.0到1.0的伪随机数
            const name = Math.random() > 0.65 ? this.makeWord(4, 1) + '.' + this.makeWord(3, 0) : this.makeWord(2, 1);
            legendData.push(name);
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
            if (i < 6) {
                selected['name'] = i;
            }
        }
        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };
    }

    test1() {
        alert('没有被禁用');
    }

    co(value) {
        console.log(value);
    }

    /*testEvent(event: KeyboardEvent) {
      this.eventMessage += (<HTMLInputElement>event.target).value + '|';
    }*/

    testEvent(value) {
        this.eventMessage = value;
    }
}
