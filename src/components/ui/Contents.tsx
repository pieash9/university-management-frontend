"use clients";

import { Content } from "antd/es/layout/layout";
import Header from "./Header";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh", color: "black", padding: ".5rem" }}>
      <Header />

      {children}
    </Content>
  );
};

export default Contents;
