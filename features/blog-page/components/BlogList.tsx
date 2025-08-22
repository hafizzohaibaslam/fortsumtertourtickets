import { Post } from "@/lib/wp/types";
import React from "react";
import BlogCard from "./BlogCard";

type BlogListProps = {
  posts: Post[];
};

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="rounded-[23px] bg-white px-[24px] py-[40px] lg:px-[62px] lg:py-[82px] grid grid-cols-1 gap-[45px] lg:grid-cols-3 lg:justify-between lg:items-center">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
