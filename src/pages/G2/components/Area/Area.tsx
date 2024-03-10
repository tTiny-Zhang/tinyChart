import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const Area: React.FC<any> = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const chart = new Chart({
      container: ref.current,
      autoFit: true,
    });

    chart.data({
      type: 'fetch',
      value:
        'https://assets.antv.antgroup.com/g2/unemployment-by-industry.json',
    });

    chart
      .area()
      .transform([
        { type: 'stackY' }, // Try to remove this line.
      ])
      .encode('x', (d: OBJ) => new Date(d.date))
      .encode('y', 'unemployed')
      .encode('color', 'industry')
      .encode('shape', 'smooth');
    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Area;
