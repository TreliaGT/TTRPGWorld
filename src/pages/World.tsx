import { useState } from "react";
import { worldLayers } from "../data/worldLayers";
import Card from "../components/Card";
import Modal from "../components/Modal";

export type Area = {
  id: string;
  name: string;
  short: string;
  long: string;
};



export default function World() {
  const [active, setActive] = useState("heldidon");
  const [openArea, setOpenArea] = useState<any>(null);

 const layer = worldLayers.find((l) => l.id === active);


  // Safety guard — prevents crashes if data is missing
  if (!layer) {
    return <div className="pg">Layer not found.</div>;
  }

  return (
    <div className="pg world-layout">

      {/* LEFT TABS (desktop only) */}
      <div className="world-tabs">
        {worldLayers.map((l) => (
            <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={active === l.id ? "on world-tab" : "world-tab"} 
            >
                {l.name}
            </button>
            ))}

      </div>

      {/* RIGHT CONTENT */}
      <div className="world-content">

        {/* PANEL (desktop) / ACCORDION (mobile) */}
        <div
          className="world-panel show"
          data-title={` ${layer.name}`}
        >
          <h2 className="layer-title">
            {layer.name}
          </h2>

          <p className="layer-desc">{layer.desc}</p>

          <div
            className="layer-details"
            dangerouslySetInnerHTML={{ __html: layer.details }}
          ></div>

          {/* AREA CARDS */}
          {layer.areas && layer.areas.length > 0 && (
            <>
              <h3 className="area-header">Areas in this Realm</h3>

              <div className="card-grid">
                {layer?.areas && layer.areas.map((a) => (
                  <Card
                    key={a.id}
                    title={a.name}
                    subtitle={a.short}
                    onClick={() => setOpenArea(a)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* MODAL FOR AREA DETAILS */}
      <Modal
        open={!!openArea}
        onClose={() => setOpenArea(null)}
        title={openArea?.name}
      >
        <div
          dangerouslySetInnerHTML={{ __html: openArea?.long || "" }}
        ></div>
      </Modal>
    </div>
  );
}
