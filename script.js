const CATEGORIES = {
  islands: { label: "Islands", gradient: "linear-gradient(135deg, #0369a1, #22d3ee)" },
  beaches: { label: "Beaches", gradient: "linear-gradient(135deg, #b45309, #fcd34d)" },
  nature: { label: "Waterfalls & Nature", gradient: "linear-gradient(135deg, #166534, #84cc16)" },
  towns: { label: "Towns & Food", gradient: "linear-gradient(135deg, #9f1239, #fb7185)" },
};

const PLACES = [
  {
    name: "Perhentian Kecil", area: "Perhentian Islands", category: "islands", emoji: "🏝️",
    tagline: "The smaller, livelier island with powdery beaches and backpacker charm.",
    desc: "A short speedboat ride from Kuala Besut, Perhentian Kecil is famous for turquoise water, coral reefs close to shore and a relaxed, barefoot vibe.",
    highlights: ["Long Beach (Pasir Panjang)", "Coral Bay sunsets", "Jungle trails between bays", "Romantic Beach"],
    activities: ["Snorkelling", "Scuba diving", "Island hopping", "Beach cafés"],
  },
  {
    name: "Perhentian Besar", area: "Perhentian Islands", category: "islands", emoji: "🐢",
    tagline: "The bigger, calmer island — great for families and turtle spotting.",
    desc: "Perhentian Besar offers quieter beaches, family-friendly resorts and some of the best chances to swim alongside green turtles.",
    highlights: ["Teluk Pauh", "Turtle Beach", "Three Coves Bay", "Shark Point snorkelling"],
    activities: ["Swimming with turtles", "Kayaking", "Diving courses", "Sunset dinners"],
  },
  {
    name: "Pulau Susu Dara", area: "Perhentian Marine Park", category: "islands", emoji: "🐠",
    tagline: "Tiny islets with some of the clearest snorkelling water around.",
    desc: "A popular stop on Perhentian island-hopping tours, Susu Dara's reefs are home to colourful fish, coral gardens and the occasional reef shark.",
    highlights: ["Coral gardens", "Reef fish & clownfish", "Calm, clear water"],
    activities: ["Snorkelling tours", "Underwater photography", "Diving"],
  },
  {
    name: "Pantai Bukit Keluang", area: "Near Kuala Besut", category: "beaches", emoji: "🌊",
    tagline: "A dramatic headland beach with sea caves and hilltop views.",
    desc: "One of Besut's best-loved mainland spots, Bukit Keluang combines a wide sandy beach with a rocky headland, sea caves and a recreational park.",
    highlights: ["Sea caves at low tide", "Hilltop viewpoint", "Recreational park & picnic areas", "Sunrise over the South China Sea"],
    activities: ["Beach picnics", "Cave exploring", "Photography", "Hiking"],
  },
  {
    name: "Pantai Air Tawar", area: "Kampung Air Tawar", category: "beaches", emoji: "🏖️",
    tagline: "A long, quiet stretch of casuarina-lined beach.",
    desc: "A peaceful village beach where local families come to relax, fly kites and enjoy fresh seafood by the sea.",
    highlights: ["Casuarina trees & shade", "Calm evening walks", "Local seafood stalls"],
    activities: ["Kite flying", "Beach walks", "Family picnics"],
  },
  {
    name: "Lata Belatan", area: "Near Jerteh", category: "nature", emoji: "💧",
    tagline: "Cool cascading waterfall pools in the forest.",
    desc: "A favourite weekend escape for locals, Lata Belatan's tiered waterfalls and natural pools are perfect for a refreshing dip.",
    highlights: ["Tiered waterfalls", "Natural rock pools", "Forest picnic spots"],
    activities: ["Swimming", "Picnicking", "Nature walks"],
  },
  {
    name: "Lata Tembakah", area: "Hulu Besut", category: "nature", emoji: "🌿",
    tagline: "A wide, multi-level waterfall surrounded by rainforest.",
    desc: "Further inland, Lata Tembakah is known for its broad cascades flowing over smooth rock terraces — a beautiful spot for families.",
    highlights: ["Multi-tier cascades", "Rainforest setting", "Shallow pools for kids"],
    activities: ["Swimming", "Camping", "Jungle trekking"],
  },
  {
    name: "Kuala Besut", area: "Coastal town", category: "towns", emoji: "⚓",
    tagline: "The bustling fishing town and gateway to the Perhentians.",
    desc: "Most island visitors pass through Kuala Besut's jetty, but it's worth lingering for the fishing boats, the riverside and freshly made keropok lekor.",
    highlights: ["Kuala Besut jetty", "Colourful fishing boats", "Riverside sunsets", "Keropok lekor makers"],
    activities: ["Seafood dining", "Keropok shopping", "Boat watching"],
  },
  {
    name: "Jerteh", area: "Town centre", category: "towns", emoji: "🛍️",
    tagline: "Besut's busiest town, full of markets and Terengganu flavours.",
    desc: "Jerteh is the commercial heart of Besut — the best place to stock up, try local breakfast favourites and browse the morning markets.",
    highlights: ["Pasar Jerteh (morning market)", "Local breakfast stalls", "Batik & songket shops"],
    activities: ["Nasi dagang breakfast", "Market browsing", "Souvenir shopping"],
  },
  {
    name: "Kampung Raja", area: "Historic town", category: "towns", emoji: "🏛️",
    tagline: "Besut's historic royal town by the Besut River.",
    desc: "Once the seat of Besut's local rulers, Kampung Raja is a laid-back riverside town with traditional Malay character and good local food.",
    highlights: ["Besut River views", "Traditional town centre", "Local night markets"],
    activities: ["Heritage walks", "Night market food", "Riverside strolls"],
  },
];

