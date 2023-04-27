import Head from "next/head";

interface SeoType {
  title: string;
}

export default function Seo({ title }: SeoType) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
