import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <header className="bg-violet-200 shadow-md">
      <nav className="flex justify-between items-center px-6 sm:px-12 mxauto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex-wrap ">
            <span className="text-gray-700 ">Resto</span>
            <span className="text-red-700  ">Rover</span>
          </h1>
        </Link>
        <div className="menu gap-3 flex  ">
          <Link
            to={"restaurant-list"}
            className="text-gray-950  font-semibold text-xl hidden sm:inline"
          >
            Restaurants
          </Link>
          <Link to={"/add-restaurant"} className=" font-semibold">
            <button className="bg-rose-600 text-white px-3 py-1 rounded-[4px] hidden sm:inline">
              Add a Restaurant
            </button>
          </Link>
          <div
            onClick={() => setIsToggle(!isToggle)}
            className="inline sm:hidden  text-[1.7rem]"
          >
            <CiMenuFries size={"1.6rem"} cursor={"pointer"} />
          </div>
        </div>
      </nav>
      {isToggle && (
        <div className="flex   justify-center flex-col items-center gap-2 pb-3">
          <Link
            to={"restaurant-list"}
            className="text-gray-950 inline-block sm:hidden  font-semibold text-xl "
          >
            Restaurants
          </Link>
          <Link to={"/add-restaurant"} className=" font-semibold">
            <button className="inline-block sm:hidden  text-white px-3 py-1 rounded-[4px] bg-rose-600 ">
              Add a Restaurant
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
