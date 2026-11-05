export const products = [
  // ==================== AUDIO & ACOUSTICS ====================
  {
    id: "prod-1",
    name: "Aura Pro Wireless ANC Studio Headphones",
    slug: "aura-pro-wireless-anc-studio-headphones",
    category: "audio",
    brand: "AuraSonic",
    price: 299,
    originalPrice: 379,
    discountPercent: 21,
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    stock: 45,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Precision-engineered over-ear headphones with hybrid active noise cancellation and 40-hour battery life.",
    description: "Immerse yourself in acoustic perfection. The Aura Pro delivers transcendent sound fidelity with bespoke 45mm beryllium drivers, calibrated spatial audio, and an ultra-plush memory foam headband wrapped in breathable vegan protein leather.",
    highlights: [
      "Hybrid Active Noise Cancellation with 4 environmental modes",
      "Up to 40 hours playtime with fast USB-C charge",
      "Audiophile-tuned custom 45mm dynamic drivers",
      "Multipoint Bluetooth 5.3 with lossless aptX Adaptive support"
    ],
    specs: {
      "Driver Size": "45mm Beryllium",
      "Battery Life": "40 Hours (ANC On)",
      "Connectivity": "Bluetooth 5.3 & 3.5mm Aux",
      "Weight": "265g",
      "Warranty": "2 Years International"
    },
    reviews: [
      { id: "rev-101", author: "Marcus Vance", rating: 5, date: "2 days ago", verified: true, title: "Unrivaled clarity and comfort", comment: "The noise cancellation easily rivals Sony and Bose, but the design and materials feel ten times more luxurious." }
    ]
  },
  {
    id: "prod-8",
    name: "SonicWave Compact Hi-Res Studio Monitors",
    slug: "sonicwave-compact-hi-res-studio-monitors",
    category: "audio",
    brand: "SonicWave",
    price: 320,
    originalPrice: 399,
    discountPercent: 20,
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    stock: 19,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Pair of active nearfield reference monitors with acoustic wave-guides and Bluetooth aptX-HD receiver.",
    description: "Designed for home music producers, podcasters, and discerning audiophiles who want transparent frequency response without taking up massive desk real estate.",
    highlights: [
      "Custom Kevlar low-frequency transducers & 1-inch silk dome tweeters",
      "Class-D bi-amplification delivering 80W continuous RMS clean power",
      "Room acoustic tuning switches (Bass boost, Treble roll-off)"
    ],
    specs: {
      "Frequency Response": "50Hz - 22,000Hz",
      "Total Power": "80 Watts Peak",
      "Inputs": "1/4\" TRS Balanced, RCA, 3.5mm AUX, Bluetooth 5.2"
    },
    reviews: [
      { id: "rev-801", author: "Nora B.", rating: 5, date: "2 weeks ago", verified: true, title: "Punchy, accurate bass without mud", comment: "Great soundstage for video editing and casual vinyl listening." }
    ]
  },
  {
    id: "prod-13",
    name: "Aeris True Wireless ANC Ceramic Earbuds",
    slug: "aeris-true-wireless-anc-ceramic-earbuds",
    category: "audio",
    brand: "AuraSonic",
    price: 179,
    originalPrice: 220,
    discountPercent: 19,
    rating: 4.9,
    reviewCount: 290,
    inStock: true,
    stock: 36,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ultra-compact zirconia ceramic earbuds with 42dB smart adaptive noise cancellation and wireless charging case.",
    description: "Housed in diamond-polished ceramic cases that resist scratches, Aeris earbuds deliver lossless Hi-Res audio with dual dynamic and balanced armature drivers.",
    highlights: [
      "42dB Hybrid active noise cancellation with wind noise reduction",
      "32 Hours total battery life with fast Qi wireless charging case",
      "IPX5 water and sweat resistance for high intensity workouts"
    ],
    specs: {
      "Battery": "8h (Earbuds) + 24h (Case)",
      "Codecs": "LDAC, AAC, SBC",
      "Weight": "4.8g per earbud"
    },
    reviews: [
      { id: "rev-1301", author: "James Peterson", rating: 5, date: "3 days ago", verified: true, title: "Zero ear fatigue", comment: "The ceramic finish is cool to the touch and the seal blocks subway rumble completely." }
    ]
  },
  {
    id: "prod-14",
    name: "Stratos Audiophile Direct-Drive Vinyl Turntable",
    slug: "stratos-audiophile-direct-drive-vinyl-turntable",
    category: "audio",
    brand: "Stratos Labs",
    price: 499,
    originalPrice: 599,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 88,
    inStock: true,
    stock: 14,
    featured: false,
    trending: true,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Precision low-vibration quartz direct-drive turntable with carbon fiber tonearm and phono preamp.",
    description: "Revitalize your vinyl collection with laboratory-grade tracking accuracy. Stratos utilizes a heavy die-cast aluminum platter and carbon-fiber tonearm.",
    highlights: [
      "Quartz-locked brushless direct drive motor with <0.02% wow & flutter",
      "One-piece rigid carbon fiber tonearm with damped lift control",
      "Switchable high-gain Audiophile phono equalizer"
    ],
    specs: {
      "Speeds": "33-1/3 RPM, 45 RPM, 78 RPM",
      "Platter": "Die-cast Aluminum 2.1kg",
      "Outputs": "Gold-plated RCA Phono/Line"
    },
    reviews: [
      { id: "rev-1401", author: "Miles D.", rating: 5, date: "1 month ago", verified: true, title: "Dead silent background", comment: "Needle drops sound organic and warm." }
    ]
  },
  {
    id: "prod-15",
    name: "Canyon Soundbar Ultra with Spatial Atmos",
    slug: "canyon-soundbar-ultra-with-spatial-atmos",
    category: "audio",
    brand: "SonicWave",
    price: 369,
    originalPrice: 449,
    discountPercent: 18,
    rating: 4.7,
    reviewCount: 162,
    inStock: true,
    stock: 25,
    featured: false,
    trending: false,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Minimalist all-in-one soundbar featuring Dolby Atmos upfiring speakers and integrated subwoofers.",
    description: "Transforms movie nights and spatial gaming with 9 custom-engineered drivers delivering 3D sound waves without needing separate rear satellite speakers.",
    highlights: [
      "Dolby Atmos 5.1.2 virtualization engine",
      "Single eARC HDMI cable setup with auto-calibration",
      "Matte anodized black aluminum top grille"
    ],
    specs: {
      "Total Power": "220W Peak",
      "Connections": "HDMI eARC, Optical, AirPlay 2"
    },
    reviews: [
      { id: "rev-1501", author: "Brian K.", rating: 5, date: "3 weeks ago", verified: true, title: "Dialogue clarity is 10/10", comment: "Replaced bulky amplifier setup with pure minimalist elegance." }
    ]
  },
  {
    id: "prod-24",
    name: "Vortex Vacuum Tube Headphone Amp & DAC",
    slug: "vortex-vacuum-tube-headphone-amp-dac",
    category: "audio",
    brand: "Stratos Labs",
    price: 429,
    originalPrice: 520,
    discountPercent: 18,
    rating: 4.9,
    reviewCount: 74,
    inStock: true,
    stock: 12,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Dual-triode Class-A tube headphone amplifier with 32-bit/768kHz ESS Sabre DAC architecture.",
    description: "Experience the lush harmonic warmth only authentic vacuum tubes provide. Custom-matched Russian 6N1P tubes combine with an ultra-clean ESS Sabre DAC chip.",
    highlights: [
      "Matched dual Russian 6N1P vacuum tubes with Class-A output stage",
      "32-Bit / 768kHz PCM and native DSD512 decoding",
      "Solid milled aluminum chassis with gold-plated 4.4mm balanced and 6.35mm jacks"
    ],
    specs: {
      "Output Power": "2.4W into 32Ω",
      "Tubes": "2x 6N1P Dual Triode (Roller swappable)",
      "DAC Chip": "ESS Sabre ES9038Q2M"
    },
    reviews: [
      { id: "rev-2401", author: "Ethan Cole", rating: 5, date: "4 days ago", verified: true, title: "Lush vocal presence", comment: "Transforms high-impedance headphones into acoustic ecstasy." }
    ]
  },
  {
    id: "prod-25",
    name: "EchoSphere 360 Portable Water-Resistant Speaker",
    slug: "echosphere-360-portable-water-resistant-speaker",
    category: "audio",
    brand: "SonicWave",
    price: 149,
    originalPrice: 189,
    discountPercent: 21,
    rating: 4.8,
    reviewCount: 215,
    inStock: true,
    stock: 40,
    featured: false,
    trending: true,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Omnidirectional 360-degree wireless Bluetooth speaker with aluminum handle and 24-hr battery.",
    description: "Room-filling sound anywhere you travel. Dual passive radiators generate punchy low-end down to 45Hz wrapped in water-resistant technical mesh.",
    highlights: [
      "True 360-degree cylindrical acoustic dispersion",
      "IP67 Dustproof and waterproof (submersible up to 1m)",
      "24 hours playtime on a single charge with reverse phone charging"
    ],
    specs: {
      "Battery": "24 Hours (7800mAh)",
      "Bluetooth": "5.3 Multi-Pairing",
      "Weight": "720g"
    },
    reviews: [
      { id: "rev-2501", author: "Zoe Taylor", rating: 5, date: "1 week ago", verified: true, title: "Take it everywhere", comment: "Bass is astonishing for something this compact." }
    ]
  },

  // ==================== ELECTRONICS & TECH ====================
  {
    id: "prod-4",
    name: "Nebula Ultra-Thin OLED 4K Portable Monitor",
    slug: "nebula-ultra-thin-oled-4k-portable-monitor",
    category: "electronics",
    brand: "NebulaTech",
    price: 389,
    originalPrice: 479,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: 220,
    inStock: true,
    stock: 31,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "15.6-inch 4K UHD Pure OLED display with 100% DCI-P3 color gamut and single-cable USB-C power.",
    description: "Expand your digital horizon anywhere. The Nebula OLED brings true 100,000:1 contrast ratios and inky blacks to your mobile workstation.",
    highlights: [
      "15.6-inch 4K (3840 x 2160) Pure OLED Panel",
      "100% DCI-P3 & sRGB cinema color calibration",
      "Single-cable USB-C for video and 65W pass-through charging"
    ],
    specs: {
      "Resolution": "3840 x 2160 UHD",
      "Brightness": "500 nits Peak HDR",
      "Thickness": "4.9mm at thinnest edge"
    },
    reviews: [
      { id: "rev-401", author: "Sarah Lin", rating: 5, date: "2 weeks ago", verified: true, title: "A dream travel monitor", comment: "Colors match my studio display perfectly." }
    ]
  },
  {
    id: "prod-9",
    name: "Apex Keyboards Pro Wireless Mechanical Keyboard",
    slug: "apex-keyboards-pro-wireless-mechanical-keyboard",
    category: "electronics",
    brand: "ApexDesign",
    price: 169,
    originalPrice: 210,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 388,
    inStock: true,
    stock: 42,
    featured: true,
    trending: true,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Gasket-mounted 75% mechanical keyboard with hot-swappable tactile switches, rotary dial, and PBT keycaps.",
    description: "Experience acoustic typing bliss. The Apex Pro features a multi-layer poron foam gasket mount system that softens harsh keystrokes into a deep, satisfying acoustic thock.",
    highlights: [
      "Hot-swappable 5-pin PCB supports any MX mechanical switches",
      "Gasket mount structure with polycarbonate plate and sound-dampening foam",
      "Tri-mode connectivity: 2.4GHz Ultra-low latency, Bluetooth 5.1, Type-C"
    ],
    specs: {
      "Layout": "75% Compact (82 Keys)",
      "Battery": "4000mAh (Up to 200 hours)"
    },
    reviews: [
      { id: "rev-901", author: "Arjun Mehta", rating: 5, date: "4 days ago", verified: true, title: "Legendary acoustic thock", comment: "No rattle on the spacebar and the rotary dial is super handy." }
    ]
  },
  {
    id: "prod-12",
    name: "Orbit Pro MagSafe 3-in-1 Fast Wireless Stand",
    slug: "orbit-pro-magsafe-3-in-1-fast-wireless-stand",
    category: "electronics",
    brand: "OrbitGear",
    price: 99,
    originalPrice: 129,
    discountPercent: 23,
    rating: 4.7,
    reviewCount: 456,
    inStock: true,
    stock: 50,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "15W fast MagSafe charging stand for iPhone, Apple Watch Ultra/Series, and AirPods simultaneously.",
    description: "Declutter your nightstand with a single sculptural power hub. The Orbit Pro uses official Qi2 / MagSafe magnetic alignments with stainless steel stalks.",
    highlights: [
      "Full 15W Qi2 fast wireless charging",
      "Rotates 360° to support iOS StandBy landscape mode",
      "Solid zinc alloy weighted non-slip base"
    ],
    specs: {
      "Output": "Phone 15W + Watch 5W + Earbuds 5W",
      "Weight": "420g Weighted Anti-slip Base"
    },
    reviews: [
      { id: "rev-1201", author: "Chloe Martinez", rating: 5, date: "1 week ago", verified: true, title: "Cleanest desk accessory", comment: "Magnets are strong and hold my phone securely." }
    ]
  },
  {
    id: "prod-18",
    name: "Spectra Pro 4K HDR Streaming Webcam",
    slug: "spectra-pro-4k-hdr-streaming-webcam",
    category: "electronics",
    brand: "NebulaTech",
    price: 159,
    originalPrice: 199,
    discountPercent: 20,
    rating: 4.8,
    reviewCount: 175,
    inStock: true,
    stock: 33,
    featured: false,
    trending: false,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "4K 60FPS content creator webcam with 1/1.8\" Sony STARVIS sensor and AI auto-framing.",
    description: "Look razor sharp in Zoom calls, Twitch streams, and board meetings. The large Sony STARVIS sensor delivers natural skin tones even in low light.",
    highlights: [
      "Ultra 4K 60FPS or 1080p 120FPS smooth capture",
      "Sony STARVIS low-light sensor with HDR real-time balancing",
      "Hardware magnetic privacy shutter"
    ],
    specs: {
      "Sensor": "1/1.8\" Sony STARVIS",
      "FOV": "65°, 78°, 90° adjustable field of view",
      "Interface": "USB-C 3.1"
    },
    reviews: [
      { id: "rev-1801", author: "Devon Reed", rating: 5, date: "1 week ago", verified: true, title: "DSLR quality without hassle", comment: "Colleagues immediately noticed the video boost." }
    ]
  },
  {
    id: "prod-19",
    name: "Apex Precision Wireless Ergonomic Mouse",
    slug: "apex-precision-wireless-ergonomic-mouse",
    category: "electronics",
    brand: "ApexDesign",
    price: 89,
    originalPrice: 115,
    discountPercent: 23,
    rating: 4.8,
    reviewCount: 310,
    inStock: true,
    stock: 40,
    featured: false,
    trending: true,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "MagSpeed electromagnetic scroll wheel mouse with thumb gesture panel and seamless dual-flow.",
    description: "Sculpted to fit the palm naturally, the Apex Mouse eliminates wrist tension while providing pixel-exact 8000 DPI tracking on all surfaces including clear glass.",
    highlights: [
      "MagSpeed scroll wheel shifts from ratchet to free spin at 1000 lines/sec",
      "Tracks on glass and any surface with 8000 DPI Darkfield sensor",
      "70 days of use on a single 1-minute quick charge"
    ],
    specs: {
      "Battery": "500mAh Li-Po (70 days)",
      "Sensor": "8000 DPI Darkfield",
      "Weight": "141g"
    },
    reviews: [
      { id: "rev-1901", author: "Hannah S.", rating: 5, date: "3 weeks ago", verified: true, title: "The scroll wheel is magic", comment: "Effortlessly navigates spreadsheets and code repositories." }
    ]
  },
  {
    id: "prod-26",
    name: "Voltaic 140W Quad GaN Fast Charger",
    slug: "voltaic-140w-quad-gan-fast-charger",
    category: "electronics",
    brand: "OrbitGear",
    price: 79,
    originalPrice: 99,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 184,
    inStock: true,
    stock: 52,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ultra-compact GaN-V semiconductor power adapter powering 2 laptops and 2 phones at full speed.",
    description: "Replace four bulky power bricks with one palm-sized block. Delivers a maximum of 140W via USB-C Power Delivery 3.1 with intelligent dynamic wattage allocation.",
    highlights: [
      "Single-port 140W PD 3.1 output charges a 16\" MacBook Pro to 50% in 28 mins",
      "Gallium Nitride (GaN-V) technology runs 30% cooler than silicon",
      "Foldable wall prongs with interchangeable UK/EU travel adapters"
    ],
    specs: {
      "Ports": "3x USB-C (140W max), 1x USB-A (22.5W)",
      "Total Power": "140 Watts Max",
      "Weight": "285g"
    },
    reviews: [
      { id: "rev-2601", author: "Daniel H.", rating: 5, date: "5 days ago", verified: true, title: "Only charger I pack", comment: "Powers my work laptop and phone with ports to spare." }
    ]
  },
  {
    id: "prod-27",
    name: "Synapse Digital Paper 10.3\" E-Ink Tablet",
    slug: "synapse-digital-paper-10-3-e-ink-tablet",
    category: "electronics",
    brand: "NebulaTech",
    price: 399,
    originalPrice: 479,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 129,
    inStock: true,
    stock: 22,
    featured: true,
    trending: false,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Glare-free paper-like reading and sketch tablet with 4096-level pressure stylus and 2-week battery.",
    description: "Rediscover the tactility of pen and paper without physical clutter. Features an ultra-thin 5.8mm aluminum chassis, front-light with adjustable warmth, and instant cloud sync.",
    highlights: [
      "10.3\" Carta 1200 E-Ink panel with 300 PPI paper resolution",
      "Battery-free EMR stylus with 4096 pressure sensitivity levels",
      "Two weeks of battery life per charge with handwriting-to-text AI"
    ],
    specs: {
      "Screen": "10.3\" E-Ink Carta 1200 (1872 x 1404)",
      "Storage": "64GB UFS 2.2",
      "Thickness": "5.8mm"
    },
    reviews: [
      { id: "rev-2701", author: "Rachel Ross", rating: 5, date: "1 week ago", verified: true, title: "Replaced all paper notebooks", comment: "Writing feel is uncanny, zero latency." }
    ]
  },

  // ==================== HOME & WORKSPACE ====================
  {
    id: "prod-3",
    name: "Zenith Pro ErgoDesk Task Chair",
    slug: "zenith-pro-ergodesk-task-chair",
    category: "home",
    brand: "ErgoForm",
    price: 349,
    originalPrice: 429,
    discountPercent: 19,
    rating: 4.7,
    reviewCount: 512,
    inStock: true,
    stock: 22,
    featured: true,
    trending: false,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Engineered breathable mesh ergonomic office chair with dynamic lumbar support and 4D armrests.",
    description: "Say goodbye to lumbar fatigue. The Zenith Pro chair supports your spine's natural curve through continuous responsive resistance.",
    highlights: [
      "Dynamic auto-adjusting posture lumbar cradle",
      "4D armrests (height, pivot, depth, width)",
      "Class-4 heavy duty hydraulic cylinder rated up to 330 lbs"
    ],
    specs: {
      "Weight Capacity": "330 lbs (150 kg)",
      "Back Tilt": "90° to 135° Recline lock"
    },
    reviews: [
      { id: "rev-301", author: "David K.", rating: 5, date: "1 month ago", verified: true, title: "Cured posture headaches", comment: "The mesh stays cool and supportive during long coding hours." }
    ]
  },
  {
    id: "prod-5",
    name: "Artisan Precision Pour-Over Kettle & Brewer",
    slug: "artisan-precision-pour-over-kettle-brewer",
    category: "home",
    brand: "BaristaCraft",
    price: 139,
    originalPrice: 175,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 410,
    inStock: true,
    stock: 54,
    featured: false,
    trending: true,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Variable temperature electric gooseneck kettle with LCD screen, stopwatch, and precision flow spout.",
    description: "Master third-wave specialty coffee brewing at home. This gooseneck kettle heats water to the exact degree within seconds.",
    highlights: [
      "PID temperature controller holds water at target temp for 60 mins",
      "Gooseneck spout engineered for steady 90-degree laminar water pour",
      "Built-in brew stopwatch for timing your bloom and pour cycles"
    ],
    specs: {
      "Capacity": "0.9 Liters",
      "Power": "1200W Rapid Boil"
    },
    reviews: [
      { id: "rev-501", author: "Oliver Chen", rating: 5, date: "5 days ago", verified: true, title: "Buttery smooth flow control", comment: "No drips, no spills, holds the exact temperature for my light roast V60s." }
    ]
  },
  {
    id: "prod-10",
    name: "PureMist Smart Ultrasonic Aroma Diffuser",
    slug: "puremist-smart-ultrasonic-aroma-diffuser",
    category: "home",
    brand: "PureMist",
    price: 69,
    originalPrice: 89,
    discountPercent: 22,
    rating: 4.5,
    reviewCount: 201,
    inStock: true,
    stock: 60,
    featured: false,
    trending: false,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ceramic fluted essential oil diffuser with ambient warm halo glow and whisper-quiet ultrasonic tech.",
    description: "Transform your bedroom or workspace into a serene sanctuary. Handcrafted with an organic stone ceramic cover.",
    highlights: [
      "Real textured matte ceramic shell",
      "Whisper-quiet operation (< 20dB)",
      "Auto shut-off sensor when reservoir is dry"
    ],
    specs: {
      "Reservoir Capacity": "300ml",
      "Coverage": "Up to 350 sq. ft."
    },
    reviews: [
      { id: "rev-1001", author: "Emily Watson", rating: 5, date: "2 weeks ago", verified: true, title: "A sculptural nightstand piece", comment: "The mist is super fine and doesn't leave water droplets on wood." }
    ]
  },
  {
    id: "prod-20",
    name: "Lumina Architectural Balance Desk Lamp",
    slug: "lumina-architectural-balance-desk-lamp",
    category: "home",
    brand: "ErgoForm",
    price: 159,
    originalPrice: 195,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    stock: 26,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Counterbalanced aluminum task light with 98 CRI daylight LEDs and optical touch slider.",
    description: "Engineered for designers, coders, and readers who demand zero screen glare and true-to-life 98 CRI color rendering.",
    highlights: [
      "98 CRI Museum-grade LED chip eliminates eye fatigue",
      "Optical touch dimming with stepless 2700K - 5500K color temperature",
      "CNC milled counterbalanced joints that stay firmly in position"
    ],
    specs: {
      "Luminous Flux": "1200 Lumens",
      "Power": "14W Energy Star"
    },
    reviews: [
      { id: "rev-2001", author: "Klaus M.", rating: 5, date: "5 days ago", verified: true, title: "German engineering perfection", comment: "Arm glides smoothly with zero wobble." }
    ]
  },
  {
    id: "prod-21",
    name: "Aura Air HEPA-14 True Carbon Air Purifier",
    slug: "aura-air-hepa-14-true-carbon-air-purifier",
    category: "home",
    brand: "PureMist",
    price: 219,
    originalPrice: 279,
    discountPercent: 22,
    rating: 4.9,
    reviewCount: 230,
    inStock: true,
    stock: 35,
    featured: true,
    trending: false,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Cylindrical whisper-quiet air purifier with medical HEPA-14 filter, active carbon, and laser sensor.",
    description: "Cleans 500 square feet in 12 minutes. Captures 99.995% of airborne dust, allergens, and VOCs with continuous real-time AQI halo indicator.",
    highlights: [
      "Medical Grade HEPA-14 filtration with activated coconut carbon",
      "Real-time PM2.5 laser detection with automated fan modulation",
      "Whisper night mode at only 19dB"
    ],
    specs: {
      "CADR": "350 m³/h",
      "Coverage": "Up to 550 sq. ft."
    },
    reviews: [
      { id: "rev-2101", author: "Tanya G.", rating: 5, date: "1 week ago", verified: true, title: "Allergies gone in 48 hours", comment: "Noticeably crisper air in our apartment." }
    ]
  },
  {
    id: "prod-28",
    name: "Nordic Solid American Walnut Desk Shelf",
    slug: "nordic-solid-american-walnut-desk-shelf",
    category: "home",
    brand: "ErgoForm",
    price: 189,
    originalPrice: 230,
    discountPercent: 18,
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    stock: 24,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Hand-finished solid American walnut dual-monitor riser shelf with natural cork padding.",
    description: "Elevate your screens to eye-level posture perfection while reclaiming valuable desk territory below for your keyboard and audio gear.",
    highlights: [
      "Crafted from 100% sustainable FSC-certified solid American walnut",
      "Supports up to 80 lbs (dual 32\" studio monitors)",
      "Natural cork footpads that protect desktop surfaces from micro-scratches"
    ],
    specs: {
      "Dimensions": "115cm x 23cm x 11cm",
      "Material": "Solid Walnut & Powder-Coated Aluminum Legs"
    },
    reviews: [
      { id: "rev-2801", author: "Liam Scott", rating: 5, date: "3 days ago", verified: true, title: "Transforms the desk look", comment: "Grain pattern is gorgeous, silky smooth finish." }
    ]
  },
  {
    id: "prod-29",
    name: "BaristaCraft Dual Boiler Espresso Machine",
    slug: "baristacraft-dual-boiler-espresso-machine",
    category: "home",
    brand: "BaristaCraft",
    price: 649,
    originalPrice: 799,
    discountPercent: 19,
    rating: 4.9,
    reviewCount: 95,
    inStock: true,
    stock: 11,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Prosumer stainless steel dual-boiler espresso machine with saturated grouphead and PID temp control.",
    description: "Extract commercial espresso cafe shots right in your kitchen. Simultaneous 15-bar steam and brew boilers with micro-foam wand.",
    highlights: [
      "Independent dual boilers for instantaneous brewing and milk frothing",
      "Digital PID temperature stability within ±0.5°C",
      "Commercial 58mm stainless steel portafilter included"
    ],
    specs: {
      "Pump": "Italian Ulka 15-Bar Vibration Pump",
      "Boiler": "0.8L Brew + 1.2L Steam Stainless Steel",
      "Power": "1800W"
    },
    reviews: [
      { id: "rev-2901", author: "Matteo Conti", rating: 5, date: "1 week ago", verified: true, title: "Cafe quality at home", comment: "Produces thick golden crema every single pull." }
    ]
  },

  // ==================== ACCESSORIES & CARRY ====================
  {
    id: "prod-2",
    name: "Chronos Horizon Titanium Automatic Watch",
    slug: "chronos-horizon-titanium-automatic-watch",
    category: "accessories",
    brand: "Chronos Atelier",
    price: 489,
    originalPrice: 620,
    discountPercent: 21,
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
    stock: 18,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Grade-5 aerospace titanium timepiece featuring a Swiss automatic movement and scratchproof sapphire crystal.",
    description: "Designed for those who celebrate mechanical mastery. The Chronos Horizon encases an authentic 28-jewel automatic movement within a sandblasted titanium body that is featherlight.",
    highlights: [
      "Grade-5 Aerospace Titanium Case with matte satin finish",
      "Swiss 28-Jewel Self-Winding Caliber with 42-hour power reserve",
      "Double-domed anti-reflective scratch-resistant Sapphire crystal"
    ],
    specs: {
      "Case Diameter": "40mm",
      "Case Material": "Grade-5 Titanium",
      "Water Resistance": "10 ATM / 100 Meters"
    },
    reviews: [
      { id: "rev-201", author: "Julian Thorne", rating: 5, date: "3 weeks ago", verified: true, title: "Heirloom quality", comment: "The titanium feels warm and light on the wrist. Finishing is immaculate." }
    ]
  },
  {
    id: "prod-7",
    name: "Vanguard Minimalist Commuter Leather Backpack",
    slug: "vanguard-minimalist-commuter-leather-backpack",
    category: "accessories",
    brand: "AtelierVanguard",
    price: 189,
    originalPrice: 240,
    discountPercent: 21,
    rating: 4.8,
    reviewCount: 278,
    inStock: true,
    stock: 35,
    featured: true,
    trending: true,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Water-resistant waxed canvas and full-grain Italian leather backpack with suspended 16-inch laptop pocket.",
    description: "The quintessential bag for the modern professional. Balancing utilitarian organization with quiet luxury aesthetics.",
    highlights: [
      "Dedicated padded compartment fits up to 16\" MacBook Pro",
      "Full-grain vegetable-tanned Italian leather trim",
      "Hidden anti-theft luggage pass-through sleeve"
    ],
    specs: {
      "Capacity": "22 Liters",
      "Dimensions": "46cm x 30cm x 15cm"
    },
    reviews: [
      { id: "rev-701", author: "Christian Hall", rating: 5, date: "1 month ago", verified: true, title: "Everyday carry essential", comment: "Holds my gear comfortably and the leather looks richer by the day." }
    ]
  },
  {
    id: "prod-16",
    name: "Aero Stealth Matte Black Polarized Sunglasses",
    slug: "aero-stealth-matte-black-polarized-sunglasses",
    category: "accessories",
    brand: "Chronos Atelier",
    price: 129,
    originalPrice: 165,
    discountPercent: 22,
    rating: 4.8,
    reviewCount: 195,
    inStock: true,
    stock: 42,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ultra-light Japanese beta-titanium frame sunglasses with scratch-resistant polarized nylon lenses.",
    description: "Weighing a mere 18 grams, the Aero Stealth pairs featherlight Japanese beta-titanium temples with category-3 polarized lenses.",
    highlights: [
      "Pure Japanese Beta-Titanium architecture",
      "UVA/UVB 400 total ocular solar radiation block",
      "Hydrophobic and oleophobic lens coatings repelling smudges"
    ],
    specs: {
      "Frame Weight": "18g",
      "Lens": "Polarized Nylon Category 3"
    },
    reviews: [
      { id: "rev-1601", author: "Samir K.", rating: 5, date: "4 days ago", verified: true, title: "Can barely feel them on nose", comment: "Incredible optics for driving in direct glare." }
    ]
  },
  {
    id: "prod-17",
    name: "Titan Minimalist RFID Billet Aluminum Wallet",
    slug: "titan-minimalist-rfid-billet-aluminum-wallet",
    category: "accessories",
    brand: "AtelierVanguard",
    price: 85,
    originalPrice: 110,
    discountPercent: 23,
    rating: 4.7,
    reviewCount: 320,
    inStock: true,
    stock: 58,
    featured: false,
    trending: false,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "CNC-milled dual-plate RFID blocking wallet holding 1-12 cards with integrated cash strap.",
    description: "Ditch the bulky pocket brick. The Titan wallet clamps your credit cards between two aircraft-grade aluminum plates.",
    highlights: [
      "Guaranteed lifetime RFID signal shielding against wireless theft",
      "Holds up to 12 cards without stretching out",
      "Beveled thumb indentation for rapid card fanning"
    ],
    specs: {
      "Material": "Anodized 6061-T6 Aircraft Aluminum",
      "Weight": "55g"
    },
    reviews: [
      { id: "rev-1701", author: "Lucas M.", rating: 5, date: "2 weeks ago", verified: true, title: "Front pocket game changer", comment: "Never going back to traditional bi-folds." }
    ]
  },
  {
    id: "prod-30",
    name: "Apex Billet Titanium Bolt-Action EDC Pen",
    slug: "apex-billet-titanium-bolt-action-edc-pen",
    category: "accessories",
    brand: "AtelierVanguard",
    price: 65,
    originalPrice: 85,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 153,
    inStock: true,
    stock: 45,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Precision Grade-5 titanium bolt-action pen fitted with German Schmidt ceramic rollerball refill.",
    description: "Machined from a solid billet of Grade-5 titanium with an addictive, fidget-friendly bolt-action deployment mechanism.",
    highlights: [
      "Grade-5 Titanium body with subtle spiral grip micro-knurling",
      "Smooth bolt-action retraction designed for 500,000 cycles",
      "Accepts standard Parker-style and Schmidt easyFLOW refills"
    ],
    specs: {
      "Weight": "32g",
      "Length": "130mm",
      "Material": "Grade-5 Titanium"
    },
    reviews: [
      { id: "rev-3001", author: "Alex Chen", rating: 5, date: "1 week ago", verified: true, title: "Superb weight balance", comment: "The bolt action is so satisfying to flick during phone calls." }
    ]
  },
  {
    id: "prod-31",
    name: "Vanguard Full-Grain Leather Cable & Tech Folio",
    slug: "vanguard-full-grain-leather-cable-tech-folio",
    category: "accessories",
    brand: "AtelierVanguard",
    price: 95,
    originalPrice: 120,
    discountPercent: 21,
    rating: 4.8,
    reviewCount: 110,
    inStock: true,
    stock: 28,
    featured: false,
    trending: false,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Vegetable-tanned Horween leather organizer for power bricks, SSDs, cables, and pens.",
    description: "Keep your mobile workstation cables organized without tangled mess. Features elastic keeper loops, zippered mesh battery pocket, and magnetic closure.",
    highlights: [
      "Authentic Horween Chromexcel vegetable-tanned leather",
      "6 flexible elastic cable retention slots + 2 zippered pockets",
      "Ultra-slim 25mm profile fits comfortably in briefcase sleeves"
    ],
    specs: {
      "Dimensions": "22cm x 15cm x 2.5cm",
      "Leather": "Full-grain vegetable tanned"
    },
    reviews: [
      { id: "rev-3101", author: "Oliver R.", rating: 5, date: "3 weeks ago", verified: true, title: "Classy organization", comment: "The leather smell and patina are incredible." }
    ]
  },

  // ==================== FASHION & LIFESTYLE ====================
  {
    id: "prod-6",
    name: "Urban All-Weather Technical Shell Parka",
    slug: "urban-all-weather-technical-shell-parka",
    category: "fashion",
    brand: "NordicStorm",
    price: 245,
    originalPrice: 310,
    discountPercent: 21,
    rating: 4.6,
    reviewCount: 164,
    inStock: true,
    stock: 28,
    featured: false,
    trending: false,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "3-layer waterproof, windproof breathable GORE-grade technical parka with magnetic storm flaps.",
    description: "Engineered for unpredictable city weather and outdoor trails alike. Constructed with seam-sealed tri-laminate Japanese nylon fabric.",
    highlights: [
      "20,000mm Waterproof & 15,000g/m² Breathability rating",
      "Water-repellent YKK AquaGuard zipper closures",
      "Hidden interior pockets for passport, wallet, and tablet"
    ],
    specs: {
      "Shell Fabric": "100% Recycled 3-Layer Nylon",
      "Weight": "580g"
    },
    reviews: [
      { id: "rev-601", author: "Liam Wright", rating: 5, date: "3 weeks ago", verified: true, title: "Survived heavy rain completely dry", comment: "Clean minimalist aesthetic that looks great over shirts." }
    ]
  },
  {
    id: "prod-11",
    name: "Soleil Pure Italian Nappa Leather Low-Tops",
    slug: "soleil-pure-italian-nappa-leather-low-tops",
    category: "fashion",
    brand: "Soleil Atelier",
    price: 185,
    originalPrice: 235,
    discountPercent: 21,
    rating: 4.8,
    reviewCount: 310,
    inStock: true,
    stock: 24,
    featured: true,
    trending: false,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Hand-stitched luxury minimalist sneakers crafted with buttery Italian Nappa leather and Margom rubber outsoles.",
    description: "The Holy Grail of casual luxury footwear. Stripped of branding, Soleil pairs minimalist silhouette lines with full calfskin lining.",
    highlights: [
      "100% Full-grain buttery Italian Nappa leather upper",
      "Antimicrobial natural calfskin lining and padded tongue",
      "Custom Margom Italian rubber cupsole with grip tread"
    ],
    specs: {
      "Origin": "Handcrafted in Marche, Italy",
      "Fit": "True to size (US & EU sizing)"
    },
    reviews: [
      { id: "rev-1101", author: "Pierre Laurent", rating: 5, date: "3 weeks ago", verified: true, title: "Zero break-in pain", comment: "Leather is unbelievable and the silhouette is razor sharp." }
    ]
  },
  {
    id: "prod-22",
    name: "Atelier Heavyweight Loopback French Terry Hoodie",
    slug: "atelier-heavyweight-loopback-french-terry-hoodie",
    category: "fashion",
    brand: "Soleil Atelier",
    price: 115,
    originalPrice: 145,
    discountPercent: 21,
    rating: 4.9,
    reviewCount: 228,
    inStock: true,
    stock: 38,
    featured: false,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "500 GSM organic cotton heavyweight boxy-fit pullover hoodie with double-layered crossover hood.",
    description: "The ultimate everyday heavyweight hoodie. Custom-knitted from 100% long-staple organic cotton with deep loopback fleece inside for warmth and structure that never sags.",
    highlights: [
      "Custom 500 GSM heavyweight organic cotton construction",
      "Seamless clean boxy drape with dropped shoulders",
      "Pre-shrunk fabric to retain exact fit across washes"
    ],
    specs: {
      "Fabric": "500 GSM 100% Organic Cotton",
      "Care": "Cold wash inside out, lay flat to dry"
    },
    reviews: [
      { id: "rev-2201", author: "Jordan P.", rating: 5, date: "6 days ago", verified: true, title: "Substantial weight & luxury drape", comment: "The hood stands up nicely." }
    ]
  },
  {
    id: "prod-23",
    name: "Vanguard Waxed Cotton Chore Coat",
    slug: "vanguard-waxed-cotton-chore-coat",
    category: "fashion",
    brand: "NordicStorm",
    price: 195,
    originalPrice: 250,
    discountPercent: 22,
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    stock: 20,
    featured: false,
    trending: false,
    isNew: false,
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Heritage 12oz British waxed cotton utility jacket with corduroy collar and brushed flannel lining.",
    description: "A timeless workwear silhouette built to withstand wind, brush, and rain. The weatherproof wax coating ages uniquely to the wearer's daily journeys.",
    highlights: [
      "12oz Halley Stevensons Scottish waxed canvas",
      "Soft 100% Portuguese cotton flannel torso lining",
      "Heavy-duty brass shank buttons and deep dump pockets"
    ],
    specs: {
      "Fabric": "12oz Waxed Cotton & Cotton Flannel",
      "Weather Resistance": "Naturally water & wind proof"
    },
    reviews: [
      { id: "rev-2301", author: "Caleb R.", rating: 5, date: "2 weeks ago", verified: true, title: "Rugged elegance", comment: "Wears like iron and keeps the chilly winds out." }
    ]
  },
  {
    id: "prod-32",
    name: "Kyoto 14oz Selvedge Raw Denim Overshirt",
    slug: "kyoto-14oz-selvedge-raw-denim-overshirt",
    category: "fashion",
    brand: "Soleil Atelier",
    price: 165,
    originalPrice: 210,
    discountPercent: 21,
    rating: 4.9,
    reviewCount: 84,
    inStock: true,
    stock: 19,
    featured: true,
    trending: true,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "14oz Japanese shuttle-loom woven raw selvedge denim shirt with red ticker ID line.",
    description: "Woven slowly on vintage Toyoda shuttle looms in Kojima, Japan. The unwashed raw indigo will mold and develop personalized honeycombs and whiskers as you wear it.",
    highlights: [
      "Authentic 14oz Japanese red-line selvedge denim",
      "Custom gunmetal doughnut buttons",
      "Twin chest flap pockets with reinforced gusset seams"
    ],
    specs: {
      "Denim": "14oz 100% Cotton Raw Selvedge (Kojima, Japan)",
      "Fit": "Tailored Overshirt / Jacket"
    },
    reviews: [
      { id: "rev-3201", author: "Kenji Sato", rating: 5, date: "2 days ago", verified: true, title: "True Japanese artisan craft", comment: "The slubby texture of this denim is world class." }
    ]
  },
  {
    id: "prod-33",
    name: "Nordic Merino Wool Minimalist Knit Cardigan",
    slug: "nordic-merino-wool-minimalist-knit-cardigan",
    category: "fashion",
    brand: "Soleil Atelier",
    price: 135,
    originalPrice: 175,
    discountPercent: 23,
    rating: 4.8,
    reviewCount: 96,
    inStock: true,
    stock: 25,
    featured: false,
    trending: false,
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "100% extra-fine Australian Merino wool ribbed button-up cardigan with horn buttons.",
    description: "Ultralight yet exceptionally insulating. Knitted with 19.5-micron extra-fine Merino wool that regulates body temperature seamlessly without itchiness.",
    highlights: [
      "100% Extra-fine 19.5-micron Australian Merino wool",
      "Natural real buffalo horn button closures",
      "Breathable thermal regulation for year-round layering"
    ],
    specs: {
      "Yarn": "100% Extra-Fine Merino Wool",
      "Gauge": "7-Gauge Heavy Ribbed Knit"
    },
    reviews: [
      { id: "rev-3301", author: "Felix Brandt", rating: 5, date: "1 week ago", verified: true, title: "Soft as cashmere", comment: "Drapes cleanly over a tee or collared shirt." }
    ]
  }
];
