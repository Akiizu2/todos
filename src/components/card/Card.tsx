import type { ReactNode } from "react";
import classNames from "classnames";

import "./card.styles.scss";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className: extendedClassName }: CardProps) {
  return (
    <section className={classNames("card__container", extendedClassName)}>
      {children}
    </section>
  );
}
