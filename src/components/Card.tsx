type CardProps = {
  title: string;
  subtitle: string;
  desc?: string;
  onClick: () => void;
};

export default function Card({ title, subtitle, desc, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{title}</div>
      {subtitle && <div className="card-sub">{subtitle}</div>}
      {desc && <div className="card-desc">{desc}</div>}
    </div>
  );
}
