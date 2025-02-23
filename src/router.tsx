import Home from "./page/Home";
import Contact from "./page/Contact";

export interface Router {
  title: string | any;
  path: string;
  name: string;
  component: any;
}

const router: Router[] = [
  {
    title: <img src="https://api.iconify.design/lineicons:baloon.svg" />,
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    title: "Online Contest",
    name: "OnlineContest",
    path: "/contest/online",
    component: "",
  },
  {
    name: "MainContest",
    title: "Main Contest",
    path: "/contest/main",
    component: "",
  },
  {
    name: "Contact",
    title: "Contact",
    path: "/contact",
    component: <Contact />,
  },
];

export default router;
