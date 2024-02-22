"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Forms";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  // console.log(isLoggedIn());
  const onsubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in successful");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login-image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0" }}>First login your account</h1>
        <div className="">
          <Form submitHandler={onsubmit}>
            <div style={{ margin: "15px 0" }}>
              <FormInput type="text" size="large" name="id" label="User Id" />
            </div>
            <div style={{ margin: "15px 0" }}>
              <FormInput
                type="password"
                size="large"
                name="password"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
