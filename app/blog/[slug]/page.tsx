type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    { slug: 'hello' },
    { slug: 'test' },
    { slug: 'github-actions' },
  ];
}

export const dynamicParams = false;

export default async function Page({ params }: Params) {
  const { slug } = await params;

  return (
    <>
      <h1>Slug: {slug}</h1>
      <p>HoldeTex</p>
      <p>Welcome to the Next.js</p>
    </>
  );
}