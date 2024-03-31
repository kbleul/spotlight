import { motion } from "framer-motion";

import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/data";
import { IoIosArrowRoundForward } from "react-icons/io";

const SideNav = ({
  setIsSidenavOpen,
}: {
  setIsSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <article className="bg-black h-screen w-full absolute top-20 left-0 z-50">
      <article className="mt-[5vh] gap-7 font-medium text-lg flex flex-col text-white ">
        {ROUTES.map((route, index) => (
          <motion.circle
            cx={500}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 * index, delay: 0.1 }}
            key={index + "--" + route.link}
            className="flex items-center gap-1 border-b border-gray-400"
          >
            <section
              key={index + "--" + route.link}
              className="w-full text-2xl py-3 pl-14 text-left hover:font-bold flex gap-3 items-center "
            >
              <div
                className={
                  currentRoute === route.link
                    ? "bg-white w-2 h-2 rounded-full"
                    : "bg-black w-2 h-2 rounded-full"
                }
              />
              <button
                className={currentRoute === route.link ? "font-extrabold" : ""}
                onClick={() => {
                  setIsSidenavOpen(false);
                  navigate(route.link);
                }}
              >
                {route.name}
              </button>
            </section>
          </motion.circle>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 * 6, delay: 0.5 }}
          className="flex justify-center items-center gap-1"
        >
          <button
            className={`expandButton mt-8 bg-white text-black  py-2 font-normal flex gap-1 items-center px-4`}
          >
            <p>Contact</p>

            <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
          </button>
        </motion.div>
      </article>
    </article>
  );
};

export default SideNav;
