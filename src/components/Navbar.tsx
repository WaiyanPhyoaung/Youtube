import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import classNames from "classnames";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import yt from "../img/yt.jpg";
import { Link, useNavigate } from "react-router-dom";
import { SideBarContext } from "../App";
import SideBarOutside from "./SideBarOutside";

const input = classNames(
  "px-4 py-1 outline-none bg-transparent w-full",
  "border-[1px] border-gray-400/20 rounded-full rounded-r-none",
  "focus:border-gray-400/80"
);
const searchButton = classNames(
  "bg-gray-200/20 px-2 md:px-6 ",
  "border-[1px] border-l-1 border-gray-400/20 rounded-full rounded-l-none"
);

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const context = useContext(SideBarContext);

  const deleteIcon = classNames(
    "block text-2xl rounded-full absolute right-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer",
    "hover:bg-gray-200/20 ",
    { hidden: !searchTerm }
  );

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const clearInput = () => {
    setSearchTerm("");
  };

  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  return (
    <div className="sticky bg-[var(--theme-dark)] top-0 left-0 flex justify-between items-center shadow-sm shadow-white/10 px-4 py-2">
      <div className="shrink-0 flex justify-start items-center">
        <div
          onClick={() => context.setOpenSideBar((prev: boolean) => !prev)}
          className="text-2xl cursor-pointer p-2 rounded-full hover:bg-white/10 mr-1 md:mr-4"
        >
          <BiMenu />
        </div>

        <Link to="/">
          <div>
            <img src={yt} alt="logo" className="w-24" />
          </div>
        </Link>
      </div>
      <div className="lg:pr-40 w-full flex justify-end lg:justify-center text-center">
        <form
          className="flex mx-left sm:w-[70%] md:w-3/5 max-w-[500px] ml-4"
          onSubmit={searchSubmit}
        >
          <div className=" relative w-full ">
            <input
              type="text"
              className={input}
              value={searchTerm}
              onChange={changeInput}
            />
            <span className={deleteIcon} onClick={clearInput}>
              <RxCross2 />
            </span>
          </div>
          <button className={searchButton}>
            <AiOutlineSearch className="text-2xl" />
          </button>
        </form>
      </div>
      <div className="hidden md:block ml-4">
        <div className="w-10 h-10 bg-white/80 rounded-full"></div>
      </div>
    </div>
  );
}
export default Navbar;
