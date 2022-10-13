import { View } from '@tarojs/components';
import Chart from '../echarts';
import './style.scss';
/**
 * 这个case上的小虚线等没出来
 * https://echarts.apache.org/examples/zh/editor.html?c=line-markline
 */
export default function barPolarRealEstate() {
  const markLine: any = [];
  const positions = [
    'start',
    'middle',
    'end',
    'insideStart',
    'insideStartTop',
    'insideStartBottom',
    'insideMiddle',
    'insideMiddleTop',
    'insideMiddleBottom',
    'insideEnd',
    'insideEndTop',
    'insideEndBottom'
  ];
  for (var i = 0; i < positions.length; ++i) {
    markLine.push({
      name: positions[i],
      yAxis: 1.8 - 0.2 * Math.floor(i / 3),
      label: {
        formatter: '{b}',
        position: positions[i]
      }
    });
    if (positions[i] !== 'middle') {
      const name =
        positions[i] === 'insideMiddle'
          ? 'insideMiddle / middle'
          : positions[i];
      markLine.push([
        {
          name: 'start: ' + positions[i],
          coord: [0, 0.3],
          label: {
            formatter: name,
            position: positions[i]
          }
        },
        {
          name: 'end: ' + positions[i],
          coord: [3, 1]
        }
      ]);
    }
  }
  const option = {
    animation: false,
    textStyle: {
      fontSize: 14
    },
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
      boundaryGap: true,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      max: 2
    },
    series: [
      {
        name: 'line',
        type: 'line',
        stack: 'all',
        symbolSize: 6,
        data: [0.3, 1.4, 1.2, 1, 0.6],
        markLine: {
          data: markLine,
          label: {
            distance: [20, 8]
          }
        }
      }
    ],
    grid: {
      top: 30,
      left: 60,
      right: 60,
      bottom: 40
    }
  };

  return (
    <View>
      <View className="header">fixed:这个case上的小虚线等没出来</View>
      <Chart option={option} />
    </View>
  );
}
