import G6 from '@antv/g6';
import { colors } from './config';

export const registerFn = () => {
  /**
   * 自定义节点
   */
  G6.registerNode(
    'flow-rect',
    {
      shapeType: 'flow-rect',
      draw(cfg: OBJ, group: any) {
        const {
          name = '',
          variableName,
          variableValue,
          variableUp,
          label,
          collapsed,
          currency,
          status,
        } = cfg;

        const grey = '#CED4D9';
        const rectConfig = {
          width: 202,
          height: 60,
          lineWidth: 1,
          fontSize: 12,
          fill: '#fff',
          radius: 4,
          stroke: grey,
          opacity: 1,
        };

        const nodeOrigin = {
          x: -rectConfig.width / 2,
          y: -rectConfig.height / 2,
        };

        const textConfig = {
          textAlign: 'left',
          textBaseline: 'bottom',
        };

        const rect = group.addShape('rect', {
          attrs: {
            x: nodeOrigin.x,
            y: nodeOrigin.y,
            ...rectConfig,
          },
        });

        const rectBBox = rect.getBBox();

        // label title
        group.addShape('text', {
          attrs: {
            ...textConfig,
            x: 12 + nodeOrigin.x,
            y: 20 + nodeOrigin.y,
            text: name.length > 28 ? name.substr(0, 28) + '...' : name,
            fontSize: 12,
            opacity: 0.85,
            fill: '#000',
            cursor: 'pointer',
          },
          // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
          name: 'name-shape',
        });

        // price
        const price = group.addShape('text', {
          attrs: {
            ...textConfig,
            x: 12 + nodeOrigin.x,
            y: rectBBox.maxY - 12,
            text: label,
            fontSize: 16,
            fill: '#000',
            opacity: 0.85,
          },
        });

        // label currency
        group.addShape('text', {
          attrs: {
            ...textConfig,
            x: price.getBBox().maxX + 5,
            y: rectBBox.maxY - 12,
            text: currency,
            fontSize: 12,
            fill: '#000',
            opacity: 0.75,
          },
        });

        // percentage
        const percentText = group.addShape('text', {
          attrs: {
            ...textConfig,
            x: rectBBox.maxX - 8,
            y: rectBBox.maxY - 12,
            text: `${((variableValue || 0) * 100).toFixed(2)}%`,
            fontSize: 12,
            textAlign: 'right',
            fill: colors[status],
          },
        });

        // percentage triangle
        const symbol = variableUp ? 'triangle' : 'triangle-down';
        const triangle = group.addShape('marker', {
          attrs: {
            ...textConfig,
            x: percentText.getBBox().minX - 10,
            y: rectBBox.maxY - 12 - 6,
            symbol,
            r: 6,
            fill: colors[status],
          },
        });

        // variable name
        group.addShape('text', {
          attrs: {
            ...textConfig,
            x: triangle.getBBox().minX - 4,
            y: rectBBox.maxY - 12,
            text: variableName,
            fontSize: 12,
            textAlign: 'right',
            fill: '#000',
            opacity: 0.45,
          },
        });

        // collapse rect
        if (cfg.children && cfg.children.length) {
          group.addShape('rect', {
            attrs: {
              x: rectConfig.width / 2 - 8,
              y: -8,
              width: 16,
              height: 16,
              stroke: 'rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              fill: '#fff',
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: 'collapse-back',
            modelId: cfg.id,
          });

          // collpase text
          group.addShape('text', {
            attrs: {
              x: rectConfig.width / 2,
              y: -1,
              textAlign: 'center',
              textBaseline: 'middle',
              text: collapsed ? '+' : '-',
              fontSize: 16,
              cursor: 'pointer',
              fill: 'rgba(0, 0, 0, 0.25)',
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: 'collapse-text',
            modelId: cfg.id,
          });
        }
        const _this: any = this;
        _this.drawLinkPoints(cfg, group);
        return rect;
      },
      update(cfg: OBJ, item) {
        const { level, status, name } = cfg;
        const group = item.getContainer();
        let mask = group.find((ele) => ele.get('name') === 'mask-shape');
        let maskLabel = group.find(
          (ele) => ele.get('name') === 'mask-label-shape',
        );
        if (level === 0) {
          group.get('children').forEach((child: OBJ) => {
            if (child.get('name')?.includes('collapse')) return;
            child.hide();
          });
          if (!mask) {
            mask = group.addShape('rect', {
              attrs: {
                x: -101,
                y: -30,
                width: 202,
                height: 60,
                opacity: 0,
                fill: colors[status],
              },
              // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
              name: 'mask-shape',
            });
            maskLabel = group.addShape('text', {
              attrs: {
                fill: '#fff',
                fontSize: 20,
                x: 0,
                y: 10,
                text: name.length > 28 ? name.substr(0, 16) + '...' : name,
                textAlign: 'center',
                opacity: 0,
              },
              // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
              name: 'mask-label-shape',
            });
            const collapseRect = group.find(
              (ele) => ele.get('name') === 'collapse-back',
            );
            const collapseText = group.find(
              (ele) => ele.get('name') === 'collapse-text',
            );
            collapseRect?.toFront();
            collapseText?.toFront();
          } else {
            mask.show();
            maskLabel.show();
          }
          return mask;
        } else {
          group.get('children').forEach((child: OBJ) => {
            if (child.get('name')?.includes('collapse')) return;
            child.show();
          });
        }
        const _this: any = this;
        _this.updateLinkPoints(cfg, group);
      },
      setState(name, value, item: any) {
        if (name === 'collapse') {
          const group = item.getContainer();
          const collapseText = group.find(
            (e: OBJ) => e.get('name') === 'collapse-text',
          );
          if (collapseText) {
            if (!value) {
              collapseText.attr({
                text: '-',
              });
            } else {
              collapseText.attr({
                text: '+',
              });
            }
          }
        }
      },
      getAnchorPoints() {
        return [
          [0, 0.5],
          [1, 0.5],
        ];
      },
    },
    'rect',
  );

  G6.registerEdge(
    'flow-cubic',
    {
      getControlPoints(cfg: OBJ) {
        let controlPoints = cfg.controlPoints; // 指定controlPoints
        if (!controlPoints || !controlPoints.length) {
          const { startPoint, endPoint, sourceNode, targetNode } = cfg;
          const {
            x: startX,
            y: startY,
            coefficientX,
            coefficientY,
          } = sourceNode ? sourceNode.getModel() : startPoint;
          const { x: endX, y: endY } = targetNode
            ? targetNode.getModel()
            : endPoint;
          let curveStart = (endX - startX) * coefficientX;
          let curveEnd = (endY - startY) * coefficientY;
          curveStart = curveStart > 40 ? 40 : curveStart;
          curveEnd = curveEnd < -30 ? curveEnd : -30;
          controlPoints = [
            { x: startPoint.x + curveStart, y: startPoint.y },
            { x: endPoint.x + curveEnd, y: endPoint.y },
          ];
        }
        return controlPoints;
      },
      getPath(points: OBJ) {
        const path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push([
          'C',
          points[1].x,
          points[1].y,
          points[2].x,
          points[2].y,
          points[3].x,
          points[3].y,
        ]);
        return path;
      },
    },
    'single-line',
  );
};