const $ = (sel) => document.querySelector(sel);
const grid = $("#grid");
const search = $("#search");
const filters = $("#filters");
const count = $("#count");
const empty = $("#empty");
const modal = $("#modal");

let activeCategory = "all";

function renderFilters() {
  const options = [["all", "All places"], ...Object.entries(CATEGORIES).map(([k, v]) => [k, v.label])];
  filters.innerHTML = "";
  for (const [key, label] of options) {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = label;
    btn.setAttribute("aria-pressed", String(key === activeCategory));
    btn.addEventListener("click", () => {
      activeCategory = key;
      renderFilters();
      renderPlaces();
    });
    filters.appendChild(btn);
  }
}

function matches(place, q) {
  if (!q) return true;
  const haystack = [place.name, place.area, place.tagline, ...place.highlights, ...place.activities].join(" ").toLowerCase();
  return haystack.includes(q);
}

function renderPlaces() {
  const q = search.value.trim().toLowerCase();
  const list = PLACES.filter((p) => (activeCategory === "all" || p.category === activeCategory) && matches(p, q));

  grid.innerHTML = "";
  for (const place of list) {
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `
      <div class="card-banner" style="background:${CATEGORIES[place.category].gradient}">
        <span class="badge">${CATEGORIES[place.category].label}</span>
        <span aria-hidden="true">${place.emoji}</span>
      </div>
      <div class="card-body">
        <h3>${place.name}</h3>
        <p class="card-state">${place.area}</p>
        <p class="card-tagline">${place.tagline}</p>
      </div>`;
    card.addEventListener("click", () => openPlace(place));
    grid.appendChild(card);
  }

  count.textContent = `Showing ${list.length} of ${PLACES.length} places`;
  empty.hidden = list.length > 0;
}

function openPlace(place) {
  $("#modal-banner").style.background = CATEGORIES[place.category].gradient;
  $("#modal-emoji").textContent = place.emoji;
  $("#modal-area").textContent = `${place.area} · ${CATEGORIES[place.category].label}`;
  $("#modal-title").textContent = place.name;
  $("#modal-desc").textContent = place.desc;
  $("#modal-highlights").innerHTML = place.highlights.map((h) => `<li>${h}</li>`).join("");
  $("#modal-activities").innerHTML = place.activities.map((a) => `<span class="tag">${a}</span>`).join("");
  modal.showModal();
}

$("#modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
search.addEventListener("input", renderPlaces);
$("#year").textContent = new Date().getFullYear();

renderFilters();
renderPlaces();
