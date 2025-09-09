// src/data/products.js
export const PRODUCT = {
  id: "lg-g2-42",
  collection: "TV COLLECTION",
  breadcrumb: ["Home", "Product", "TV Collection"],
  brand: "LG",
  model: "OLED42C29SA",
  availability: "Only 2 in stock",
  title: 'LG G2 42 (106CM) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR',
  rating: { value: 4.6, count: 212 },
  options: {
    sizes: [
      { code: "106", label: '106 cm (42")' },
      { code: "121", label: '121 cm (48")' },
      { code: "139", label: '139 cm (55")' },
      { code: "164", label: '164 cm (65")' },
      { code: "189", label: '189 cm (75")' },
      { code: "210", label: '210 cm (83")' },
    ],
  },
  price: { current: 600.72, old: 800.0, currency: "USD" },
  bullets: [
    "α9 Gen5 AI Processor 4K • AI Pro • 20 AI & Upscaling",
    "HDR (Dolby Vision), Perfect Black, 100% Color Fidelity • Color Volume",
    "webOS & ThinQ AI • Magic Remote • AirPlay 2 • HomeKit",
    "Gaming features: 120Hz, VRR, G-SYNC, FreeSync • Dolby Atmos",
    "Eye Comfort Display • Low Blue Light • Flicker Free",
  ],
  images: [
    { src: "/images/pdp-p-1.png", alt: "Front view" },
    { src: "/images/pdp-p-2.png", alt: "Side view" },
    { src: "/images/pdp-p-3.png", alt: "Wall mount" },
    { src: "/images/pdp-p-4.png", alt: "Ports" },
  ],
  description:
    'The LG G2 42" OLED evo Smart QLED 4K TV is the best all-around OLED TV we’ve tested. Although all OLEDs deliver similar infinite contrast levels, the G2 stands out for HDR highlights and gaming features.',
  spec: [
    { k: "Panel", v: "OLED evo" },
    { k: "Refresh rate", v: "120Hz" },
    { k: "HDR", v: "Dolby Vision / HDR10 / HLG" },
    { k: "OS", v: "webOS" },
    { k: "Gaming", v: "VRR / ALLM / G-SYNC / FreeSync" },
    { k: "Audio", v: "Dolby Atmos" },
  ],
  notes: [
    'G2 65" shown in the image for example.',
    "2022 or 2024 models feature eco-friendly packaging.",
    "G2 OLED stand is a minimum 38% lighter than the C1 series.",
  ],
};

export const RELATED = [
  { id: "sony-xr",    title: "Sony BRAVIA XR Android TV", price: 800, old: 899.0, img: "/images/pdp-rp-1.png", badge: "NEW" },
  { id: "mi-p1",      title: "Mi P1 Smart Android 4K TV", price: 400, old: 899.0, img: "/images/pdp-rp-2.png", badge: "SALE" },
  { id: "konka-oled", title: "Konka OLED Android TV",     price: 700, old: 899.0, img: "/images/pdp-rp-3.png", badge: "HOT" },
  { id: "tcl-hdr",    title: "TCL Roku Android TV",       price: 500, old: 899.0, img: "/images/pdp-rp-4.png", badge: "-10%" },
  { id: "sony-xr-2",  title: "Sony BRAVIA XR Android TV", price: 800, old: 899.0, img: "/images/pdp-rp-1.png", badge: "NEW" },
  { id: "mi-p1-2",    title: "Mi P1 Smart Android 4K TV", price: 400, old: 899.0, img: "/images/pdp-rp-2.png", badge: "SALE" },
  { id: "konka-oled-2", title: "Konka OLED Android TV",   price: 700, old: 899.0, img: "/images/pdp-rp-3.png", badge: "HOT" },
  { id: "tcl-hdr-2",  title: "TCL Roku Android TV",       price: 500, old: 899.0, img: "/images/pdp-rp-4.png", badge: "-10%" },
];
