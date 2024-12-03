import { Links } from "./page/links";

const data: any = [
  {
    label: "سوپر گروه",
    src: "https://api.iconify.design/logos:telegram.svg",
    link: "https://t.me/SSCEUBIR",
  },
  //   {
  //     label: "Instagram",
  //     src: "https://api.iconify.design/lineicons:instagram-fill.svg",
  //     link: "https://www.instagram.com/ssce_ubir?igsh=cDNmNDdyMnh5OHFk",
  //   },
  {
    label: "فرم ثبت نام",
    src: "docSvg",
    link: "https://forms.gle/m7XjBsJc2NZ7KomC9",
  },
];

function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-8 min-h-screen ">
        <div className="flex flex-col gap-4 md:flex-row  items-center">
          {data.map((item: any, index: number) => (
            <Links
              key={index}
              title={item.label}
              linkTo={item.link}
              imgUrl={item.src}
            />
          ))}
        </div>
        <footer className="text-center py-2 px-4 max-w-[33rem] text-gray-500">
          در حال به‌روزرسانی وب‌سایت‌مون هستیم تا تجربه بهتری براتون فراهم کنیم.
          از صبر و شکیبایی‌تون ممنونیم
        </footer>
      </main>
    </>
  );
}

export default App;
