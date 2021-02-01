import { useState } from 'react';

import styles from './Search.module.css';

type Props = {
  onSubmit: (query: string) => void;
};

export default function Search({ onSubmit }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim();

    if (query) {
      onSubmit(query);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="search"
        value={searchQuery}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Search..."></input>
      <button className={styles.submit} type="submit" />
    </form>
  );
}
