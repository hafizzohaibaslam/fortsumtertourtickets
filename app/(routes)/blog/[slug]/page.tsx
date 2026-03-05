import BlogCard from "@/features/blog-page/components/BlogCard";
import { fetchPosts, getPostBySlug } from "@/lib/wp/posts";
import { getImgUrl } from "@/lib/getImgUrl";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

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

  const imageUrl = post.featured_media
    ? `https://fortsumtertourtickets.com/api/og?media=${post.featured_media}`
    : "https://fortsumtertourtickets.com/opengraph-image.png";

  return {
    title: `${title} | Fort Sumter Tours`,
    description: metadescription || excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      url: `https://fortsumtertourtickets.com/blog/${slug}`,
      title: `${title} | Fort Sumter Tours`,
      description: metadescription || excerpt,
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Fort Sumter Tours`,
      description: metadescription || excerpt,
      images: [imageUrl],
    },
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

  const postTitle = post.title.rendered.replace(/(<([^>]+)>)/gi, "");
  const postExcerpt =
    post.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, "").trim().slice(0, 200) ||
    "";

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postTitle,
    description: postExcerpt,
    image: imageURL,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://fortsumtertourtickets.com/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: "Fort Sumter Tour Tickets",
      url: "https://fortsumtertourtickets.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Fort Sumter Tour Tickets",
      logo: {
        "@type": "ImageObject",
        url: "https://fortsumtertourtickets.com/fortsumter-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fortsumtertourtickets.com/blog/${slug}`,
    },
  };

  return (
    <div className="my-[30px] space-y-[30px]">
      {/* Header */}
      <div className="relative h-[400px] md:h-[740px] rounded-[23px] overflow-hidden">
        <Image
          src={imageURL}
          alt={postTitle || "Fort Sumter blog article"}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative bg-[var(--blue-2)] rounded-[23px] flex flex-col justify-center px-[24px] lg:px-[65px] py-[30px] lg:py-[46px]">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
    </div>
  );
};

export default BlogDetailsPage;

export const dynamic = "force-dynamic";
