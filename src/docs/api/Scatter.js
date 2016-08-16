export default {
  name: 'Scatter',
  examples: [],
  props: [
    {
      name: 'legendType',
      type: '\'line\', \'scatter\', \'square\', \'rect\'',
      defaultVal: '\'scatter\'',
      isOptional: false,
      desc: 'The type of icon in legend.',
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'zAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of z-axis which is corresponding to the data.',
    }, {
      name: 'line',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, line will not be drawn. If true set, line will be drawn which have the props calculated internally. If object set, line will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom line element. If set a function, the function will be called to render Customized line.',
      format: [
        `<Scatter data={data} line />`,
        `<Scatter data={data} line={{stroke: 'red', strokeWidth: 2}} />`,
        `<Scatter data={data} line={<CustomizedLine/>} />`,
      ],
      examples: [{
        name: 'A scatter chart with joint line',
        url: '/examples#JointLineScatterChart',
      }],
    }, {
      name: 'shape',
      type: '\'circle\' | \'cross\' | \'diamond\' | \'square\' | \'star\' | \'triangle\' | \'wye\' | ReactElement | Function',
      defaultVal: '\'circle\'',
      isOptional: false,
      desc: 'If a string set, specified symbol will be used to show scatter item. If ReactElement set, the option can be the custom scatter item element. If set a function, the function will be called to render customized scatter item.',
      format: [
        `<Scatter data={data} shape="cross" />`,
        `<Scatter data={data} shape={<CustomizedShape/>} />`,
        `<Scatter data={data} shape={<renderCustomizedShape/>} />`,
      ],
      examples: [{
        name: 'A scatter chart with joint line',
        url: '/examples#JointLineScatterChart',
      }],
    }, {
      name: 'lineType',
      type: `'joint' , 'fitting'`,
      defaultVal: '\'joint\'',
      isOptional: false,
      desc: 'If \'joint\' set, line will generated by just jointing all the points. If \'fitting\' set, line will be generated by fitting algorithm.',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the scatters.',
      format: [`[{ cx: 12, cy: 12, r: 4, payload: {x: 12, y: 45, z: 9 }}]`],
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of scatters will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function.',
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of click on the symbols in this group',
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousedown on the symbols in this group',
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseup on the symbols in this group',
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousemove on the symbols in this group',
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseover on the symbols in this group',
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseout on the symbols in this group',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of moustenter on the symbols in this group',
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseleave on the symbols in this group',
    },
  ],
};
