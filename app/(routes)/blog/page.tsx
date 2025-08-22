import CanonicalTag from "@/components/CanonicalTag";
import BlogCard from "@/features/blog-page/components/BlogCard";
import BlogList from "@/features/blog-page/components/BlogList";
import LatestBlog from "@/features/blog-page/components/LatestBlog";
import { fetchPosts } from "@/lib/wp/posts";
import React from "react";

export const metadata = {
  title: "Blog",
  description: "Read the latest news and updates from Alcatraz Island Tours.",
};

const BlogPage = async () => {
  const fetchedPosts = await fetchPosts();

  if (!fetchedPosts) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="font-nohemi font-semibold text-[32px] leading-[32px] text-[#25283E] text-center">
          No posts found
        </h1>
      </div>
    );
  }

  return (
    <div className="my-[30px] space-y-[30px]">
      <CanonicalTag pathName="/blog" />
      <div className="rounded-[23px] space-y-[30px] px-[24px] py-[40px] lg:px-[62px] lg:py-[52px]">
        <h1 className="font-nohemi font-semibold text-[32px] leading-[32px] text-[#25283E]">
          Latest Blog
        </h1>
        {/* Features Blog */}
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[2fr_1fr] lg:justify-between lg:items-center">
          {fetchedPosts?.[0] && <LatestBlog posts={fetchedPosts?.[0]} />}
          {fetchedPosts?.[1] && <BlogCard featured post={fetchedPosts?.[1]} />}
        </div>
      </div>
      {fetchedPosts.length > 2 && <BlogList posts={fetchedPosts.slice(2)} />}
    </div>
  );
};

export default BlogPage;

export const dynamic = "force-dynamic";
