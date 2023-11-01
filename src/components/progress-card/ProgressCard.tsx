import { Card } from "../card";
import { ProgressBar } from "../progress-bar";
import "./progressCard.styles.scss";

export type ProgressCardProps = {};

export function ProgressCard(props: ProgressCardProps) {
  return (
    <Card className="progress-card__container">
      <h2 className="progress-card__header">Progress</h2>
      <ProgressBar progress={0.4} />
      <p className="progress-card__description">12 completed</p>
    </Card>
  );
}
