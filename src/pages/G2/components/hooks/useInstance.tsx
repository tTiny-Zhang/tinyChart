import { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

const useInstance = () => {
  const ref = useRef(null);
  const instance = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    instance.current = new Chart({
      container: ref.current,
      autoFit: true,
    });
  }, []);

  return {
    chart: instance.current,
    ref: ref,
  };
};

export default useInstance;
