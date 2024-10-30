import FormRender from "form-render";
import defaultSchema from "./schema2.json";
// 自定义组件
import CyberTreeSelect from "../../../components/CyberTreeSelect";
import CyberFileUpload from "../../../components/CyberFileUpload";

const Demo = () => {
  // 使用 FormRender 组件时传入 widgets
  const widgets = {
    CyberTreeSelect, // 这样传递自定义组件
    CyberFileUpload,
  };

  return (
    <FormRender
      schema={defaultSchema}
      widgets={widgets}
      // 其他 props...
    />
  );
};

export default Demo;
