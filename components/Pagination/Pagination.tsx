import { useRouter } from 'next/router';

import styles from './Pagination.module.css';

type Props = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

export default function Pagination({ currentPage, totalPages, baseUrl }: Props) {
  const router = useRouter();

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const redirectToPage = (page: number | string) =>
    router.push({
      pathname: baseUrl,
      query: { page }
    });

  const handleOpenPrevious = () => redirectToPage(currentPage - 1);

  const handleOpenNext = () => redirectToPage(currentPage + 1);

  const handleOpenByIndex = (e: React.MouseEvent) => {
    const target = e?.target as HTMLTextAreaElement;
    const pageIndex = target?.getAttribute('data-index') || '';
    redirectToPage(pageIndex);
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={styles.container}>
      <button className="button" onClick={handleOpenPrevious} disabled={isPreviousDisabled}>
        &larr;
      </button>
      {pages.map((index) => (
        <button
          className="button"
          onClick={handleOpenByIndex}
          data-index={index}
          key={index}
          disabled={index === currentPage}>
          {index}
        </button>
      ))}
      <button className="button" onClick={handleOpenNext} disabled={isNextDisabled}>
        &rarr;
      </button>
    </div>
  );
}
