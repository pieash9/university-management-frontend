import Login from "@/components/ui/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Login",
  description: "Generated by create next app",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
