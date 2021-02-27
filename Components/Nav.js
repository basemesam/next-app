import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export const Nav = () => {
  return (
    <div className={navStyles.navbar}>
      <div className={navStyles.logo}>
        <h1>Newsbuzz</h1>
      </div>
      <div className={navStyles.search}>
        <input type="text" placeholder="Search Team Or League" />
      </div>
      <div className={navStyles.links}>
        <ul>
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            <Link href="/">Register</Link>
          </li>
        </ul>
        <button className={navStyles.mobileButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
