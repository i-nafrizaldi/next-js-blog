import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardBlogsProps {
  imageUrl: string;
  category: string;
  title: string;
  createdAt: string;
  author: string;
  desciption: string;
  slug: string;
}

const CardBlogs: React.FC<CardBlogsProps> = ({
  author,
  category,
  createdAt,
  desciption,
  imageUrl,
  title,
  slug,
}) => {
  return (
    <>
      <Link href={`/${slug}`}>
        <Card>
          <CardHeader>
            <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt="thumbnail"
                className="object-cover"
                fill
              />
            </div>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="rounded-xl bg-green-300">
              {category}
            </Badge>
            <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
            <p className="text-sm font-light italic">{author}</p>
            <p className="line-clamp-3">{desciption}</p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CardBlogs;
