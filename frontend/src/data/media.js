// ============================================================================
// MEDIA REGISTRY
// ----------------------------------------------------------------------------
// HOW TO ADD / REPLACE PHOTOS
//   • Each gallery below contains 3 SLOTS (photos[0], photos[1], photos[2]).
//   • Slot 0 = current cover image. Slot 1 and 2 = empty placeholders for YOU.
//   • Replace any "" with a real image URL (Unsplash, Pexels, Wikimedia, or your own CDN).
//   • You may also add MORE than 3 — the gallery lightbox will paginate them automatically.
//   • Save — the site hot-reloads.
// ============================================================================

// Hero panoramic background — Maqam Echahid (Mémorial du Martyr, Alger)
export const HERO_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/9/98/Alger_Memorial-du-Martyr_4.jpg";

export const FLAG_ABSTRACT =
  "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/0de8e0546849ddb20ad322ab269ca0759c7f5d94bafcc14aa0e327be5879506f.png";

// ---------------------------------------------------------------------------
// PEOPLE — 3 photo slots per person. Slot 0 = portrait; 1 & 2 = empty for you.
// ---------------------------------------------------------------------------
export const PEOPLE_IMAGES = [
  { // 0 Emir Abdelkader
    photos: [
      "https://www.lesemeurs.com/img/articles/12931.jpg",
      "",
      "",
    ],
  },
  { // 1 Cheb Khaled
    photos: [
      "https://images.genius.com/d48787f1267244dc5044a79f9494a18c.1000x1000x1.jpg",
      "",
      "",
    ],
  },
  { // 2 Belkacem Haba
    photos: [
      "https://www.maghrebemergent.com/wp-content/uploads/2022/10/Decouvrez-qui-est-ce-chercheur-algerien-Belgacem-Haba-qui-fait-la-une-des-medias-americians0.webp",
      "",
      "",
    ],
  },
  { // 3 Albert Camus
    photos: [
      "https://media.newyorker.com/photos/5909675d019dfc3494ea0dd0/master/pass/120409_r22060_g2048.jpg",
      "",
      "",
    ],
  },
  { // 4 Yves Saint Laurent
    photos: [
      "https://s3-eu-west-1.amazonaws.com/musee-ysl-paris/images/_max_res/0001YSL_Paris_Studio_1981_Photo-Guy-Marineau10.jpg",
      "https://resize.elle.fr/article/var/plain_site/storage/images/mode/dossiers-mode/et-que-vive-saint-laurent/9188151-1-fre-FR/et_que_vive_saint_laurent.jpg",
      "",
    ],
  },
];

