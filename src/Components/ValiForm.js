import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React from "react";

const ValiForm = () => {
  return (
    <div>
      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(value) => {
          console.log(value);
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            { type: "email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            { min: 6 },
            {
              validator: (_, value) =>
                value && value.includes("@,$,_")
                  ? Promise.resolve()
                  : Promise.reject("Password does not match criteria"),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The two password does not match");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please provide your date of Birth",
            },
          ]}
          hasFeedback
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Choose your birth date"
          />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ type: "url", message: "Please enter a valid URL" }]}
          hasFeedback
        >
          <Input placeholder="Add your website URL" />
        </Form.Item>
        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "To proceed, you need to agree with our terms and conditions"
                    ),
            },
          ]}
        >
          <Checkbox>
            Agree to our <a href="#">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ValiForm;
