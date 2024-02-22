"use client";

import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/Form";
import { Button } from "antd";

const ResetPassPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        margin: "100px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form submitHandler={onSubmit}>
        <h2 style={{ marginBottom: "10px" }}>Reset Password</h2>
        <div style={{ margin: "10px 0" }}>
          <FormInput name="oldPassword" label="Old password" type="password" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <FormInput name="newPassword" label="New password" type="password" />
        </div>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassPage;
