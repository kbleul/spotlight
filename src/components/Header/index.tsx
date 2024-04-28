import { useLocation, useNavigate } from "react-router-dom";
import logo_black from "../../assets/images/logo.svg";
import logo_white from "../../assets/images/logo_white.svg";
import NavButtoms from "./NavButtoms";
import { BlackBgRoutes, ColorTheme } from "../../utils/data";
import { PiCirclesFourLight } from "react-icons/pi";
import { useState } from "react";
import SideNav from "./SideNav";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const buttonTheme = BlackBgRoutes.includes(currentRoute)
    ? ColorTheme.dark
    : ColorTheme.light;

  const mwnuButtonStyle = `text-${
    BlackBgRoutes.includes(currentRoute) ? "white" : "black"
  } `;
  const iconStyle = `border-${
    BlackBgRoutes.includes(currentRoute) ? "white" : "black"
  } `;

  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  return (
    <article
      className={
        BlackBgRoutes.includes(currentRoute)
          ? ` py-8 px-4 md:px-12  w-full flex items-center md:items-start justify-between z-10 ${
              currentRoute === "/culture" || currentRoute === "/"
                ? "bg-transparent"
                : "bg-black"
            } `
          : "  py-8 px-4 md:px-12  w-full flex items-center md:items-start justify-between z-10"
      }
    >
      <button
        type="button"
        onClick={() => {
          setIsSidenavOpen(false);
          navigate("/");
        }}
      >
        <img
          src={BlackBgRoutes.includes(currentRoute) ? logo_white : logo_black}
          alt="logo"
          className="w-28 md:w-40"
        />
      </button>

      <NavButtoms />

      <button
        type="button"
        className={
          mwnuButtonStyle +
          "  flex justify-center items-center gap-3 text-lg font-semibold lg:hidden"
        }
        onClick={() => setIsSidenavOpen((prev) => !prev)}
      >
        <p>Menu</p>
        <div className={"p-1 rounded-full border-2 " + iconStyle}>
          <PiCirclesFourLight size={20} />
        </div>
      </button>

      {isSidenavOpen && <SideNav setIsSidenavOpen={setIsSidenavOpen} />}
    </article>
  );
};

export default Header;
