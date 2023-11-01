import "./progressBar.styles.scss";

export type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  const progressWidth = progress * 100;

  return (
    <div className="progress-bar__container">
      <span className="progress" style={{ width: `${progressWidth}%` }} />
    </div>
  );
}
