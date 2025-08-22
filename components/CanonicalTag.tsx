"use client";
import Head from "next/head";

const CanonicalTag = ({ pathName }: { pathName: string }) => (
  <Head>
    <link
      rel="canonical"
      href={`${process.env.NEXT_PUBLIC_SERVER_URL}${pathName}`}
      key="canonical"
    />
    <h2>h2 in headtag</h2>
  </Head>
);

export default CanonicalTag;
