import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const Links: any = ({ title, linkTo, imgUrl }: any) => {
  return (
    <a href={linkTo} target="_blank" className="min-w-[15rem]">
      <Card>
        <CardHeader>
          {imgUrl !== "docSvg" ? (
            <img className="h-20" src={imgUrl} />
          ) : (
            <svg
              className="text-xl"
              xmlns="http://www.w3.org/2000/svg"
              width="190"
              height="80"
              viewBox="0 0 24 24"
            >
              <path
                fill="#74b9ff"
                d="M16 0H8C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6zm4 18H8V2h7v5h5zM4 4v18h16v2H4c-1.1 0-2-.9-2-2V4zm6 6v2h8v-2zm0 4v2h5v-2z"
              />
            </svg>
          )}
          <br />
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
      </Card>
    </a>
  );
};
