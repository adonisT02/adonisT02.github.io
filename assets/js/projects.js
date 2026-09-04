/* Adonis T Mushonga — project case-study content.
   Screenshot manifests live in assets/js/shots.js (generated). */
window.PROJECT_ORDER = [
  "lads", "mineraerp", "mmcz-portal", "pbb", "kestrel", "trade", "atm-biometric",
  "miss-universe", "sahwigate", "realestate", "edubill", "smartshop", "medguardqr", "conference-app", "chikoto", "finance"
];

window.PROJECTS = {
  "lads": {
    title: "LADS Local Authority ERP",
    tagline: "An enterprise revenue and ERP platform that runs the day-to-day operations of 60+ municipalities across Zimbabwe.",
    category: "Enterprise ERP · Web", cat: "enterprise", kind: "web", url: "lads.ladsafrica.co.zw",
    role: "Software Developer (15+ engineer team)", timeline: "2021 – Present",
    client: "LADS Africa — 60+ local authorities", status: "In production",
    stack: ["Laravel 10","Livewire 3","AdminLTE","Bootstrap 5","MySQL","Queues / Batch Jobs","DomPDF","Sanctum","Google2FA"],
    overview: [
      "LADS is a large municipal revenue-management and ERP platform that handles the full operational and financial life of a council — billing and receipting for ratepayers, business licensing, land and lease management, cemeteries, markets, building control, procurement, HR, CRM, and statutory financial reporting.",
      "It is one of the largest systems I have worked on, spanning 45+ modules and thousands of views, and is actively used by more than 60 councils nationwide."
    ],
    metrics: [{n:"60+",l:"Councils in production"},{n:"45+",l:"Functional modules"},{n:"1,000+",l:"Eloquent models"},{n:"2,900+",l:"Blade views"}],
    highlights: [
      "Integrated ZIMRA fiscalization (fiscal device management, signing and fiscal-service layer) so council receipts are tax-compliant.",
      "Re-engineered heavy batch reporting into an asynchronous, queue-based pipeline with parallel batch jobs, AJAX progress polling, and multi-format export — cutting report generation from ~15 minutes to under 30 seconds.",
      "Contributed to the inventory-accounting subsystem — valuation, aging reports, and general-ledger integration.",
      "Implemented multi-currency procurement and budgeting, plus QR/barcode generation and Google 2FA.",
      "Owned features end to end within a modular architecture, from schema and Livewire components to PDF outputs."
    ],
    links: {}
  },
  "mineraerp": {
    title: "MineraERP — Mining Enterprise ERP",
    tagline: "A modular ERP for the Minerals Marketing Corporation of Zimbabwe, with a compliance-grade accounting core.",
    category: "Enterprise ERP · Web", cat: "enterprise", kind: "web", url: "erp.mmcz.co.zw",
    role: "Software Developer", timeline: "2025 – Present",
    client: "Minerals Marketing Corporation of Zimbabwe (MMCZ)", status: "In production",
    stack: ["Laravel 13","Livewire 4","Tailwind CSS","Fortify","Sanctum","ApexCharts","DomPDF","PhpWord","Pusher / WebSockets","Playwright"],
    overview: [
      "MineraERP manages MMCZ's mineral-marketing and export business — producers, mineral sales and exports, contracts, treasury and finance, HR, procurement, and regulatory compliance — on a modern modular Laravel architecture where each business area is a self-contained module.",
      "The finance domain is the deepest part of the system, reusing a single journal → ledger → sub-ledger posting chain across budgeting, procurement, receipting, and treasury."
    ],
    metrics: [{n:"4",l:"Business modules"},{n:"150+",l:"Controllers"},{n:"2,100+",l:"Blade views"},{n:"13",l:"Laravel version"}],
    highlights: [
      "Worked on an IAS 16 asset-revaluation accounting engine — tracking cumulative revaluation surplus vs. prior P&L, with OCI-vs-P&L decision logic and per-asset revaluation history.",
      "Contributed to the Treasury & Investments module (portfolios, private equity, property, stock-market, counterparties, revaluation).",
      "Helped deliver a ZIMRA / ASYCUDA customs-export integration for bill-of-entry submission and clearance.",
      "Built KYC automation for mineral, diamond and precious-stone exporters, with a role-based risk register.",
      "Structured contract drafting — clause templates resolved into a printable Memorandum of Agreement with checklist approval.",
      "Real-time features via Laravel Echo / Pusher, automated backups, and extensive PDF / Word / Excel generation."
    ],
    links: {}
  },
  "mmcz-portal": {
    title: "MMCZ Producer Portal",
    tagline: "The external-facing portal for MMCZ — a CMS website, e-commerce, chatbot, and in-app video meetings.",
    category: "Web Portal · Real-time", cat: "platform", kind: "web", url: "portal.mmcz.co.zw",
    role: "Software Developer", timeline: "2025 – Present",
    client: "Minerals Marketing Corporation of Zimbabwe (MMCZ)", status: "In production",
    stack: ["Laravel 10","Livewire 3","Tailwind CSS","BotMan","WebRTC","Sanctum","DomPDF"],
    overview: [
      "The MMCZ Portal is the customer- and producer-facing companion to MineraERP. It brings together a CMS-managed public website, an e-commerce shop with a producer offer/negotiation flow, a chatbot with human live-chat handoff, and built-in video meetings and calls.",
      "Access is segmented by role — producer, client, internal user, and admin — each with its own tailored area."
    ],
    metrics: [{n:"4",l:"Role-based portals"},{n:"130+",l:"Models"},{n:"WebRTC",l:"Video / calls"},{n:"BotMan",l:"Chatbot"}],
    highlights: [
      "Implemented in-app WebRTC video meetings and 1:1 calls — signaling, participant heartbeats, and recordings.",
      "Built a BotMan chatbot with a human live-chat handoff and persisted chat history.",
      "Delivered a public e-commerce experience with a producer↔client offer and negotiation workflow.",
      "CMS-driven public site with customer/employee surveys and PDF report generation.",
      "Role-based access control with forced-password-change and per-role middleware."
    ],
    links: {}
  },
  "pbb": {
    title: "PBB — Programme Based Budgeting",
    tagline: "A national budgeting platform where councils prepare and submit programme-based budgets and the ministry consolidates them.",
    category: "GovTech · Web", cat: "enterprise", kind: "web", url: "pbb.ladsafrica.co.zw",
    role: "Software Developer", timeline: "2025 – 2026",
    client: "LADS Africa — local authorities & the Ministry of Local Government", status: "In production",
    stack: ["Laravel 10","MySQL","Queues (database)","PhpSpreadsheet / maatwebsite-excel","Blade","Bootstrap"],
    overview: [
      "PBB replaces a legacy Microsoft Access workflow with a unified web platform for programme-based budgeting: budget headers, human-capital costing, tariffs, vital statistics, reports and ministry consolidation, all scoped per council.",
      "The hardest part was migration — multi-sheet Excel workbooks mirroring the legacy Access tables are imported through a queued pipeline that parses, posts and verifies each budget without blocking the UI."
    ],
    metrics: [{n:"87",l:"Models"},{n:"300+",l:"Views"},{n:"Excel",l:"Legacy import pipeline"},{n:"Multi",l:"Council tenancy"}],
    highlights: [
      "Built a queued Excel import that reads legacy multi-sheet workbooks with PhpSpreadsheet, writes JSON contracts, then runs an import → post → verify pipeline.",
      "Council-scoped reference data (programmes, fund sources, units, currencies, templates) seeded automatically when a client is created in Portal Admin.",
      "Human-capital budgeting, tariff schedules and consolidated reports for ministry review.",
      "Public landing site with guide for councils, FAQ and sign-in into the budgeting workspace."
    ],
    links: {}
  },
  "kestrel": {
    title: "Kestrel — Fuel Monitoring & Fleet Tracking",
    tagline: "A multi-tenant telemetry platform that detects fuel loss, reconciles fuel-card purchases, and costs idling across commercial fleets.",
    category: "IoT · Data Platform", cat: "data", kind: "web", url: "app.kestrel.fleet",
    role: "Architect & full-stack developer", timeline: "2026",
    client: "Kestrel Fuel Monitoring (service agreement build)", status: "Client test build",
    stack: ["Fastify 5","TypeScript","Zod → OpenAPI","PostgreSQL 17","TimescaleDB","PostGIS","Drizzle ORM","BullMQ / Redis","Next.js 15","React 19","Flutter 3.35","Docker"],
    overview: [
      "Kestrel is API-first: calibrated tank probes stream telemetry into a Fastify ingest API, TimescaleDB stores the time-series with a spatial dimension in PostGIS, and background workers turn raw readings into events — fuel drops, purchase shortfalls, idling cost.",
      "Every detection carries a confidence score and plain-English reasons, and stays pending until a human reviews it — the service agreement's verification clauses are built into the product rather than a footnote."
    ],
    metrics: [{n:"5",l:"Apps in monorepo"},{n:"Timescale",l:"+ PostGIS"},{n:"Zod",l:"Single source of truth"},{n:"~102 kB",l:"Shared JS on web"}],
    highlights: [
      "Applied calibration curves server-side so re-calibrating an asset retro-corrects its history, not just its future.",
      "Fuel-loss detection with a rolling median to kill slosh noise; drops only become events when large enough, fast enough, engine-off and away from a fuel point.",
      "Reconciled fuel-card statements against observed tank rises to surface shortfalls with the receipt number.",
      "Zod contracts generate both runtime validation and the OpenAPI document so the API contract cannot drift.",
      "Detection, alerting and rollups run on BullMQ off the ingest path; a TypeScript simulator drives the real ingest API for demos.",
      "Flutter owner app answering one question: is anything wrong right now?"
    ],
    links: {}
  },
  "trade": {
    title: "Trade — Algorithmic Trading Bot",
    tagline: "An event-driven trading platform with real broker integrations, backtesting, and live streaming.",
    category: "AI & Data · Full-Stack", cat: "data", kind: "web", url: "localhost:3000 · trading dashboard",
    role: "Personal project", timeline: "2025 – 2026",
    client: "Independent build", status: "Live on demo accounts",
    stack: ["FastAPI","Python 3.11","React","Tailwind CSS","MySQL","Alembic","Redis","Docker","nginx"],
    overview: [
      "Trade is an automated trading platform for Deriv synthetic indices and Alpaca US equities, with a paper/demo fallback for safe testing. It is built around a clean, event-driven architecture with clearly separated concerns.",
      "The system covers the full trading lifecycle — market data, strategy, backtesting, risk, execution, journaling, and portfolio tracking — behind a JWT-secured API and real-time WebSocket stream. A sibling Multipliers bot adds broker-side take-profit / stop-loss so a crashed process can never leave an unmanaged position."
    ],
    metrics: [{n:"2",l:"Broker integrations"},{n:"Redis",l:"Event bus"},{n:"WS",l:"Live streaming"},{n:"Docker",l:"Deployment"}],
    highlights: [
      "Designed an event-driven core with separate modules for backtesting, execution, risk, strategy, journal, market-data, and portfolio.",
      "Integrated real brokers (Deriv, Alpaca) with a demo/paper fallback for safe strategy testing.",
      "Built a JWT-secured REST API plus an authenticated WebSocket stream for live updates.",
      "Used Redis as an event bus/queue to decouple producers and consumers.",
      "Documented risk register, strategy rules and backtest validation; pytest suite and Docker Compose + nginx deployment."
    ],
    links: {}
  },
  "atm-biometric": {
    title: "Biometric ATM System",
    tagline: "A self-service banking kiosk built around fingerprint authentication and fraud detection.",
    category: "Security & AI · Full-Stack", cat: "data", kind: "web", url: "kiosk · biometric ATM",
    role: "Personal project", timeline: "2026",
    client: "Independent build", status: "Personal project",
    stack: ["Django","Django REST Framework","Python","React","TypeScript","Vite","AES (cryptography)","MySQL"],
    overview: [
      "A biometric ATM kiosk that supports withdrawals, balance checks, mini-statements, OTP, and fraud detection. Authentication is fingerprint-first, with a layered domain/services/repositories architecture on the backend.",
      "Security is central: biometric templates are encrypted, and a risk engine plus account-lockout logic guard against abuse."
    ],
    metrics: [{n:"WebAuthn",l:"Fingerprint auth"},{n:"AES",l:"Encrypted templates"},{n:"Risk",l:"Fraud engine"},{n:"OTP",l:"Multi-provider SMS"}],
    highlights: [
      "Implemented WebAuthn device-fingerprint authentication with a demo fallback path.",
      "Built a layered biometrics domain (enrol, verify, matching) separated from services and repositories.",
      "Encrypted biometric templates with AES via Python's cryptography library.",
      "Added a risk/fraud engine and account-lockout logic to protect accounts.",
      "Integrated multi-provider SMS OTP (Africa's Talking, Twilio, Econet) behind a factory/mock abstraction."
    ],
    links: {}
  },
  "miss-universe": {
    title: "Miss Universe Zimbabwe — Voting Platform",
    tagline: "A three-app platform with a wallet economy and four payment gateways.",
    category: "Platform · Payments", cat: "platform", kind: "web", url: "admin · Miss Universe Zimbabwe",
    role: "Personal project", timeline: "2026",
    client: "Independent build", status: "Personal project",
    stack: ["NestJS","TypeScript","Supabase / PostgreSQL","Next.js","Flutter","Docker","Caddy"],
    overview: [
      "A pageant voting and contestant platform made up of three applications — a NestJS API, a Next.js admin dashboard, and a Flutter mobile app — backed by Supabase/PostgreSQL.",
      "Users buy votes through a wallet economy, with payments handled across multiple local and international gateways."
    ],
    metrics: [{n:"3",l:"Apps in monorepo"},{n:"4",l:"Payment gateways"},{n:"Wallet",l:"Voting economy"},{n:"PG",l:"Supabase / Postgres"}],
    highlights: [
      "Built a three-app monorepo: NestJS API, Next.js admin dashboard, and Flutter mobile client.",
      "Designed a wallet/voting economy with vote purchases and balances.",
      "Integrated four payment gateways — Stripe, Paynow, iVeri, and Apple/Google in-app purchases.",
      "Delivered a rich module set: auth, votes, wallet, payments, contestants, feed, follows, live, and support.",
      "Added email verification, role-based mobile entry, and a production go-live checklist."
    ],
    links: {}
  },
  "sahwigate": {
    title: "SahwiGate — Athletics Platform API",
    tagline: "A professionally-engineered backend with queues, payments, docs, and a full test suite.",
    category: "Backend · API", cat: "platform", kind: "web", url: "api.sahwigate · Swagger",
    role: "Consultant developer", timeline: "2026",
    client: "SahwiGate (consultancy)", status: "In development",
    stack: ["Fastify","TypeScript","Prisma","PostgreSQL","Redis","BullMQ","Stripe","Swagger","Zod","Vitest"],
    overview: [
      "SahwiGate is an athletics platform API built to production standards — clean modular boundaries, background job processing, payments, generated API docs, and both unit and integration tests.",
      "Alongside the API sit an identity service and a turbo-repo web UI. It is the strongest showcase of my backend engineering discipline."
    ],
    metrics: [{n:"BullMQ",l:"Job queues"},{n:"Stripe",l:"Payments"},{n:"Swagger",l:"API docs"},{n:"Tested",l:"Unit + integration"}],
    highlights: [
      "Built background job processing with BullMQ on Redis.",
      "Integrated Stripe payments with JWT auth, rate-limiting, and helmet hardening.",
      "Generated interactive API documentation with Swagger and validated inputs with Zod.",
      "Wrote unit and integration tests with Vitest, enforced with Husky and commitlint.",
      "Organised the codebase into clean domains: activities, clubs, events, races, timing, wearables, media, and payments."
    ],
    links: {}
  },
  "realestate": {
    title: "Real Estate Management System",
    tagline: "A 30-module property ERP — from tenant KYC and leases to a double-entry general ledger and agent commissions.",
    category: "Enterprise ERP · Web", cat: "enterprise", kind: "web", url: "realestate · executive dashboard",
    role: "Architect & full-stack developer", timeline: "2026",
    client: "Independent build (product)", status: "In development",
    stack: ["Laravel","Inertia.js","React 19","Tailwind CSS","nwidart Modules","SQLite / MySQL","shadcn/ui"],
    overview: [
      "A modular real-estate platform covering property catalog and classification, unit management, valuations and inspections, leasing and rent collection, CRM and listings, sales transactions, full finance (GL, AR, AP, property accounting, budgeting, commissions), facilities and work orders, utilities, and executive reporting.",
      "Each of the 30 modules is documented as its own spec, with RBAC and approval workflows at the core so every action is permissioned and auditable."
    ],
    metrics: [{n:"30",l:"Documented modules"},{n:"React 19",l:"via Inertia"},{n:"GL",l:"Double-entry engine"},{n:"RBAC",l:"+ approvals core"}],
    highlights: [
      "Enterprise core: RBAC & workflow approvals, org-structure matrix (companies, branches, departments, cost centres).",
      "Full lease lifecycle with rent billing, arrears and tenant self-service portal.",
      "Double-entry general ledger with AR/AP, per-property P&L, CAM and service charges.",
      "Work-order and preventive-maintenance management with vendor performance tracking.",
      "Tamper-evident audit log and compliance register for permits, certificates and legal matters."
    ],
    links: {}
  },
  "edubill": {
    title: "EduBill — Tuition Billing",
    tagline: "Student enrolment, idempotent monthly invoicing, multi-currency receipting and SMS arrears reminders for tuition centres.",
    category: "Fintech · SaaS", cat: "platform", kind: "web", url: "edubill · billing",
    role: "Product & full-stack developer", timeline: "2026",
    client: "Tuition centres (product)", status: "Pilot",
    stack: ["Laravel 12","Blade","Tailwind CSS","Alpine.js","MySQL","Flutter (till app)","Docker / Railway"],
    overview: [
      "EduBill runs the money side of an extra-lessons business: students, guardians, subject offerings per centre and level, enrolments with negotiated fees, monthly invoice runs, and receipting that settles the oldest open invoice first and holds overpayments as wallet credit.",
      "It is built for how Zimbabwean tills actually work — USD invoices paid in ZWG, EcoCash and bank transfer, with each receipt recording the tendered currency and rate so the day still reconciles."
    ],
    metrics: [{n:"Idempotent",l:"Invoice generation"},{n:"Multi",l:"Currency at the till"},{n:"E.164",l:"Guardian phone normalisation"},{n:"SMS",l:"Arrears reminders"}],
    highlights: [
      "Idempotent monthly invoice generation with fee precedence (enrolment → offering → subject default) and pro-rated mid-month enrolments.",
      "Receipting allocates oldest-first, tracks wallet credit, and keeps captured amounts immutable and traceable.",
      "Multi-currency capture with live conversion as the cashier types and per-receipt rate history.",
      "Guardian-level SMS reminders with minimum balance, per-run cap and cooldown; pluggable SMS driver (log / HTTP).",
      "Cash-up and aged-debtors reports; a companion Flutter till app."
    ],
    links: {}
  },
  "smartshop": {
    title: "SmartShop 360 — Retail POS",
    tagline: "A shop-management and point-of-sale system for supermarkets, hardware and boutiques — SPA front-end, Laravel API.",
    category: "Retail · POS", cat: "platform", kind: "web", url: "smartshop-360 · POS",
    role: "Full-stack developer", timeline: "2026",
    client: "Retail client (test deployment)", status: "Client test build",
    stack: ["React","Vite","Laravel","Sanctum","MySQL","Vercel","Railway"],
    overview: [
      "SmartShop 360 covers the retail core — POS with stock decrement and oversell protection, products, inventory, sales, suppliers, purchases, returns, customers and reports — with the SPA on Vercel and the API on Railway.",
      "The build is hardened for a client test: every business route behind Sanctum tokens, role-gated destructive actions, rate-limited auth, and POS sales in a locked database transaction."
    ],
    metrics: [{n:"10",l:"Live modules"},{n:"3",l:"Roles (admin / manager / cashier)"},{n:"Row-lock",l:"Oversell protection"},{n:"2",l:"Cloud services"}],
    highlights: [
      "POS sales run in a DB transaction with row locking to prevent overselling.",
      "Sanctum-protected API with admin/manager gates on delete and approval actions.",
      "Split deployment: Vite SPA on Vercel pointing at a Railway-hosted Laravel API with MySQL plugin.",
      "Clear roadmap surfaced in-app: stock take, GRN, transfers, quotations, cashier sessions, audit logs."
    ],
    links: {}
  },
  "medguardqr": {
    title: "MedGuardQR — Pharmacy Dispensing",
    tagline: "A QR-driven medication dispensing and inventory system with built-in safety rules.",
    category: "Healthcare · Full-Stack", cat: "platform", kind: "web", url: "medguardqr · dispensing",
    role: "Personal project", timeline: "2026",
    client: "Independent build", status: "Personal project",
    stack: ["Django","Django REST Framework","MySQL","React","Vite","qrcode","Pillow"],
    overview: [
      "MedGuardQR manages medication dispensing and inventory for a pharmacy, using QR codes to identify and track medications through a pharmacist workflow.",
      "It enforces real safety and stock rules rather than being a plain CRUD app, and ships with a one-click Windows launcher for non-technical users."
    ],
    metrics: [{n:"QR",l:"Medication codes"},{n:"Alerts",l:"Stock / expiry"},{n:"RBAC",l:"Role-based"},{n:"3",l:"Django apps"}],
    highlights: [
      "Generated QR codes for medications with qrcode + Pillow.",
      "Implemented low-stock and expiry-warning thresholds.",
      "Enforced minimum-hours-between-dispense safety rules.",
      "Added role-based access for admins and pharmacists.",
      "Organised the backend into pharmacy, dispensing, and students Django apps with a React front-end."
    ],
    links: {}
  },
  "conference-app": {
    title: "Conference Companion App",
    tagline: "A polished Flutter event app featuring a fully offline Bible with search and text-to-speech.",
    category: "Mobile · Flutter", cat: "mobile", kind: "mobile", url: "Easter Conference · Android / iOS",
    role: "Personal project", timeline: "2026",
    client: "Independent build", status: "Shipped",
    stack: ["Flutter","Dart","Supabase","Local Notifications","flutter_tts","timezone","Next.js (web admin)"],
    overview: [
      "A mobile companion app for a multi-day conference, covering the programme, departments, songs, testimonies, and an appraisals leaderboard — with a standout fully-offline Bible.",
      "It ships with a Next.js web-admin for managing the programme and a colleague-mobile counterpart."
    ],
    metrics: [{n:"Offline",l:"Bible (KJV+Shona)"},{n:"TTS",l:"Text-to-speech"},{n:"Reminders",l:"Programme alerts"},{n:"Search",l:"Full-text verses"}],
    highlights: [
      "Built a multi-day programme with calendar reminders via local notifications.",
      "Bundled a fully offline Bible (KJV + Shona, ~6.7 MB JSON) with verse highlighting.",
      "Added text-to-speech playback and progressive full-text verse search.",
      "Included departments, songs/lyrics, testimonies, and an appraisals leaderboard.",
      "Paired the app with a web-admin and a colleague-mobile companion."
    ],
    links: {}
  },
  "chikoto": {
    title: "World Class Gases — LPG Retail Site",
    tagline: "A fast, content-driven Astro site for an LPG cylinder, refill and equipment business.",
    category: "Web · Marketing", cat: "web", kind: "web", url: "world-class-gases.vercel.app",
    role: "Designer & developer", timeline: "2026",
    client: "World Class Gases (Chikoto)", status: "Live",
    stack: ["Astro","TypeScript","Static build","Vercel","SEO / Open Graph"],
    overview: [
      "A lightweight static site for a gas retailer: cylinder sizes, refills, delivery, safety guidance and a product catalogue of regulators, hoses and appliances.",
      "Every word of copy lives in a single data file so the client can revise content without touching components, and the whole site ships as static HTML with near-perfect Lighthouse scores."
    ],
    metrics: [{n:"Static",l:"Zero-JS pages"},{n:"1 file",l:"All site copy"},{n:"OG",l:"SEO-ready"},{n:"Live",l:"On Vercel"}],
    highlights: [
      "Content model in one TypeScript file drives pages, SEO titles and product data.",
      "Category and product pages generated at build time from the catalogue.",
      "Mobile-first layout with responsive product imagery and clear calls to action.",
      "Deployed on Vercel with canonical and Open Graph metadata."
    ],
    links: { live: "https://world-class-gases.vercel.app" }
  },
  "finance": {
    title: "District Finance Dashboard",
    tagline: "A multi-tenant Next.js + Supabase dashboard for district income, expenditure and statement exports.",
    category: "Web · Dashboard", cat: "web", kind: "web", url: "finance · district dashboard",
    role: "Full-stack developer", timeline: "2026",
    client: "Independent build", status: "In use",
    stack: ["Next.js 16","React 19","Supabase (Postgres + Auth)","Tailwind CSS 4","docx","@react-pdf/renderer","Vitest"],
    overview: [
      "Districts record income and expenditure against reusable categories; admins switch between an all-district view and a single district, import data from CSV, and export statements as CSV, DOCX or PDF.",
      "Route protection covers every dashboard path, with role-scoped access enforced through Supabase Auth."
    ],
    metrics: [{n:"2",l:"Roles"},{n:"3",l:"Export formats"},{n:"CSV",l:"Bulk import"},{n:"RLS",l:"Tenant scoping"}],
    highlights: [
      "Admin scope-switching across districts with per-district data isolation.",
      "Statement exports rendered server-side to DOCX and PDF.",
      "CSV import for districts, income and expenditure with validation.",
      "Tested with Vitest; server-only service-role key never reaches the browser."
    ],
    links: {}
  }
};
