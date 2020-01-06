import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }
  componentDidMount() {
    // G2 初始化图形代码
    this.chart = new G2.Chart({
      // this.containerRef.current 即为引用
      container: this.containerRef.current,
      width: 450,
      height: 300
    });

    // 下文会介绍
    this.refreshChart();
  }
  render() {
    return (
      <div ref={this.containerRef} /> // ref属性可以获取经过 render 后的真实节点的引用。如果 ref 的节点是一个 dom 元素，那么你得到的是文档中真实的 dom 节点，如果 ref 的节点是一个 component，那么你获得将是该 component 渲染后的实例。
    );
  }
}

export default SampleChart;