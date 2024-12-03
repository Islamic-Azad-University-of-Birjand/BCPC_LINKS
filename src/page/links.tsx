import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const Links: any = ({ title, linkTo, imgUrl }: any) => {
  return (
    <a href={linkTo} target="_blank" className="min-w-[15rem]">
      <Card>
        <CardHeader>
          {imgUrl ? <img className="h-20" src={imgUrl} /> : ""}
          <br />
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
      </Card>
    </a>
  );
};
