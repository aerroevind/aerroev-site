export const SITE = {
  name: "AERRO EV",
  legalName: "AERRO Electric Vehicles Pvt. Ltd.",
  domain: "aerroev.in",
  url: "https://aerroev.in",
  headline: "India's Next Generation Electric Mobility",
  subheadline: "Smart. Sustainable. Designed for Tomorrow.",
  badge: "High Performance Electric Scooters",
  tagline: "Driving India's Electric Future",
  description:
    "AERRO EV is building the future of smart, sustainable electric mobility in India. Explore our flagship lineup of high-efficiency electric scooters engineered for Indian roads.",
  logo: "/brand/logo.jpeg",
  favicon: "/favicon.jpeg",
  ogImage: "/brand/logo.jpeg",
} as const;

export const CONTACT = {
  phone: "+91 91091 06615",
  phoneRaw: "9109106615",
  whatsapp: "919109106615",
  whatsappUrl: "https://wa.me/919109106615",
  email: "aerroev@gmail.com",
  address: "2837/E Sudama Nagar, Indore, Madhya Pradesh, India",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Models", href: "/#models" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Dealership", href: "/dealers" },
  { label: "Contact", href: "/#contact" },
] as const;

export interface CurrentModelDetail {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  specs: {
    maxSpeed: string;
    frontTyre: string;
    rearTyre: string;
    frontBrake?: string;
    rearBrake?: string;
    brakes?: string;
    motor: string;
    controller: string;
    tyreBrands: string;
    range?: string;
  };
  description: string;
}

export const CURRENT_TWO_MODELS: CurrentModelDetail[] = [
  {
    id: "eco-vx",
    name: "ECO VX",
    subtitle: "High Efficiency City Scooter",
    image: "/models/Model 1.jpeg",
    badge: "City Smart",
    specs: {
      maxSpeed: "45 kmph",
      frontTyre: "12 inch",
      rearTyre: "10 inch",
      frontBrake: "Disc",
      rearBrake: "Drum",
      motor: "1000 Watt",
      controller: "48V / 60V / 72V (32A)",
      tyreBrands: "CEAT, MRF, Apollo",
    },
    description:
      "A dependable, cost-effective daily commuter scooter engineered specifically for Indian urban roads with an optimized 1000W motor and long-life battery.",
  },
  {
    id: "city-power",
    name: "City Power",
    subtitle: "Flagship Extended Range",
    image: "/models/Model 2.jpeg",
    badge: "Dual Disc · Long Range",
    specs: {
      maxSpeed: "50 kmph",
      frontTyre: "12 inch",
      rearTyre: "10 inch",
      brakes: "Front Disc & Rear Disc",
      motor: "1200 Watt",
      controller: "48V / 60V / 72V (40A)",
      tyreBrands: "CEAT, MRF, Apollo",
      range: "120+ km",
    },
    description:
      "Our premier electric scooter with an upgraded 1200W high-torque motor, dual disc braking, and an extended 120+ km range on a single charge.",
  },
];

export interface DealerLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  mapUrl: string;
  image: string;
  phone: string;
  whatsappRaw: string;
  whatsappMessage: string;
  status: string;
  timing: string;
}

