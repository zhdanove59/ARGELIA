// ============================================================================
// MEDIA REGISTRY
// ----------------------------------------------------------------------------
// To add more photos to any destination, person, dish, or tradition:
//   1. Find the matching `photos: [...]` array below
//   2. Add as many URLs as you want (the gallery lightbox will paginate them)
//   3. Save — the site hot-reloads
// Tip: paste public image URLs (Unsplash, Pexels, Wikimedia, your own CDN).
// ============================================================================

export const HERO_IMG = "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/704bc3cf16d84fe5ff2caa4b9bac95fcbca5bfe97ea1ea3713f56c04cf950e54.png";
export const FLAG_ABSTRACT = "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/0de8e0546849ddb20ad322ab269ca0759c7f5d94bafcc14aa0e327be5879506f.png";

// ---------------------------------------------------------------------------
// PEOPLE — null entries render an elegant initials card automatically.
// To add a real portrait, replace null with a URL.
// ---------------------------------------------------------------------------
export const PEOPLE_IMAGES = [
  { photos: ["https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/77519f7a67ff7b73b1cca1eaa1c211c5775c82e7bb317ee1c03fd6bd4805439f.png"] },
  { photos: ["https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/529b58710d8aaaef9b33d3489aaa0424807957b52c0094a948aeb1c09f258a07.png"] },
  { photos: [] }, // Belkacem Haba — abstract card
  { photos: [] }, // Albert Camus — abstract card
  { photos: [] }, // Yves Saint Laurent — abstract card
];

// ---------------------------------------------------------------------------
// LANDSCAPES — each destination supports a gallery. Add more photos freely.
// Order must match the order in translations.js > landscapes.list
// ---------------------------------------------------------------------------
export const LANDSCAPE_GALLERIES = [
  { // 0 Tassili n'Ajjer
    photos: [
      "https://images.unsplash.com/photo-1714313500691-d9d26a075188?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwyfHx0YXNzaWxpJTIwYWxnZXJpYSUyMHJvY2t8ZW58MHx8fHwxNzc5MzE0MzE5fDA&ixlib=rb-4.1.0&q=85",
      // Add more Tassili photos here ↓
    ],
  },
  { // 1 Ghardaïa
    photos: [
      "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/704bc3cf16d84fe5ff2caa4b9bac95fcbca5bfe97ea1ea3713f56c04cf950e54.png",
    ],
  },
  { // 2 Hoggar
    photos: [
      "https://images.unsplash.com/photo-1547237074-9647769e0c2f?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  { // 3 Constantine
    photos: [
      "https://images.pexels.com/photos/19720676/pexels-photo-19720676.jpeg",
    ],
  },
  { // 4 Oran
    photos: [
      "https://images.unsplash.com/photo-1530841344095-502c75b53d72?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  { // 5 Casbah de Argel
    photos: [
      "https://images.pexels.com/photos/13682900/pexels-photo-13682900.jpeg",
    ],
  },
  { // 6 Tipaza
    photos: [
      "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/635db971e016a5e9bdd99ae27e3f3379229714f0cd37e50f26d4f5e1311034c4.png",
    ],
  },
  { // 7 Hammam Maskhoutine
    photos: [
      "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  { // 8 El Kala
    photos: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  { // 9 Seraïdi / Annaba
    photos: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  { // 10 Jardín del Hamma
    photos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

// ---------------------------------------------------------------------------
// GASTRONOMY — single hero image per dish (gallery-ready).
// ---------------------------------------------------------------------------
export const GASTRONOMY_GALLERIES = [
  { photos: ["https://images.pexels.com/photos/7849287/pexels-photo-7849287.jpeg"] },     // Couscous
  { photos: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"] }, // Rechta
  { photos: ["https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"] }, // Chorba
  { photos: ["https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/bef80a266bd82a705f21718d8ede26ead85ad7f9390f2fa4ae67c03ceb98b09e.png"] }, // Makrout
  { photos: ["https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/ecc67f091d9c81403daaed4ee5ac5b604472bea849d9048507b21efcd9b04531.png"] }, // Mint tea
];

// ---------------------------------------------------------------------------
// TRADITIONS & TRADITIONAL DRESS — fully extensible galleries
// To add more photos: append more URLs to the `photos` array for any item.
// ---------------------------------------------------------------------------
export const TRADITION_GALLERIES = [
  { // 0 Karakou
    photos: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  { // 1 Haïk
    photos: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  { // 2 Chedda de Tlemcen — add your own photo URL here (renders elegant initials card meanwhile)
    photos: [],
  },
  { // 3 Burnous — add your own photo URL here
    photos: [],
  },
  { // 4 Robe Kabyle
    photos: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  { // 5 Bijoux Berbères
    photos: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

// ---------------------------------------------------------------------------
// VIDEOS — Media section thumbnails (replace with real YouTube/Vimeo IDs)
// ---------------------------------------------------------------------------
export const MEDIA_THUMBS = [
  "https://images.unsplash.com/photo-1547235001-d703406d3f17?auto=format&fit=crop&w=1400&q=80",
  "https://images.pexels.com/photos/13682900/pexels-photo-13682900.jpeg",
  "https://images.pexels.com/photos/19720676/pexels-photo-19720676.jpeg",
];

// ---------------------------------------------------------------------------
// Back-compat helpers — keep old single-image fields working too.
// ---------------------------------------------------------------------------
export const LANDSCAPE_IMAGES = LANDSCAPE_GALLERIES.map((g) => g.photos[0]);
export const GASTRONOMY_IMAGES = GASTRONOMY_GALLERIES.map((g) => g.photos[0]);
