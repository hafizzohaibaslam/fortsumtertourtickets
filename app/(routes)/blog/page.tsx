import BlogCard from "@/features/blog-page/components/BlogCard";
import BlogList from "@/features/blog-page/components/BlogList";
import LatestBlog from "@/features/blog-page/components/LatestBlog";
import { fetchPosts } from "@/lib/wp/posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fort Sumter History & Charleston Harbor Blog",
  description:
    "Explore the history of Fort Sumter, the Civil War in Charleston, and tips for planning your Fort Sumter tour. Read articles about Charleston Harbor and South Carolina history.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "https://fortsumtertourtickets.com/blog",
    title: "Fort Sumter History & Charleston Harbor Blog",
    description:
      "Explore the history of Fort Sumter, the Civil War in Charleston, and tips for planning your Fort Sumter tour.",
  },
  twitter: {
    title: "Fort Sumter History & Charleston Harbor Blog",
    description:
      "Explore the history of Fort Sumter, the Civil War in Charleston, and tips for planning your Fort Sumter tour.",
  },
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
