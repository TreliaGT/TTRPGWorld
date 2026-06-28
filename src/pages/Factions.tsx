import { factions } from "../data/factions";

export default function Factions() {

  return (
    <div className="pg">
      <div className="ph">
        <div className="ph-icon">🛡️</div>
        <div>
          <div className="ph-title">Factions</div>
          <div className="ph-sub">Groups shaping the world’s politics</div>
        </div>
      </div>

      <div className="card-grid grid-2">
        {factions.map((f : any) => (
          <div className="card" key={f.name}>
            <div className="card-icon">{f.icon}</div>
            <div className="card-title">{f.name}</div>
           <div
                className="card-desc"
                dangerouslySetInnerHTML={{ __html: f.details }}
                />


          </div>
        ))}
      </div>
    </div>
  );
}
