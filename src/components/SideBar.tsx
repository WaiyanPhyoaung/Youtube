import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { CategoriesType, CategoryType } from "../utils/constants";

type SideBarPros = {
  selectedCategory?: CategoryType;
  changeSelectedCategory: (arg: CategoryType) => void;
  categories: CategoriesType;
};

function SideBar({
  selectedCategory,
  changeSelectedCategory,
  categories,
}: SideBarPros) {
  const navigate = useNavigate();

  const categoryList = classNames(
    "flex items-center cursor-pointer hover:bg-slate-50/10 px-4 py-2 rounded-xl pr-20"
  );

  const selectCategory = (category: CategoryType) => {
    navigate("/");
    changeSelectedCategory(category);
  };

  return (
    <div className="hidden md:block px-4 border-r border-gray-600/10 h-[calc(100vh-64px)] overflow-auto">
      <div>
        {Object.values(categories).map((category, index) => {
          return (
            <ul
              key={index}
              className="border-b-[1px] py-2 pr-1 border-gray-200/20"
            >
              {category.map((each) => (
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

export default SideBar;
