import React, { FC, ReactElement } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import MobileMenu from "../mobileMenu/MobileMenu";

interface ContainerProps {
  children: React.ReactNode;
  disableFooter?: boolean;
  navbarContainer?: boolean;
}
const Container: FC<ContainerProps> = ({
  children,
  disableFooter,
  navbarContainer,
}) => {
  return (
    <>
      <Navbar navbarContainer={navbarContainer} />
      {children}
      <MobileMenu />
      {!disableFooter && <Footer />}
    </>
  );
};

export default Container;
