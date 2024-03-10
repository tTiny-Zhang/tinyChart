import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const Cell: React.FC<any> = () => {
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
      .cell()
      .data({
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
      })
      .transform({ type: 'group', color: 'max' })
      .encode('x', (d: OBJ) => new Date(d.date).getUTCDate())
      .encode('y', (d: OBJ) => new Date(d.date).getUTCMonth())
      .encode('color', 'temp_max')
      .style('inset', 0.5)
      .scale('color', { palette: 'gnBu' })
      .animate(false);

    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Cell;
