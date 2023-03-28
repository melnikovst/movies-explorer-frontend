import { FC, memo } from "react";
import "./SectionTitle.scss";

const SectionTitle: FC<{ title: string; className: string }> = memo(({
  title,
  className,
}) => {
  return <h2 className={className}>{title}</h2>;
});

export default SectionTitle;
