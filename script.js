const REGIONS = {
  central: { label: "Central", gradient: "linear-gradient(135deg, #010066, #4b3fb5)" },
  north: { label: "Northern", gradient: "linear-gradient(135deg, #0f766e, #34d399)" },
  south: { label: "Southern", gradient: "linear-gradient(135deg, #b45309, #fbbf24)" },
  east: { label: "East Coast", gradient: "linear-gradient(135deg, #0369a1, #38bdf8)" },
  borneo: { label: "Borneo", gradient: "linear-gradient(135deg, #166534, #84cc16)" },
};

const CITIES = [
  {
    name: "Kuala Lumpur", state: "Federal Territory", region: "central", emoji: "🏙️",
    tagline: "The vibrant capital, where skyscrapers meet street food.",
    desc: "Malaysia's capital and largest city grew from a 19th-century tin-mining settlement at the confluence of the Klang and Gombak rivers into a modern metropolis known for its skyline, shopping and multicultural food scene.",
    highlights: ["Petronas Twin Towers", "Merdeka Square", "Bukit Bintang", "Jalan Alor night food street", "Batu Caves (just outside the city)"],
    food: ["Nasi lemak", "Roti canai", "Bak kut teh", "Satay"],
  },
  {
    name: "Putrajaya", state: "Federal Territory", region: "central", emoji: "🕌",
    tagline: "The planned garden city and federal administrative centre.",
    desc: "Developed from the 1990s as the seat of the federal government, Putrajaya is a planned city of grand boulevards, bridges and a large man-made lake.",
    highlights: ["Putra Mosque", "Perdana Putra", "Putrajaya Lake cruise", "Seri Wawasan Bridge", "Iron Mosque (Masjid Tuanku Mizan)"],
    food: ["Nasi kandar", "Ikan bakar", "Teh tarik"],
  },
  {
    name: "Shah Alam", state: "Selangor", region: "central", emoji: "💙",
    tagline: "Selangor's state capital, home of the iconic Blue Mosque.",
    desc: "Shah Alam is Selangor's planned state capital, known for its lakes, parks and the striking Sultan Salahuddin Abdul Aziz Mosque.",
    highlights: ["Sultan Salahuddin Abdul Aziz Mosque (Blue Mosque)", "i-City", "Shah Alam Lake Gardens", "Setia Alam night market"],
    food: ["Nasi lemak", "Mee rebus", "Satay Kajang (nearby)"],
  },
  {
    name: "George Town", state: "Penang", region: "north", emoji: "🎨",
    tagline: "UNESCO heritage streets, street art and legendary hawker food.",
    desc: "Founded in 1786, George Town's colonial architecture and shophouses earned UNESCO World Heritage status in 2008 together with Melaka. It is widely regarded as Malaysia's street-food capital.",
    highlights: ["Armenian Street murals", "Penang Hill", "Kek Lok Si Temple", "Clan jetties", "Cheong Fatt Tze Mansion"],
    food: ["Char kway teow", "Penang asam laksa", "Cendol", "Nasi kandar"],
  },
  {
    name: "Ipoh", state: "Perak", region: "north", emoji: "☕",
    tagline: "Tin-mining heritage, limestone caves and white coffee.",
    desc: "Ipoh prospered during the tin-mining boom. Today it is loved for its old town, cave temples set into limestone hills and its relaxed café culture.",
    highlights: ["Ipoh Old Town & Concubine Lane", "Kek Lok Tong cave temple", "Kellie's Castle", "Gunung Lang Recreational Park"],
    food: ["Ipoh white coffee", "Bean sprout chicken", "Hor fun", "Salted chicken"],
  },
  {
    name: "Alor Setar", state: "Kedah", region: "north", emoji: "🌾",
    tagline: "Royal capital of Malaysia's rice bowl.",
    desc: "The capital of Kedah sits amid vast paddy fields. It has a rich royal history and is the gateway to the island of Langkawi.",
    highlights: ["Zahir Mosque", "Alor Setar Tower", "Paddy Museum", "Balai Besar"],
    food: ["Laksa Kedah", "Nasi ulam", "Mee abu"],
  },
  {
    name: "Kangar", state: "Perlis", region: "north", emoji: "⛰️",
    tagline: "Quiet capital of Malaysia's smallest state.",
    desc: "Kangar is the capital of Perlis, a small state of limestone hills and rice fields bordering Thailand.",
    highlights: ["Perlis State Park", "Gua Kelam cave", "Padang Besar border market"],
    food: ["Harumanis mango", "Laksa Perlis"],
  },
  {
    name: "Malacca City", state: "Melaka", region: "south", emoji: "🏰",
    tagline: "Historic trading port with Portuguese, Dutch and British layers.",
    desc: "Once one of the great trading ports of Southeast Asia, Melaka's historic centre is a UNESCO World Heritage Site with landmarks from the Malacca Sultanate and colonial eras.",
    highlights: ["A Famosa", "Christ Church & Dutch Square", "Jonker Street night market", "Melaka River cruise", "St. Paul's Hill"],
    food: ["Chicken rice balls", "Nyonya laksa", "Cendol gula Melaka", "Satay celup"],
  },
  {
    name: "Johor Bahru", state: "Johor", region: "south", emoji: "🌉",
    tagline: "The southern gateway, just across the causeway from Singapore.",
    desc: "Malaysia's southernmost major city is a fast-growing hub for trade, shopping and family attractions in the Iskandar region.",
    highlights: ["Sultan Abu Bakar State Mosque", "Istana Besar", "LEGOLAND Malaysia (Iskandar Puteri)", "Johor Bahru Old Chinese Temple"],
    food: ["Laksa Johor", "Mee rebus", "Otak-otak"],
  },
  {
    name: "Seremban", state: "Negeri Sembilan", region: "south", emoji: "🏛️",
    tagline: "Minangkabau heritage and famous siew pau.",
    desc: "The capital of Negeri Sembilan reflects the state's Minangkabau roots, seen in the distinctive upswept roofs of its traditional buildings.",
    highlights: ["Negeri Sembilan State Museum", "Seremban Lake Gardens", "Port Dickson beaches (nearby)"],
    food: ["Seremban siew pau", "Masak lemak cili api", "Beef noodles"],
  },
  {
    name: "Kuantan", state: "Pahang", region: "east", emoji: "🏖️",
    tagline: "Beaches and rainforest on the east coast.",
    desc: "Pahang's capital is a laid-back coastal city with sandy beaches and easy access to rainforest, waterfalls and old mining towns.",
    highlights: ["Teluk Cempedak beach", "Sultan Ahmad Shah State Mosque", "Sungai Lembing", "Gua Charas"],
    food: ["Ikan patin tempoyak", "Keropok lekor", "Satar"],
  },
  {
    name: "Kuala Terengganu", state: "Terengganu", region: "east", emoji: "🛶",
    tagline: "Crystal Mosque, Malay crafts and island gateways.",
    desc: "A coastal capital known for traditional Malay crafts such as batik and songket, and as a gateway to islands like Redang and the Perhentians.",
    highlights: ["Crystal Mosque", "Kampung Cina (Chinatown)", "Pasar Payang", "Islamic Civilisation Park"],
    food: ["Nasi dagang", "Keropok lekor", "Laksam"],
  },
  {
    name: "Kota Bharu", state: "Kelantan", region: "east", emoji: "🪁",
    tagline: "Heartland of Malay culture, crafts and colourful markets.",
    desc: "Kota Bharu is a centre of traditional Malay arts — from kite-making (wau) to shadow puppetry — and home to one of the country's liveliest markets.",
    highlights: ["Siti Khadijah Market", "Istana Jahar", "Kelantan Royal Museum", "Wau kite makers"],
    food: ["Nasi kerabu", "Ayam percik", "Solok lada"],
  },
  {
    name: "Kuching", state: "Sarawak", region: "borneo", emoji: "🐱",
    tagline: "The 'Cat City' on the Sarawak River.",
    desc: "Sarawak's capital charms visitors with its riverfront, colonial buildings and access to national parks full of proboscis monkeys and orangutans.",
    highlights: ["Kuching Waterfront", "Sarawak Cultural Village", "Bako National Park", "Semenggoh Wildlife Centre", "Fort Margherita"],
    food: ["Sarawak laksa", "Kolo mee", "Kek lapis Sarawak"],
  },
  {
    name: "Miri", state: "Sarawak", region: "borneo", emoji: "🛢️",
    tagline: "Oil town and gateway to Borneo's great caves.",
    desc: "Malaysia's first oil well was drilled at Miri in 1910. Today the city is the jumping-off point for Niah and Gunung Mulu national parks.",
    highlights: ["Canada Hill & the Grand Old Lady", "Gunung Mulu National Park", "Niah National Park", "Coral reefs offshore"],
    food: ["Kampua mee", "Mee kolok", "Umai"],
  },
  {
    name: "Kota Kinabalu", state: "Sabah", region: "borneo", emoji: "🏔️",
    tagline: "Island-hopping, sunsets and Mount Kinabalu.",
    desc: "Sabah's capital is a lively coastal city with offshore islands just minutes away and Mount Kinabalu, Malaysia's highest peak, a short drive inland.",
    highlights: ["Tunku Abdul Rahman Park", "Gaya Street Sunday market", "Kinabalu Park (UNESCO)", "Signal Hill Observatory"],
    food: ["Hinava", "Tuaran mee", "Sabah seafood"],
  },
  {
    name: "Sandakan", state: "Sabah", region: "borneo", emoji: "🦧",
    tagline: "Orangutans, sun bears and the Kinabatangan River.",
    desc: "A historic port on Sabah's east coast and the main base for wildlife encounters in the lowland rainforests of Borneo.",
    highlights: ["Sepilok Orangutan Rehabilitation Centre", "Bornean Sun Bear Conservation Centre", "Kinabatangan River cruise", "Agnes Keith House"],
    food: ["Fresh seafood", "Sandakan dim sum"],
  },
];

