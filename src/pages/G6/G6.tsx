import React from 'react';
import { Card } from 'antd';
import style from './style.less';
import DecisionTree from './components/DecisionTree';

const gridStyle: React.CSSProperties = {
  width: '100%%',
  height: '500px',
  textAlign: 'center',
};

const G6: React.FC<any> = () => {
  return (
    <>
      <Card className={style.container} title="G6">
        <Card.Grid style={{ ...gridStyle, width: '100%' }} key="Interval">
          <DecisionTree />
        </Card.Grid>
      </Card>
    </>
  );
};
export default G6;
