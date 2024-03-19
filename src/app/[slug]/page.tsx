import { getEntriesBySlug } from "@/api/getEntryBySlug";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { format } from "date-fns";
import { findAsset } from "@/utils/findAsset";
import { notFound } from "next/navigation";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Children } from "react";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const BlogDetail: React.FC<BlogDetailProps> = async ({ params }) => {
  const blog = await getEntriesBySlug(params.slug);

  if (!blog.items.length) {
    notFound();
  }

  const assetId = blog.items[0].fields.thumbnail.sys.id;
  const assets = blog.includes.Asset;
  const image = findAsset(assetId, assets);

  const RICHTEXT_OPTION: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, Children) => {
        return (
          <h2 className="my-2 text-xl font-bold md:text-2xl mb-10">{Children}</h2>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, Children) => {
        return <p className="text-lg font-light md:text-xl">{Children}</p>;
      },
    },
  };

  return (
    <main className="container mx-auto mt-10 max-w-6xl px-4">
      <section>
        <Badge variant="outline" className="rounded-sm bg-green-300 ">
          {blog.items[0].fields.category}
        </Badge>
        <h1 className="text-4xl font-bold">{blog.items[0].fields.title}</h1>
        <p>
          {format(new Date(blog.items[0].fields.createdAt), "dd MMMM yyyy")} -{" "}
          {blog.items[0].fields.author}
        </p>

        <div className="relative h-[400px] w-full">
          <Image
            src={`https:${image?.fields.file.url}`}
            alt="thumbnail"
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* CONTENT */}
      <section className="mt-10">
        {documentToReactComponents(
          blog.items[0].fields.content,
          RICHTEXT_OPTION,
        )}
      </section>
    </main>
  );
};

export default BlogDetail;