const $ = (sel) => document.querySelector(sel);
const grid = $("#grid");
const search = $("#search");
const filters = $("#filters");
const count = $("#count");
const empty = $("#empty");
const modal = $("#modal");

let activeRegion = "all";

function renderFilters() {
  const options = [["all", "All regions"], ...Object.entries(REGIONS).map(([k, v]) => [k, v.label])];
  filters.innerHTML = "";
  for (const [key, label] of options) {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = label;
    btn.setAttribute("aria-pressed", String(key === activeRegion));
    btn.addEventListener("click", () => {
      activeRegion = key;
      renderFilters();
      renderCities();
    });
    filters.appendChild(btn);
  }
}

function matches(city, q) {
  if (!q) return true;
  const haystack = [city.name, city.state, city.tagline, ...city.highlights, ...city.food].join(" ").toLowerCase();
  return haystack.includes(q);
}

function renderCities() {
  const q = search.value.trim().toLowerCase();
  const list = CITIES.filter((c) => (activeRegion === "all" || c.region === activeRegion) && matches(c, q));

  grid.innerHTML = "";
  for (const city of list) {
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `
      <div class="card-banner" style="background:${REGIONS[city.region].gradient}">
        <span class="badge">${REGIONS[city.region].label}</span>
        <span aria-hidden="true">${city.emoji}</span>
      </div>
      <div class="card-body">
        <h3>${city.name}</h3>
        <p class="card-state">${city.state}</p>
        <p class="card-tagline">${city.tagline}</p>
      </div>`;
    card.addEventListener("click", () => openCity(city));
    grid.appendChild(card);
  }

  count.textContent = `Showing ${list.length} of ${CITIES.length} cities`;
  empty.hidden = list.length > 0;
}

function openCity(city) {
  $("#modal-banner").style.background = REGIONS[city.region].gradient;
  $("#modal-emoji").textContent = city.emoji;
  $("#modal-state").textContent = `${city.state} · ${REGIONS[city.region].label}`;
  $("#modal-title").textContent = city.name;
  $("#modal-desc").textContent = city.desc;
  $("#modal-highlights").innerHTML = city.highlights.map((h) => `<li>${h}</li>`).join("");
  $("#modal-food").innerHTML = city.food.map((f) => `<span class="tag">${f}</span>`).join("");
  modal.showModal();
}

$("#modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
search.addEventListener("input", renderCities);
$("#year").textContent = new Date().getFullYear();

renderFilters();
renderCities();
