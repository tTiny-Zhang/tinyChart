import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const Line: React.FC<any> = () => {
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
      .line()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/cb99c4ab-e0a3-4c76-9586-fe7fa2ff1a8c.csv',
      })
      .encode('x', (d: OBJ) => new Date(d.date))
      .encode('y', 'price')
      .encode('color', 'symbol')
      .encode('size', 'price')
      .legend('size', false)
      .style('shape', 'trail');

    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Line;
