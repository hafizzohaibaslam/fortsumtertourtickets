import { getImgUrl } from "@/lib/getImgUrl";
import { Post } from "@/lib/wp/types";
import Link from "next/link";
import React from "react";

const LatestBlog = ({ posts }: { posts: Post }) => {
  return (
    <Link
      href={`/blog/${posts.slug}`}
      className="[background-blend-mode:darken] hover:bg-black/30 transition-all duration-300 bg-cover bg-center rounded-[23px] h-[586px] px-[24px] lg:px-[56px] py-[51px]"
      style={{
        backgroundImage: `url(${getImgUrl(posts.featured_media ?? 0)})`,
      }}
    >
      <div className="space-y-[20px] max-w-[360px]">
        <h1
          className="font-nohemi font-medium text-[42px] leading-[53px] text-white [text-shadow:0px_0px_20px_0px_rgba(0,0,0,0.2)]"
          dangerouslySetInnerHTML={{
            __html: posts.title.rendered ?? "",
          }}
        />
        <p
          className="font-plus-jakarta-sans font-semibold text-[14px] leading-[23px] text-white opacity-70 [text-shadow:0px_0px_20px_0px_rgba(0,0,0,0.05)]"
          dangerouslySetInnerHTML={{
            __html: posts.excerpt.rendered ?? "",
          }}
        />
      </div>
    </Link>
  );
};

export default LatestBlog;
