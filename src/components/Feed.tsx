import { useEffect, useState } from "react";
import { SideBar, Videos } from "./";
import { categories, CategoryType } from "../utils/constants";
import { fetchSearchApi } from "../utils/FetchAPI";
import { useParams } from "react-router-dom";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryType | undefined
  >(categories.default[0]);
  const [videos, setVideos] = useState();
  const [searchResult, setSearchResult] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    // Anonymous IIFE
    if (selectedCategory?.category) {
      (async () => {
        const data = await fetchSearchApi(
          `search/?part=snippet&q=${selectedCategory?.category}`
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
    <div className="flex">
      <SideBar
        selectedCategory={selectedCategory || undefined}
        changeSelectedCategory={changeSelectedCategory}
        categories={categories}
      />

      <div className="px-4 sm:px-6 flex-1 h-[calc(100vh-64px)] overflow-auto">
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
