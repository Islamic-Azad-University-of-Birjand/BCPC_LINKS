import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog"
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
function App() {
  return (
    <div className="relative dark:bg-gray-700">
      <Header />
      <div className="main">
        <Routes>
           <Route path="/BCPC_LINKS" element={<Home />} />
           <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
