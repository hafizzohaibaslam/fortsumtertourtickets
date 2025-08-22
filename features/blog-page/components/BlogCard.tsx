import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Post } from "@/lib/wp/types";
import { getImgUrl } from "@/lib/getImgUrl";
import Link from "next/link";

type BlogCardProps = {
  post: Post;
  featured?: boolean;
  className?: string;
};

const BlogCard = ({ featured, className, post }: BlogCardProps) => {
  return (
    <Link
      className={cn(
        "flex flex-col rounded-[23px] cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out",
        featured && "h-full",
        className
      )}
      href={`/blog/${post.slug}`}
    >
      <div
        className={cn(
          "h-[260px] overflow-hidden",
          featured ? "rounded-tl-[16px] rounded-tr-[16px]" : "rounded-[16px]"
        )}
      >
        <Image
          src={
            getImgUrl(post.featured_media ?? 0) ||
            "/images/blog-placeholder.png"
          }
          alt="blog-image"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={cn(
          "bg-white rounded-bl-[16px] rounded-br-[16px] flex-1",
          featured
            ? "px-[24px] lg:px-[45px] pt-[23px] lg:pt-[45px] pb-[30px] lg:pb-[50px]"
            : "pt-[23px] pb-[30px]"
        )}
      >
        <div className="flex items-center gap-[9px]">
          <div className="w-6 h-[2px] bg-[#DEDEDE]"></div>
          <span className="font-plusJakarta font-normal text-[14px] leading-[12px] text-[#25283E] opacity-30 tracking-[0.5px]">
            5 mins read
          </span>
        </div>
        <div className="mt-[20px] space-y-[12px]">
          <h1
            className={cn(
              "font-nohemi font-medium text-[20px] leading-[30px] text-[#25283E]",
              !featured && "max-w-[90%]"
            )}
          >
            {post.title.rendered}
          </h1>
          <p
            className={cn(
              "font-plusJakarta font-normal text-[14px] leading-[24px] text-[#25283E]",
              !featured && "max-w-[90%]"
            )}
            dangerouslySetInnerHTML={{
              __html: (post.excerpt.rendered ?? "").slice(0, 150) + "...",
            }}
          ></p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
