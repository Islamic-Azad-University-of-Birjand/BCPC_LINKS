import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog"
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { useContext } from "react";
import DataProvider from "./context/DataProvider";
function App() {
  const {isDark}=useContext(DataProvider);
  return (
  <div className={`${isDark ? "dark" : ""}`}>
    <div className="relative w-full h-screen dark:bg-gray-700 flex justify-between flex-col items-center">
      <Header />
      <div className="main">
        <Routes>
           <Route path="/BCPC_LINKS" element={<Home />} />
           <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
