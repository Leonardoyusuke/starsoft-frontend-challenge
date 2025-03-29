import type { Metadata } from 'next';
import ProductPage from './product';

type PageProps = {
  params: Promise<{ slug: string }>;
};
export default async function Page(props: Promise<PageProps>) {
  const { params } = await props;

  return <ProductPage slug={(await params).slug} />;
}
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug.replace(/-/g, ' ');

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} | Starsoft`,
    description: `Detalhes do produto ${slug}`,
  };
}
