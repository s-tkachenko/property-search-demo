import { useRouter } from 'next/router';

import styles from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

function getPaginationRange(current: number, total: number, range = 6, min = 1) {
  const length = total < range ? total : range;
  const startHalfRange = current - Math.floor(length / 2);
  const startSafeHalfRange = Math.max(startHalfRange, min);
  const startSafeTotal = min + total - length;
  const start = Math.min(startSafeHalfRange, startSafeTotal);

  return Array.from({ length }, (v, i) => start + i);
}

export default function Pagination({ currentPage, totalPages, baseUrl }: Props) {
  const router = useRouter();
  const indexes = getPaginationRange(currentPage, totalPages);

  const redirectToPage = async (page: number | string) =>
    router.push({
      pathname: baseUrl,
      query: { page }
    });

  const handleOpenPrevious = async () => redirectToPage(currentPage - 1);

  const handleOpenNext = async () => redirectToPage(currentPage + 1);

  const handleOpenByIndex = (e: React.MouseEvent) => {
    const target = e.target as HTMLTextAreaElement;
    const pageIndex = target.getAttribute('data-index') || '';
    void redirectToPage(pageIndex);
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={styles.container}>
      <button className="button" onClick={handleOpenPrevious} disabled={isPreviousDisabled}>
        &larr;
      </button>
      {indexes.map((index) => (
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
