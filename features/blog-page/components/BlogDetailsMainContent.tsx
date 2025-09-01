"use client";
import { Post } from "@/lib/wp/types";
import React from "react";

type BlogDetailsMainContentProps = {
  post: Post;
};

const BlogDetailsMainContent = ({ post }: BlogDetailsMainContentProps) => {
  return (
    <div className="w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
      {/* Excerpt */}
      {post.excerpt?.rendered && (
        <div className="text-xl font-medium text-[#25283E] mb-8 p-4 bg-[#f8f8f8] rounded-lg border-l-4 border-[var(--blue-2)]">
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="prose lg:prose-lg max-w-none">
        <div
          className="wordpress-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
      {/* Custom CSS for WordPress content */}
      <style jsx global>{`
        .wordpress-content {
          color: #25283e;
          line-height: 1.7;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .wordpress-content h1,
        .wordpress-content h2,
        .wordpress-content h3,
        .wordpress-content h4,
        .wordpress-content h5,
        .wordpress-content h6 {
          font-family: "Nohemi", sans-serif;
          font-weight: 600;
          color: #25283e;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .wordpress-content h1 {
          font-size: 2.25rem;
          font-weight: 600;
        }
        .wordpress-content h2 {
          font-size: 1.875rem;
          font-weight: 600;
        }
        .wordpress-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .wordpress-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
        }
        .wordpress-content h5 {
          font-size: 1.125rem;
          font-weight: 600;
        }
        .wordpress-content h6 {
          font-size: 1rem;
          font-weight: 600;
        }

        .wordpress-content p {
          margin-bottom: 1.5rem;
          font-size: 1rem;
          line-height: 1.7;
          color: #25283e;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
        }

        .wordpress-content ul,
        .wordpress-content ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          color: #25283e;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .wordpress-content ul {
          list-style-type: disc;
        }

        .wordpress-content ol {
          list-style-type: decimal;
        }

        .wordpress-content li {
          margin-bottom: 0.5rem;
          color: #25283e;
          font-family: "Plus Jakarta Sans", sans-serif;
          padding-left: 0.5rem;
        }

        .wordpress-content ul li {
          list-style-type: disc;
          list-style-position: outside;
        }

        .wordpress-content ol li {
          list-style-type: decimal;
          list-style-position: outside;
        }

        .wordpress-content blockquote {
          border-left: 4px solid var(--blue-2);
          background-color: #f8f8f8;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
          font-style: italic;
          color: #25283e;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .wordpress-content table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #e2e8f0;
          margin: 1.5rem 0;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0px 1.45px 2.9px 0px #1018280a;
        }

        .wordpress-content th {
          background-color: #25283e;
          color: white;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
          border-bottom: 1px solid #e2e8f0;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .wordpress-content td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e2e8f0;
          color: #25283e;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .wordpress-content tr:nth-child(even) {
          background-color: #f8f8f8;
        }

        .wordpress-content img {
          width: 100%;
          height: auto;
          border-radius: 0.625rem;
          box-shadow: 0px 1.45px 2.9px 0px #1018280a;
          margin: 1.5rem 0;
          max-height: 600px;
          object-fit: cover;
        }

        .wordpress-content a {
          color: #25283e;
          text-decoration: underline;
          transition: color 0.2s;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .wordpress-content a:hover {
          color: var(--blue-3);
        }

        .wordpress-content pre {
          background-color: #f8f8f8;
          color: #25283e;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
          font-size: 0.875rem;
          border: 1px solid #e2e8f0;
        }

        .wordpress-content code {
          background-color: #f8f8f8;
          color: #25283e;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
          font-size: 0.875rem;
          border: 1px solid #e2e8f0;
        }

        .wordpress-content pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          border: none;
        }

        @media (max-width: 768px) {
          .wordpress-content h1 {
            font-size: 1.875rem;
          }
          .wordpress-content h2 {
            font-size: 1.5rem;
          }
          .wordpress-content h3 {
            font-size: 1.25rem;
          }
          .wordpress-content h4 {
            font-size: 1.125rem;
          }
          .wordpress-content h5 {
            font-size: 1rem;
          }
          .wordpress-content h6 {
            font-size: 0.875rem;
          }

          .wordpress-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetailsMainContent;
