import classNames from "classnames";
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

  const container = classNames(
    " md:max-h-[250px] overflow-hidden bg-white/5 shadow-black/60 shadow-md flex  md:flex-row",
    { " flex-col": !props.related },
    { "lg:h-[100px] flex-row": props.related }
  );

  return (
    <div className="my-4">
      <Link to={`/video/${videoId}`}>
        <div className={container}>
          <div
            className={[
              "w-full md:w-[40%] rounded-lg overflow-hidden",
              `${props.related && "w-[40%] md:w-[30%]"}`,
            ].join(" ")}
          >
            <img
              src={thumbnails && thumbnails[0]?.url}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>
          <div
            className={[
              "w-full md:w-[60%] p-4",
              `${props.related && "p-1"}`,
            ].join(" ")}
          >
            <div
              className={["md:pl-4", `${props.related && "pl-2"}`].join(" ")}
            >
              <p
                className={[
                  `${
                    props.related ? "text-sm lg:text-sm" : "text-lg lg:text-xl"
                  }`,
                ].join(" ")}
              >
                {props.related
                  ? shortenText(title, 40)
                  : shortenText(title, 100)}
              </p>
              <div className="flex my-2 items-center">
                {!props.related && (
                  <div className="mr-4">
                    <div className="w-10 h-10  rounded-full overflow-hidden">
                      <img
                        src={author?.avatar[0]?.url}
                        alt="profile"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}
                <p className={["text-white/60 text-sm "].join(" ")}>
                  {author?.title}
                </p>
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
