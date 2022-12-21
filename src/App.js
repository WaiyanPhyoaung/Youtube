import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Feed, VideoDetails } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/video/:id" element={<VideoDetails />}></Route>
        <Route path="/search/:searchTerm" element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
