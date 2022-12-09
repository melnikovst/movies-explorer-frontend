import { FC } from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default SectionTitle;
