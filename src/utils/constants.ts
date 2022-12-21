import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { BiLike, BiFootball, BiMoviePlay } from "react-icons/bi";
import { FaReact, FaNodeJs, FaMusic, FaGamepad } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface CategoryType {
  icon: IconType;
  name: string;
  category?: string;
}

export type CategoriesType = {
  default: CategoryType[];
  loggedIn?: CategoryType[];
};

export const categories: CategoriesType = {
  default: [
    { icon: AiFillHome, name: "Home", category: "new" },
    { icon: FaNodeJs, name: "Node JS", category: "nodejs" },
    { icon: FaReact, name: "React Js", category: "reactjs" },
    { icon: BiMoviePlay, name: "Movies", category: "movies" },
    { icon: FaMusic, name: "Music", category: "music" },
    { icon: BiFootball, name: "Sports", category: "sports" },
    { icon: FaGamepad, name: "Games", category: "games" },
    { icon: BiFootball, name: "Football", category: "football" },
  ],

  loggedIn: [
    { icon: BiLike, name: "Liked videos" },
    { icon: MdOutlineHistory, name: "Watch Later" },
  ],
};
