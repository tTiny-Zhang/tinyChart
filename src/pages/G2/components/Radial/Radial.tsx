import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';
import { data } from './mock';

const Radial: React.FC<any> = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const chart = new Chart({
      container: ref.current,
      autoFit: true,
    });
    chart.coordinate({ type: 'radial', endAngle: Math.PI });

    chart
      .interval()
      .data({
        // Data is collected by the end of 2022.11.09
        // type: 'fetch',
        value: data,
        transform: [{ type: 'sortBy', fields: [['star', true]] }],
      })
      .encode('x', 'name')
      .encode('y', 'star')
      .scale('y', { type: 'sqrt' })
      .encode('color', 'name')
      .encode('size', 40)
      .style('radius', 20)
      .axis('x', { title: false })
      .axis('y', false)
      .animate('enter', { type: 'waveIn', duration: 1000 });
    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default Radial;
