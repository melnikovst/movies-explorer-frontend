import { FC } from 'react';
import styles from './SectionTitle.module.scss';

type TTitle = {
  title: string;
};

const SectionTitle: FC<TTitle> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default SectionTitle;
