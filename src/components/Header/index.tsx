import logo_black from "../../assets/images/logo.svg";
import logo_white from "../../assets/images/logo_white.svg";
import NavButtoms from "./NavButtoms";

const Header = () => {
  return (
    <article className="py-8  w-full flex items-start justify-between px-12">
      <img src={logo_black} alt="logo" className="w-40" />

      <NavButtoms />
    </article>
  );
};

export default Header;
