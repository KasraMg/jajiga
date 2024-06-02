import React, { FC, ReactNode } from "react";

interface LayoutProps {
  className?: string;
  children: ReactNode | undefined;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  return (
    <main
      className={`${className} relative bottom-2 z-10 rounded-xl bg-white px-3 sm:!px-5`}
    >
      <div className="Container">{children}</div>
    </main>
  );
};

export default Layout;
