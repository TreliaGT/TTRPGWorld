export default function Card({title, subtitle, desc, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{title}</div>
      {subtitle && <div className="card-sub">{subtitle}</div>}
      {desc && <div className="card-desc">{desc}</div>}
    </div>
  );
}