export const DEALER_LOCATIONS: DealerLocation[] = [
  {
    id: "ss-enterprises",
    name: "SS Enterprises (Soni & Soni)",
    city: "Indore",
    state: "Madhya Pradesh",
    address: "Zelio Electric Scooter, GG44, Opposite Krishna Dairy, Vijay Nagar, Scheme No. 54, Indore, Madhya Pradesh 452010",
    mapUrl: "https://maps.app.goo.gl/1RGmo8ewUzDPKZao8?g_st=aw",
    image: "/showroom.png",
    phone: "+91 91091 06615",
    whatsappRaw: "919109106615",
    whatsappMessage: "Hello AERRO EV, I would like to inquire about test rides and models at SS Enterprises (Soni & Soni), Vijay Nagar, Indore.",
    status: "Authorized Dealer",
    timing: "Mon - Sun: 10:00 AM - 8:30 PM",
  },
  {
    id: "shivani-enterprises-rau",
    name: "Shivani Enterprises",
    city: "Rau",
    state: "Madhya Pradesh",
    address: "646, AB Rd, Near Police Station, Sai Vihar Colony, Rau, Indore, Madhya Pradesh 452001",
    mapUrl: "https://maps.app.goo.gl/7Cq4Uc6KHWYXaJEeA?g_st=aw",
    image: "/showroom.png",
    phone: "+91 91091 06615",
    whatsappRaw: "919109106615",
    whatsappMessage: "Hello AERRO EV, I would like to inquire about test rides and models at Shivani Enterprises, Rau, Indore.",
    status: "Authorized Dealer",
    timing: "Mon - Sun: 10:00 AM - 8:30 PM",
  },
  {
    id: "shakti-vaishnavi-pithampur",
    name: "Shakti Vaishnavi Auto Deal, Pithampur",
    city: "Pithampur",
    state: "Madhya Pradesh",
    address: "LGF 39, Sudarshan Complex, Mhow-Neemuch Road, Pithampur",
    mapUrl: "https://share.google/IZycxsYAIOKhKaJzr",
    image: "/showroom.png",
    phone: "+91 91091 06615",
    whatsappRaw: "919109106615",
    whatsappMessage: "Hello AERRO EV, I would like to inquire about test rides and models at Shakti Vaishnavi Auto Deal, Pithampur.",
    status: "Authorized Dealer",
    timing: "Mon - Sun: 10:00 AM - 8:00 PM",
  },
  {
    id: "hitanshi-ev-shajapur",
    name: "Hitanshi EV, Shajapur",
    city: "Shajapur",
    state: "Madhya Pradesh",
    address: "Krishi Upaj Mandi Samiti, 316/29, Agra-Mumbai Rd, Shajapur, Dansipura, Madhya Pradesh 465001",
    mapUrl: "https://maps.app.goo.gl/inRHCVbCidvBfUEa7",
    image: "/showroom.png",
    phone: "+91 91091 06615",
    whatsappRaw: "919109106615",
    whatsappMessage: "Hello AERRO EV, I would like to inquire about test rides and models at Hitanshi EV, Shajapur.",
    status: "Authorized Dealer",
    timing: "Mon - Sun: 10:00 AM - 8:00 PM",
  },
  {
    id: "sahu-enterprises-pachore",
    name: "Sahu Enterprises, Pachore",
    city: "Pachore",
    state: "Madhya Pradesh",
    address: "Sahu Enterprises, Pachore, Madhya Pradesh",
    mapUrl: "https://maps.app.goo.gl/qhVbJEjAdKzXJQU47?g_st=aw",
    image: "/showroom.png",
    phone: "+91 91091 06615",
    whatsappRaw: "919109106615",
    whatsappMessage: "Hello AERRO EV, I would like to inquire about test rides and models at Sahu Enterprises, Pachore.",
    status: "Authorized Dealer",
    timing: "Mon - Sun: 10:00 AM - 8:00 PM",
  },
  {
    id: "shivani-enterprises-betma",
    name: "Shivani Enterprises, Betma",
    city: "Betma",
    state: "Madhya Pradesh",
    address: "Sagore Kuti Rd, Kushwah Mohalla, Betma, Madhya Pradesh 453001",
    mapUrl: "https://maps.app.goo.gl/DHRghZQ6rXx1bhVK7?g_st=aw",
    image: "/showroom.png",
    phone: "+91 91091 06615",
    whatsappRaw: "919109106615",
    whatsappMessage: "Hello AERRO EV, I would like to inquire about test rides and models at Shivani Enterprises, Betma.",
    status: "Authorized Dealer",
    timing: "Mon - Sun: 10:00 AM - 8:00 PM",
  },
];

export interface GalleryModel {
  id: string;
  number: number;
  name: string;
  image: string;
  format: string;
}

