import Head from 'next/head';

interface Props {
  title: string;
}

export default function PageHead({ title }: Props) {
  return (
    <Head data-testid="test">
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