// ---------------------------------------------------------------------------
// LANDSCAPES — 3+ photo slots per destination. Order matches translations.js.
// ---------------------------------------------------------------------------
export const LANDSCAPE_GALLERIES = [
  { // 0 Tassili n'Ajjer
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Algerien_Desert.jpg/1920px-Algerien_Desert.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Gravure_rupestre_%2C_tassili_n%27ajjer_%2C_alg%C3%A9rie.jpg/1280px-Gravure_rupestre_%2C_tassili_n%27ajjer_%2C_alg%C3%A9rie.jpg",
      "https://nationalparksassociation.org/wp-content/uploads/2024/02/Tassili-nAjjer-National-Park-elephant-rock.jpg",
    ],
  },
  { // 1 Ghardaïa
    photos: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/46/48/af.jpg",
      "https://static-cms.routard.com/web-routard/uploads/pt883_1213714_6cdd69718d.jpg",
      "https://ghardaia.mta.gov.dz/wp-content/uploads/sites/31/2022/02/ghardaia-Tourism2-1.jpg",
      "https://www.almadeviajante.com/wp-content/uploads/souk-ghardaia-1024x682.jpg",
    ],
  },
  { // 2 Hoggar
    photos: [
      "https://images.unsplash.com/photo-1547237074-9647769e0c2f?auto=format&fit=crop&w=1400&q=80",
      "",
      "",
    ],
  },
  { // 3 Constantine
    photos: [
      "https://my-make-bucket.s3.eu-north-1.amazonaws.com/Photos/if8m7dk3kohtrguv55fv.webp",
      "https://www.lepoint.fr/resizer/v2/M57TPG5LZ5MSBJU4T6ZLWXQUIM.jpg?auth=97ddae097c5bf355d87bf8bd1533fc2aa1d86aece7b40eb205590506f82cb59a&width=765&height=575&smart=true",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/4f/b8/d6/la-mosquee-emir-abdelkader.jpg?w=900&h=500&s=1",
      "https://img.magnific.com/photos-premium/skyline-constantine-au-coucher-du-soleil-algerie-afrique-du-nord_261932-6571.jpg",
    ],
  },
  { // 4 Oran
    photos: [
      "https://i.pinimg.com/736x/0d/19/90/0d1990a2306905eaf3b2c8f259357b9d.jpg",
      "https://www.lejourdalgerie.com/wp-content/uploads/2021/03/oran.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/3c/cd/90/oran-province.jpg?w=700&h=-1&s=1",
      "https://img5.boatcdn.com/review_img/76ad0e89a41d203e8ca2b204019904dd",
      "https://algeriainvest.com/storage/uploads/news_logos/1179208771news_logo.jpg",
    ],
  },
  { // 5 Casbah de Argel
    photos: [
      "https://www.lexpressquotidien.dz/wp-content/uploads/2023/02/casbah.jpg",
      "https://www.thecasbahpost.com/wp-content/uploads/2017/02/Lazhar-Neftien-Casbah.jpg",
      "https://thumbs.dreamstime.com/b/la-casbah-d-alger-vue-int%C3%A9rieure-de-maison-et-ses-d%C3%A9corations-dans-kasbah-250709843.jpg",
      "https://www.civitatis.com/f/argelia/argel/galeria/mezquita-ketchaoua-kasbah-argel.jpg",
      "https://vacations.aircanada.com/.imaging/focalarea/wide/2000x/dam/jcr:e84fc247-9d08-442e-b28f-269e26b1dbd6/MCE-22802-DEST-Algiers-Main_Algiers.jpg",
      "https://www.orientale.fr/images--I--8217.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Alger-Grande-Poste-1.jpg",
      "https://f2.hespress.com/wp-content/uploads/2023/04/Mosquee-dAlger-copie.jpg",
    ],
  },
  { // 6 Tipaza
    photos: [
      "https://petitfute.twic.pics/medias/professionnel/294305/premium/originale/099863-tipasa-site-archeologique.jpg?pf=v2&twic=v1/cover=760x428/max=1000",
      "https://a0.muscache.com/im/pictures/89b20e53-1d27-455c-844d-0e7e6ae2c71e.jpg?im_w=720",
      "https://www.castlesintheworld.com/es/wp-content/uploads/tipasa-ruinas-romanas-1024x684.jpg",
      "https://images.trvl-media.com/place/553248635975094894/feaf1377-39b3-48cc-ad24-ded280b4ddb7.jpg",
    ],
  },
  { // 7 Hammam Maskhoutine
    photos: [
      "https://www.ambalgserbia.rs/wp-content/uploads/2015/06/119.jpg",
      "https://guelma.mta.gov.dz/wp-content/uploads/sites/16/2022/09/TOF_0247-scaled-thegem-blog-timeline-large.jpg",
      "",
    ],
  },
  { // 8 El Kala
    // NOTE: Facebook CDN URLs (scontent-...fbcdn.net) expire quickly. Re-host on imgur/cloudinary for permanence.
    photos: [
      "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/483487638_1051831566981424_9101328174309899746_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lzhTM1vCex0Q7kNvwFnCNsi&_nc_oc=Adpyny3Tdqoz9u6ADi27Se2-7bsWEiS06IIY0mfi7JHkrX1QxOXcBpt3JtY0EmYBSnM&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=76Q3DeQh_4wzOSe4ChxAPw&_nc_ss=7b2a8&oh=00_Af6g3aN_qSvV1m9mXGjtx_0J60mLWetYFWjWmHzUBmJ_bg&oe=6A144E4C",
      "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/483525258_1051831556981425_3388886506391558901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ylgYvop0mcEQ7kNvwG_FQR1&_nc_oc=AdpOCKwOSu8t_dps79Ev0hkZhVyN1ERvwfUKRWvLTQsolj7rbD5CJAnmfNp24cIA3jI&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=j1cLdT2PzlJUvI3yOHffhw&_nc_ss=7b2a8&oh=00_Af4c2mN0MEg-fLP2-CMm0a8l23arn_Lhh4aD2fXOIKBKBQ&oe=6A14777C",
      "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/483487893_1051831833648064_8166662109004381543_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9hn3XX2dZUEQ7kNvwHAWtQj&_nc_oc=Adqvwz4an4uxvjO0Ba7VpbGU-NXYg63vdxoKhT5HDwJP0uQzMtlerYZ3LO0Zc1wV92E&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=_iTLTn7AAmZ3Kz6huHIdiA&_nc_ss=7b2a8&oh=00_Af44hKeMMRqG6GjzXDUJhOraOs8xbfc6Qy6Eg8Mmsw5Tvw&oe=6A14451F",
    ],
  },
  { // 9 Seraïdi / Annaba
    photos: [
      "https://www.capfun-seraidi.com/wp-content/themes/CAPFUN/public/bgs/bg-5.jpg",
      "https://pbs.twimg.com/media/DbaBwi4XkAAFN4-.jpg",
      "https://www.capfun-seraidi.com/wp-content/themes/CAPFUN/public/bgs/bg-4.jpg",
      "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/488479904_1202751251852766_8740715174057060397_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=niGRMO2fdZ8Q7kNvwHG90m6&_nc_oc=AdpW2yoPvvRcqatsIrIPeJ71YiRMFOPrks6IDpLiGYPIh6RP_g6Vr9z1SdicGoBhnd8&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=IQw5gPFy3TbEnWHG10CRlQ&_nc_ss=7b2a8&oh=00_Af4ZigZNQojV7PZP_q2wimZ-aYX3Fk9MYlmN1TXfM5r8eA&oe=6A145E93",
    ],
  },
  { // 10 Jardín del Hamma
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Botanical_Garden_Hamma.jpg",
      "https://t4.ftcdn.net/jpg/03/36/81/21/360_F_336812169_req4WGQA9bYXj5zCP3Xu0cKTtFKhMZS4.jpg",
      "https://www.expressdz.dz/wp-content/uploads/2018/04/jardin-dEssai-dEl-Hamma.jpg",
    ],
  },
];

