import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const Interval: React.FC<any> = () => {
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
      .interval()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
        format: 'csv',
      })
      .transform({ type: 'stackY' })
      .transform({ type: 'sortX', by: 'y', reverse: true })
      .encode('x', 'state')
      .encode('y', 'population')
      .encode('color', 'age')
      .axis('x', {
        labelSpacing: 4,
        labelTransform: 'rotate(90)',
      })
      .axis('y', { labelFormatter: '~s' });

    chart.render();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Interval;
