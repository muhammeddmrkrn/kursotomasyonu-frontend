import React from "react";
import { Select, Form } from "antd";

const { Option } = Select;

const dersComboBoxField = (props) => {
  return (
    <div>
      <Form.Item label={props.label}>
        <Select style={{ width: 120 }} value={props.value} onChange={props.onChangeState}>
          <Option value='0'>Türkçe</Option>
          <Option value='1'>Matematik</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default dersComboBoxField;
