import { useRouter } from 'next/router';

import PageHead from '../components/PageHead/PageHead';
import Search from '../components/Search/Search';

export default function Home() {
  const router = useRouter();

  const handleSearchResults = (query: string) => {
    router.push(`/for-sale/${query}`);
  };

  return (
    <>
      <PageHead title="Property and Homes Search" />
      <Search onSubmit={handleSearchResults} />
    </>
  );
}
