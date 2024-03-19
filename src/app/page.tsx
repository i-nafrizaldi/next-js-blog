import { getEntries } from "@/api/getEntries";
import CardBlogs from "./components/CardBlogs";
import { findAsset } from "@/utils/findAsset";

export default async function Home() {
  const blogs = await getEntries();
  // console.log(blogs);

  return (
    <main className="container mx-auto px-4">
      {/* JUMBOTRON */}
      <section className="mt-10 space-y-2 text-center">
        <h1 className="text-6xl font-bold">The GoBlogs</h1>
        <p className="text-2xl">Blog tentang keboglogan umat manusia</p>
      </section>

      {/* BLOG LIST */}
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {blogs.items.map((blog, index) => {
          const assetId = blog.fields.thumbnail.sys.id;
          const asset = blogs.includes.Asset;
          return (
            <CardBlogs
              key={index}
              imageUrl={`
                https:${findAsset(assetId, asset)?.fields.file.url}`}
              title={blog.fields.title}
              category={blog.fields.category}
              author={blog.fields.author}
              desciption={blog.fields.description}
              createdAt={blog.fields.createdAt}
              slug={blog.fields.slug}
            />
          );
        })}
        \
      </div>
    </main>
  );
}
