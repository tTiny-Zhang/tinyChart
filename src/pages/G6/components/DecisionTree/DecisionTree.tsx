import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { defaultConfig } from './config';
import G6 from '@antv/g6';
import { useDebounce, useDebounceFn, useSize } from 'ahooks';
import { registerFn } from './register';
import { mockData } from './mockData';

const DecisionTree: React.FC<any> = () => {
  const graphInstance = useRef<any>();
  const ref = useRef(null);
  const { width = 0, height = 0 } = useSize(ref) || {};

  useEffect(() => {
    registerFn();

    if (!ref.current) {
      return;
    }
    if (!graphInstance.current) {
      graphInstance.current = new G6.TreeGraph({
        container: ref.current,
        width: 0,
        height: 0,
        ...defaultConfig,
      });
      const graph = graphInstance.current;

      graph.data(mockData);
      graph.render();

      const handleCollapse = (e: any) => {
        const target = e.target;
        const id = target.get('modelId');
        const item = graph.findById(id);
        const nodeModel = item.getModel();
        nodeModel.collapsed = !nodeModel.collapsed;
        graph.layout();
        graph.setItemState(item, 'collapse', nodeModel.collapsed);
      };
      graph.on('collapse-text:click', (e: any) => {
        handleCollapse(e);
      });
      graph.on('collapse-back:click', (e: any) => {
        handleCollapse(e);
      });
    }
  }, [ref.current]);

  const { run } = useDebounceFn(
    () => {
      graphInstance.current.changeSize(width, height);
    },
    {
      wait: 300,
    },
  );

  useLayoutEffect(() => {
    if (graphInstance.current) {
      run();
    }
  }, [width, height]);

  return (
    <div id="container" ref={ref} style={{ height: '100%', width: '100%' }} />
  );
};
export default DecisionTree;
