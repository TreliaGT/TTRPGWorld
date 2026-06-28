export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="ph">
      <div>
        <div className="ph-title">{title}</div>
        <div className="ph-sub">{subtitle}</div>
      </div>
    </div>
  );
}
