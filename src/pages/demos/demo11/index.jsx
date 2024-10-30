import React from 'react';
import FormRender, { useForm } from 'form-render';
import defaultSchema from "./schema.json";

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: '正则表达式',
      type: 'string',
      required: true,
      rules: [
        { pattern: '^[\u4E00-\u9FA5]+$', message: '请输入中文！' }
      ]
    },
    input2: {
      title: '自定义校验',
      type: 'string',
      rules: [
        { 
          validator: (_, value) => {
            const pattern = '^[\u4E00-\u9FA5]+$';
            const result = new RegExp(pattern).test(value);
            return result;
            // 或者是返回一个对象，用于动态设置 message 内容
            // return {
            //   status: result,
            //   message: '请输入中文！',
            // }
          }, 
          message: '请输入中文！' 
        }
      ]
    }
  }
};

export const Demo = () => {
  const form = useForm();
  
  return (
     <FormRender 
      schema={schema}
      form={form} 
      footer={true}
    />
  )
};