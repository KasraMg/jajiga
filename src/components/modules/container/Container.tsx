import React, { FC } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import MobileMenu from "../mobile-menu/mobile-menu";

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
