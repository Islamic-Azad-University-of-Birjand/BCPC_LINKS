import Home from "./page/Home";
import Contact from "./page/Contact";
import SignUp from "./page/SignUp";
import Online from "./page/contest/Online";

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
    component: <Online />,
  },
  {
    name: "MainContest",
    title: "Main Contest",
    path: "/contest/main",
    component: "",
  },
  {
    name: "SignUp",
    title: "Signup",
    path: "/signup",
    component: <SignUp />,
  },
  {
    name: "Contact",
    title: "Contact",
    path: "/contact",
    component: <Contact />,
  },
];

export default router;
