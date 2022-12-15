import { FC } from 'react';
import './SectionTitle.scss';

const SectionTitle: FC<{ title: string; className: string }> = ({
  title,
  className,
}) => {
  return <h2 className={className}>{title}</h2>;
};

export default SectionTitle;
