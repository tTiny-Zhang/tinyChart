import React from 'react';
import { Card } from 'antd';
import style from './style.less';
import * as Chart from './components';

const gridStyle: React.CSSProperties = {
  width: '50%',
  height: '320px',
  textAlign: 'center',
};

const G2: React.FC<any> = () => {
  return (
    <>
      <Card className={style.container} title="G2">
        <Card.Grid style={{ ...gridStyle, width: '100%' }} key="PlotFill">
          <Chart.PlotFill />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Interval">
          <Chart.Interval />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Line">
          <Chart.Line />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Point">
          <Chart.Point />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Area">
          <Chart.Area />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Cell">
          <Chart.Cell />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Pie">
          <Chart.Pie />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Rose">
          <Chart.Rose />
        </Card.Grid>
        <Card.Grid style={gridStyle} key="Radial">
          <Chart.Radial />
        </Card.Grid>
      </Card>
    </>
  );
};
export default G2;
