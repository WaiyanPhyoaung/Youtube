import { Fragment } from "react";
import SearchCard from "./SearchCard";
import Video from "./Video";

function Videos(props: any) {
  return (
    <div>
      {!props.searchCard ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-4">
          {props.videos?.map((list: any, index: number) => (
            <Fragment key={index}>
              <Video video={list.video} />
            </Fragment>
          ))}
        </div>
      ) : (
        <div>
          {props.videos?.map((list: any, index: number) => (
            <Fragment key={index}>
              <SearchCard video={list.video} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Videos;
