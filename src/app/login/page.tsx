"use client";
import Layout from "@/src/components/modules/Layout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import { Shape } from "./shape";

const Login = () => {
  return (
    <Container>
      <Breadcrumb route="ورود" />
      <Shape />
    </Container>
  );
};

export default Login;
