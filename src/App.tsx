import { Links } from "./page/links";

const data: any = [
  {
    label: "Super Group",
    src: "https://api.iconify.design/file-icons:telegram.svg",
    link: "https://t.me/SSCEUBIR",
  },
  //   {
  //     label: "Instagram",
  //     src: "https://api.iconify.design/lineicons:instagram-fill.svg",
  //     link: "https://www.instagram.com/ssce_ubir?igsh=cDNmNDdyMnh5OHFk",
  //   },
  {
    label: "SignUp",
    src: "https://api.iconify.design/simple-icons:googleforms.svg",
    link: "https://forms.gle/m7XjBsJc2NZ7KomC9",
  },
];

function App() {
  return (
    <>
      <main className="grid place-items-center gap-2 min-h-screen ">
        <div className="flex gap-4 items-center">
          {data.map((item: any, index: number) => (
            <Links
              key={index}
              title={item.label}
              linkTo={item.link}
              imgUrl={item.src}
            />
          ))}
        </div>
      </main>
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 text-center p-2 text-gray-500">
        We are currently updating our website to enhance your experience. Thank
        you for your patience! Please check back soon for new features and
        improvements.
      </footer>
    </>
  );
}

export default App;
