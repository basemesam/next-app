import LayoutStyles from '../styles/Home.module.css'
import Nav from "./Nav";

export const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.layout}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
