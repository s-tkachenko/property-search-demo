import { useRouter } from 'next/router';

import { DEFAULT, SEARCH_PROMPTS } from '../../constants/common';
import { CLIENT } from '../../constants/routes';
import SearchForm from '../SearchForm/SearchForm';
import styles from './SearchBar.module.css';

type Props = {
  value?: string;
};

export default function SearchBar({ value }: Props) {
  const router = useRouter();

  const handleSearchResults = (query: string) => {
    router.push(CLIENT.FIND_APARTMENTS_BY_QUERY(query));
  };

  return (
    <div className={styles.container}>
      <SearchForm
        onSubmit={handleSearchResults}
        placeholder={DEFAULT.SEARCH_PLACEHOLDER}
        promptOptions={SEARCH_PROMPTS}
        value={value}
      />
    </div>
  );
}
