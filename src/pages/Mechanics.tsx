export default function Mechanics() {
  return (
    <div className="pg">
      <div className="ph">
        <div className="ph-icon">🪓</div>
        <div>
          <div className="ph-title">Harvest & Loot System</div>
          <div className="ph-sub">A Daggerheart‑style mechanic for gathering materials</div>
        </div>
      </div>

      <div className="lore-block">
        <h2>Overview</h2>
        <p>
          The Harvest & Loot system allows characters to gather valuable materials from defeated
          creatures, rare plants, magical anomalies, and natural resources. These components are
          used for crafting, rituals, upgrades, and alchemy. Harvesting is never guaranteed —
          the quality and rarity of what you obtain depends on the roll.
        </p>
      </div>

      <div className="lore-block">
        <h2>How Harvesting Works</h2>
        <p>
          After a creature is defeated or a resource is safely accessible, a player makes a
          <strong> Harvest Check</strong>. This roll typically uses <strong>Knowledge</strong> or
          <strong> Instinct</strong>, depending on whether the character relies on anatomical
          knowledge or survival intuition. Tools such as knives, harvest kits, or ritual implements
          may grant bonuses.
        </p>
      </div>

      <div className="lore-block">
        <h2>Roll Outcomes</h2>
        <p>
          Harvesting uses a three‑tier outcome system that determines the quality and rarity of
          what is gathered.
        </p>

        <h3>Failure (Miss)</h3>
        <ul>
          <li>No usable materials are recovered.</li>
          <li>The resource is damaged, unstable, or cursed.</li>
          <li>A complication may occur — toxic fumes, magical backlash, or lingering curses.</li>
        </ul>

        <h3>Success (Hit)</h3>
        <ul>
          <li>1–2 standard materials appropriate to the creature or resource.</li>
          <li>Common or Uncommon items such as hides, essences, herbs, or claws.</li>
          <li>Safe, predictable results.</li>
        </ul>

        <h3>Strong Hit (Critical)</h3>
        <ul>
          <li>Rare or high‑quality materials.</li>
          <li>Bonus quantity or pristine condition.</li>
          <li>Unique components tied to the creature’s lore.</li>
        </ul>
      </div>

      <div className="lore-block">
        <h2>Rarity Tiers</h2>
        <p>Every harvested item falls into one of four rarity categories:</p>
        <ul>
          <li><strong>Common</strong> — hides, bones, herbs.</li>
          <li><strong>Uncommon</strong> — essences, enchanted fibers.</li>
          <li><strong>Rare</strong> — elemental glands, heart cores, spirit threads.</li>
          <li><strong>Mythic</strong> — phoenix ash, void marrow, drake soulstones.</li>
        </ul>
      </div>

      <div className="lore-block">
        <h2>Uses & Effects</h2>
        <p>Harvested materials can be used for:</p>
        <ul>
          <li>Brewing potions and elixirs.</li>
          <li>Cooking Ingredients</li>
          <li>Upgrading weapons and armor.</li>
          <li>Performing rituals and enchantments.</li>
          <li>Faction‑specific crafting (Red Requiem poisons, Compass sigils, etc.).</li>
        </ul>
        <p>
          Some materials have passive effects simply by being carried — glowing near illusions,
          radiating warmth, or whispering warnings.
        </p>
      </div>

      <div className="lore-block">
        <h2>Complications</h2>
        <p>
          Harvesting dangerous or magical creatures may trigger complications on a miss or risky
          attempt:
        </p>
        <ul>
          <li>Toxic exposure or venom splash.</li>
          <li>Magical backlash or unstable essence.</li>
          <li>Curses or spiritual contamination.</li>
          <li>Attracting predators or lingering spirits.</li>
        </ul>
      </div>

      <div className="lore-block">
        <h2>Optional Rules</h2>
        <ul>
          <li><strong>Tool Bonuses:</strong> Harvest kits grant +1 or advantage.</li>
          <li><strong>Creature Knowledge:</strong> Lore skills reveal what parts are valuable.</li>
          <li><strong>Decay Timers:</strong> Some materials spoil unless preserved quickly.</li>
        </ul>
      </div>
    </div>
  );
}
