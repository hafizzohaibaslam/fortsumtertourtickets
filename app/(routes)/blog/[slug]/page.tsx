import BlogCard from "@/features/blog-page/components/BlogCard";
import { fetchPosts, getPostBySlug } from "@/lib/wp/posts";
import { getImgUrl } from "@/lib/getImgUrl";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";
import CanonicalTag from "@/components/CanonicalTag";
import BlogDetailsMainContent from "@/features/blog-page/components/BlogDetailsMainContent";

// ✅ Dynamic metadata function
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Fort Sumter Tours",
      description: "The blog you are looking for does not exist.",
    };
  }

  const title = post.yoast_head_json.og_title.replace(/(<([^>]+)>)/gi, "");
  const metadescription = post.yoast_head_json.og_description.replace(
    /(<([^>]+)>)/gi,
    ""
  );
  const excerpt =
    post.excerpt?.rendered
      ?.replace(/(<([^>]+)>)/gi, "")
      .trim()
      .slice(0, 155) || "Read more from our latest blog posts.";

  return {
    title: `${title} | Fort Sumter Tours`,
    description: metadescription || excerpt,
  };
}

// ✅ Page component
const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const lastestPosts = await fetchPosts({
    per_page: "3",
    orderby: "date",
    order: "desc",
  });

  const imageURL = post.featured_media
    ? getImgUrl(post.featured_media)
    : "/details-page/image-1.png";

  return (
    <div className="my-[30px] space-y-[30px]">
      <CanonicalTag pathName={`/blog/${post.slug}`} />
      {/* Header */}
      <div
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
        className={cn(
          "h-[400px] md:h-[740px] [background-blend-mode:darken] hover:bg-black/30 transition-all duration-300 bg-cover bg-center rounded-[23px]"
        )}
      >
        <div className="bg-[var(--blue-2)] rounded-[23px] flex flex-col justify-center px-[24px] lg:px-[65px] py-[30px] lg:py-[46px]">
          <div className="md:max-w-[70%] lg:max-w-[50%]">
            <h1 className="font-nohemi font-normal text-[24px] md:text-[42px] leading-[30px] md:leading-[53px] text-white">
              {post.title.rendered}
            </h1>
          </div>
        </div>
      </div>

      {/* Main */}
      <BlogDetailsMainContent post={post} />

      {/* Footer */}
      <div className="rounded-[23px] bg-white px-[24px] py-[40px] lg:px-[62px] lg:py-[46px]">
        <h2 className="font-nohemi font-normal text-[24px] leading-[30px] text-[#25283E] mb-[30px]">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 gap-[45px] lg:grid-cols-3 lg:justify-between lg:items-center">
          {lastestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

export const dynamic = "force-dynamic";
