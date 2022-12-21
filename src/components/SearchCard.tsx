import { Link } from "react-router-dom";

function SearchCard(props: any) {
  if (!props.video) {
    return null;
  }
  const { thumbnails, title, author, videoId, descriptionSnippet } =
    props.video;

  const shortenText = (text: string, totalWord: number) => {
    return text.split("").slice(0, totalWord).join("");
  };
  return (
    <div className="my-4">
      <Link to={`/video/${videoId}`}>
        <div className=" md:max-h-[250px] overflow-hidden bg-white/5 shadow-black/60 shadow-md flex flex-col md:flex-row   ">
          <div className="w-full md:min-w-[280px] md:w-[40%] rounded-lg overflow-hidden">
            <img
              src={thumbnails && thumbnails[0]?.url}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-[60%] p-4">
            <div className=" md:pl-4">
              <p className="text-lg lg:text-xl">{shortenText(title, 100)}</p>
              <div className="flex my-4 items-center">
                <div className="">
                  <div className="w-10 h-10  rounded-full overflow-hidden">
                    <img
                      src={author?.avatar[0]?.url}
                      alt="profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-white/60 text-sm ml-4">{author?.title}</p>
              </div>
              {descriptionSnippet && (
                <p className="text-white/60 text-sm">{descriptionSnippet}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
