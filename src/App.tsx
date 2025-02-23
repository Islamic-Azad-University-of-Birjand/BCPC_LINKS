import Navbar from "@/page/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <main className="grid grid-cols-1 grid-rows-[8rem,1fr] justify-center items-center gap-4 min-h-screen light">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
