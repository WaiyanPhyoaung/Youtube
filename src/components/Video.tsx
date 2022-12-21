import { Link } from "react-router-dom";

function Video(props: any) {
  if (!props.video) {
    return null;
  }
  const { thumbnails, title, author, videoId } = props.video;

  const shortenText = (text: string, totalWord: number) => {
    return text.split("").slice(0, totalWord).join("");
  };

  return (
    <div className="flex  w-full ">
      <Link to={`/video/${videoId}`} className="w-full">
        <div className="w-full md:h-[280px] rounded-lg overflow-hidden bg-white/5 shadow-black/60 shadow-md">
          <div className="w-full">
            <img
              src={thumbnails && thumbnails[0]?.url}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex justify-start items-start p-4">
            <div className="">
              <div className="w-10 h-10  rounded-full overflow-hidden">
                <img
                  src={author?.avatar[0]?.url}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full pl-4">
              <p className="text-sm">{shortenText(title, 47)}...</p>
              <p className="text-white/60 text-sm">{author?.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
