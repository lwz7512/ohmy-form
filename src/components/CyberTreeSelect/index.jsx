import React from 'react';
import { TreeSelect } from 'antd';

const CyberTreeSelect = (props) => {
  const {
    value,
    onChange,
    treeData,
    style,
    onItemChange, // 自定义事件处理函数
    ...restProps
  } = props;

  // 合并样式
  const customStyle = {
    width: '100%', // 默认宽度
    ...style, // 外部传入的样式
  };

  // 如果需要处理额外的逻辑，可以在这里实现
  const handleOnChange = (value, label, extra) => {
    onChange && onChange(value, label, extra); // 调用 onChange
    onItemChange && onItemChange(value, label, extra); // 调用 onItemChange
  };

  return (
    <TreeSelect
      value={value}
      onChange={handleOnChange} // 使用自定义的 onChange 处理函数
      treeData={treeData}
      style={customStyle}
      {...restProps}
    />
  );
};

export default CyberTreeSelect;
