import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
  constructor(props) {
    super(props); // 子类必须在constructor方法中调用super方法，因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法；如果子类没有定义constructor方法，这个方法会被默认添加，不管有没有显式定义，任何一个子类都有constructor方法
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
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.refreshChart();
    }
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  refreshChart = () => {
    // 接收 data 属性作为数据源
    this.chart.source(this.props.data);
    // 此处为硬编码，配置源自 G2 官方示例： https://github.com/antvis/g2
    // 实际开发中需要封装，推荐直接使用 BizCharts。
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  };
  render() {
    return (
      <div ref={this.containerRef} /> // ref属性可以获取经过 render 后的真实节点的引用。如果 ref 的节点是一个 dom 元素，那么你得到的是文档中真实的 dom 节点，如果 ref 的节点是一个 component，那么你获得将是该 component 渲染后的实例。
    );
  }
}

export default SampleChart;