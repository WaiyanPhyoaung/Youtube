import { Fragment, useEffect, useState, useContext } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { SideBarContext } from "../App";
import { fetchSearchApi } from "../utils/FetchAPI";
import SearchCard from "./SearchCard";
import SideBarOutside from "./SideBarOutside";

function VideoDetails() {
  const { id } = useParams();
  const [video, setVideo] = useState<any>(null);
  const [relatedVideos, setRelatedVideos] = useState<any>();
  const { setOpenSideBar } = useContext(SideBarContext);
  useEffect(() => {
    setOpenSideBar(false);
  }, []);

  useEffect(() => {
    (async () => {
      const video = await fetchSearchApi(`video/details/?id=${id}`);
      setVideo(video);
      const related = await fetchSearchApi(`video/related-contents/?id=${id}`);
      setRelatedVideos(related.contents);
    })();
  }, [id]);

  if (video)
    return (
      <div>
        <SideBarOutside />

        <div className="flex flex-col lg:flex-row px-4 md:px-12 xl:px-20 py-8">
          <div className="w-full lg:w-[68%] mr-8">
            <div className="h-[50vh] md:h-[60vh] lg:h-[70vh]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
              />
            </div>
            <div className="my-4">
              <p>{video?.title}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center mt-2">
                  <div className=" w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={video?.author?.avatar[0]?.url}
                      alt="author"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <p>{video?.author?.title}</p>
                    <p className="text-white/50">
                      {video?.author?.stats?.subscribersText}
                    </p>
                  </div>
                </div>
                <div className="text-sm flex text-white/70">
                  <p className="mr-4">{video?.stats?.views} views</p>
                  <p>{video?.stats?.likes} likes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[30%]">
            {relatedVideos?.map((list: any, index: number) => (
              <Fragment key={index}>
                <SearchCard video={list.video} related />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    );
}

export default VideoDetails;
