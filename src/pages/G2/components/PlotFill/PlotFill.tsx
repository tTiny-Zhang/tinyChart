import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const PlotFill: React.FC<any> = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const chart = new Chart({
      container: ref.current,
      autoFit: true,
    });

    chart.style('plotFill', '#000');

    chart
      .point()
      .data({
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/polio.json',
      })
      .encode('x', 'x')
      .encode('y', 'y')
      .encode('color', 'Polio Cases')
      .encode('shape', 'point')
      .transform({
        type: 'stackEnter',
        groupBy: ['x', 'y'],
        orderBy: 'color',
        duration: 2000,
      })
      .legend('color', false)
      .scale('y', { range: [0, 1] })
      .scale('color', {
        type: 'sqrt',
        range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
        // interpolate: interpolateHcl,
      })
      .attr('padding', 0)
      .axis(false);

    chart
      .text()
      .style('text', 'tTiny Chart')
      .style('x', '50%')
      .style('y', '50%')
      .style('textAlign', 'center')
      .style('fontSize', 28)
      .style('fill', '#666');

    chart.render();
    return () => chart.destroy();
  }, []);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
export default PlotFill;
