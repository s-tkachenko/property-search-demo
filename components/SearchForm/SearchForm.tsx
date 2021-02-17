import { useState } from 'react';

import { DEFAULT } from '../../constants/common';
import styles from './SearchForm.module.css';

interface Props {
  onSubmit: (query: string) => void;
  placeholder: string;
  value?: string;
  promptOptions: string[];
}

export default function SearchForm({ onSubmit, placeholder, value = '', promptOptions }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>(value);
  const [prompts, setPrompts] = useState<string[]>([]);

  const submitQuery = (query: string | null) => {
    if (query) {
      onSubmit(query);
    }
    setPrompts([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);

    let prompts: string[] = [];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filtered = promptOptions.filter((prompt) => prompt.toLowerCase().includes(query));
      prompts = filtered.slice(0, DEFAULT.SEARCH_MAX_PROMPTS);
    }

    setPrompts(prompts);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitQuery(searchQuery.trim());
  };

  const handleClickPrompt = (e: React.KeyboardEvent | React.MouseEvent) => {
    const target = e.target as HTMLTextAreaElement;
    submitQuery(target.getAttribute('data-value'));
  };

  const handlePressEnterPrompt = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClickPrompt(e);
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
        placeholder={placeholder}></input>
      <button className={styles.submit} type="submit" tabIndex={-1} />
      {prompts.length > 0 && (
        <ul className={styles.prompt}>
          {prompts.map((query) => (
            <li
              key={query}
              tabIndex={0}
              onClick={handleClickPrompt}
              onKeyDown={handlePressEnterPrompt}
              data-value={query}>
              {query}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
