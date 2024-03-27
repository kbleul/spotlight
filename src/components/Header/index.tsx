import { useLocation, useNavigate } from "react-router-dom";
import logo_black from "../../assets/images/logo.svg";
import logo_white from "../../assets/images/logo_white.svg";
import NavButtoms from "./NavButtoms";
import { BlackBgRoutes } from "../../utils/data";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <article
      className={
        BlackBgRoutes.includes(currentRoute)
          ? `py-8 px-12 w-full flex items-start justify-between z-10 ${
              currentRoute === "/culture" ? "bg-transparent" : "bg-black"
            } `
          : "py-8 px-12 w-full flex items-start justify-between z-10"
      }
    >
      <button type="button" onClick={() => navigate("/")}>
        <img
          src={BlackBgRoutes.includes(currentRoute) ? logo_white : logo_black}
          alt="logo"
          className="w-40"
        />
      </button>

      <NavButtoms />
    </article>
  );
};

export default Header;
