import classNames from "classnames";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CategoryType } from "../utils/constants";
import { CategoryContext, SideBarContext } from "../App";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import yt from "../img/yt.jpg";

function SideBarOutside() {
  const navigate = useNavigate();

  const context = useContext(SideBarContext);
  const { setSelectedCategory, selectedCategory, categories } =
    useContext(CategoryContext);

  const categoryList = classNames(
    "flex items-center cursor-pointer hover:bg-slate-50/10 px-4 py-2 rounded-xl "
  );

  const selectCategory = (category: CategoryType) => {
    navigate("/");
    setSelectedCategory(category);
    context.setOpenSideBar(false);
  };

  return (
    <div
      className={[
        "absolute bg-[var(--theme-dark)] top-0 left-0 py-2  border-r duration-100 border-gray-600/10 h-screen overflow-y-auto overflow-x-hidden",
        `${context.openSideBar ? "w-[240px] px-4 " : "w-0 "}`,
      ].join(" ")}
    >
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
      <div className="w-full">
        {Object.values(categories).map((category: any, index) => {
          return (
            <ul
              key={index}
              className="border-b-[1px] py-2 pr-1 border-gray-200/20"
            >
              {category.map((each: any) => (
                <li
                  key={each.name}
                  className={[
                    categoryList,
                    `${
                      each.name === selectedCategory?.name && "bg-slate-50/10"
                    }`,
                  ].join(" ")}
                  onClick={() => selectCategory(each)}
                >
                  <span className="mr-6 text-xl">{<each.icon />}</span>
                  <span>{each.name}</span>
                </li>
              ))}
            </ul>
          );
        })}
      </div>

      <p className="my-2 text-gray-100/30 text-sm font-light">
        &#169; 2023 WaiyanPhyoaung
      </p>
    </div>
  );
}

export default SideBarOutside;
