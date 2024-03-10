import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const Pie: React.FC<any> = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const chart = new Chart({
      container: ref.current,
      autoFit: true,
    });

    chart.coordinate({ type: 'theta', innerRadius: 0.6 });

    chart
      .interval()
      .transform({ type: 'stackY' })
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/79fd9317-d2af-4bc4-90fa-9d07357398fd.csv',
      })
      .encode('y', 'value')
      .encode('color', 'name')
      .style('stroke', 'white')
      .style('inset', 1)
      .style('radius', 10)
      .scale('color', {
        palette: 'spectral',
        offset: (t) => t * 0.8 + 0.1,
      })
      .label({ text: 'name', fontSize: 10, fontWeight: 'bold' })
      .label({
        text: (d: OBJ, i: N, data: any) => (i < data.length - 3 ? d.value : ''),
        fontSize: 9,
        dy: 12,
      })
      .animate(false)
      .legend(false);
    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Pie;
