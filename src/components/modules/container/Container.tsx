import React, { FC } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import MobileMenu from "../mobile-menu/mobile-menu";

interface ContainerProps {
  children: React.ReactNode;
  disableFooter?: boolean;
  navbarContainer?: boolean;
  disableMobileMenu?: boolean;
}
const Container: FC<ContainerProps> = ({
  children,
  disableFooter,
  navbarContainer,
  disableMobileMenu
}) => {
  return (
    <>
      <Navbar navbarContainer={navbarContainer} />
      {children}

      {!disableMobileMenu && <MobileMenu />}
      {!disableFooter && <Footer />}
    </>
  );
};

export default Container;
