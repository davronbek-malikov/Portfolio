// ============================================================================
//  PROJECTS DATA  —  single source of truth for the whole portfolio.
//  To add a new card (e.g. a Machine Learning Engineering project) just append
//  a new object to the `projects` array below. Everything renders automatically.
//
//  Field guide:
//    id        unique slug (used for anchors / keys)
//    n         card number shown on the card (e.g. "01")
//    title     project name
//    rarity    one of: "mythic" | "legendary" | "epic" | "rare" | "common"
//    cls       class line, e.g. "Orchestrator / Command Hub"
//    flavor    one-line italic tagline
//    motif     short keyword that picks the hero illustration ("hub","module",
//              "quant","twin","law","meeting","forge","enterprise","ml","custom")
//    stats     { PWR, SCL, AUT, INT, PLH }  each 0–100
//    extraStat optional { label, value } shown as a 6th highlighted meter
//    abilities array of strings (bullet points)
//    stack     array of tech chips
//    status    { state: "live"|"beta"|"rnd"|"proven", label }
//    links     { demo, github }  (either may be omitted)
//    group     used for the future "category" filter ("agent","platform","rnd","ml")
// ============================================================================

export const RARITY_ORDER = ["mythic", "legendary", "epic", "rare", "common"];

export const projects = [
  {
    id: "vip-agent",
    n: "01",
    title: "VIP Agent",
    rarity: "legendary",
    cls: "Orchestrator / Command Hub",
    flavor: "The brain that commands every other agent.",
    motif: "hub",
    group: "agent",
    stats: { PWR: 92, SCL: 95, AUT: 80, INT: 88, PLH: 85 },
    abilities: [
      "ask_agent — queries any sub-agent in-process (Asset · Stock · Realty · AI-Glass)",
      "Autonomous 7:05 AM market + real-estate reports, auto-emailed as Word docs",
      "RAG knowledge brain grounded in company reports (656 chunks)",
      "Multi-channel: web dashboard + KakaoTalk chatbot",
      "Live finance data: KIS derivatives, OnBid auctions, MOLIT 실거래가",
    ],
    stack: ["Next.js", "Python/FastAPI", "Supabase", "Groq/OpenAI", "Vercel + Render"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://oasisvip.vercel.app/" },
  },
  {
    id: "chatbot-module",
    n: "02",
    title: "Chatbot Module",
    rarity: "legendary",
    cls: "Universal Core / Plug-in · Set Keystone",
    flavor: "Write it once. It powers every agent in the company.",
    motif: "module",
    group: "platform",
    stats: { PWR: 85, SCL: 98, AUT: 75, INT: 82, PLH: 90 },
    extraStat: { label: "REUSE", value: 98 },
    abilities: [
      "TALK — LLM intent matching + conversation memory + per-agent knowledge base",
      "ACTION — navigation, multi-step workflows, LLM-generated JS (with confirm)",
      "PERCEPTION — voice (Whisper) · image (Vision) · PDF/Excel/CSV/DOCX upload",
      "PROACTIVE — WebSocket alerts spoken unprompted; first-load briefings",
      "SELF-IMPROVE — auto-vocabulary, correction learning, auto-FAQ caching",
      "3-line drop-in + token streaming + routing across N domain backends",
      "Privacy controls: redaction, retention policy, learning kill-switch (HIPAA-ready)",
    ],
    stack: ["TypeScript", "React 18/19", "Next 14–16", "Tailwind 3/4", "@triple-h/chatbot v1.1.0"],
    status: { state: "live", label: "LIVE · rolling out to all agents" },
    links: { demo: "https://oasisvip.vercel.app/" },
  },
  {
    id: "stock-agent",
    n: "03",
    title: "Stock Agent — Decision Mode",
    rarity: "epic",
    cls: "Quant Strategist",
    flavor: "Measures its own edge — and tells the truth about it.",
    motif: "quant",
    group: "agent",
    stats: { PWR: 82, SCL: 70, AUT: 72, INT: 90, PLH: 75 },
    abilities: [
      "BUY / SELL / HOLD advisor driven by ML direction prediction",
      "Self-grading scorekeeper — beta-adjusted, brutally honest (found 'methods = beta, not alpha'; 45% market-beat drove a real strategy pivot)",
      "Daily 단타 trading brief: regime + picks + 박스권 levels + 수급 + news-impact",
      "News-Impact engine + DART disclosure feed",
      "Trend-gate SELL + data-staleness flag",
    ],
    stack: ["Python", "Kiwoom/Naver data", "ML pipeline", "Render"],
    status: { state: "live", label: "LIVE — Stock Agent" },
    links: { demo: "https://oasisvip.vercel.app/" },
  },
  {
    id: "digital-twins",
    n: "04",
    title: "Digital Twins",
    rarity: "epic",
    cls: "Autonomous Proxy",
    flavor: "A second you — that can cover your shift.",
    motif: "twin",
    group: "agent",
    stats: { PWR: 80, SCL: 78, AUT: 88, INT: 85, PLH: 72 },
    extraStat: { label: "AUTONOMY", value: 88 },
    abilities: [
      "Per-employee AI twin that can act and cover for the worker",
      "Watch-&-learn engine — learns from how the real person works",
      "Privacy wall + explicit consent gating (no silent surveillance)",
      "Twin Chat = in-house ChatGPT: tools + web search + per-twin knowledge",
    ],
    stack: ["VIP platform", "Python/FastAPI", "Supabase", "Per-twin knowledge stores"],
    status: { state: "beta", label: "v1 — Digital Twins" },
    links: { demo: "https://oasisvip.vercel.app/" },
  },
  {
    id: "law-agent",
    n: "05",
    title: "Law Agent",
    rarity: "epic",
    cls: "Legal Analyst",
    flavor: "Finds the precedent by the facts — not the keywords.",
    motif: "law",
    group: "agent",
    stats: { PWR: 78, SCL: 65, AUT: 68, INT: 88, PLH: 80 },
    abilities: [
      "Fact-pattern semantic matching of citable Korean Supreme Court precedents",
      "Extracts legal elements (청구원인 · 법률관계 · 쟁점) and reranks at element level",
      "Citability filter — returns only court-citable cases",
      "Citation verification via law.go.kr API (no hallucinated cases)",
      "Bilingual (KO/EN), side-by-side fact mapping",
    ],
    stack: ["Next.js 16", "React 19", "Vercel AI SDK v6", "GPT-4o + embed-3-large", "pgvector"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://law-agent-jet.vercel.app/" },
  },
  {
    id: "meeting-agent",
    n: "06",
    title: "Meeting Agent",
    rarity: "rare",
    cls: "Smart Secretary (On-Prem)",
    flavor: "Records the room, ships the minutes — and nothing ever leaves the building.",
    motif: "meeting",
    group: "agent",
    stats: { PWR: 72, SCL: 60, AUT: 70, INT: 80, PLH: 75 },
    extraStat: { label: "PRIVACY", value: 95 },
    abilities: [
      "Local transcription with faster-whisper — zero audio egress",
      "Claude structured summary → title · key points · decisions · action items (owner / due / priority)",
      "4-format export: Markdown · Word · PDF · PowerPoint",
      "Import external transcripts (Notion / Otter / Fireflies)",
      "Roadmap: speaker diarization · email distribution · cross-meeting memory Q&A",
    ],
    stack: ["Python", "FastAPI/Jinja", "faster-whisper", "Claude/OpenAI", "Ollama-swappable"],
    status: { state: "live", label: "LIVE (auth-gated)" },
    links: { demo: "https://meeting-agent-blue.vercel.app/" },
  },
  {
    id: "smart-local-llm",
    n: "07",
    title: "Smart Local LLM",
    rarity: "epic",
    cls: "Model Smith / R&D Forge",
    flavor: "Teaches a model that runs on your own machine — no API, no leak.",
    motif: "forge",
    group: "rnd",
    stats: { PWR: 78, SCL: 65, AUT: 60, INT: 92, PLH: 65 },
    extraStat: { label: "INNOVATION", value: 95 },
    abilities: [
      "LoRA fine-tuning to shape model behavior, style & tutoring approach",
      "RAG knowledge injection without retraining (swappable corpus)",
      "Eval harness — quality measured before vs. after every change",
      "GGUF export → runs fully local via Ollama (no API cost, full data sovereignty)",
    ],
    stack: ["Python", "Qwen3.5", "LoRA", "Vector RAG", "GGUF", "Ollama"],
    status: { state: "rnd", label: "R&D pipeline" },
    links: {},
  },
  {
    id: "enterprise-edition",
    n: "08",
    title: "Enterprise Edition",
    rarity: "mythic",
    cls: "Deployment Doctrine · Meta-Card",
    flavor: "Any agent → a self-hosted enterprise product. Push to deploy, on your own iron.",
    motif: "enterprise",
    group: "platform",
    stats: { PWR: 90, SCL: 88, AUT: 82, INT: 78, PLH: 80 },
    extraStat: { label: "SECURITY", value: 95 },
    abilities: [
      "GitHub Actions CI/CD → push-to-deploy onto company server or local PC",
      "Fully self-hosted — no managed cloud dependency (no Vercel/Render/hosted DB required)",
      "Swappable LLM (cloud → local Ollama) for data sovereignty",
      "One codebase ships SaaS or on-prem (white-label ready)",
      "Proof-of-doctrine: VIP Enterprise + Meeting Agent both run 100% on-prem",
    ],
    stack: ["GitHub Actions", "Docker", "Self-hosted runners", "Ollama-swappable LLM"],
    status: { state: "proven", label: "PROVEN — live on server + local PC" },
    links: {},
  },
];

// ----------------------------------------------------------------------------
//  ECOSYSTEM MAP  —  how the cards connect into one system.
// ----------------------------------------------------------------------------
export const ecosystem = {
  hub: { id: "vip-agent", label: "VIP AGENT", sub: "orchestrates everything" },
  spokes: [
    { id: "stock-agent", label: "STOCK", sub: "Decision Mode" },
    { id: "realty", label: "REALTY", sub: "" },
    { id: "asset", label: "ASSET", sub: "" },
    { id: "digital-twins", label: "DIGITAL TWINS", sub: "" },
    { id: "law-agent", label: "LAW", sub: "" },
  ],
  module: { id: "chatbot-module", label: "CHATBOT MODULE", sub: "voice · text · vision · push — runs in all" },
  rails: [
    { id: "meeting-agent", label: "MEETING AGENT", sub: "on-prem secretary" },
    { id: "smart-local-llm", label: "SMART LOCAL LLM", sub: "swappable local brain" },
  ],
  enterprise: { id: "enterprise-edition", label: "ENTERPRISE EDITION", sub: "GitHub Actions · self-hosted · LLM-swappable" },
  story: [
    "VIP Line — VIP hub commands the domain agents (Stock / Realty / Asset / Twins / Law) via ask_agent.",
    "Module Line — one Chatbot Module plugs into every station (the force multiplier).",
    "Enterprise Rail — GitHub Actions + Ollama turn any of them into a self-hosted product.",
  ],
};

// ----------------------------------------------------------------------------
//  ML SHOWCASE  —  coming-soon placeholder cards for ML project categories.
//  Each card will link to its own repo once the project is ready.
// ----------------------------------------------------------------------------
export const mlProjects = [
  {
    id: "supervised-ml",
    n: "09",
    title: "Soccer Salary Predictor",
    rarity: "epic",
    cls: "Supervised ML · Regression · Sports Analytics",
    flavor: "Can xG predict a player's salary? Spoiler: yes — with SHAP to prove it.",
    motif: "ml",
    group: "supervised-ml",
    stats: { PWR: 85, SCL: 78, AUT: 70, INT: 90, PLH: 80 },
    extraStat: { label: "R² SCORE", value: 88 },
    abilities: [
      "Zero data leakage: split first, fit preprocessor on train only, no target imputation",
      "Baseline (Linear/Ridge/Lasso/DT) → Improved (RF/XGBoost/LightGBM/GB) → Ensemble (Stacking + Voting)",
      "21 engineered features: xG/game, efficiency index, contribution index — target never touched",
      "Optuna Bayesian tuning (60 trials, TPE sampler) on XGBoost",
      "SHAP global beeswarm + local waterfall — proves which features drive salary",
      "Live Gradio demo deployed on Render, kept alive 24/7 via UptimeRobot",
      "Linked to SCIE publication — 17% accuracy improvement over baseline",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "SHAP", "Optuna", "Gradio", "Render", "Scikit-learn"],
    status: { state: "live", label: "LIVE DEMO" },
    links: {
      demo: "https://soccer-xg-salary-prediction.onrender.com",
      github: "https://github.com/davronbek-malikov/soccer-xG-salary_prediction",
    },
  },
  {
    id: "unsupervised-ml",
    n: "10",
    title: "Player Archetype Clustering",
    rarity: "epic",
    cls: "Unsupervised ML · Clustering · Sports Analytics",
    flavor: "Six playing styles emerge from stats alone — no labels, no salary, just how they play.",
    motif: "ml",
    group: "unsupervised-ml",
    stats: { PWR: 82, SCL: 80, AUT: 65, INT: 92, PLH: 82 },
    abilities: [
      "6,314 qualified player-seasons (≥900 min) across Bundesliga, La Liga, Serie A — zero salary/target leakage",
      "Algorithm bake-off: KMeans beats Agglomerative, DBSCAN, and Gaussian Mixture on Silhouette, Davies-Bouldin & Calinski-Harabasz",
      "DBSCAN empirically collapses to one cluster — documented as a real density finding, not hidden",
      "Rule-based archetype naming from centroids: Elite Complete Forward, Clinical Poacher, Deep-Lying Playmaker & more",
      "Cosine-similarity engine finds each player's closest statistical twins within their own archetype",
      "Interactive Streamlit demo: classify any real or hypothetical player, see radar chart + PCA map",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Render", "UptimeRobot"],
    status: { state: "live", label: "LIVE DEMO" },
    links: {
      demo: "https://soccer-player-clustering.onrender.com",
      github: "https://github.com/davronbek-malikov/soccer-player-clustering",
    },
  },
  {
    id: "computer-vision",
    n: "11",
    title: "Computer Vision",
    rarity: "legendary",
    cls: "Object Detection · Image Classification",
    flavor: "Teaching machines to see what humans see.",
    motif: "ml",
    group: "cv",
    comingSoon: true,
    stats: { PWR: 85, SCL: 70, AUT: 60, INT: 90, PLH: 72 },
    abilities: [
      "Object detection with YOLO (v8/v11) — real-time inference",
      "Image classification with CNN and transformer architectures",
      "Custom dataset annotation and management via Roboflow",
      "Transfer learning on domain-specific image datasets",
      "Real-time video processing pipeline with OpenCV",
    ],
    stack: ["Python", "YOLO", "PyTorch", "Roboflow", "OpenCV"],
    status: { state: "rnd", label: "COMING SOON" },
    links: {},
  },
  {
    id: "llm-engineering",
    n: "12",
    title: "LLM Engineering",
    rarity: "mythic",
    cls: "Fine-Tuning · RAG · Alignment",
    flavor: "From off-the-shelf model to domain expert — on your own iron.",
    motif: "forge",
    group: "llm",
    comingSoon: true,
    stats: { PWR: 90, SCL: 80, AUT: 70, INT: 95, PLH: 75 },
    extraStat: { label: "INNOVATION", value: 96 },
    abilities: [
      "LoRA / QLoRA fine-tuning on custom domain datasets",
      "Graph RAG and standard RAG pipeline construction",
      "RLHF and DPO alignment and preference learning",
      "Self-improving feedback loops: collect → evaluate → retrain",
      "Local deployment via Ollama + GGUF export (no API cost)",
    ],
    stack: ["Python", "Hugging Face", "LoRA/QLoRA", "Ollama", "NVIDIA CUDA"],
    status: { state: "rnd", label: "COMING SOON" },
    links: {},
  },
];

export const profile = {
  name: "Davronbek Malikov",
  title: "PhD in AI Engineering",
  roles: ["AI Engineer", "AI Agent Engineer", "Automation"],
  tagline:
    "I build autonomous AI agents and the platform that ships them — from a single reusable chatbot core to self-hosted enterprise deployments.",
  setName: "Agent Constellation",
  links: {
    email: "mailto:davronbekmalikov96@gmail.com",
    github: "https://github.com/davronbek-malikov",
    linkedin: "https://www.linkedin.com/in/davronbek-malikov",
    cv: "/cv.pdf", // TODO: drop your CV into /public/cv.pdf
  },
};
