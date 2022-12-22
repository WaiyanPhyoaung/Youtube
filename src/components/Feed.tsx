import { useEffect, useState, useContext } from "react";
import { SideBar, Videos } from "./";
import { fetchSearchApi } from "../utils/FetchAPI";
import { useParams } from "react-router-dom";
import { CategoryContext, SideBarContext } from "../App";
import { CategoryType } from "../utils/constants";
import SideBarOutside from "./SideBarOutside";

function Feed() {
  const [videos, setVideos] = useState();
  const [searchResult, setSearchResult] = useState();
  const { searchTerm } = useParams();
  const { selectedCategory, setSelectedCategory, categories } =
    useContext(CategoryContext);
  const { setOpenSideBar } = useContext(SideBarContext);

  useEffect(() => {
    setOpenSideBar(true);
  }, []);

  useEffect(() => {
    // Anonymous IIFE
    if (selectedCategory?.category) {
      (async () => {
        const data = await fetchSearchApi(
          `search/?q=${selectedCategory?.category}`
        );

        setVideos(data.contents);
      })();
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm) {
      (async () => {
        const data = await fetchSearchApi(`search/?q=${searchTerm}`);
        setSearchResult(data.contents);
      })();
      setSelectedCategory(undefined);
    }
  }, [searchTerm]);

  const changeSelectedCategory = (arg: CategoryType) => {
    setSelectedCategory(arg);
  };

  return (
    <div className="flex justify-start items-start">
      <div className="hidden md:block">
        <SideBar
          selectedCategory={selectedCategory || undefined}
          changeSelectedCategory={changeSelectedCategory}
          categories={categories}
        />
      </div>
      <div className="block md:hidden">
        <SideBarOutside />
      </div>

      <div className="px-4 flex-1 sm:px-6  h-[calc(100vh-64px)] overflow-auto">
        {/* <p className="m-2 flex justify-start items-center">
          <span className="mr-2">{<selectedCategory.icon />}</span>{" "}
          {selectedCategory.category?.toUpperCase()}
        </p> */}
        {searchTerm ? (
          <div className="my-4 w-full 2xl:w-[70%]">
            {searchResult && <Videos videos={searchResult} searchCard />}
          </div>
        ) : (
          <div className="my-4">{videos && <Videos videos={videos} />}</div>
        )}
      </div>
    </div>
  );
}
export default Feed;
