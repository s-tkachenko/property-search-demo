import PageHead from '../components/PageHead/PageHead';
import Search from '../components/Search/Search';

export default function Home() {
  return (
    <>
      <PageHead title="Property and Homes Search" />
      <Search onSubmit={(val) => console.log('Search request', val)} />
    </>
  );
}
