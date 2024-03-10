import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const Point: React.FC<any> = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const chart = new Chart({
      container: ref.current,
      autoFit: true,
    });

    chart
      .point()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/56b6b137-e04e-4757-8af5-d75bafaef886.csv',
      })
      .encode('x', 'date')
      .encode('y', 'value')
      .encode('color', 'value')
      .encode('shape', 'point')
      .scale('color', {
        palette: 'rdBu',
        offset: (t) => 1 - t,
      })
      .style('stroke', '#000')
      .style('strokeOpacity', 0.2)
      .tooltip([
        { channel: 'x', name: 'year', valueFormatter: (d) => d.getFullYear() },
        { channel: 'y' },
      ]);

    chart.lineY().data([0]).style('stroke', '#000').style('strokeOpacity', 0.2);

    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Point;
