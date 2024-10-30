import { SaveOutlined, TableOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import FormRender, { useForm } from "form-render";
import { useEffect, useState } from "react";
import { codeFromDB } from "./data";
import defaultSchema from "./schema.json";
import {
  createDynamicWatchers,
  createExtendedWatchers,
  updateSchemaEnums,
} from "./schemaUtils";

export const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState(defaultSchema);
  const [data, setData] = useState({
    // 初始 data
  });
  const [watch, setWatch] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (form && !loaded) {
      // 初始化下拉列表数据
      const newSchema = updateSchemaEnums(form, schema);
      setSchema(newSchema);

      // 创建并设置动态监听器，用于监听级联下拉列表
      const dynamicWatchers = createDynamicWatchers(form, newSchema, setSchema);

      // 创建扩展监听器, 用于加入动态执行脚本
      const extendedWatchers = createExtendedWatchers(form, codeFromDB);

      // 将动态监听器配置与扩展监听配置合并
      const lastWatchers = {
        ...dynamicWatchers,
        ...extendedWatchers,
      };

      // 设置最终的 watch 状态
      setWatch(lastWatchers);

      setLoaded(true);
    }
  }, [form, loaded]);

  // 点击保存按钮事件
  const handleFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <Card
      title={
        <Space>
          <TableOutlined />
          表单
        </Space>
      }
      extra={
        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={form.submit}
        >
          保存
        </Button>
      }>
      <FormRender
        form={form}
        schema={schema}
        data={data}
        watch={watch}
        onFinish={handleFinish}
        // 其他 FormRender 配置...
      />
    </Card>
  );
};
