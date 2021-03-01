import Link from 'next/link';

import { RECENT_SEARCHES } from '../../constants/captions';
import { CLIENT } from '../../constants/routes';
import type { RecentSearchLocation } from '../../types/apartments';
import styles from './RecentSearches.module.css';

type Props = {
  list: RecentSearchLocation[];
};

export default function RecentSearches({ list }: Props) {
  const getTime = (timestamp: number) => new Date(timestamp).toLocaleString();

  return (
    <div className={styles.container}>
      <div className={styles.header}>{RECENT_SEARCHES.HEADER}</div>
      {list.length > 0 ? (
        <div className={styles.list}>
          {list.map((item) => (
            <Link href={CLIENT.FIND_APARTMENTS_BY_QUERY(item.value)} key={item.timestamp}>
              <a>
                {item.value}
                <div className={styles.time}>{getTime(item.timestamp)}</div>
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>{RECENT_SEARCHES.NO_ITEMS}</div>
      )}
    </div>
  );
}