export const ALL_GALLERY_MODELS: GalleryModel[] = [
  { id: "model-1", number: 1, name: "AERRO Model 1", image: "/models/Model 1.jpeg", format: "jpeg" },
  { id: "model-2", number: 2, name: "AERRO Model 2", image: "/models/Model 2.jpeg", format: "jpeg" },
  { id: "model-3", number: 3, name: "AERRO Model 3", image: "/models/Model 3.jpeg", format: "jpeg" },
  { id: "model-4", number: 4, name: "AERRO Model 4", image: "/models/Model 4.jpeg", format: "jpeg" },
  { id: "model-5", number: 5, name: "AERRO Model 5", image: "/models/Model 5.jpeg", format: "jpeg" },
  { id: "model-6", number: 6, name: "AERRO Model 6", image: "/models/Model 6.jpeg", format: "jpeg" },
  { id: "model-7", number: 7, name: "AERRO Model 7", image: "/models/Model 7.jpeg", format: "jpeg" },
  { id: "model-8", number: 8, name: "AERRO Model 8", image: "/models/Model 8.jpeg", format: "jpeg" },
  { id: "model-9", number: 9, name: "AERRO Model 9", image: "/models/Model 9.jpeg", format: "jpeg" },
  { id: "model-10", number: 10, name: "AERRO Model 10", image: "/models/Model 10.jpeg", format: "jpeg" },
  { id: "model-11", number: 11, name: "AERRO Model 11", image: "/models/Model 11.jpeg", format: "jpeg" },
  { id: "model-12", number: 12, name: "AERRO Model 12", image: "/models/Model 12.jpeg", format: "jpeg" },
  { id: "model-13", number: 13, name: "AERRO Model 13", image: "/models/Model 13.jpeg", format: "jpeg" },
  { id: "model-14", number: 14, name: "AERRO Model 14", image: "/models/Model 14.png", format: "png" },
  { id: "model-15", number: 15, name: "AERRO Model 15", image: "/models/Model 15.jpeg", format: "jpeg" },
  { id: "model-16", number: 16, name: "AERRO Model 16", image: "/models/Model 16.jpeg", format: "jpeg" },
  { id: "model-17", number: 17, name: "AERRO Model 17", image: "/models/Model 17.jpeg", format: "jpeg" },
  { id: "model-18", number: 18, name: "AERRO Model 18", image: "/models/Model 18.jpeg", format: "jpeg" },
];

export const MADE_IN_INDIA_CARDS = [
  {
    id: "made-in-india",
    title: "Made In India",
    subtitle: "Indigenous Engineering",
    icon: "🇮🇳",
    description:
      "Designed, developed, and manufactured in India, engineered specifically to endure diverse terrain, extreme temperatures, and urban traffic conditions.",
    highlight: "100% Local R&D",
  },
  {
    id: "long-range",
    title: "Long Range",
    subtitle: "Advanced Battery Tech",
    icon: "🔋",
    description:
      "High energy-density lithium cell architecture paired with proprietary BMS algorithms for extended intercity distance without range anxiety.",
    highlight: "Smart BMS Guard",
  },
  {
    id: "fast-charging",
    title: "Fast Charging",
    subtitle: "Rapid Power Delivery",
    icon: "⚡",
    description:
      "Ultra-efficient thermal dissipation combined with rapid DC fast-charge compatibility ensures minimal station downtime on busy workdays.",
    highlight: "Turbo Charge Ready",
  },
  {
    id: "sustainable-future",
    title: "Sustainable Future",
    subtitle: "Zero Tailpipe Emissions",
    icon: "🌱",
    description:
      "Crafted with recyclable structural alloys and non-toxic materials, contributing directly to cleaner urban air quality across India.",
    highlight: "Zero Emission",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com/aerroev",
    handle: "@aerroev",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/aerroev",
    handle: "AERRO EV",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/aerroev",
    handle: "AERRO Electric Vehicles",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@aerroev",
    handle: "AERRO EV Official",
  },
] as const;

export const FUTURE_PAGES = [
  { path: "/products", title: "Products & Lineup", desc: "Detailed vehicle models, technical specifications, and custom configuration." },
  { path: "/compare", title: "Compare Models", desc: "Side-by-side comparison of upcoming AERRO EV architectures and capabilities." },
  { path: "/test-ride", title: "Book a Test Ride", desc: "Experience silent electric acceleration at your nearest dealer." },
  { path: "/finance", title: "Finance & EMI", desc: "Flexible EV financing, commercial leasing, and state subsidy calculator." },
  { path: "/blog", title: "EV News & Updates", desc: "Articles, engineering journals, and news on India's electric transformation." },
  { path: "/service", title: "Service & Support", desc: "24/7 roadside assistance, doorstep battery maintenance, and warranty plans." },
  { path: "/parts", title: "Genuine Spare Parts", desc: "Certified OEM replacement components and performance accessories." },
  { path: "/admin", title: "Dealer Portal", desc: "Internal dealership operations and enterprise partner management." },
] as const;
