import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import router from "./router.tsx";
import { type Router as RouterType } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {router.map((item: RouterType) => (
          <Route path={item.path} element={item?.component} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>,
);
