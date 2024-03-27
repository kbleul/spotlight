import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { BlackBgRoutes, ColorTheme, ROUTES } from "../../utils/data";

const NavButtoms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const buttonTheme = BlackBgRoutes.includes(currentRoute)
    ? ColorTheme.dark
    : ColorTheme.light;

  const buttonStylePrimary = `text-${
    currentRoute === "/culture" ? "white" : "[" + buttonTheme.primary + "]"
  } `;
  const buttonStyleSecondary = `text-[${buttonTheme.active}] font-extrabold`;

  const indicatorStylePrimary = `opacity-0 w-2 h-2 rounded-full`;
  console.log(buttonTheme.active);
  const indicatorStyleSecondary = BlackBgRoutes.includes(currentRoute)
    ? `bg-white w-2 h-2 rounded-full`
    : `bg-black w-2 h-2 rounded-full`;

  return (
    <article className="flex gap-7 font-medium text-lg">
      {ROUTES.map((route, index) => (
        <section
          key={index + "--" + route.link}
          className="flex items-center gap-1"
        >
          <div
            className={
              currentRoute === route.link
                ? indicatorStyleSecondary
                : indicatorStylePrimary
            }
          />
          <button
            className={
              currentRoute === route.link
                ? buttonStyleSecondary
                : buttonStylePrimary
            }
            onClick={() => navigate(route.link)}
          >
            {route.name}
          </button>
        </section>
      ))}
      <div className="expandButtonContainer ml-10">
        <button
          className={`expandButton ${
            BlackBgRoutes.includes(currentRoute)
              ? " text-black bg-white "
              : " bg-black text-white "
          }  py-2 font-normal flex gap-1 items-center px-4`}
        >
          <p>Contact</p>

          <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
        </button>
      </div>
    </article>
  );
};

export default NavButtoms;