// ---------------------------------------------------------------------------
// GASTRONOMY — 3 slots per dish.
// ---------------------------------------------------------------------------
export const GASTRONOMY_GALLERIES = [
  { photos: [
      "https://www.recettes.com/wp-content/uploads/2026/02/couscous_algerien-scaled.jpg",
      "https://agrimidi.com/wp-content/uploads/2025/06/Couscous.jpeg",
      "",
    ],
  }, // Couscous
  { photos: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
      "",
      "",
    ],
  }, // Rechta
  { photos: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
      "",
      "",
    ],
  }, // Chorba
  { photos: [
      "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/bef80a266bd82a705f21718d8ede26ead85ad7f9390f2fa4ae67c03ceb98b09e.png",
      "",
      "",
    ],
  }, // Makrout
  { photos: [
      "https://static.prod-images.emergentagent.com/jobs/f7d405cd-ace5-405b-8ae9-5e51cddbb9d7/images/ecc67f091d9c81403daaed4ee5ac5b604472bea849d9048507b21efcd9b04531.png",
      "",
      "",
    ],
  }, // Té de menta
];

// ---------------------------------------------------------------------------
// TRADITIONS & TRADITIONAL DRESS — 3 slots per item.
// Slots [1] and [2] are empty for you to fill with your own photos.
// ---------------------------------------------------------------------------
export const TRADITION_GALLERIES = [
  { // 0 Karakou
    photos: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
      "",
      "",
    ],
  },
  { // 1 Haïk
    photos: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1200&q=80",
      "",
      "",
    ],
  },
  { // 2 Chedda de Tlemcen
    photos: ["", "", ""],
  },
  { // 3 Burnous
    photos: ["", "", ""],
  },
  { // 4 Robe Kabyle
    photos: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      "",
      "",
    ],
  },
  { // 5 Bijoux Berbères
    photos: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
      "",
      "",
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
