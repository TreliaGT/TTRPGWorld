export type Area = {
  id: string;
  name: string;
  short: string;
  long: string;
};

export type WorldLayer =
  | {
      id: string;
      name: string;
      desc: string;
      details: string;
      areas: Area[];
    }
  | {
      id: string;
      name: string;
      desc: string;
      details: string;
      areas?: undefined;
    };

export const worldLayers: WorldLayer[] = [
      {
    id: "heldidon",
    name: "Heldidon",
    desc: "Hel · di · don — the home world",
     areas: [
      {
        id: "embermere",
        name: "Embermere",
        short: "Coastal City · Trade Hub · Royal Seat",
        long: `<h2>Overview</h2>
<p>
  A vibrant coastal city nestled between jagged cliffs and the shimmering sea. 
  Known for fiery sunsets, bustling docks, and the royal House Embermantle. 
  A melting pot of trade, culture, and mystery.
</p>

<h2>Districts</h2>

<h3>The Ember Docks</h3>
<p>
  Sprawling wooden piers, fishmongers, sailor taverns, and smuggler alleys. 
  Run by dockmaster <strong>Alexander Tidecaller</strong>, a retired pirate turned bureaucrat.
</p>

<h3>The Ashen Market</h3>
<p>
  A chaotic, colorful bazaar of exotic goods and magical trinkets. 
  Overseen by <strong>Selka Vint</strong>. The central fountain is rumoured to grant luck.
</p>

<h3>The Emberkeep</h3>
<p>
  A blackstone and crimson marble castle atop the cliffs. 
  Contains a hidden vault of ancient relics. Guarded by the <strong>Crimson Knights</strong>.
</p>

<h2>Royal House Embermantle</h2>
<p>
  Descended from the city's founders. Members bear flame-shaped birthmarks and 
  bloodlines tied to elemental fire. 
  <br><strong>Crest:</strong> a phoenix rising from embers.
</p>

<p>
  <strong>Current Monarch:</strong> Queen Maerlyn Embermantle  
  <br><strong>Heir:</strong> Prince Kaelen Embermantle
</p>

<h2>Key NPCs</h2>
<ul>
  <li>Queen Maerlyn Embermantle</li>
  <li>Prince Kaelen Embermantle</li>
  <li>Alexander Tidecaller</li>
  <li>Selka Vint</li>
</ul>

<h2>Factions Present</h2>
<ul>
  <li>Red Requiem (spotted in taverns)</li>
  <li>Golden Lantern (Gilded Net)</li>
  <li>Forgotten Compass</li>
  <li>Silent Honor</li>
</ul>

<h2>Festivals</h2>
<p>
  <strong>Flamewake Festival</strong> — Fire dances and sea lanterns celebrating the city's founding.
  <br>
  <strong>Tide's Bounty</strong> — A harvest celebration honouring the sea.
</p>

<h2>Rumours</h2>
<ul>
  <li>A secret passage beneath the docks leads to a forgotten temple.</li>
  <li>The market fountain may be a sealed magical conduit.</li>
  <li>Red Requiem agents have been spotted in the tavern row.</li>
</ul>
`
      },
      {
        id: "ashenford",
        name: "Ashenford",
        short: "Town · Mist-Shrouded · Enter at Your Own Risk",
        long: `<h2>Overview</h2>
<p>
  A town with a dark reputation that spreads further than its borders. 
  Green lanterns line cobblestone streets swallowed in ivy and perpetual mist. 
  No one outside Ashenford is entirely sure what goes on inside — only that travellers who stop here sometimes fail to continue their journey.
</p>

<h2>The Rumours</h2>
<p>
  Merchants avoid Ashenford when they can. Those who have passed through describe residents who seem... off. 
  Pale faces, slow movements, eyes that track you a little too carefully. 
  The mist never lifts — not even at noon.
</p>
<p>
  Some travellers report hearing whispers with no source. 
  A few have gone in and never been seen again, though the town's residents always say they simply “moved on.”
</p>

<h2>Atmosphere</h2>
<p>
  The roads leading out of Ashenford are watched. 
  The locals notice strangers immediately. 
  And there is always someone nearby — always just within earshot — listening.
</p>

<h2>Key NPCs</h2>
<ul>
  <li>Mo — Owner of <em>The Last Drink</em></li>
  <li>Mayor Greyveil</li>
</ul>

<h2>Notable Locations</h2>

<h3>The Last Drink</h3>
<p>
  A tavern that keeps its lights on late. Locals gather here. Strangers are watched.
</p>

<h3>Local Library</h3>
<p>
  Surprisingly well-stocked for such a small and cursed town. 
  Its shelves contain books that seem older than Ashenford itself.
</p>
`
      },
       {
        id: "scriptoria",
        name: "Scriptoria",
        short: "Arcane City · Leyline Nexus · Script-or-ia",
        long: `<h2>Overview</h2>
<p>
  The intellectual and magical heart of Heldidon, built atop a powerful leyline nexus. 
  Surrounded by jagged hills and ancient stone formations, the city hums with arcane resonance. 
  Floating towers, glowing glyphs, and whispering winds fill the streets with quiet brilliance.
</p>

<h2>Districts</h2>

<h3>The Inkspire Quarter</h3>
<p>
  The academic core of the city. Home to:
</p>
<ul>
  <li><strong>The Grand Lexicon</strong> — a living library that rearranges itself.</li>
  <li><strong>Quillspire Academy</strong> — the most prestigious magic school in Heldidon.</li>
  <li><strong>The Scriptorium</strong> — guild of scrollwrights, rune‑smiths, and archivists.</li>
</ul>

<h3>The Forgotten Compass Hub</h3>
<p>
  A cluster of observatories, vaults, and meditation chambers built around 
  <strong>The Eye of Memory</strong>, a leyline‑attuned focus crystal.  
  Notable sites include:
</p>
<ul>
  <li><strong>The Vault of Echoes</strong> — repository of preserved memories.</li>
  <li><strong>The Compass Table</strong> — a magical map that updates in real time.</li>
</ul>

<h2>Governance</h2>
<p>
  The city is ruled by <strong>The Arcane Conclave</strong>: seven archmages, one for each school of magic.  
  The current <strong>High Magus</strong> is <strong>Thalorin Vey</strong>, master of divination.
</p>
<p>
  <strong>Law:</strong> All magic above third tier must be registered with the Conclave.
</p>

<h2>Key NPCs</h2>
<ul>
  <li>Andrew Rivers — wandering scholar with ties to the Grand Lexicon.</li>
  <li>Thalorin Vey — High Magus and divination master.</li>
</ul>

<h2>Portal to Codexia</h2>
<p>
  Hidden within the Forgotten Compass Hub.  
  Disguised as an ordinary object — only Keepers know the unlock sigil.  
  The portal shifts location weekly to prevent misuse.
</p>

<h2>Rumours</h2>
<ul>
  <li>A hidden vault beneath Quillspire Academy contains forbidden chronomancy texts.</li>
  <li>Red Requiem spies may be infiltrating the Emberglass Ward.</li>
  <li>The Grand Lexicon once spoke aloud — and hasn’t since.</li>
</ul>
`
    },
       {
        id: "rivenshield",
        name: "Rivenshield",
        short: "Dwarven Town · Elven Ruins · River Valley",
        long: `<h2>Overview</h2>
<p>
  Nestled in a rocky valley where the local river winds past ancient elven ruins, 
  Rivenshield thrives on water power and dwarven ingenuity. 
  Known across Heldidon for producing the finest blacksmithing and metalwork in the realm.
</p>

<h2>Lore</h2>
<p>
  Long ago, the elves built a river settlement here — a graceful place of marble bridges and 
  flowing water channels. When trolls razed it, only a single elven child survived. 
  The dwarves of the valley took her in and raised her as their own.
</p>
<p>
  Despite this deep bond, elves and dwarves continued to live separately, each respecting 
  the boundaries of their lands. The moss‑covered ruins that remain are a constant reminder 
  of what once stood here.
</p>

<h2>The Elven Ruins</h2>
<p>
  Ancient marble pillars and broken archways stand close to the town, overgrown with vines 
  and river moss. The last elf of the valley, <strong>Trelia Spring</strong>, trains here daily. 
  Tall, lithe, and disciplined, she is a striking contrast to her stout dwarven neighbours.
</p>

<h2>Key NPCs</h2>
<ul>
  <li><strong>Trelia Spring</strong> — Warrior elf and protector of the ruins.</li>
  <li><strong>Grandpa Joseph Spring</strong> — Town leader and Trelia’s adoptive grandfather.</li>
  <li><strong>Henry Stone</strong> — Head blacksmith and second‑in‑command of Rivenshield.</li>
</ul>
`
    },
     {
        id: "thornspire",
        name: "Thornspire Hub",
        short: "Adventurer's Hub · Tavern · Quest Board",
        long: `<h2>Overview</h2>
<p>
  The most well-known adventurer's hub in Heldidon. A towering spire offering ample lodging, 
  a lively tavern with a performance stage, a well-stocked bar, and a notice board brimming 
  with quests. Travellers from across the realm pass through its gates daily, making it one 
  of the busiest crossroads in the continent.
</p>

<h2>Mira Thornspire</h2>
<p>
  The hub's eccentric manager. Mira is always found somewhere in the building, greeting 
  adventurers with an enthusiasm that borders on unsettling. They wear either a comedy or 
  tragedy mask depending on their mood, switching between them without warning.
</p>
<p>
  No one has ever seen Mira leave the premises — and strangely, no one has ever questioned 
  why. Some whisper that the spire itself is bound to them, or that Mira is far older than 
  they appear.
</p>

<h2>Key NPCs</h2>
<ul>
  <li><strong>Mira Thornspire</strong> — Eccentric manager of the hub.</li>
  <li><strong>Sapphire Merflare</strong> — A charismatic bard who performs nightly on the tavern stage.</li>
</ul>
`
     },
      {
        id: "Lexorith",
        name: "Lexorith Manor",
        short: "Villain Lair · Mountain Peak · Red Requiem HQ",
        long: `<h2>Overview</h2>
<p>
  Perched on a lonely mountain peak, Lexorith Manor appears from the outside to be nothing more 
  than a quiet homestead — weathered stone, creaking shutters, and a single lantern burning in 
  the window. Inside, however, lies the true horror. The manor is the central headquarters of 
  the <strong>Red Requiem</strong> and the personal domain of the infamous <strong>Madam Red</strong>.
</p>

<h2>Madam Red</h2>
<p>
  A striking figure with long, beautiful black hair and a noble red dress that trails behind her 
  like spilled wine. A leather booklet is always in her hand, and a quill feather rests tucked 
  into her hair. Her lips are stained a deep, unnatural red.
</p>
<p>
  Madam Red is a master of deals and manipulation — charming, mysterious, and utterly ruthless. 
  Those who enter her manor rarely leave unchanged, and some never leave at all.
</p>

<h2>Key NPCs</h2>
<ul>
  <li><strong>Madam Red</strong> — Leader of the Red Requiem.</li>
  <li><strong>Lucy</strong> — Second Commander, known for her cold precision.</li>
</ul>

<h2>Rose Coins</h2>
<p>
  The Red Requiem mints its own currency within the manor: <strong>Rose Coins</strong>. 
  Each coin is stamped with a blooming rose and carries a faint metallic scent. 
  They are banned in Embermere and rumoured to be forged from the melted jewellery of the 
  Requiem’s victims.
</p>
`
     }
 ],
    details: ` Home to places like : Embermere, Scriptoria , Ashenford , Rivenshield, Lexorith Manor. <br>
eldidon is the seat of the known world — a land of ancient curses and fiery coastlines, of whispering forests older than memory and desert oases glittering with impossible crystals. It is a world shaped equally by those who build and those who burn, where adventurers rise from tavern doors and vanish into legend.
`
  },
  {
    id: "terravolca",
    name: "Terravolca",
    desc: "Ter · ra · vol · ca — the Dino Realm",
    areas: [
        {
  "id": "emberfang-village",
  "name": "Emberfang Village",
  "short": "A secluded tribal village led by an elder and guarded by a one‑armed warrior.",
  "long": `
    <h2>Overview</h2>
    <p>
      Deep within Terravolca’s volcanic wildlands lies a secluded tribal village perched between 
      obsidian cliffs and steaming geysers. Though small, the settlement is fiercely self‑reliant, 
      shaped by generations of survival against beasts, heat, and the shifting earth. 
      The tribe’s traditions are ancient, and outsiders are rarely welcomed without purpose.
    </p>

    <h2>The Elder</h2>
    <p>
      The village is led by an elderly woman known simply as <strong>The Emberfang Elder</strong>. 
      Her age is impossible to guess — some say she has lived through three eruptions, others claim 
      she was blessed by the fire spirits themselves. She carries a staff carved from cooled magma 
      and speaks with a calm authority that silences even the fiercest warriors.
    </p>
    <p>
      Her wisdom guides every hunt, every ritual, and every judgment. When she speaks, the entire 
      village listens.
    </p>

    <h2>The One‑Armed Guard</h2>
    <p>
      The tribe’s most respected warrior is a towering guardian known as 
      <strong>Rokhan the One‑Arm</strong>. He lost his right arm fighting a sea beast with adventurers.
    
    </p>
    <p>
      Rokhan fights with a heavy obsidian‑bladed spear, wielded one‑handed with terrifying precision. 
      Children idolize him. Outsiders fear him. The Elder trusts him above all others.
    </p>

    <h2>Village Life</h2>
    <ul>
      <li>Huts are built from hardened lava rock and woven reed.</li>
      <li>Meals consist of smoked beast meat, volcanic herbs, and mineral‑rich springwater.</li>
      <li>Nightly rituals honor the fire and water spirits, with drums echoing across the valley.</li>
      <li>Visitors must undergo a cleansing ash ritual before entering the inner circle.</li>
    </ul>

    <h2>Rumours</h2>
    <ul>
      <li>The Elder can speak directly to the volcano & Aqua spirits.</li>
      <li>A hidden cavern beneath the village contains ancient Terravolcan carvings.</li>
    </ul>
  `
}

    ],
    details: `
Volcanic lands of primordial beasts and molten plains. Dangerous, primal, and filled with Cinderkith ancestry.
`
  },
  {
    id: "codexia",
    name: "Codexia",
    desc: "Code · ex · ia — the Library",
    details: `
  <h2>Overview</h2>
  <p>
    Codexia is an extradimensional realm — a world-sized library existing just beyond the veil 
    of Heldidon. Though not chaotic or shifting at random, its scale and architecture defy 
    anything found in the mortal world. The Forgotten Compass maintains hidden portals to 
    Codexia in Scriptoria and Embermere, used only by trusted scholars and Keepers.
  </p>

  <h2>The Library Realm</h2>
  <p>
    Codexia is built like a vast, ancient library-city. Towering shelves rise like buildings, 
    connected by bridges, walkways, and spiral staircases. Massive reading halls stretch for 
    miles. Quiet courtyards of stone and ivy sit between archive wings. 
  </p>
  <p>
    The realm is stable and physical — no shifting walls or impossible geometry — but its 
    sheer size makes it feel endless. Some wings have not been fully explored in centuries.
  </p>

  <h2>The Spider Librarian</h2>
  <p>
    Watching over the entire realm is an ancient giant spider known as 
    <strong>The Archivist</strong>. It dwells on the upper rafters and stone beams, 
    always positioned high above the shelves where it can observe every level at once.
  </p>
  <p>
    The Archivist is intelligent, silent, and impossibly old. Its ink-black chitin is etched 
    with faint runes, and its many eyes reflect lanternlight like polished glass. 
    It rarely intervenes — unless a visitor mishandles a book.
  </p>

  <h2>Atmosphere</h2>
  <p>
    Codexia is quiet, solemn, and timeless. Lanterns burn with steady magical flame. 
    The air is cool and dry. The only sounds are turning pages, distant footsteps, 
    and the soft creak of the Archivist shifting its weight overhead.
  </p>

  <h2>Rumours</h2>
  <ul>
    <li>The Archivist predates the library itself.</li>
    <li>There is a sealed sub‑level containing books written in languages no one remembers.</li>
    <li>The Forgotten Compass keeps a private archive somewhere deep within the realm.</li>
  </ul>
`

  },
  {
    id: "vethara",
    name: "Vethara",
    desc: "Veth · a · ra — the Realm of Remorse",
    details: `

  <h2>Overview</h2>

  <p>
    <strong>Vethara</strong> is not a prison of walls — it is a prison of the self. 
    A dimension that responds entirely to the remorse of whoever walks within it. 
    Those who carry guilt and genuinely reckon with it will find the path forward lit and gentle. 
    Those who feel nothing for what they have done will find only darkness, dead ends, and watching eyes.
  </p>

  <blockquote>
    "The maze does not punish you. It simply shows you yourself — and waits."
  </blockquote>

  <h3>The Demi-God — Varek the Unwritten</h3>

  <p>
    <strong>Varek</strong> is a chaotic demi-god who resides in a vast palace at the heart of Vethara. 
    They are unpredictable in personality — sometimes gentle and philosophical, sometimes maddening — 
    but their purpose is unwavering: to judge not by law, but by genuine remorse.
  </p>

  <p>
    Varek did not build Vethara as a punishment. They built it as a mirror. 
    Those who earn their way to the palace and stand before Varek honestly may be granted freedom. 
    Those who arrive in defiance are simply returned to the maze.
  </p>

  <h3>🕊️ The Doves — Signs of Remorse</h3>

  <p>
    White doves appear to those who are genuinely grappling with their guilt. 
    The more honest a person is with themselves about what they have done, the more doves gather around them. 
    A single dove means a flicker of conscience. A flock means the path to Varek's palace is near.
  </p>

  <p>
    Doves lead the way — follow them and the maze's walls stay still, the corridors open, the light holds. 
    They cannot be lied to or manipulated. Performed remorse earns nothing. <strong>The doves know.</strong>
  </p>

  <h3>🦅 The Ravens — Signs of No Remorse</h3>

  <p>
    Black ravens appear to those who feel nothing for what they have done — or worse, who feel pride. 
    A single raven watching means the maze has taken notice. More ravens mean the corridors will begin shifting, 
    walls closing, paths looping back on themselves endlessly.
  </p>

  <p>
    A person surrounded by ravens and no doves may wander Vethara forever, never finding the palace, 
    never finding the way out. Ravens do not attack. They simply watch — and the maze responds to what they see.
  </p>

  <h3>The Path to the Palace</h3>

  <p>
    There is no map to Varek's palace. The only guide is the doves. 
    Those who follow them honestly — sitting with their guilt, acknowledging their crimes aloud or in their heart — 
    will find the corridors lengthening into grand halls, the dark softening, and eventually the palace gates ahead.
  </p>

  <p>
    The journey is different for everyone. Some arrive in hours. Others take years.
  </p>

  <h3>Varek's Judgement</h3>

  <p>
    Standing before Varek is unlike any trial. There is no argument, no defence. 
    Varek simply looks at a person and asks one question — always different, always the one question the person least wants to answer.
  </p>

  <p>
    Those who answer honestly, regardless of how ugly the truth is, are granted freedom and returned to Heldidon. 
    Those who lie, deflect, or perform are returned to the start of the maze to try again.
  </p>

  <h3>The Banishment Spell</h3>

  <p>
    Sending someone to Vethara requires the <strong>Vetharan Banishment</strong> — a spell known only to the Forgotten Compass. 
    It is never written down, passed only verbally between senior Keepers.
  </p>

  <p>
    However, the spell only works one way. The Forgotten Compass can send people into Vethara — 
    but they have no spell to bring anyone back out. Once inside, even a senior Keeper must face the maze like everyone else. 
    <strong>The only way out is through Varek.</strong>
  </p>



`
  }
];
