import { UserOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Input,
  Progress,
  Select,
  Spin,
  TimePicker,
} from "antd";
import React, { useState } from "react";

const AntDesign = () => {
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Input.Search placeholder="Search.." />
      <Input
        type="text"
        placeholder="Name.."
        prefix={<UserOutlined />}
        allowClear
      />

      <Select
        mode="multiple"
        maxTagCount={2}
        placeholder="Select fruit"
        style={{ width: "20%" }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>

      {/* DATE PICKER // TIME PICKER // RANGE PICKER */}

      <DatePicker />
      <DatePicker.RangePicker />
      <TimePicker />

      <Spin spinning={loading} />

      <Button
        type="primary"
        onClick={() => {
          setLoading((prevValue) => !prevValue);
        }}
      >
        Click
      </Button>

      {/* PROGRESS */}
      <Progress percent={33} />
      <Progress percent={33} type="circle" />
      <Progress percent={33} type="line" strokeColor="red" status="active" />
      <Progress percent={33} type="line" strokeColor="red" strokeWidth={50} />
      <Progress percent={33} type="circle" status="success" />
      <Progress percent={33} type="circle" status="exception" />
      <Progress percent={33} type="line" steps={3} />

      
    </div>
  );
};

export default AntDesign;
