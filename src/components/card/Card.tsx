import { ReactNode } from "react";
import "./card.styles.scss";
import classNames from "classnames";

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
