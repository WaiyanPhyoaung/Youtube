import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Feed, VideoDetails } from "./components";
import { categories } from "./utils/constants";

export const SideBarContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    categories.default[0]
  );

  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <SideBarContext.Provider value={{ openSideBar, setOpenSideBar }}>
      <CategoryContext.Provider
        value={{ selectedCategory, setSelectedCategory, categories }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetails />}></Route>
            <Route path="/search/:searchTerm" element={<Feed />}></Route>
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </SideBarContext.Provider>
  );
}

export default App;
