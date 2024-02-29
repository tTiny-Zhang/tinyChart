import React, { useEffect } from 'react';
import { Card } from 'antd';
import style from './style.less';
import echarts from '@/components/Echarts';

const Overview: React.FC<any> = () => {
  useEffect(() => {
    // if (!document.getElementById('chartContainer')) {
    //   return
    // }
    var myChart = echarts.init(document.getElementById('chartContainer'));
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      width: 300,
      height: 200,
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, []);
  return (
    <>
      <Card className={style.container} title="Overview">
        <div id="chartContainer" className={style.chartContainer} />
      </Card>
    </>
  );
};
export default Overview;
