import Head from 'next/head'
import * as  echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'

const ChartA = (props) => {
    var upColor = '#00da3c';
    var downColor = '#ec0000';
    const rawD = [["2004-01-02",10452.74,10409.85,10367.41,10554.96,168890000],["2004-01-05",10411.85,10544.07,10411.85,10575.92,221290000],["2004-01-06",10543.85,10538.66,10454.37,10584.07,191460000],["2004-01-07",10535.46,10529.03,10432,10587.55,225490000],["2004-01-08",10530.07,10592.44,10480.59,10651.99,237770000],["2004-01-09",10589.25,10458.89,10420.52,10603.48,223250000],["2004-01-12",10461.55,10485.18,10389.85,10543.03,197960000],["2004-01-13",10485.18,10427.18,10341.19,10539.25,197310000],["2004-01-14",10428.67,10538.37,10426.89,10573.85,186280000],["2004-01-15",10534.52,10553.85,10454.52,10639.03,260090000],["2004-01-16",10556.37,10600.51,10503.7,10666.88,254170000],["2004-01-20",10601.4,10528.66,10447.92,10676.96,224300000],["2004-01-21",10522.77,10623.62,10453.11,10665.7,214920000],["2004-01-22",10624.22,10623.18,10545.03,10717.4,219720000],["2004-01-23",10625.25,10568.29,10490.14,10691.77,234260000],["2004-01-26",10568,10702.51,10510.44,10725.18,186170000],["2004-01-27",10701.1,10609.92,10579.33,10748.81,206560000],["2004-01-28",10610.07,10468.37,10412.44,10703.25,247660000],["2004-01-29",10467.41,10510.29,10369.92,10611.56,273970000],["2004-01-30",10510.22,10488.07,10385.56,10551.03,208990000],["2004-02-02",10487.78,10499.18,10395.55,10614.44,224800000],["2004-02-03",10499.48,10505.18,10414.15,10571.48,183810000],["2004-02-04",10503.11,10470.74,10394.81,10567.85,227760000],["2004-02-05",10469.33,10495.55,10399.92,10566.37,187810000],["2004-02-06",10494.89,10593.03,10433.7,10634.81,182880000],["2004-02-09",10592,10579.03,10433.7,10634.81,160720000],["2004-02-10",10578.74,10613.85,10511.18,10667.03,160590000],["2004-02-11",10605.48,10737.7,10561.55,10779.4,277850000],["2004-02-12",10735.18,10694.07,10636.44,10775.03,197560000],["2004-02-13",10696.22,10627.85,10578.66,10755.47,208340000],["2004-02-17",10628.88,10714.88,10628.88,10762.07,169730000],["2004-02-18",10706.68,10671.99,10623.62,10764.36,164370000],["2004-02-19",10674.59,10664.73,10626.44,10794.95,219890000],["2004-02-20",10666.29,10619.03,10559.11,10722.77,220560000],["2004-02-23",10619.55,10609.62,10508.89,10711.84,229950000],["2004-02-24",10609.55,10566.37,10479.33,10681.4,225670000],["2004-02-25",10566.59,10601.62,10509.4,10660.73,192420000],["2004-02-26",10598.14,10580.14,10493.7,10652.96,223230000],["2004-02-27",10581.55,10583.92,10519.03,10689.55,200050000],["2004-03-01",10582.25,10678.14,10568.74,10720.14,185030000],["2004-03-02",10678.36,10591.48,10539.4,10713.92,215580000],["2004-03-03",10588.59,10593.11,10506.66,10651.03,188800000],["2004-03-04",10593.48,10588,10522.59,10645.33,161050000],["2004-03-05",10582.59,10595.55,10497.11,10681.4,223550000],["2004-03-08",10595.37,10529.48,10505.85,10677.85,199300000],["2004-03-09",10529.52,10456.96,10391.48,10567.03,246270000],["2004-03-10",10457.59,10296.89,10259.34,10523.11,259000000],["2004-03-11",10288.85,10128.38,10102.75,10356.22,292050000],["2004-03-12",10130.67,10240.08,10097.04,10281.63,223350000],["2004-03-15",10238.45,10102.89,10066.08,10252.68,219150000],["2004-03-16",10103.41,10184.67,10085.34,10253.26,194560000],["2004-03-17",10184.3,10300.3,10184.3,10356.59,181210000],["2004-03-18",10298.96,10295.78,10187.78,10355.04,218820000],["2004-03-19",10295.85,10186.6,10163.71,10355.41,261590000],["2004-03-22",10185.93,10064.75,9985.19,10185.93,248930000],["2004-03-23",10066.67,10063.64,10020.75,10177.04,215260000],["2004-03-24",10065.41,10048.23,9975.86,10140.23,224310000],["2004-03-25",10049.56,10218.82,10049.56,10246.15,216420000],["2004-03-26",10218.37,10212.97,10145.63,10306.22,198830000],["2004-03-29",10212.91,10329.63,10212.91,10389.93,197150000],["2004-03-30",10327.63,10381.7,10264.15,10411.41,189060000],["2004-03-31",10380.89,10357.7,10287.11,10428.59,207400000],["2004-04-01",10357.52,10373.33,10299.48,10449.33,218660000],["2004-04-02",10375.33,10470.59,10375.33,10548.74,243070000],["2004-04-05",10470.59,10558.37,10423.33,10582.22,182130000]]
    
    
    
    const splitData = (rawData) => {
        var categoryData = [];
        var values = [];
        var volumes = [];
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i]);
            volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
        }
    
        return {
            categoryData: categoryData,
            values: values,
            volumes: volumes
        };
    }
    //console.log(props.GETdata)
  
    const calculateMA = (dayCount, data) => {
        var result = [];
        for (var i = 0, len = data.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += data.values[i - j][1];
            }
            result.push(+(sum / dayCount).toFixed(3));
        }
        return result;
    }
 
    
    const refContainer = useRef(null)
    useEffect(()=>{
      const myChart = echarts.init(refContainer.current)
      //console.log(myChart)
      
      const data = splitData(props.GETdata)
      //option is side-effectful and DEPENDS on "data"
      //bad practice
      const option = {
        animation: false,
        legend: {
            bottom: 10,
            left: 'center',
            data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                var obj = {top: 10};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            }
            // extraCssText: 'width: 170px'
        },
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: '#777'
            }
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
                colorAlpha: 0.1
            }
        },
        visualMap: {
            show: false,
            seriesIndex: 5,
            dimension: 2,
            pieces: [{
                value: 1,
                color: downColor
            }, {
                value: -1,
                color: upColor
            }]
        },
        grid: [
            {
                left: '10%',
                right: '8%',
                height: '50%'
            },
            {
                left: '10%',
                right: '8%',
                top: '63%',
                height: '16%'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: data.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisPointer: {
                    z: 100
                }
            },
            {
                type: 'category',
                gridIndex: 1,
                data: data.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {onZero: false},
                axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            }
        ],
        yAxis: [
            {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {show: false},
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 1],
                start: 98,
                end: 100
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                top: '85%',
                start: 98,
                end: 100
            }
        ],
        series: [
            {
                name: 'Dow-Jones index',
                type: 'candlestick',
                data: data.values,
                itemStyle: {
                    color: upColor,
                    color0: downColor,
                    borderColor: null,
                    borderColor0: null
                },
                markPoint: {
                label: {
                    normal: {
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) : '';
                        }
                    }
                },
                data: [
                    {
                        name: 'XX标点',
                        coord: ['2016/3/31', 2300],
                        value: 2300,
                        itemStyle: {
                            color: 'rgb(41,60,85)'
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
                tooltip: {
                    formatter: function (param) {
                        param = param[0];
                        return [
                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                            'Open: ' + param.data[0] + '<br/>',
                            'Close: ' + param.data[1] + '<br/>',
                            'Lowest: ' + param.data[2] + '<br/>',
                            'Highest: ' + param.data[3] + '<br/>'
                        ].join('');
                    }
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5, data),
                smooth: true,
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10, data),
                smooth: true,
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20, data),
                smooth: true,
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30, data),
                smooth: true,
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'Volume',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.volumes
            }
        ]
        }
    
    myChart.setOption(option, true);
        

        },[])

    
    return(
        <div>
            <div ref={refContainer} style={{
            height: "600px",
            width: "1500px",
            background: "gray"
            }}>hey</div>
            Hello
        </div>
)


}

export async function getStaticProps(context) {
    const res = await fetch(`https://raw.githubusercontent.com/userJY/JsonTestServer/main/pricevolume.json`,{mode: "no-cors"})
    const GETdata = await res.json()
    
  if (!GETdata) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { GETdata }, // will be passed to the page component as props
    }
  }

export default ChartA