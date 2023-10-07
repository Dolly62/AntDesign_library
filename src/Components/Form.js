import React, { useState } from "react";
import { Alert, Button, Form, Input, message } from "antd";

const FormInput = () => {
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = (e) => {
    console.log(e);
    setTimeout(() => {
      //   message.success("Login successfully");
      //   message.error("Login successfully");
      //   message.warning("Login successfully");
      setShowAlert(true);
    }, 2000);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          type="success"
          message="Success"
          description="Login successfully"
          closable
        />
      )}
      <Form onFinish={submitHandler}>
        <Form.Item label="User Name" name="userName">
          <Input type="text" placeholder="User name" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormInput;
