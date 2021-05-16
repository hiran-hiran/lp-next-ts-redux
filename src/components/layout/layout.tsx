import { ReactNode, VFC } from 'react';
import Header from 'src/components/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: VFC<LayoutProps> = (props) => {
  return (
    <div className="">
      <Header />
      <main className="">{props.children}</main>
    </div>
  );
};

export default Layout;
