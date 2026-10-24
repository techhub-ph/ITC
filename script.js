/**
 * TechHub Philippines - Global Store Engine & Interactive Controller
 * Features:
 * - Unified 90-Product Catalog Database (p1 - p90)
 * - Dynamic Modals (Product Detail, Auth, Wishlist, Cart Drawer)
 * - Sub-Category Tab Switching (#cat-smartphones, #sub-smartphones-1, etc.)
 * - Live Instant Search & Auto-complete
 * - Cart Management with LocalStorage persistence & Login Enforced Checkout
 * - Clean Unicode Formatting for Philippine Peso (\u20b1) & Star Ratings (\u2605)
 */

/* ==========================================================================
   GLOBAL STATE & DATA STORE
   ========================================================================== */
const PRODUCTS_DATA = {
  "p1": {
    "id": "p1",
    "name": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 59990,
    "oldPrice": 69990,
    "discount": 14,
    "rating": 4.8,
    "reviews": 2341,
    "image": "samsung-galaxy-s24-ultra.jpg",
    "definition": "The flagship Galaxy experience built with titanium frame, integrated S-Pen stylus, Galaxy AI intelligence, and a 200MP camera system.",
    "specs": [
      "6.8\" QHD+ Dynamic AMOLED 2X (120Hz)",
      "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "12GB RAM + 256GB / 512GB Storage",
      "200MP Quad Rear Camera System + 8K Video",
      "5000mAh Battery with 45W Fast Charging"
    ],
    "colors": [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Violet"
    ]
  },
  "p2": {
    "id": "p2",
    "name": "Apple iPhone 15 Pro Max",
    "brand": "Apple",
    "category": "smartphones",
    "price": 74990,
    "oldPrice": 84990,
    "discount": 12,
    "rating": 4.9,
    "reviews": 3120,
    "image": "apple-iphone-15-pro-max.jpg",
    "definition": "Forged in titanium and featuring the groundbreaking A17 Pro chip, customizable Action button, and the most powerful iPhone camera system ever.",
    "specs": [
      "6.7\" Super Retina XDR with ProMotion 120Hz",
      "A17 Pro Chip with 6-core GPU",
      "48MP Main Camera with 5x Telephoto",
      "Action Button & USB-C with USB 3 speeds",
      "All-day battery life with MagSafe"
    ],
    "colors": [
      "Natural Titanium",
      "Blue Titanium",
      "White Titanium",
      "Black Titanium"
    ]
  },
  "p3": {
    "id": "p3",
    "name": "Xiaomi 14 Ultra 5G",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 54990,
    "oldPrice": 62990,
    "discount": 13,
    "rating": 4.7,
    "reviews": 1450,
    "image": "xiaomi-14-ultra-5g.jpg",
    "definition": "Co-engineered with Leica, boasting four 50MP optical lenses, variable aperture f/1.63-f/4.0, and Snapdragon 8 Gen 3 speed.",
    "specs": [
      "6.73\" WQHD+ 120Hz LTPO AMOLED",
      "Leica Quad Optical Cameras with 1\" Sensor",
      "Snapdragon 8 Gen 3 + 16GB RAM",
      "90W HyperCharge + 80W Wireless"
    ],
    "colors": [
      "Black Leather",
      "White Vegan Leather"
    ]
  },
  "p4": {
    "id": "p4",
    "name": "ASUS ROG Phone 8 Pro",
    "brand": "ASUS",
    "category": "smartphones",
    "price": 60995,
    "oldPrice": 68995,
    "discount": 11,
    "rating": 4.8,
    "reviews": 890,
    "image": "asus-rog-phone-8-pro.png",
    "definition": "Ultimate gaming beast equipped with AniMe Vision programmable Mini-LED matrix, AirTrigger ultrasonic buttons, and GameCool 8 cooling system.",
    "specs": [
      "6.78\" Samsung AMOLED 165Hz Display",
      "Snapdragon 8 Gen 3 + 16GB / 24GB LPDDR5X",
      "AirTrigger Ultrasonic Controls",
      "5500mAh Dual-Cell Battery with 65W HyperCharge"
    ],
    "colors": [
      "Phantom Black"
    ]
  },
  "p5": {
    "id": "p5",
    "name": "RedMagic 9 Pro Gaming",
    "brand": "Nubia",
    "category": "smartphones",
    "price": 46990,
    "oldPrice": 51990,
    "discount": 10,
    "rating": 4.7,
    "reviews": 742,
    "image": "redmagic-9-pro-gaming.png",
    "definition": "True full-screen notchless gaming phone with under-display selfie camera, built-in active cooling turbofan, and 520Hz shoulder triggers.",
    "specs": [
      "6.8\" 120Hz BOE Q9+ Flat AMOLED (Zero Cutout)",
      "Built-in 22,000 RPM RGB Cooling Fan",
      "6500mAh Huge Battery with 80W Quick Charge",
      "520Hz Touch Shoulder Triggers"
    ],
    "colors": [
      "Sleet Black",
      "Cyclone Transparent",
      "Snowfall Silver"
    ]
  },
  "p6": {
    "id": "p6",
    "name": "Black Shark 5 Pro Turbo",
    "brand": "Black Shark",
    "category": "smartphones",
    "price": 34990,
    "oldPrice": 39990,
    "discount": 13,
    "rating": 4.6,
    "reviews": 430,
    "image": "black-shark-5-pro-turbo.jpg",
    "definition": "High-performance gaming smartphone built for competitive gaming, featuring a powerful Snapdragon processor, AMOLED display, and magnetic pop-up gaming triggers.",
    "specs": [
      "6.67\" 2K AMOLED 144Hz Display",
      "Snapdragon 8 Gen 1 Processor",
      "Up to 16GB RAM with 256GB Storage",
      "120W HyperCharge Fast Charging"
    ],
    "colors": [
      "Shadow Black",
      "Skyfall Black",
      "Stellar Black"
    ]
  },
  "p7": {
    "id": "p7",
    "name": "Samsung Galaxy Z Fold 5 5G",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 83990,
    "oldPrice": 98990,
    "discount": 15,
    "rating": 4.8,
    "reviews": 1120,
    "image": "samsung-galaxy-z-fold-5-5g.png",
    "definition": "Pocket-sized productivity revolution featuring a 7.6-inch folding internal display, multi-window multitasking, and ultra-durable Flex Hinge.",
    "specs": [
      "7.6\" QXGA+ Dynamic AMOLED 2X Inner Screen",
      "6.2\" Dynamic AMOLED 2X Cover Screen",
      "Snapdragon 8 Gen 2 for Galaxy",
      "IPX8 Water Resistant with Armor Aluminum"
    ],
    "colors": [
      "Icy Blue",
      "Phantom Black",
      "Cream"
    ]
  },
  "p8": {
    "id": "p8",
    "name": "Google Pixel Fold",
    "brand": "Google",
    "category": "smartphones",
    "price": 84999,
    "oldPrice": 95000,
    "discount": 11,
    "rating": 4.5,
    "reviews": 412,
    "image": "google-pixel-fold.jpg",
    "definition": "Google's first foldable brings the pure Pixel software experience, world-class computational photography, and wide pocketable aspect ratio.",
    "specs": [
      "5.8\" Outer OLED + 7.6\" 120Hz Inner Screen",
      "Google Tensor G2 Processor + Titan M2 Security",
      "Pixel Triple Camera with Super Res Zoom",
      "Pure Android with 5 Years of Pixel Feature Drops"
    ],
    "colors": [
      "Obsidian",
      "Porcelain"
    ]
  },
  "p9": {
    "id": "p9",
    "name": "OnePlus Open 5G Foldable",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 89990,
    "oldPrice": 99990,
    "discount": 10,
    "rating": 4.6,
    "reviews": 742,
    "image": "oneplus-open-5g-foldable.jpg",
    "definition": "Premium foldable smartphone featuring a large 7.82-inch inner AMOLED display, powerful Snapdragon 8 Gen 2 performance, and versatile Hasselblad cameras.",
    "specs": [
      "7.82\" 2K Flexi-fluid AMOLED 120Hz Inner Display",
      "6.31\" 2K LTPO 3.0 AMOLED 120Hz Cover Display",
      "Snapdragon 8 Gen 2 5G Processor",
      "16GB RAM with 512GB UFS 4.0 Storage"
    ],
    "colors": [
      "Voyager Black",
      "Emerald Dusk"
    ]
  },
  "p10": {
    "id": "p10",
    "name": "Infinix Note 40 Pro 5G",
    "brand": "Infinix",
    "category": "smartphones",
    "price": 12990,
    "oldPrice": 15990,
    "discount": 19,
    "rating": 4.3,
    "reviews": 2187,
    "image": "infinix-note-40-pro-5g.jpg",
    "definition": "Next-gen mid-range king equipped with 108MP OIS camera, 3D curved AMOLED screen, and wireless magnetic charging support.",
    "specs": [
      "6.78\" 3D Curved 120Hz AMOLED Display",
      "MediaTek Helio G99 Ultimate (6nm)",
      "108MP OIS Super-Zoom Camera",
      "70W FastCharge + 20W Wireless MagCharge"
    ],
    "colors": [
      "Titan Gold",
      "Vintage Green",
      "Obsidian Black"
    ]
  },
  "p11": {
    "id": "p11",
    "name": "Google Pixel 8 Pro 5G",
    "brand": "Google",
    "category": "smartphones",
    "price": 64990,
    "oldPrice": 72990,
    "discount": 11,
    "rating": 4.7,
    "reviews": 918,
    "image": "",
    "definition": "Premium 5G smartphone featuring a smooth LTPO OLED display, Google Tensor G3 processor, advanced AI photo features, and a versatile triple-camera system.",
    "specs": [
      "6.7\" Super Actua LTPO OLED 120Hz Display",
      "Google Tensor Processor with Titan M2",
      "12GB RAM with up to 512GB Storage",
      "50MP Main + 48MP Ultrawide + 48MP 5x Telephoto Cameras"
    ],
    "colors": [
      "Obsidian",
      "Porcelain",
      "Bay Blue",
      "Hazel"
    ]
  },
  "p12": {
    "id": "p12",
    "name": "Vivo X100 Pro Zeiss 5G",
    "brand": "vivo",
    "category": "smartphones",
    "price": 69990,
    "oldPrice": 79990,
    "discount": 13,
    "rating": 4.7,
    "reviews": 821,
    "image": "vivo-x100-pro-zeiss-5g.png",
    "definition": "Premium 5G smartphone featuring ZEISS professional imaging, a powerful Dimensity 9300 processor, a smooth 120Hz LTPO AMOLED display, and fast charging.",
    "specs": [
      "6.78\" 8T LTPO AMOLED 120Hz Display",
      "MediaTek Dimensity 9300 4nm Processor",
      "16GB RAM with 512GB UFS 4.0 Storage",
      "ZEISS 50MP 1-inch Main + 50MP Ultrawide + 50MP APO Telephoto Cameras"
    ],
    "colors": [
      "Asteroid Black",
      "Startrail Blue",
      "Sunset Orange"
    ]
  },
  "p13": {
    "id": "p13",
    "name": "POCO X6 Pro 5G",
    "brand": "POCO",
    "category": "smartphones",
    "price": 15990,
    "oldPrice": 19990,
    "discount": 20,
    "rating": 4.7,
    "reviews": 3200,
    "image": "poco-x6-pro-5g.jpg",
    "definition": "Unrivaled price-to-performance champion powered by the Dimensity 8300-Ultra chip, delivering flagship gaming speed with a 1.5K Flow AMOLED display.",
    "specs": [
      "Dimensity 8300-Ultra (4nm Flagship TSMC)",
      "6.67\" CrystalRes 1.5K 120Hz Flow AMOLED",
      "64MP Triple Camera with OIS",
      "5000mAh Battery + 67W Turbo Charge"
    ],
    "colors": [
      "Yellow Vegan Leather",
      "Black",
      "Grey"
    ]
  },
  "p14": {
    "id": "p14",
    "name": "Realme 12+ 5G Pioneer",
    "brand": "realme",
    "category": "smartphones",
    "price": 14490,
    "oldPrice": 16990,
    "discount": 15,
    "rating": 4.6,
    "reviews": 684,
    "image": "realme-12-plus-5g-pioneer.jpg",
    "definition": "Stylish 5G smartphone featuring a smooth 120Hz AMOLED display, MediaTek Dimensity 7050 performance, and a Sony OIS camera system designed for sharp portraits.",
    "specs": [
      "6.67\" 120Hz Super AMOLED FHD+ Display",
      "MediaTek Dimensity 7050 5G Processor",
      "Up to 12GB RAM with 256GB Storage",
      "50MP Sony LYT-600 OIS + 8MP Ultrawide Camera"
    ],
    "colors": [
      "Pioneer Green",
      "Navigator Beige"
    ]
  },
  "p15": {
    "id": "p15",
    "name": "Redmi Note 13 4G",
    "brand": "Redmi",
    "category": "smartphones",
    "price": 8990,
    "oldPrice": 10990,
    "discount": 18,
    "rating": 4.5,
    "reviews": 743,
    "image": "redmi-note-13-4g.jpg",
    "definition": "Affordable daily smartphone featuring a vibrant AMOLED display, a high-resolution 108MP camera, and a large 5000mAh battery for everyday performance.",
    "specs": [
      "6.67\" FHD+ AMOLED 120Hz Display",
      "Qualcomm Snapdragon 685 Processor",
      "Up to 8GB RAM with 256GB Storage",
      "108MP Main + 8MP Ultrawide + 2MP Macro Camera"
    ],
    "colors": [
      "Midnight Black",
      "Mint Green",
      "Ice Blue"
    ]
  },
  "p16": {
    "id": "p16",
    "name": "ASUS ROG Zephyrus G14",
    "brand": "ASUS",
    "category": "laptops",
    "price": 74995,
    "oldPrice": 89995,
    "discount": 17,
    "rating": 4.7,
    "reviews": 1187,
    "image": "asus-rog-zephyrus-g14.png",
    "definition": "Compact powerhouse gaming laptop featuring the AniMe Matrix LED lid display and desktop-class graphics performance on the go.",
    "specs": [
      "14\" ROG Nebula QHD 165Hz IPS Display",
      "AMD Ryzen 9 7940HS 8-Core / 16-Thread",
      "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "16GB DDR5 4800MHz + 1TB PCIe 4.0 SSD"
    ],
    "colors": [
      "Eclipse Gray",
      "Moonlight White"
    ]
  },
  "p17": {
    "id": "p17",
    "name": "Lenovo Legion Pro 7i Gen 9",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 129990,
    "oldPrice": 145000,
    "discount": 10,
    "rating": 4.9,
    "reviews": 624,
    "image": "lenovo-legion-pro-7i-gen-9.jpg",
    "definition": "Maximum FPS esports gaming beast with Intel Core i9-14900HX, RTX 4080 graphics, and Coldfront 5.0 vapor chamber cooling.",
    "specs": [
      "16\" WQXGA 240Hz PureSight Gaming Display",
      "Intel Core i9-14900HX 24-Core / 32-Thread",
      "NVIDIA GeForce RTX 4080 12GB (175W TGP)",
      "32GB DDR5 5600MHz + 2TB NVMe Gen4 SSD"
    ],
    "colors": [
      "Onyx Grey"
    ]
  },
  "p18": {
    "id": "p18",
    "name": "Predator Helios Neo 16",
    "brand": "Acer Predator",
    "category": "laptops",
    "price": 68990,
    "oldPrice": 79990,
    "discount": 14,
    "rating": 4.7,
    "reviews": 629,
    "image": "predator-helios-neo-16.jpg",
    "definition": "High-performance gaming laptop featuring a powerful Intel Core processor, NVIDIA GeForce RTX graphics, and a fast 165Hz display for AAA gaming and creation.",
    "specs": [
      "16\" WQXGA 2560x1600 IPS 165Hz Display",
      "Intel Core i7-14700HX Processor",
      "NVIDIA GeForce RTX 4060 8GB GDDR6 Graphics",
      "16GB DDR5 RAM with 512GB NVMe SSD"
    ],
    "colors": [
      "Obsidian Black"
    ]
  },
  "p19": {
    "id": "p19",
    "name": "Lenovo IdeaPad 5 Pro OLED",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 52995,
    "oldPrice": 62995,
    "discount": 16,
    "rating": 4.5,
    "reviews": 843,
    "image": "lenovo-ideapad-5-pro-oled.png",
    "definition": "Sleek all-metal productivity laptop featuring vibrant 2.8K OLED display, Dolby Atmos sound, and AMD Ryzen 7 processing power.",
    "specs": [
      "14\" 2.8K (2880x1800) OLED 120Hz Display",
      "AMD Ryzen 7 7700 8-Core Processor",
      "16GB LPDDR5X RAM + 512GB M.2 PCIe SSD"
    ],
    "colors": [
      "Arctic Gray",
      "Storm Gray"
    ]
  },
  "p20": {
    "id": "p20",
    "name": "ASUS Zenbook 14 OLED UX3405",
    "brand": "ASUS",
    "category": "laptops",
    "price": 64995,
    "oldPrice": 73995,
    "discount": 12,
    "rating": 4.8,
    "reviews": 915,
    "image": "asus-zenbook-14-oled-ux3405.jpg",
    "definition": "Ultra-thin, featherlight 1.2kg chassis housing an Intel Core Ultra 7 with built-in NPU for on-device AI tasks and 3K Lumina OLED screen.",
    "specs": [
      "14\" 3K (2880x1800) 120Hz ASUS Lumina OLED",
      "Intel Core Ultra 7 155H with Intel Arc GPU",
      "16GB LPDDR5X + 1TB PCIe 4.0 SSD",
      "75Wh Battery offering up to 15 hours battery life"
    ],
    "colors": [
      "Ponder Blue",
      "Foggy Silver"
    ]
  },
  "p21": {
    "id": "p21",
    "name": "Dell XPS 16 (9640)",
    "brand": "Dell",
    "category": "laptops",
    "price": 149990,
    "oldPrice": 165000,
    "discount": 9,
    "rating": 4.6,
    "reviews": 310,
    "image": "dell-xps-16-9640.jpg",
    "definition": "Futuristic design featuring capacitive touch function row, invisible seamless glass haptic trackpad, and NVIDIA RTX 4070 graphics.",
    "specs": [
      "16.3\" 4K+ OLED InfinityEdge Touch Display",
      "Intel Core Ultra 9 185H (16-Core)",
      "NVIDIA GeForce RTX 4070 8GB",
      "32GB LPDDR5X + 1TB PCIe Gen4 SSD"
    ],
    "colors": [
      "Platinum Silver",
      "Graphite"
    ]
  },
  "p22": {
    "id": "p22",
    "name": "Apple MacBook Pro 16\" M3 Max",
    "brand": "Apple",
    "category": "laptops",
    "price": 189990,
    "oldPrice": 209990,
    "discount": 10,
    "rating": 4.9,
    "reviews": 420,
    "image": "apple-macbook-pro-16-m3-max.jpg",
    "definition": "Unprecedented speed for video editors, 3D artists, and developers with M3 Max 16-Core CPU, 40-Core GPU, and Liquid Retina XDR.",
    "specs": [
      "16.2\" Liquid Retina XDR (1600 nits peak)",
      "Apple M3 Max Chip (16-Core CPU, 40-Core GPU)",
      "48GB Unified Memory + 1TB Superfast SSD",
      "Up to 22 Hours Battery Life"
    ],
    "colors": [
      "Space Black",
      "Silver"
    ]
  },
  "p23": {
    "id": "p23",
    "name": "ASUS ProArt Studiobook 16",
    "brand": "ASUS",
    "category": "laptops",
    "price": 139990,
    "oldPrice": 169990,
    "discount": 18,
    "rating": 4.8,
    "reviews": 547,
    "image": "asus-proart-studiobook-16.jpg",
    "definition": "Professional creator laptop designed for demanding creative workloads, featuring a high-resolution OLED display, Intel Core i9, and ASUS Dial control.",
    "specs": [
      "16\" 3.2K OLED HDR 120Hz Touchscreen Display",
      "Intel Core i9-13980HX Processor",
      "NVIDIA GeForce RTX 4070 Laptop GPU",
      "32GB DDR5 RAM with 1TB PCIe 4.0 SSD"
    ],
    "colors": [
      "Mineral Black"
    ]
  },
  "p24": {
    "id": "p24",
    "name": "MSI Creator Z17 HX Studio",
    "brand": "MSI",
    "category": "laptops",
    "price": 149990,
    "oldPrice": 165990,
    "discount": 10,
    "rating": 4.8,
    "reviews": 428,
    "image": "msi-creator-z17-hx-studio.jpg",
    "definition": "Premium creator workstation designed for demanding creative workloads, featuring Intel Core i9 HX processor and calibrated True Pixel display.",
    "specs": [
      "17\" QHD+ 2560x1600 165Hz Touch Display",
      "Intel Core i9-14900HX Processor",
      "NVIDIA GeForce RTX 4070 Laptop GPU",
      "32GB DDR5 RAM with 2TB NVMe SSD Storage"
    ],
    "colors": [
      "Lunar Gray"
    ]
  },
  "p25": {
    "id": "p25",
    "name": "ThinkPad X1 Carbon Gen 12",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 109990,
    "oldPrice": 128990,
    "discount": 15,
    "rating": 4.8,
    "reviews": 580,
    "image": "thinkpad-x1-carbon-gen-12.jpg",
    "definition": "The gold standard business laptop built with carbon fiber chassis, legendary spill-resistant ThinkPad keyboard, and enterprise security.",
    "specs": [
      "14\" 2.8K 120Hz OLED Anti-Glare Display",
      "Intel Core Ultra 7 155U (vPro Enterprise)",
      "32GB LPDDR5X + 1TB OPAL Encrypted SSD",
      "MIL-STD-810H Military Spec Durability"
    ],
    "colors": [
      "Classic Matte Black"
    ]
  },
  "p26": {
    "id": "p26",
    "name": "HP EliteBook 840 G10",
    "brand": "HP",
    "category": "laptops",
    "price": 67990,
    "oldPrice": 82990,
    "discount": 18,
    "rating": 4.6,
    "reviews": 340,
    "image": "hp-elitebook-840-g10.jpg",
    "definition": "Corporate-grade workhorse engineered with HP Wolf Security, 5MP IR auto-framing camera, and all-day battery life.",
    "specs": [
      "14\" WUXGA IPS 400 nits Low Blue Light",
      "Intel Core i7-1365U vPro",
      "16GB DDR5 + 512GB PCIe NVMe SSD",
      "Bang & Olufsen Dual Stereo Audio"
    ],
    "colors": [
      "Silver Aluminum"
    ]
  },
  "p27": {
    "id": "p27",
    "name": "Dell Latitude 7440 Ultralight",
    "brand": "Dell",
    "category": "laptops",
    "price": 73990,
    "oldPrice": 85990,
    "discount": 14,
    "rating": 4.7,
    "reviews": 280,
    "image": "dell-latitude-7440-ultralight.jpg",
    "definition": "Featherlight magnesium chassis business ultrabook featuring ExpressConnect, Intel vPro enterprise management, and battery saver screen.",
    "specs": [
      "14\" FHD+ IPS Non-Touch Anti-Glare Display",
      "Intel Core i7-1365U vPro Enterprise",
      "16GB LPDDR5 4800MHz + 512GB Gen4 SSD",
      "Super Low Power Display with SafeScreen"
    ],
    "colors": [
      "Titan Gray"
    ]
  },
  "p28": {
    "id": "p28",
    "name": "HP Spectre x360 14 OLED",
    "brand": "HP",
    "category": "laptops",
    "price": 79990,
    "oldPrice": 95990,
    "discount": 17,
    "rating": 4.8,
    "reviews": 490,
    "image": "hp-spectre-x360-14-oled.jpg",
    "definition": "Award-winning 2-in-1 convertible laptop that flips 360 degrees with 2.8K OLED touchscreen and magnetic stylus pen support.",
    "specs": [
      "14\" 2.8K (2880x1800) OLED 120Hz Touchscreen",
      "Intel Core Ultra 7 155H with Intel Arc",
      "16GB LPDDR5X + 1TB PCIe NVMe SSD",
      "HP Rechargeable MPP 2.0 Tilt Pen Included"
    ],
    "colors": [
      "Nightfall Black",
      "Slate Blue"
    ]
  },
  "p29": {
    "id": "p29",
    "name": "Lenovo Yoga 9i Dual OLED",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 99995,
    "oldPrice": 114995,
    "discount": 13,
    "rating": 4.9,
    "reviews": 370,
    "image": "lenovo-yoga-9i-dual-oled.jpg",
    "definition": "Revolutionary dual 13.3-inch PureSight OLED touch displays with Bowers & Wilkins rotating soundbar hinge and folio kickstand.",
    "specs": [
      "Dual 13.3\" 2.8K OLED 100% DCI-P3 Screens",
      "Intel Core Ultra 7 155H Processor",
      "16GB LPDDR5X + 1TB Gen4 SSD",
      "Bowers & Wilkins 360 Soundbar Hinge"
    ],
    "colors": [
      "Tidal Teal",
      "Oatmeal"
    ]
  },
  "p30": {
    "id": "p30",
    "name": "ROG Flow X13 Convertible",
    "brand": "ASUS",
    "category": "laptops",
    "price": 89990,
    "oldPrice": 102990,
    "discount": 13,
    "rating": 4.8,
    "reviews": 310,
    "image": "rog-flow-x13-convertible.jpg",
    "definition": "Ultraportable 13.4-inch gaming convertible with 360 hinge, Ryzen 9 processor, RTX 4050 GPU, and XG Mobile eGPU support.",
    "specs": [
      "13.4\" QHD+ 165Hz ROG Nebula Touchscreen",
      "AMD Ryzen 9 7940HS 8-Core / 16-Thread",
      "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "16GB LPDDR5 + 1TB PCIe 4.0 SSD"
    ],
    "colors": [
      "Off Black"
    ]
  },
  "p31": {
    "id": "p31",
    "name": "Sony WH-1000XM5 ANC",
    "brand": "Sony",
    "category": "audio",
    "price": 18495,
    "oldPrice": 22995,
    "discount": 20,
    "rating": 4.9,
    "reviews": 4521,
    "image": "sony-wh-1000xm5-anc.png",
    "definition": "Industry-standard noise cancellation driven by two processors and 8 microphones, with Auto NC Optimizer and 30-hour battery life.",
    "specs": [
      "HD Noise Cancelling Processor QN1 + V1 Chip",
      "30mm Carbon Fiber Composite Driver Unit",
      "30 Hours Battery Life with Quick Charging",
      "Hi-Res Audio Wireless with LDAC"
    ],
    "colors": [
      "Black",
      "Silver",
      "Midnight Blue"
    ]
  },
  "p32": {
    "id": "p32",
    "name": "JBL Tune 760NC Wireless",
    "brand": "JBL",
    "category": "audio",
    "price": 4995,
    "oldPrice": 6995,
    "discount": 29,
    "rating": 4.4,
    "reviews": 3102,
    "image": "jbl-tune-760nc-wireless.jpg",
    "definition": "Punchy JBL Pure Bass sound in a lightweight over-ear design with Active Noise Cancellation and up to 35 hours battery life.",
    "specs": [
      "Active Noise Cancelling (ANC)",
      "JBL Pure Bass Sound Architecture",
      "35 Hours Battery Life with BT + ANC",
      "Multi-Point Bluetooth 5.0 Connection"
    ],
    "colors": [
      "Black",
      "Blue",
      "White"
    ]
  },
  "p33": {
    "id": "p33",
    "name": "Bose QuietComfort Ultra",
    "brand": "Bose",
    "category": "audio",
    "price": 23990,
    "oldPrice": 27990,
    "discount": 14,
    "rating": 4.8,
    "reviews": 1890,
    "image": "bose-quietcomfort-ultra.jpg",
    "definition": "World-class spatialized Bose Immersive Audio, custom acoustic noise cancellation, and ultra-plush protein leather ear cushions.",
    "specs": [
      "Bose Immersive Audio Spatial Technology",
      "CustomTune Sound Personalization Tech",
      "Up to 24 Hours Battery Playtime",
      "Wind Block & Quiet / Aware Listening Modes"
    ],
    "colors": [
      "Black",
      "White Smoke",
      "Sandstone"
    ]
  },
  "p34": {
    "id": "p34",
    "name": "Apple AirPods Pro (2nd Gen)",
    "brand": "Apple",
    "category": "audio",
    "price": 13490,
    "oldPrice": 14990,
    "discount": 10,
    "rating": 4.9,
    "reviews": 5820,
    "image": "apple-airpods-pro-2nd-gen.jpg",
    "definition": "Powered by the Apple H2 chip, delivering 2x more Active Noise Cancellation, Adaptive Audio, and USB-C MagSafe charging case.",
    "specs": [
      "Apple H2 Headphone Chip + U1 Case Chip",
      "2x Stronger Active Noise Cancellation",
      "Adaptive Audio & Personalized Spatial Audio",
      "IP54 Dust, Sweat, and Water Resistant"
    ],
    "colors": [
      "White"
    ]
  },
  "p35": {
    "id": "p35",
    "name": "Sony WF-1000XM5 Wireless",
    "brand": "Sony",
    "category": "audio",
    "price": 13990,
    "oldPrice": 16990,
    "discount": 18,
    "rating": 4.7,
    "reviews": 2140,
    "image": "sony-wf-1000xm5-wireless.jpg",
    "definition": "Astonishing sound quality with Dynamic Driver X, dual proprietary noise processors, and AI-based bone conduction voice pickup.",
    "specs": [
      "Dynamic Driver X (8.4mm High Clarity)",
      "Dual Processors: Integrated V2 + HD QN2e",
      "Hi-Res Audio Wireless (LDAC) & DSEE Extreme",
      "8 Hours Buds + 16 Hours Case Playtime"
    ],
    "colors": [
      "Black",
      "Silver"
    ]
  },
  "p36": {
    "id": "p36",
    "name": "Samsung Galaxy Buds2 Pro",
    "brand": "Samsung",
    "category": "audio",
    "price": 8490,
    "oldPrice": 10990,
    "discount": 23,
    "rating": 4.6,
    "reviews": 1750,
    "image": "samsung-galaxy-buds2-pro.jpg",
    "definition": "Seamless studio-grade 24-bit Hi-Fi audio with Intelligent ANC, 360 Audio with direct multi-channel, and comfortable ergonomic design.",
    "specs": [
      "24-Bit Hi-Fi Audio (Samsung Seamless Codec)",
      "Intelligent 3 High-SNR Mic ANC",
      "360 Audio with Direct Multi-Channel",
      "IPX7 Water Resistance"
    ],
    "colors": [
      "Graphite",
      "White",
      "Bora Purple"
    ]
  },
  "p37": {
    "id": "p37",
    "name": "Sennheiser HD 660S2 Open-Back",
    "brand": "Sennheiser",
    "category": "audio",
    "price": 29990,
    "oldPrice": 33990,
    "discount": 12,
    "rating": 4.9,
    "reviews": 640,
    "image": "sennheiser-hd-660s2-open-back.jpg",
    "definition": "Audiophile reference headphones with optimized surround sound ventilation and refined acoustic transducer system.",
    "specs": [
      "300-Ohm Impedance for High-End Amps",
      "Open-Back Dynamic Transducer Design",
      "Frequency Response: 8 Hz – 41,500 Hz",
      "Detachable Cables with 6.3mm & 4.4mm Balanced"
    ],
    "colors": [
      "Matte Black Bronze"
    ]
  },
  "p38": {
    "id": "p38",
    "name": "ATH-M50x Studio Monitor",
    "brand": "Audio-Technica",
    "category": "audio",
    "price": 8990,
    "oldPrice": 10490,
    "discount": 14,
    "rating": 4.8,
    "reviews": 7800,
    "image": "ath-m50x-studio-monitor.jpg",
    "definition": "Legendary studio monitor headphones acclaimed by top audio engineers, producers, and musicians worldwide.",
    "specs": [
      "Proprietary 45mm Large-Aperture Drivers",
      "Rare Earth Magnets & Copper-Clad Voice Coils",
      "90-Degree Swiveling Earcups for One-Ear Monitoring",
      "Detachable Cables (Coiled, Straight, Short)"
    ],
    "colors": [
      "Black",
      "Gunmetal",
      "White"
    ]
  },
  "p39": {
    "id": "p39",
    "name": "Beyerdynamic DT 990 Pro 250Ω",
    "brand": "Beyerdynamic",
    "category": "audio",
    "price": 9990,
    "oldPrice": 11800,
    "discount": 15,
    "rating": 4.8,
    "reviews": 3450,
    "image": "beyerdynamic-dt-990-pro-250-ohm.jpg",
    "definition": "Open diffuse-field studio headphones engineered in Germany, delivering exceptional spaciousness and detailed bass/treble reproduction.",
    "specs": [
      "250-Ohm Dynamic Studio Transducers",
      "Open Acoustic Design for Wide Soundstage",
      "Soft, Circumoral and Replaceable Velour Ear Pads",
      "Handcrafted in Germany"
    ],
    "colors": [
      "Classic Gray / Black"
    ]
  },
  "p40": {
    "id": "p40",
    "name": "JBL Charge 5 Portable Speaker",
    "brand": "JBL",
    "category": "audio",
    "price": 8995,
    "oldPrice": 10795,
    "discount": 17,
    "rating": 4.8,
    "reviews": 4210,
    "image": "jbl-charge-5-portable-speaker.jpg",
    "definition": "Rugged waterproof Bluetooth speaker delivering bold JBL Original Pro Sound with built-in powerbank to charge mobile devices.",
    "specs": [
      "IP67 Waterproof & Dustproof Rating",
      "20 Hours of Playtime with Powerbank Out",
      "Separate Tweeter + Dual Passive Bass Radiators",
      "PartyBoost Multi-Speaker Pairing"
    ],
    "colors": [
      "Squad Camo",
      "Black",
      "Blue",
      "Red"
    ]
  },
  "p41": {
    "id": "p41",
    "name": "Marshall Emberton II Bluetooth",
    "brand": "Marshall",
    "category": "audio",
    "price": 9990,
    "oldPrice": 11490,
    "discount": 13,
    "rating": 4.7,
    "reviews": 1620,
    "image": "marshall-emberton-ii-bluetooth.jpg",
    "definition": "Iconic vintage rock aesthetic offering True Stereophonic 360 multi-directional Marshall sound and 30+ hours of portable playtime.",
    "specs": [
      "30+ Hours of Portable Playtime",
      "True Stereophonic 360-Degree Sound",
      "IP67 Dust and Water-Resistant Design",
      "Stack Mode to Connect Multiple Speakers"
    ],
    "colors": [
      "Black and Brass",
      "Cream"
    ]
  },
  "p42": {
    "id": "p42",
    "name": "Ultimate Ears BOOM 3 Floats",
    "brand": "Ultimate Ears",
    "category": "audio",
    "price": 6990,
    "oldPrice": 8790,
    "discount": 20,
    "rating": 4.6,
    "reviews": 2890,
    "image": "ultimate-ears-boom-3-floats.jpg",
    "definition": "Super-portable wireless Bluetooth speaker with 360 immersive sound, deep bass, one-touch music control, and it floats in water.",
    "specs": [
      "Immersive 360-Degree Spatial Sound",
      "IP67 Waterproof, Dustproof, and Floats",
      "Magic Button for One-Touch Play/Pause/Skip",
      "15 Hours Battery Life on a Single Charge"
    ],
    "colors": [
      "Night Black",
      "Sunset Red",
      "Lagoon Blue"
    ]
  },
  "p43": {
    "id": "p43",
    "name": "HyperX Cloud III Wireless",
    "brand": "HyperX",
    "category": "audio",
    "price": 7990,
    "oldPrice": 9990,
    "discount": 20,
    "rating": 4.7,
    "reviews": 2410,
    "image": "hyperx-cloud-iii-wireless.jpg",
    "definition": "Legendary comfort evolved with re-engineered 53mm angled drivers, ultra-clear 10mm microphone, and colossal 120-hour battery life.",
    "specs": [
      "Up to 120 Hours Battery Life on 2.4GHz",
      "Re-engineered Angled 53mm Audio Drivers",
      "10mm Crystal Clear Noise-Cancelling Mic",
      "DTS Headphone:X Spatial Audio Lifetime"
    ],
    "colors": [
      "Black / Red",
      "All-Black"
    ]
  },
  "p44": {
    "id": "p44",
    "name": "Razer BlackShark V2 Pro",
    "brand": "Razer",
    "category": "audio",
    "price": 9490,
    "oldPrice": 11490,
    "discount": 17,
    "rating": 4.8,
    "reviews": 1950,
    "image": "razer-blackshark-v2-pro.jpg",
    "definition": "Definitive esports wireless headset with Razer HyperClear Super Wideband Mic, TriForce Titanium 50mm drivers, and on-headset FPS sound profiles.",
    "specs": [
      "Razer HyperClear Super Wideband Mic",
      "TriForce Titanium 50mm Drivers",
      "HyperSpeed 2.4GHz Wireless + Bluetooth 5.2",
      "70 Hours Battery Life with Type-C Charging"
    ],
    "colors": [
      "Classic Black",
      "Mercury White"
    ]
  },
  "p45": {
    "id": "p45",
    "name": "Logitech G PRO X 2 LIGHTSPEED",
    "brand": "Logitech",
    "category": "audio",
    "price": 12990,
    "oldPrice": 14990,
    "discount": 13,
    "rating": 4.9,
    "reviews": 1430,
    "image": "logitech-g-pro-x-2-lightspeed.jpg",
    "definition": "Designed with the world's best esports athletes featuring revolutionary PRO-G 50mm Graphene audio drivers for clear spatial positioning.",
    "specs": [
      "PRO-G 50mm Graphene Audio Drivers",
      "LIGHTSPEED Wireless + BT + 3.5mm Aux",
      "Up to 50 Hours Battery on a Single Charge",
      "DTS Headphone:X 2.0 7.1 Surround Sound"
    ],
    "colors": [
      "Black",
      "White",
      "Magenta"
    ]
  },
  "p46": {
    "id": "p46",
    "name": "Apple iPad Pro 12.9\" M2",
    "brand": "Apple",
    "category": "tablets",
    "price": 62990,
    "oldPrice": 68990,
    "discount": 9,
    "rating": 4.8,
    "reviews": 987,
    "image": "apple-ipad-pro-12-9-m2.jpg",
    "definition": "Astonishing performance with M2 chip, Liquid Retina XDR Mini-LED display, Apple Pencil hover, and ProRes video capture.",
    "specs": [
      "12.9\" Liquid Retina XDR (1600 nits Peak)",
      "Apple M2 Chip with 8-Core CPU & 10-Core GPU",
      "12MP Wide + 10MP Ultra-Wide + LiDAR Scanner",
      "Thunderbolt / USB 4 Port Support"
    ],
    "colors": [
      "Space Gray",
      "Silver"
    ]
  },
  "p47": {
    "id": "p47",
    "name": "Galaxy Tab S9 Ultra 14.6\"",
    "brand": "Samsung",
    "category": "tablets",
    "price": 73990,
    "oldPrice": 84990,
    "discount": 13,
    "rating": 4.8,
    "reviews": 640,
    "image": "galaxy-tab-s9-ultra-14-6.jpg",
    "definition": "Monolithic 14.6-inch Dynamic AMOLED 2X canvas with IP68 water resistance, bundled S-Pen, and Snapdragon 8 Gen 2 power.",
    "specs": [
      "14.6\" Dynamic AMOLED 2X 120Hz Display",
      "Snapdragon 8 Gen 2 for Galaxy (4nm)",
      "IP68 Water & Dust Resistance on Tablet & S-Pen",
      "11,200mAh Massive Battery with 45W Fast Charging"
    ],
    "colors": [
      "Graphite",
      "Beige"
    ]
  },
  "p48": {
    "id": "p48",
    "name": "Apple iPad Air 11\" M2 Chip",
    "brand": "Apple",
    "category": "tablets",
    "price": 42990,
    "oldPrice": 46990,
    "discount": 9,
    "rating": 4.7,
    "reviews": 1120,
    "image": "apple-ipad-air-11-m2-chip.jpg",
    "definition": "Redesigned iPad Air turbocharged by the M2 chip, featuring a brilliant Liquid Retina display and landscape front camera.",
    "specs": [
      "11\" Liquid Retina Display with P3 Wide Color",
      "Apple M2 Chip with Neural Engine",
      "Landscape 12MP Ultra Wide Front Camera with Center Stage",
      "Supports Apple Pencil Pro and Magic Keyboard"
    ],
    "colors": [
      "Space Gray",
      "Starlight",
      "Purple",
      "Blue"
    ]
  },
  "p49": {
    "id": "p49",
    "name": "Samsung Galaxy Tab S9 11\"",
    "brand": "Samsung",
    "category": "tablets",
    "price": 42990,
    "oldPrice": 49990,
    "discount": 14,
    "rating": 4.7,
    "reviews": 890,
    "image": "samsung-galaxy-tab-s9-11.jpg",
    "definition": "Compact flagship Android tablet with Samsung DeX desktop mode, IP68 waterproof chassis, and Quad AKG speakers.",
    "specs": [
      "11\" Dynamic AMOLED 2X 120Hz Screen",
      "Snapdragon 8 Gen 2 for Galaxy",
      "Samsung DeX Mode for Desktop Multi-Tasking",
      "Bundled Low-Latency IP68 S-Pen Included"
    ],
    "colors": [
      "Graphite",
      "Beige"
    ]
  },
  "p50": {
    "id": "p50",
    "name": "Microsoft Surface Pro 9",
    "brand": "Microsoft",
    "category": "tablets",
    "price": 69990,
    "oldPrice": 83990,
    "discount": 17,
    "rating": 4.6,
    "reviews": 520,
    "image": "microsoft-surface-pro-9.jpg",
    "definition": "The versatility of a tablet with the performance and battery life of a Windows 11 laptop, featuring 12th Gen Intel Core and built-in kickstand.",
    "specs": [
      "13\" PixelSense Flow 120Hz Touch Display",
      "Intel 12th Gen Core i7-1255U Processor",
      "Dual Thunderbolt 4 USB-C Ports",
      "Built-in Adjustable Friction Kickstand"
    ],
    "colors": [
      "Platinum",
      "Graphite",
      "Sapphire",
      "Forest"
    ]
  },
  "p51": {
    "id": "p51",
    "name": "Lenovo Tab P12 Pro 12.6\"",
    "brand": "Lenovo",
    "category": "tablets",
    "price": 34990,
    "oldPrice": 41990,
    "discount": 17,
    "rating": 4.5,
    "reviews": 430,
    "image": "lenovo-tab-p12-pro-12-6.jpg",
    "definition": "Premium 2K AMOLED tablet with Lenovo Project Unity dual-screen PC extension, JBL quad speakers, and bundled Precision Pen 3.",
    "specs": [
      "12.6\" 2K (2560x1600) AMOLED 120Hz Dolby Vision",
      "Qualcomm Snapdragon 870 Octa-Core",
      "Quad JBL Speakers with Dolby Atmos",
      "10,200mAh Battery with 45W Quick Charge"
    ],
    "colors": [
      "Storm Grey"
    ]
  },
  "p52": {
    "id": "p52",
    "name": "Apple iPad (10th Generation)",
    "brand": "Apple",
    "category": "tablets",
    "price": 24990,
    "oldPrice": 28490,
    "discount": 12,
    "rating": 4.7,
    "reviews": 3410,
    "image": "apple-ipad-10th-generation.jpg",
    "definition": "All-screen design with 10.9-inch Liquid Retina display, fast A14 Bionic chip, landscape camera, and USB-C connectivity.",
    "specs": [
      "10.9\" Liquid Retina True Tone Display",
      "A14 Bionic Chip with 4-Core GPU",
      "Landscape 12MP Ultra Wide with Center Stage",
      "USB-C Port for Universal Charging & Accessories"
    ],
    "colors": [
      "Blue",
      "Pink",
      "Yellow",
      "Silver"
    ]
  },
  "p53": {
    "id": "p53",
    "name": "Xiaomi Pad 6 11\" 144Hz",
    "brand": "Xiaomi",
    "category": "tablets",
    "price": 16990,
    "oldPrice": 20990,
    "discount": 19,
    "rating": 4.8,
    "reviews": 2890,
    "image": "xiaomi-pad-6-11-144hz.jpg",
    "definition": "Flagship entertainment tablet with ultra-smooth 144Hz 2.8K display, Snapdragon 870 processor, and premium unibody aluminum chassis.",
    "specs": [
      "11\" 2.8K (2880x1800) 144Hz 7-Stage Variable Refresh",
      "Qualcomm Snapdragon 870 5G-Class Chip",
      "Quad Speakers with Dolby Atmos Audio",
      "8840mAh Battery + 33W Fast Charging"
    ],
    "colors": [
      "Gravity Gray",
      "Mist Blue",
      "Champagne Gold"
    ]
  },
  "p54": {
    "id": "p54",
    "name": "Realme Pad 2 11.5\" 120Hz",
    "brand": "realme",
    "category": "tablets",
    "price": 12490,
    "oldPrice": 14990,
    "discount": 17,
    "rating": 4.5,
    "reviews": 1230,
    "image": "realme-pad-2-11-5-120hz.jpg",
    "definition": "Big-screen entertainment powerhouse with 11.5-inch 120Hz 2K display, MediaTek Helio G99 chip, and quad stereo speakers.",
    "specs": [
      "11.5\" 2K (2000x1200) 120Hz Super Display",
      "MediaTek Helio G99 High-Efficiency Processor",
      "Quad Speakers with Dolby Atmos Sound",
      "8360mAh Mega Battery + 33W SuperVOOC Charge"
    ],
    "colors": [
      "Inspiration Green",
      "Imagination Grey"
    ]
  },
  "p55": {
    "id": "p55",
    "name": "Apple iPad mini (6th Gen)",
    "brand": "Apple",
    "category": "tablets",
    "price": 29990,
    "oldPrice": 33490,
    "discount": 10,
    "rating": 4.8,
    "reviews": 1980,
    "image": "apple-ipad-mini-6th-gen.jpg",
    "definition": "Mega power in mini size with 8.3-inch Liquid Retina display, A15 Bionic chip, Apple Pencil 2 magnetic wireless charging.",
    "specs": [
      "8.3\" Liquid Retina Display with True Tone",
      "A15 Bionic Chip with 16-Core Neural Engine",
      "12MP Wide Back + 12MP Ultra-Wide Front with Center Stage",
      "USB-C Connectivity & Touch ID in Top Button"
    ],
    "colors": [
      "Space Gray",
      "Pink",
      "Purple",
      "Starlight"
    ]
  },
  "p56": {
    "id": "p56",
    "name": "Lenovo Legion Y700 Gaming",
    "brand": "Lenovo",
    "category": "tablets",
    "price": 22990,
    "oldPrice": 26990,
    "discount": 15,
    "rating": 4.8,
    "reviews": 740,
    "image": "lenovo-legion-y700-gaming.jpg",
    "definition": "Dedicated pocket gaming tablet featuring an 8.8-inch 144Hz 2.5K screen, Snapdragon 8+ Gen 1, and dual USB-C bypass charging ports.",
    "specs": [
      "8.8\" 2.5K (2560x1600) 144Hz 500 nits Gaming Screen",
      "Qualcomm Snapdragon 8+ Gen 1 4nm Processor",
      "Dual X-Axis Linear Haptic Vibration Motors",
      "Dual USB-C Ports with Direct Bypass Charging"
    ],
    "colors": [
      "Storm Grey"
    ]
  },
  "p57": {
    "id": "p57",
    "name": "Kindle Paperwhite Signature 6.8\"",
    "brand": "Amazon",
    "category": "tablets",
    "price": 9990,
    "oldPrice": 11800,
    "discount": 15,
    "rating": 4.9,
    "reviews": 4520,
    "image": "kindle-paperwhite-signature-6-8.jpg",
    "definition": "Purpose-built for reading with 6.8-inch glare-free 300 ppi E-ink display, wireless Qi charging, and auto-adjusting warm front light.",
    "specs": [
      "6.8\" Flush-Front 300 ppi Glare-Free E-Ink Paperwhite Display",
      "Auto-Adjusting Warm Light for Day & Night Reading",
      "Wireless Qi Charging + 10 Weeks Battery Life",
      "IPX8 Waterproof for Pool and Bath Reading"
    ],
    "colors": [
      "Black",
      "Agave Green",
      "Denim"
    ]
  },
  "p58": {
    "id": "p58",
    "name": "Apple Pencil Pro Stylus",
    "brand": "Apple",
    "category": "tablets",
    "price": 7990,
    "oldPrice": 8990,
    "discount": 11,
    "rating": 4.9,
    "reviews": 1650,
    "image": "apple-pencil-pro-stylus.jpg",
    "definition": "Engineered with squeeze gestures, barrel roll gyroscopic orientation, custom haptic feedback, and Apple Find My tracking.",
    "specs": [
      "Squeeze Sensor to Switch Tools & Palettes Instantly",
      "Barrel Roll Gyroscope for Precise Calligraphy & Shading",
      "Custom Haptic Engine for Tactile Pulse Feedback",
      "Magnetic Pairing, Charging, and Find My Tracking Support"
    ],
    "colors": [
      "Matte White"
    ]
  },
  "p59": {
    "id": "p59",
    "name": "Magic Keyboard for iPad Pro",
    "brand": "Apple",
    "category": "tablets",
    "price": 18990,
    "oldPrice": 21490,
    "discount": 12,
    "rating": 4.8,
    "reviews": 920,
    "image": "magic-keyboard-for-ipad-pro.jpg",
    "definition": "Floating cantilever design with smooth angle adjustability, backlit scissor-switch keys, aluminum palm rest, and glass haptic trackpad.",
    "specs": [
      "Floating Cantilever Magnet Stand with Angle Adjust",
      "Full Function Row with 14 Function Keys",
      "Built-in USB-C Pass-Through Charging Port",
      "Larger Glass Trackpad with Haptic Click Feedback"
    ],
    "colors": [
      "Space Black",
      "White"
    ]
  },
  "p60": {
    "id": "p60",
    "name": "Samsung S-Pen Creator Edition",
    "brand": "Samsung",
    "category": "tablets",
    "price": 4990,
    "oldPrice": 5990,
    "discount": 17,
    "rating": 4.7,
    "reviews": 610,
    "image": "samsung-s-pen-creator-edition.jpg",
    "definition": "Enhanced tilt sensitivity and thicker ergonomic barrel designed specifically for digital painters, animators, and calligraphers.",
    "specs": [
      "Thicker Ergonomic Barrel for Extended Drawing Sessions",
      "Advanced 60-Degree Tilt Sensitivity & 4,096 Pressure Levels",
      "Interchangeable Drawing & Note Nib Tips",
      "IPX4 Water Resistant Construction"
    ],
    "colors": [
      "White / Silver"
    ]
  },
  "p61": {
    "id": "p61",
    "name": "Apple Watch Series 9 GPS",
    "brand": "Apple",
    "category": "wearables",
    "price": 24990,
    "oldPrice": 27990,
    "discount": 11,
    "rating": 4.8,
    "reviews": 2890,
    "image": "apple-watch-series-9-gps.jpg",
    "definition": "Powered by the S9 SiP chip with magic Double Tap gesture control, 2000-nit Always-On Retina display, and on-device Siri health logging.",
    "specs": [
      "Apple S9 SiP Dual-Core 64-Bit Processor",
      "Double Tap Gesture Control without Touching Screen",
      "2000 Nits Edge-to-Edge Always-On Retina Display",
      "ECG, Blood Oxygen, and Wrist Temperature Sensors"
    ],
    "colors": [
      "Midnight",
      "Starlight",
      "Silver",
      "Product RED"
    ]
  },
  "p62": {
    "id": "p62",
    "name": "Galaxy Watch 6 Classic 47mm",
    "brand": "Samsung",
    "category": "wearables",
    "price": 18990,
    "oldPrice": 22490,
    "discount": 16,
    "rating": 4.7,
    "reviews": 1640,
    "image": "galaxy-watch-6-classic-47mm.jpg",
    "definition": "Iconic rotating physical bezel with larger Sapphire Crystal display, advanced sleep coaching, and BIA body composition analysis.",
    "specs": [
      "Iconic Physical Rotating Mechanical Bezel",
      "1.5\" Super AMOLED Sapphire Crystal Glass (2000 nits)",
      "BioActive Sensor: ECG, HR, BIA Body Fat Analysis",
      "Wear OS Powered by Samsung & Google"
    ],
    "colors": [
      "Black Stainless",
      "Silver Stainless"
    ]
  },
  "p63": {
    "id": "p63",
    "name": "Google Pixel Watch 2 WiFi",
    "brand": "Google",
    "category": "wearables",
    "price": 21990,
    "oldPrice": 24990,
    "discount": 12,
    "rating": 4.6,
    "reviews": 980,
    "image": "google-pixel-watch-2-wifi.jpg",
    "definition": "Sleek circular 3D domed glass with multi-path heart rate sensor, cEDA stress detection, and deep Fitbit health integration.",
    "specs": [
      "3D Curved Domed Corning Gorilla Glass 5 Display",
      "Multi-Path Heart Rate Sensor with Fitbit Health AI",
      "Continuous cEDA Body Response Stress Tracking",
      "24-Hour Battery with Always-On Display & Fast USB-C Charge"
    ],
    "colors": [
      "Matte Black / Obsidian",
      "Polished Silver / Porcelain",
      "Champagne Gold / Hazel"
    ]
  },
  "p64": {
    "id": "p64",
    "name": "Xiaomi Smart Band 8 Active",
    "brand": "Xiaomi",
    "category": "wearables",
    "price": 1990,
    "oldPrice": 2690,
    "discount": 26,
    "rating": 4.6,
    "reviews": 5420,
    "image": "xiaomi-smart-band-8-active.jpg",
    "definition": "Vibrant 1.47-inch rectangular TFT screen, ultra-slim 9.99mm body, 50+ workout modes, and up to 14 days of battery life.",
    "specs": [
      "1.47\" TFT Color Display with 100+ Custom Watchfaces",
      "Ultra-Slim 9.99mm Lightweight Polymer Body",
      "24/7 Heart Rate, SpO2, and Sleep Monitoring",
      "14 Days Typical Battery Life with Magnetic Charger"
    ],
    "colors": [
      "Black",
      "Pink",
      "Blue"
    ]
  },
  "p65": {
    "id": "p65",
    "name": "Fitbit Charge 6 Advanced GPS",
    "brand": "Fitbit",
    "category": "wearables",
    "price": 9990,
    "oldPrice": 11490,
    "discount": 13,
    "rating": 4.7,
    "reviews": 1890,
    "image": "fitbit-charge-6-advanced-gps.jpg",
    "definition": "Advanced health band with built-in GPS, ECG app, YouTube Music controls, Google Maps turn-by-turn navigation, and Google Wallet.",
    "specs": [
      "Built-in Standalone GPS + GLONASS",
      "ECG App for Heart Rhythm & EDA Sensor for Stress",
      "Google Maps Turn-by-Turn Navigation & Google Wallet",
      "Up to 7 Days Battery Life on a Single Charge"
    ],
    "colors": [
      "Obsidian Black",
      "Porcelain Silver",
      "Coral Champagne Gold"
    ]
  },
  "p66": {
    "id": "p66",
    "name": "Huawei Band 8 Ultra-Thin",
    "brand": "Huawei",
    "category": "wearables",
    "price": 2190,
    "oldPrice": 2790,
    "discount": 21,
    "rating": 4.7,
    "reviews": 3680,
    "image": "huawei-band-8-ultra-thin.jpg",
    "definition": "Bezel-less 1.47-inch AMOLED screen, TruSleep 3.0 scientific sleep tracker, 100 sports modes, and fast magnetic charging.",
    "specs": [
      "1.47\" Bezel-Less AMOLED Touchscreen",
      "TruSleep 3.0 Scientific Sleep Tracking & TruSeen 5.0 HR",
      "100 Diverse Workout Modes with Running Ability Index",
      "Fast Magnetic Charging: Full Charge in 45 Minutes"
    ],
    "colors": [
      "Midnight Black",
      "Sakura Pink",
      "Emerald Green"
    ]
  },
  "p67": {
    "id": "p67",
    "name": "Garmin Fenix 7 Pro Solar GPS",
    "brand": "Garmin",
    "category": "wearables",
    "price": 49990,
    "oldPrice": 56990,
    "discount": 12,
    "rating": 4.9,
    "reviews": 910,
    "image": "garmin-fenix-7-pro-solar-gps.jpg",
    "definition": "Ultimate multisport GPS smartwatch with Power Glass solar charging lens, built-in LED flashlight, and TopoActive multi-continent maps.",
    "specs": [
      "Power Glass Solar Charging Lens for Months of Battery",
      "Built-in Multi-LED Tactical Flashlight (White & Red)",
      "Multi-Band GNSS with SatIQ Technology",
      "TopoActive Global Maps & Endurance Score Metrics"
    ],
    "colors": [
      "Slate Gray Titanium",
      "Black DLC Titanium"
    ]
  },
  "p68": {
    "id": "p68",
    "name": "Apple Watch Ultra 2 (49mm)",
    "brand": "Apple",
    "category": "wearables",
    "price": 54990,
    "oldPrice": 60990,
    "discount": 10,
    "rating": 4.9,
    "reviews": 1430,
    "image": "apple-watch-ultra-2-49mm.jpg",
    "definition": "Rugged titanium 49mm casing, 3000-nit brightest Apple display, dual-frequency precision GPS, and 100m water resistance for scuba diving.",
    "specs": [
      "49mm Aerospace-Grade Titanium Case with Flat Sapphire Front",
      "3000 Nits Ultra-Bright Always-On Retina Display",
      "Precision Dual-Frequency L1 & L5 GPS Architecture",
      "EN13319 Scuba Certified Depth Gauge down to 40m"
    ],
    "colors": [
      "Natural Titanium"
    ]
  },
  "p69": {
    "id": "p69",
    "name": "Amazfit T-Rex Ultra Explorer",
    "brand": "Amazfit",
    "category": "wearables",
    "price": 21990,
    "oldPrice": 25990,
    "discount": 15,
    "rating": 4.7,
    "reviews": 650,
    "image": "amazfit-t-rex-ultra-explorer.jpg",
    "definition": "Military-grade 316L stainless steel outdoor smartwatch with dual-band 6-satellite positioning and 30m freediving certification.",
    "specs": [
      "316L Stainless Steel Bezel with Mud-Resistant Buttons",
      "Dual-Band 6 Satellite GPS Positioning with Offline Maps",
      "30m Freediving & 100m Water Resistance (10 ATM)",
      "Ultra-Long 20 Days Battery Life in Endurance Mode"
    ],
    "colors": [
      "Abyss Black",
      "Sahara Khaki"
    ]
  },
  "p70": {
    "id": "p70",
    "name": "Apple Watch Series 9 GPS + LTE",
    "brand": "Apple",
    "category": "wearables",
    "price": 30990,
    "oldPrice": 34990,
    "discount": 11,
    "rating": 4.8,
    "reviews": 1120,
    "image": "apple-watch-series-9-gps-lte.jpg",
    "definition": "Stay fully connected without your iPhone. Make calls, stream Apple Music, and receive notifications with standalone eSIM LTE connectivity.",
    "specs": [
      "Built-in Standalone Cellular LTE & UMTS eSIM",
      "Apple S9 SiP Chip with Double Tap Control",
      "Emergency SOS with International Emergency Calling",
      "Stainless Steel or Aluminum Casing Options"
    ],
    "colors": [
      "Graphite Stainless",
      "Silver Stainless",
      "Gold Stainless"
    ]
  },
  "p71": {
    "id": "p71",
    "name": "Galaxy Watch 6 LTE 44mm",
    "brand": "Samsung",
    "category": "wearables",
    "price": 17990,
    "oldPrice": 20990,
    "discount": 14,
    "rating": 4.7,
    "reviews": 890,
    "image": "galaxy-watch-6-lte-44mm.jpg",
    "definition": "Standalone LTE smartwatch allowing calls, messaging, GPS run tracking, and contactless payments directly from your wrist.",
    "specs": [
      "Standalone 4G LTE eSIM Connectivity",
      "1.4\" Super AMOLED Display with Sapphire Glass",
      "Personalized Heart Rate Zones & Sleep Quality Score",
      "Samsung Wallet Contactless Payment On-Device"
    ],
    "colors": [
      "Graphite",
      "Silver"
    ]
  },
  "p72": {
    "id": "p72",
    "name": "Google Pixel Watch 2 LTE",
    "brand": "Google",
    "category": "wearables",
    "price": 25990,
    "oldPrice": 28990,
    "discount": 10,
    "rating": 4.6,
    "reviews": 520,
    "image": "google-pixel-watch-2-lte.jpg",
    "definition": "Enjoy complete untethered freedom with 4G LTE connectivity, continuous health tracking with Fitbit, and Safety Check.",
    "specs": [
      "4G LTE Wireless eSIM for Phone-Free Connectivity",
      "Multi-Path Optical Heart Rate Sensor by Fitbit",
      "Safety Check, Emergency Sharing, and Fall Detection",
      "24 Hours Battery with Rapid Charging"
    ],
    "colors": [
      "Matte Black",
      "Polished Silver",
      "Champagne Gold"
    ]
  },
  "p73": {
    "id": "p73",
    "name": "Apple Watch Milanese Loop Band",
    "brand": "Apple",
    "category": "wearables",
    "price": 5490,
    "oldPrice": 6490,
    "discount": 15,
    "rating": 4.8,
    "reviews": 2140,
    "image": "apple-watch-milanese-loop-band.jpg",
    "definition": "A modern interpretation of a design developed in Milan, smoothly woven stainless steel mesh wraps fluidly around your wrist.",
    "specs": [
      "Woven Stainless Steel Mesh Architecture",
      "Fully Magnetic Infinitely Adjustable Fastener Closure",
      "PVD Coating for Superior Scratch Resistance",
      "Compatible with All 41mm / 45mm / 49mm Apple Watches"
    ],
    "colors": [
      "Space Black",
      "Silver",
      "Gold"
    ]
  },
  "p74": {
    "id": "p74",
    "name": "Hybrid Leather T-Buckle Band",
    "brand": "Samsung",
    "category": "wearables",
    "price": 2490,
    "oldPrice": 3100,
    "discount": 20,
    "rating": 4.6,
    "reviews": 870,
    "image": "hybrid-leather-t-buckle-band.jpg",
    "definition": "Premium outer calfskin leather combined with sweat-resistant inner fluoroelastomer rubber for elegant look and sports comfort.",
    "specs": [
      "Top Grain Calfskin Leather Exterior",
      "Sweat-Resistant FKM Fluoroelastomer Interior",
      "One-Click Quick Release Spring Bar Mechanism",
      "Standard 20mm Lug Fit for Galaxy Watches"
    ],
    "colors": [
      "Camel Brown",
      "Indigo Blue",
      "Matte Black"
    ]
  },
  "p75": {
    "id": "p75",
    "name": "Alpine Loop Rugged Strap 49mm",
    "brand": "Apple",
    "category": "wearables",
    "price": 4990,
    "oldPrice": 5990,
    "discount": 17,
    "rating": 4.9,
    "reviews": 1680,
    "image": "alpine-loop-rugged-strap-49mm.jpg",
    "definition": "Engineered for outdoor adventure, woven from two textile layers seamlessly without stitching, with corrosion-resistant titanium G-hook.",
    "specs": [
      "High-Strength Dual Seamless Textile Weave",
      "Corrosion-Resistant Solid Titanium G-Hook Closure",
      "Reinforced Top Loops for Extreme Security",
      "Designed for Apple Watch Ultra 49mm & 45mm Cases"
    ],
    "colors": [
      "Orange",
      "Olive Green",
      "Starlight"
    ]
  },
  "p76": {
    "id": "p76",
    "name": "Razer BlackWidow V4 Pro",
    "brand": "Razer",
    "category": "gaming",
    "price": 8990,
    "oldPrice": 11990,
    "discount": 25,
    "rating": 4.8,
    "reviews": 1920,
    "image": "razer-blackwidow-v4-pro.jpg",
    "definition": "Command center mechanical gaming keyboard featuring Razer Command Dial, 8 dedicated macro keys, magnetic plush wrist rest, and Chroma RGB underglow.",
    "specs": [
      "Razer Mechanical Switches (Green Clicky / Yellow Linear)",
      "Razer Command Dial + 8 Dedicated Macro Keys",
      "3-Side Underglow & Per-Key Razer Chroma RGB",
      "Plush Leatherette Magnetic Wrist Rest with Underglow"
    ],
    "colors": [
      "Classic Black"
    ]
  },
  "p77": {
    "id": "p77",
    "name": "Keychron Q1 Pro QMK Wireless",
    "brand": "Keychron",
    "category": "gaming",
    "price": 10490,
    "oldPrice": 12500,
    "discount": 16,
    "rating": 4.9,
    "reviews": 1430,
    "image": "keychron-q1-pro-qmk-wireless.jpg",
    "definition": "Fully custom 75% QMK/VIA wireless mechanical keyboard engineered with CNC aluminum body, double-gasket design, and hot-swappable switches.",
    "specs": [
      "Full CNC Machined 6063 Aluminum Chassis",
      "Double-Gasket Mount Design for Creamy Acoustic Profile",
      "Hot-Swappable PCB (Supports 3-pin & 5-pin MX Switches)",
      "Bluetooth 5.1 + Type-C Wired with Mac/Win Layout"
    ],
    "colors": [
      "Carbon Black",
      "Silver Grey",
      "Shell White"
    ]
  },
  "p78": {
    "id": "p78",
    "name": "Logitech G915 LIGHTSPEED TKL",
    "brand": "Logitech",
    "category": "gaming",
    "price": 11990,
    "oldPrice": 14500,
    "discount": 17,
    "rating": 4.8,
    "reviews": 2780,
    "image": "logitech-g915-lightspeed-tkl.jpg",
    "definition": "Ultra-thin tenkeyless mechanical gaming keyboard with pro-grade 1ms LIGHTSPEED wireless, low-profile GL switches, and aircraft-grade aluminum alloy.",
    "specs": [
      "Pro-Grade LIGHTSPEED 1ms Wireless + Bluetooth",
      "High-Performance Low-Profile GL Mechanical Switches",
      "Aircraft-Grade 5052 Aluminum Top Case",
      "40 Hours of Non-Stop Battery on Single Charge"
    ],
    "colors": [
      "Carbon Black",
      "White"
    ]
  },
  "p79": {
    "id": "p79",
    "name": "Logitech G502 X Wireless",
    "brand": "Logitech",
    "category": "gaming",
    "price": 4290,
    "oldPrice": 5490,
    "discount": 22,
    "rating": 4.8,
    "reviews": 5890,
    "image": "logitech-g502-x-wireless.jpg",
    "definition": "Iconic gaming mouse reinvented with hybrid optical-mechanical LIGHTFORCE switches, HERO 25K optical sensor, and redesigned dual-mode scroll wheel.",
    "specs": [
      "LIGHTFORCE Hybrid Optical-Mechanical Switches",
      "HERO 25K Sub-Micron Precision Optical Sensor",
      "13 Programmable Controls with Reversible DPI Shift",
      "140 Hours Battery Life on High-Speed Wireless"
    ],
    "colors": [
      "Black",
      "White"
    ]
  },
  "p80": {
    "id": "p80",
    "name": "Razer Viper V3 Pro 8000Hz",
    "brand": "Razer",
    "category": "gaming",
    "price": 8990,
    "oldPrice": 10490,
    "discount": 14,
    "rating": 4.9,
    "reviews": 1120,
    "image": "razer-viper-v3-pro-8000hz.jpg",
    "definition": "Ultra-lightweight 54g wireless esports mouse with true 8000Hz wireless polling rate, Gen-3 optical switches, and Focus Pro 35K optical sensor.",
    "specs": [
      "Ultra-Lightweight 54g Ergonomic Esports Shape",
      "Razer HyperPolling Wireless True 8000Hz Rate",
      "Focus Pro 35K Gen-2 Optical Sensor",
      "Optical Mouse Switches Gen-3 Rated for 90M Clicks"
    ],
    "colors": [
      "Black",
      "White"
    ]
  },
  "p81": {
    "id": "p81",
    "name": "Logitech G PRO X SUPERLIGHT 2",
    "brand": "Logitech",
    "category": "gaming",
    "price": 8490,
    "oldPrice": 9490,
    "discount": 11,
    "rating": 4.9,
    "reviews": 3410,
    "image": "logitech-g-pro-x-superlight-2.jpg",
    "definition": "The pinnacle of pro-grade wireless esports mice, weighing under 60 grams with LIGHTFORCE hybrid switches, HERO 2 sensor, and 95 hours of battery.",
    "specs": [
      "Sub-60g Ultra-Lightweight Construction",
      "HERO 2 Sensor with 32,000 DPI and 500+ IPS Tracking",
      "LIGHTFORCE Hybrid Optical-Mechanical Switches",
      "USB-C Charging with 95 Hours Continuous Battery"
    ],
    "colors": [
      "Black",
      "White",
      "Magenta"
    ]
  },
  "p82": {
    "id": "p82",
    "name": "ROG Strix Gaming Monitor 27\"",
    "brand": "ASUS",
    "category": "gaming",
    "price": 22995,
    "oldPrice": 28995,
    "discount": 21,
    "rating": 4.8,
    "reviews": 1840,
    "image": "rog-strix-gaming-monitor-27.jpg",
    "definition": "27-inch Fast IPS gaming monitor with 180Hz refresh rate, 1ms response time, Extreme Low Motion Blur Sync, and DisplayHDR 400.",
    "specs": [
      "27\" WQHD (2560x1440) Fast IPS Panel",
      "180Hz Ultra-Fast Refresh Rate + 1ms (GTG)",
      "ASUS Extreme Low Motion Blur Sync (ELMB SYNC)",
      "G-SYNC Compatible with 95% DCI-P3 Color Gamut"
    ],
    "colors": [
      "ROG Stealth Black"
    ]
  },
  "p83": {
    "id": "p83",
    "name": "Odyssey OLED G9 49\" Curved",
    "brand": "Samsung",
    "category": "gaming",
    "price": 89990,
    "oldPrice": 109990,
    "discount": 18,
    "rating": 4.9,
    "reviews": 490,
    "image": "odyssey-oled-g9-49-curved.jpg",
    "definition": "Colossal 49-inch curved DQHD OLED monitor with 240Hz refresh rate, 0.03ms response time, Neo Quantum Processor Pro, and CoreSync lighting.",
    "specs": [
      "49\" Dual QHD (5120x1440) 1800R Curved OLED",
      "240Hz Refresh Rate with 0.03ms (GtG) Response",
      "Neo Quantum Processor Pro for Deep OLED Contrast",
      "DisplayHDR True Black 400 + Smart TV Hub Built-in"
    ],
    "colors": [
      "Silver Metallic"
    ]
  },
  "p84": {
    "id": "p84",
    "name": "LG UltraGear 27\" 240Hz OLED",
    "brand": "LG",
    "category": "gaming",
    "price": 46990,
    "oldPrice": 54990,
    "discount": 15,
    "rating": 4.8,
    "reviews": 780,
    "image": "lg-ultragear-27-240hz-oled.jpg",
    "definition": "World's fastest 240Hz OLED esports monitor with 0.03ms response time, 98.5% DCI-P3 color reproduction, and anti-glare low reflection coating.",
    "specs": [
      "27\" QHD (2560x1440) OLED Anti-Glare Display",
      "240Hz Ultra-High Refresh Rate + 0.03ms Response",
      "NVIDIA G-SYNC Compatible & AMD FreeSync Premium Pro",
      "HDMI 2.1 & DisplayPort 1.4 for 4K 120Hz Console/PC"
    ],
    "colors": [
      "UltraGear Matte Black"
    ]
  },
  "p85": {
    "id": "p85",
    "name": "Xbox Wireless Controller Carbon",
    "brand": "Microsoft",
    "category": "gaming",
    "price": 3290,
    "oldPrice": 3890,
    "discount": 15,
    "rating": 4.8,
    "reviews": 7120,
    "image": "xbox-wireless-controller-carbon.jpg",
    "definition": "Textured grip on triggers and bumpers, hybrid D-pad, dedicated Share button, and cross-platform Bluetooth pairing with PC, Xbox, and mobile.",
    "specs": [
      "Sculpted Ergonomic Surfaces with Textured Grip",
      "Hybrid D-Pad for Precise Tactical Inputs",
      "Xbox Wireless + Bluetooth Connectivity (PC/Xbox/iOS/Android)",
      "3.5mm Stereo Audio Jack + USB-C Port"
    ],
    "colors": [
      "Carbon Black",
      "Robot White",
      "Shock Blue",
      "Pulse Red"
    ]
  },
  "p86": {
    "id": "p86",
    "name": "PlayStation DualSense Edge",
    "brand": "Sony",
    "category": "gaming",
    "price": 11490,
    "oldPrice": 12990,
    "discount": 12,
    "rating": 4.8,
    "reviews": 940,
    "image": "playstation-dualsense-edge.jpg",
    "definition": "Pro-tier customizable PS5 wireless controller with replaceable stick modules, changeable stick caps, back paddle buttons, and trigger stop locks.",
    "specs": [
      "Replaceable Analog Stick Modules & Stick Caps",
      "2 Swappable Remappable Back Paddle Buttons",
      "Adjustable Trigger Travel Distance Stops",
      "Signature Haptic Feedback & Adaptive Triggers"
    ],
    "colors": [
      "Classic White / Black"
    ]
  },
  "p87": {
    "id": "p87",
    "name": "8BitDo Ultimate 2.4G Controller",
    "brand": "8BitDo",
    "category": "gaming",
    "price": 2690,
    "oldPrice": 3290,
    "discount": 18,
    "rating": 4.7,
    "reviews": 3100,
    "image": "8bitdo-ultimate-2-4g-controller.jpg",
    "definition": "Hall Effect magnetic anti-drift joysticks, multifunction charging dock, custom profile switch button, and Ultimate Software customization.",
    "specs": [
      "Hall Effect Magnetic Sensing Anti-Drift Joysticks",
      "Multifunction Auto-On/Off Magnetic Charging Dock",
      "2 Pro-Level Back Paddle Buttons",
      "8BitDo Ultimate Software on PC, Android, and iOS"
    ],
    "colors": [
      "Black",
      "White",
      "Pastel Pink"
    ]
  },
  "p88": {
    "id": "p88",
    "name": "Shure MV7+ Podcast Microphone",
    "brand": "Shure",
    "category": "gaming",
    "price": 16490,
    "oldPrice": 18990,
    "discount": 13,
    "rating": 4.9,
    "reviews": 1120,
    "image": "shure-mv7-plus-podcast-microphone.jpg",
    "definition": "Broadcast-quality hybrid USB/XLR dynamic microphone with customizable multi-color LED touch panel, digital popper stopper, and real-time denoiser.",
    "specs": [
      "Dual USB-C and XLR Output Architecture",
      "Voice Isolation Dynamic Cardioid Capsule",
      "Customizable Multi-Color LED Touch Mute Strip",
      "Built-in Digital Popper Stopper & DSP Reverb Engine"
    ],
    "colors": [
      "Matte Black",
      "White"
    ]
  },
  "p89": {
    "id": "p89",
    "name": "Elgato Wave:3 USB Condenser",
    "brand": "Elgato",
    "category": "gaming",
    "price": 8990,
    "oldPrice": 10800,
    "discount": 17,
    "rating": 4.8,
    "reviews": 2100,
    "image": "elgato-wave-3-usb-condenser.jpg",
    "definition": "Studio-grade microphone and digital mixing solution tailored for creators, with Clipguard anti-distortion limiter and 24-bit 96kHz DAC.",
    "specs": [
      "Tight Cardioid Condenser Capsule (96kHz / 24-Bit)",
      "Proprietary Clipguard Technology to Prevent Audio Distortion",
      "Wave Link Software to Mix 8 Audio Channels",
      "Capacitive Touch Mute Sensor with LED Ring"
    ],
    "colors": [
      "Matte Black",
      "White"
    ]
  },
  "p90": {
    "id": "p90",
    "name": "HyperX QuadCast S RGB USB",
    "brand": "HyperX",
    "category": "gaming",
    "price": 8490,
    "oldPrice": 9990,
    "discount": 15,
    "rating": 4.8,
    "reviews": 4120,
    "image": "hyperx-quadcast-s-rgb-usb.jpg",
    "definition": "Full-featured standalone condenser microphone with stunning dynamic RGB lighting, anti-vibration shock mount, tap-to-mute sensor, and 4 polar patterns.",
    "specs": [
      "Radiant Dynamic RGB Lighting Customizable with NGENUITY",
      "Built-in Anti-Vibration Elastic Rope Shock Mount",
      "Tap-to-Mute Sensor with LED Status Indicator",
      "4 Selectable Polar Patterns: Stereo, Omni, Cardioid, Bidirectional"
    ],
    "colors": [
      "Black RGB",
      "White RGB"
    ]
  }
};


/* ==========================================================================
   ADMIN / STORE LAYER (stock, sold-out, admin edits). Data lives in localStorage.
   ========================================================================== */
const DEFAULT_STOCK = 20;
const LOW_STOCK_LIMIT = 5;

function readOverrides() {
  let o = {};
  try { o = JSON.parse(localStorage.getItem('techhub_catalog')) || {}; } catch (e) { o = {}; }
  return { edits: o.edits || {}, added: o.added || {}, deleted: o.deleted || [], stock: o.stock || {}, soldout: o.soldout || {} };
}
function saveOverrides(o) { localStorage.setItem('techhub_catalog', JSON.stringify(o)); }

(function applyCatalogOverrides() {
  const o = readOverrides();
  Object.keys(o.added).forEach(id => { PRODUCTS_DATA[id] = o.added[id]; });
  Object.keys(o.edits).forEach(id => { if (PRODUCTS_DATA[id]) Object.assign(PRODUCTS_DATA[id], o.edits[id]); });
  o.deleted.forEach(id => { delete PRODUCTS_DATA[id]; });
})();

function getStock(id) {
  const o = readOverrides();
  if (o.soldout[id]) return 0;
  return o.stock[id] !== undefined ? Number(o.stock[id]) : DEFAULT_STOCK;
}
function isSoldOut(id) { return getStock(id) <= 0; }

// Called once per placed order: lowers the stock of each purchased item
function reduceStockForOrder(order) {
  const o = readOverrides();
  (order.items || []).forEach(it => {
    const cur = o.stock[it.id] !== undefined ? Number(o.stock[it.id]) : DEFAULT_STOCK;
    o.stock[it.id] = Math.max(0, cur - (it.qty || 1));
  });
  saveOverrides(o);
}

// Keeps every product card on every page in sync with the admin's changes
function syncCatalogUI() {
  const o = readOverrides();
  const setText = (el, t) => { if (el && el.textContent !== t) el.textContent = t; };
  document.querySelectorAll('.product-card[data-id]').forEach(card => {
    const id = card.dataset.id;
    const p = PRODUCTS_DATA[id];
    if (!p) { card.style.display = 'none'; return; }
    if (o.edits[id] || o.added[id]) {
      setText(card.querySelector('.product-title'), p.name);
      setText(card.querySelector('.product-brand'), p.brand);
      setText(card.querySelector('.current-price'), '\u20b1' + Number(p.price).toLocaleString('en-US'));
      const old = card.querySelector('.old-price');
      if (old) setText(old, p.oldPrice ? '\u20b1' + Number(p.oldPrice).toLocaleString('en-US') : '');
      const img = card.querySelector('.card-thumb img');
      if (img && img.getAttribute('src') !== p.image) img.setAttribute('src', p.image);
    }
    const stock = getStock(id);
    const sold = stock <= 0;
    card.classList.toggle('sold-out', sold);
    const btn = card.querySelector('.add-cart-btn');
    if (btn) { btn.disabled = sold; setText(btn, sold ? 'Sold Out' : 'Add to Cart'); }
    const thumb = card.querySelector('.card-thumb');
    let ribbon = card.querySelector('.soldout-ribbon');
    if (sold && thumb && !ribbon) {
      ribbon = document.createElement('div');
      ribbon.className = 'soldout-ribbon';
      ribbon.textContent = 'SOLD OUT';
      thumb.appendChild(ribbon);
    } else if (!sold && ribbon) { ribbon.remove(); }
    const warn = card.querySelector('.stock-warning');
    if (warn && o.stock[id] !== undefined) {
      setText(warn, 'Only ' + stock + ' left!');
      warn.style.display = (stock > 0 && stock <= 10) ? '' : 'none';
    }
  });
}
function initCatalogSync() {
  syncCatalogUI();
  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; syncCatalogUI(); });
  }).observe(document.body, { childList: true, subtree: true });
}

// Demo timeline: each order status stage advances every N seconds (set to 20 for demo)
const DEMO_STATUS_SECONDS = 20;

// Cart State
let cart = JSON.parse(localStorage.getItem('techhub_cart')) || [];
// Wishlist State
let wishlist = JSON.parse(localStorage.getItem('techhub_wishlist')) || [];
// Current Logged-in User
let currentUser = JSON.parse(localStorage.getItem('techhub_user')) || null;

// Active Modal States
let currentModalProductId = null;
let currentSelectedModalColor = null;
let modalQuantity = 1;

// Escape user-provided text before injecting into HTML
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ==========================================================================
   FLASH SALE COUNTDOWN TIMER
   ========================================================================== */
function initFlashSaleTimer() {
  const hrsEl = document.getElementById('timer-hrs');
  const minEl = document.getElementById('timer-min');
  const secEl = document.getElementById('timer-sec');
  if (!hrsEl || !minEl || !secEl) return;

  // Read initial values from the HTML
  let totalSeconds = parseInt(hrsEl.textContent) * 3600
    + parseInt(minEl.textContent) * 60
    + parseInt(secEl.textContent);

  function updateDisplay() {
    if (totalSeconds <= 0) {
      hrsEl.textContent = '00';
      minEl.textContent = '00';
      secEl.textContent = '00';
      return;
    }
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    hrsEl.textContent = String(h).padStart(2, '0');
    minEl.textContent = String(m).padStart(2, '0');
    secEl.textContent = String(s).padStart(2, '0');
  }

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    }
  }, 1000);
}

/* ==========================================================================
   DOM INITIALIZATION & DYNAMIC COMPONENT INJECTION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'admin') return; // the admin page has its own layout
  injectGlobalModals();
  initGlobalNavigation();
  initSearchAutocomplete();
  initFlashSaleTimer();
  updateCartUI();
  updateWishlistUI();
  checkAuthUI();
  bindCategoryCards();
  initCatalogSync();
});

function injectGlobalModals() {
  if (document.getElementById('modal-backdrop')) return;

  const html = `
    <!-- Global Dimming Backdrop -->
    <div class="modal-backdrop" id="modal-backdrop" onclick="closeAllModalsAndDrawers()"></div>

    <!-- Slide-Out Cart Drawer -->
    <aside class="drawer" id="cart-drawer" aria-label="Shopping Cart">
      <div class="drawer-header">
        <h3 class="drawer-title">
          <span>Shopping Cart</span>
          <span class="badge" id="drawer-cart-count">0</span>
        </h3>
        <button class="drawer-close-btn" onclick="closeCart()" aria-label="Close Cart">&times;</button>
      </div>
      <div class="drawer-body" id="cart-items-container"></div>
      <div class="drawer-footer" id="cart-footer">
        <div class="drawer-subtotal-row">
          <span style="color: var(--text-secondary);">Subtotal:</span>
          <span class="drawer-subtotal-val" id="cart-subtotal">&#8369;0</span>
        </div>
        <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center;">Taxes & delivery calculated at checkout.</p>
        <button class="btn btn-primary btn-block glow-blue" onclick="handleCheckout()">
          Proceed to Checkout &rarr;
        </button>
      </div>
    </aside>

    <!-- Slide-Out Wishlist Drawer -->
    <aside class="drawer" id="wishlist-drawer" aria-label="Wishlist">
      <div class="drawer-header">
        <h3 class="drawer-title">
          <span>&#9825; Favorite Items</span>
          <span class="badge" id="drawer-wishlist-count">0</span>
        </h3>
        <button class="drawer-close-btn" onclick="closeWishlist()" aria-label="Close Wishlist">&times;</button>
      </div>
      <div class="drawer-body" id="wishlist-items-container"></div>
    </aside>

    <!-- Product Detail / Quick View Modal -->
    <div class="product-modal" id="product-modal" role="dialog" aria-modal="true">
      <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Close modal">&times;</button>
      <div class="modal-grid">
        <div class="modal-gallery">
          <img src="" alt="" class="modal-main-img" id="modal-img" />
        </div>
        <div class="modal-info">
          <span class="modal-brand" id="modal-brand">BRAND</span>
          <h2 class="modal-title" id="modal-title">Product Title</h2>
          
          <div class="modal-rating-row">
            <span class="stars" id="modal-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="rating-text" id="modal-reviews">4.8 (1,200 reviews)</span>
          </div>

          <div class="modal-price-row">
            <span class="modal-price" id="modal-price">&#8369;0</span>
            <span class="modal-old-price" id="modal-old-price">&#8369;0</span>
            <span class="badge-chip badge-flash" id="modal-discount">-15%</span>
          </div>

          <div class="modal-section-title">Overview & Definition</div>
          <p class="modal-definition" id="modal-desc"></p>

          <div class="modal-section-title">Key Specifications</div>
          <ul class="modal-specs-list" id="modal-specs"></ul>

          <div class="modal-color-picker">
            <div class="modal-section-title">Color Variant: <span id="modal-selected-color" style="color: var(--accent-blue-light); text-transform: none;"></span></div>
            <div class="color-options" id="modal-colors"></div>
          </div>

          <div class="modal-actions">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeModalQty(-1)">-</button>
              <span class="qty-val" id="modal-qty">1</span>
              <button class="qty-btn" onclick="changeModalQty(1)">+</button>
            </div>
            <button class="btn btn-primary btn-block glow-blue" id="modal-add-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Auth Modal (Sign In / Sign Up with Demo Account) -->
    <div class="auth-modal" id="auth-modal" role="dialog" aria-modal="true">
      <button class="modal-close-btn" onclick="closeAuthModal()" aria-label="Close dialog">&times;</button>
      
      <div class="auth-tabs">
        <button class="auth-tab-btn active" id="tab-login-btn" onclick="switchAuthTab('login')">Sign In</button>
        <button class="auth-tab-btn" id="tab-signup-btn" onclick="switchAuthTab('signup')">Create Account</button>
      </div>

      <!-- Demo Account Notice Card -->
      <div class="demo-credentials-card">
        <div class="demo-card-header">
          <span class="badge-chip badge-cyan">DEMO ACCOUNT</span>
          <button type="button" style="font-size: 0.72rem; color: var(--accent-blue-light); font-weight: 700; text-decoration: underline;" onclick="fillDemoCredentials()">Auto-Fill</button>
        </div>
        <div style="font-size: 0.82rem; color: #cbd5e1; line-height: 1.5;">
          <div>Username / Email: <strong style="color: #fff;">TechHub</strong></div>
          <div>Password: <strong style="color: #fff;">group4overflow</strong></div>
        </div>
      </div>

      <!-- Sign In Form -->
      <form class="auth-form" id="login-form" onsubmit="handleAuthSubmit(event, 'login')">
        <div class="form-group">
          <label class="form-label">Username or Email</label>
          <input type="text" required placeholder="TechHub" class="form-input" id="login-email" value="TechHub" />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" required placeholder="group4overflow" class="form-input" id="login-pass" value="group4overflow" />
        </div>
        <div class="form-helper">
          <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
            <input type="checkbox" checked /> Remember me
          </label>
          <a href="#" onclick="showToast('Demo account: TechHub / group4overflow', 'info'); return false;">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-primary btn-block glow-blue" style="margin-top: 4px;">Sign In</button>
        <a href="admin.html" id="admin-login-link" style="display: block; margin-top: 14px; padding: 10px; text-align: center; font-size: 0.88rem; font-weight: 700; color: var(--accent-blue-light); border: 1px dashed var(--border-color); border-radius: 10px; text-decoration: none;">&#128274; Log in as an Admin</a>
      </form>

      <!-- Sign Up Form -->
      <form class="auth-form" id="signup-form" style="display: none;" onsubmit="handleAuthSubmit(event, 'signup')">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" required placeholder="Your Name" class="form-input" id="signup-name" />
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" required placeholder="user@techhub.ph" class="form-input" id="signup-email" />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <div style="position:relative;">
            <input type="password" required placeholder="Minimum 8 characters" class="form-input" id="signup-pass" />
            <button type="button" onclick="togglePasswordVisibility('signup-pass')" style="position:absolute; right:10px; top:12px; background:none; border:none; color:#888; cursor:pointer;">&#128065;</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Confirm Password</label>
          <div style="position:relative;">
            <input type="password" required placeholder="Re-enter password" class="form-input" id="signup-confirm-pass" />
            <button type="button" onclick="togglePasswordVisibility('signup-confirm-pass')" style="position:absolute; right:10px; top:12px; background:none; border:none; color:#888; cursor:pointer;">&#128065;</button>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block glow-blue" style="margin-top: 4px;">Create My Account</button>
      </form>
    </div>

    <!-- Toasts are injected dynamically by showToast() -->
  `;

  document.body.insertAdjacentHTML('beforeend', html);
}

/* ==========================================================================
   SUB-CATEGORY TAB SWITCHING (Clicking 1, 2, 3, 4, 5 in categories.html)
   ========================================================================== */
function switchSubcategory(parentCategoryId, subcategoryId, clickedBtn) {
  const parentBlock = document.getElementById('cat-' + parentCategoryId);
  if (!parentBlock) return;

  // 1. Update chip active classes
  const chips = parentBlock.querySelectorAll('.subcategory-chip');
  chips.forEach(chip => chip.classList.remove('active'));
  if (clickedBtn) clickedBtn.classList.add('active');

  // 2. Hide all subcategory containers and show the selected one
  const targetId = 'sub-' + parentCategoryId + '-' + subcategoryId;
  const contents = parentBlock.querySelectorAll('.subcategory-content');
  contents.forEach(c => {
    if (c.id === targetId) {
      c.classList.add('active');
      c.style.display = 'block';
    } else {
      c.classList.remove('active');
      c.style.display = 'none';
    }
  });
}

/* ==========================================================================
   EVENT BINDINGS
   ========================================================================== */
function bindCategoryCards() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card && !e.target.closest('.wishlist-toggle') && !e.target.closest('button')) {
      const pid = card.getAttribute('data-id');
      if (pid && PRODUCTS_DATA[pid]) {
        openProductModal(pid);
      }
    }
  });
}

/* ==========================================================================
   PRODUCT DETAIL MODAL LOGIC
   ========================================================================== */
function openProductModal(productId) {
  const p = PRODUCTS_DATA[productId];
  if (!p) return;

  currentModalProductId = productId;
  modalQuantity = 1;

  const modalImg = document.getElementById('modal-img');
  if (modalImg) {
    modalImg.src = p.image;
    modalImg.alt = p.name;
  }

  const modalBrand = document.getElementById('modal-brand');
  if (modalBrand) modalBrand.textContent = p.brand;

  const modalTitle = document.getElementById('modal-title');
  if (modalTitle) modalTitle.textContent = p.name;

  const modalPrice = document.getElementById('modal-price');
  if (modalPrice) modalPrice.textContent = `\u20B1${p.price.toLocaleString()}`;

  const modalOldPrice = document.getElementById('modal-old-price');
  if (modalOldPrice) modalOldPrice.textContent = p.oldPrice ? `\u20B1${p.oldPrice.toLocaleString()}` : '';

  const discountEl = document.getElementById('modal-discount');
  if (discountEl) {
    if (p.discount) {
      discountEl.style.display = 'inline-block';
      discountEl.textContent = `-${p.discount}%`;
    } else {
      discountEl.style.display = 'none';
    }
  }

  // Render Stars dynamically
  const starsEl = document.getElementById('modal-stars');
  if (starsEl) {
    const fullStars = Math.min(5, Math.max(1, Math.round(p.rating || 5)));
    starsEl.textContent = '\u2605'.repeat(fullStars) + '\u2606'.repeat(5 - fullStars);
  }

  const reviewsEl = document.getElementById('modal-reviews');
  if (reviewsEl) reviewsEl.textContent = `${p.rating} (${p.reviews.toLocaleString()} reviews)`;

  const descEl = document.getElementById('modal-desc');
  if (descEl) descEl.textContent = p.definition;

  const specsContainer = document.getElementById('modal-specs');
  if (specsContainer && p.specs) {
    specsContainer.innerHTML = p.specs.map(spec => `<li>${spec}</li>`).join('');
  }

  const colorsContainer = document.getElementById('modal-colors');
  currentSelectedModalColor = (p.colors && p.colors.length > 0) ? p.colors[0] : 'Standard';

  const colorLabel = document.getElementById('modal-selected-color');
  if (colorLabel) colorLabel.textContent = currentSelectedModalColor;

  if (colorsContainer && p.colors) {
    colorsContainer.innerHTML = p.colors.map((c, idx) => `
      <button class="color-chip ${idx === 0 ? 'active' : ''}" onclick="selectModalColor('${c}', this)">
        ${c}
      </button>
    `).join('');
  }

  const qtyEl = document.getElementById('modal-qty');
  if (qtyEl) qtyEl.textContent = modalQuantity;

  const addBtn = document.getElementById('modal-add-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(p.id, modalQuantity, currentSelectedModalColor);
      closeProductModal();
    };
    const soldOut = isSoldOut(p.id);
    addBtn.disabled = soldOut;
    addBtn.textContent = soldOut ? 'Sold Out' : 'Add to Cart';
  }

  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.add('active');

  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('active');
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop && !isAnyDrawerOpen()) backdrop.classList.remove('active');
}

function selectModalColor(colorName, btn) {
  currentSelectedModalColor = colorName;
  const colorLabel = document.getElementById('modal-selected-color');
  if (colorLabel) colorLabel.textContent = colorName;
  document.querySelectorAll('.color-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function changeModalQty(delta) {
  modalQuantity = Math.max(1, modalQuantity + delta);
  const qtyEl = document.getElementById('modal-qty');
  if (qtyEl) qtyEl.textContent = modalQuantity;
}

/* ==========================================================================
   CART SYSTEM & CHECKOUT LOGIN ENFORCEMENT
   ========================================================================== */
function openCart() {
  renderCartDrawer();
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.add('active');
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.add('open');
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');
  if (!isAnyOtherModalOpen()) {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) backdrop.classList.remove('active');
  }
}

function addToCart(productId, qty = 1, variant = null) {
  const p = PRODUCTS_DATA[productId];
  if (!p) return;

  // Stock check (set by the admin panel)
  if (isSoldOut(productId)) { showToast(`Sorry, "${p.name}" is sold out.`, 'error'); return; }
  const inCart = cart.filter(i => i.id === productId).reduce((n, i) => n + i.qty, 0);
  if (inCart + qty > getStock(productId)) { showToast(`Only ${getStock(productId)} left in stock for "${p.name}".`, 'error'); return; }

  const chosenVariant = variant || (p.colors ? p.colors[0] : 'Standard');
  const existing = cart.find(item => item.id === productId && item.variant === chosenVariant);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      variant: chosenVariant,
      qty: qty
    });
  }

  localStorage.setItem('techhub_cart', JSON.stringify(cart));
  updateCartUI();
  showToast(`Added ${qty}x "${p.name}" to cart!`);
}

function updateCartQty(index, delta) {
  if (!cart[index]) return;
  if (delta > 0) {
    const total = cart.filter(i => i.id === cart[index].id).reduce((n, i) => n + i.qty, 0);
    if (total + delta > getStock(cart[index].id)) { showToast('No more stock available for this item.', 'error'); return; }
  }
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem('techhub_cart', JSON.stringify(cart));
  updateCartUI();
  renderCartDrawer();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  cart.splice(index, 1);
  localStorage.setItem('techhub_cart', JSON.stringify(cart));
  updateCartUI();
  renderCartDrawer();
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const drawerCountEl = document.getElementById('drawer-cart-count');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon" style="font-size: 2.5rem; margin-bottom: 8px;">\uD83D\uDED2</div>
        <h4 style="color: #fff; margin-bottom: 6px;">Your cart is empty</h4>
        <p style="font-size: 0.88rem;">Tap any product to add items to your cart.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 16px;" onclick="closeCart()">
          Browse Products
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '\u20B10';
    if (drawerCountEl) drawerCountEl.textContent = '0';
    return;
  }

  let total = 0;
  let totalItems = 0;

  container.innerHTML = cart.map((item, index) => {
    total += item.price * item.qty;
    totalItems += item.qty;
    return `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.name}" class="drawer-item-img" />
        <div class="drawer-item-info">
          <div class="drawer-item-title">${item.name}</div>
          <div class="drawer-item-variant">Color: ${item.variant}</div>
          <div class="drawer-item-price">\u20B1${(item.price * item.qty).toLocaleString()}</div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <button class="item-delete-btn" onclick="removeCartItem(${index})" title="Remove item">\uD83D\uDDD1\uFE0F Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = `\u20B1${total.toLocaleString()}`;
  if (drawerCountEl) drawerCountEl.textContent = totalItems;
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = count;
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);
  }
}

/* MANDATORY LOGIN TO ORDER / CHECKOUT */
function handleCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Please add items first.', 'error');
    return;
  }

  if (!currentUser) {
    showToast('Login Required! Please log in to place an order.', 'error');
    openAuthModal('login');
    return;
  }

  // Redirect to the full checkout page instead of instant order
  closeCart();
  window.location.href = 'cart.html';
}

// Save a single order to localStorage. Call this ONCE per order.
function createOrder(order) {
  if (!currentUser) return;
  const key = `techhub_orders_${currentUser.email}`;
  const orders = JSON.parse(localStorage.getItem(key) || '[]');
  // Avoid double-saving if modal is opened twice
  if (orders.some(o => o.orderNum === order.orderNum)) return;
  orders.unshift(order);
  localStorage.setItem(key, JSON.stringify(orders.slice(0, 100)));
  reduceStockForOrder(order);
}

function showOrderSuccessModal(order) {
  if (!order || typeof order !== 'object') return;

  const existing = document.getElementById('order-success-overlay');
  if (existing) existing.remove();

  const payLabel = escapeHtml(
    order.payment && order.payment.label
      ? order.payment.label
      : (typeof order.payment === 'string' ? order.payment : 'N/A')
  );
  const addrLabel = escapeHtml(
    order.delivery && order.delivery.formatted
      ? order.delivery.formatted
      : (order.address || 'Address not recorded (placed before update)')
  );
  const refLine = order.payment && order.payment.refNum
    ? `<div>Reference #: <strong style="color:#22d3ee;">${escapeHtml(order.payment.refNum)}</strong></div>`
    : '';

  const overlay = document.createElement('div');
  overlay.id = 'order-success-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:99990;display:flex;align-items:center;justify-content:center;padding:20px;';

  const inner = document.createElement('div');
  inner.style.cssText = 'background:#1a1a2e;border:1px solid #2d2d4a;border-radius:16px;padding:36px 32px;max-width:480px;width:100%;text-align:center;position:relative;max-height:90vh;overflow-y:auto;';

  inner.innerHTML = `
    <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:2rem;animation:checkPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275);">&#10003;</div>
    <h2 style="color:#fff;font-size:1.5rem;font-weight:800;margin-bottom:6px;">Order Confirmed! &#127881;</h2>
    <p style="color:#10b981;margin-bottom:20px;font-size:0.95rem;">Thank you for shopping with TechHub!</p>
    <div style="background:#0f0f23;border:1px solid #2d2d4a;border-radius:10px;padding:16px;text-align:left;font-size:0.9rem;color:#cbd5e1;line-height:1.9;margin-bottom:20px;">
      <div>Order ID: <strong style="color:#fff;">${escapeHtml(order.orderNum)}</strong></div>
      <div>Customer: <strong style="color:#fff;">${currentUser ? escapeHtml(currentUser.name) : ''}</strong></div>
      <div>Total: <strong style="color:#60a5fa;">&#8369;${Number(order.total).toLocaleString()}</strong></div>
      <div>Payment: <strong style="color:#fff;">${payLabel}</strong></div>
      ${refLine}
      <div>Deliver to: <strong style="color:#fff;">${addrLabel}</strong></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn btn-primary glow-blue" style="flex:1;" id="suc-view-orders-btn">&#128230; View My Orders</button>
      <button class="btn btn-secondary" style="flex:1;" id="suc-receipt-btn">&#128424;&#65039; View Receipt</button>
    </div>
    <button class="btn btn-outline" style="width:100%;margin-top:10px;" id="suc-continue-btn">Continue Shopping</button>
  `;

  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  document.getElementById('suc-view-orders-btn').addEventListener('click', () => {
    overlay.remove();
    openOrdersModal();
  });
  document.getElementById('suc-receipt-btn').addEventListener('click', () => {
    openReceiptOverlay(order);
  });
  document.getElementById('suc-continue-btn').addEventListener('click', () => {
    overlay.remove();
    window.location.href = 'products.html';
  });
}

// DEMO_STATUS_SECONDS stages: each stage lasts DEMO_STATUS_SECONDS seconds.
// Stages: Order Placed(0), Packed(1), Shipped(2), Out for Delivery(3), Delivered(4)
const STATUS_STAGES = ['Order Placed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];

function getOrderStatus(order) {
  // If manually set to Received, honour it
  if (order.receivedAt) return 'Received';
  if (order.status === 'Received') return 'Received';

  const now = new Date();
  const orderDate = new Date(order.date);
  const diffSeconds = (now - orderDate) / 1000;
  const stageIndex = Math.min(Math.floor(diffSeconds / DEMO_STATUS_SECONDS), STATUS_STAGES.length - 1);
  return STATUS_STAGES[stageIndex];
}

function openOrdersModal() {
  const existing = document.getElementById('orders-modal-overlay');
  if (existing) existing.remove();

  if (!currentUser) {
    showToast('Please log in to view your orders.', 'error');
    openAuthModal('login');
    return;
  }

  const key = `techhub_orders_${currentUser.email}`;
  const orders = JSON.parse(localStorage.getItem(key) || '[]');
  const statusColor = { 'Order Placed': '#f59e0b', 'Packed': '#8b5cf6', 'Shipped': '#3b82f6', 'Out for Delivery': '#ec4899', 'Delivered': '#10b981', 'Received': '#10b981' };

  function buildOrderCard(o) {
    const status = getOrderStatus(o);
    const payLabel = o.payment && o.payment.label
      ? escapeHtml(o.payment.label)
      : escapeHtml(typeof o.payment === 'string' ? o.payment : 'N/A');
    const addrLabel = o.delivery && o.delivery.formatted
      ? escapeHtml(o.delivery.formatted)
      : escapeHtml(o.address || 'Address not recorded (placed before update)');

    // Build items HTML
    let itemsHtml = '';
    if (o.items && o.items.length) {
      itemsHtml = '<div style="margin-top:12px;padding-top:12px;border-top:1px solid #2d2d4a;display:flex;flex-direction:column;gap:8px;">';
      o.items.forEach(item => {
        itemsHtml += `
          <div style="display:flex;align-items:center;gap:12px;">
            <img src="${escapeHtml(item.image || '')}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;" alt="" />
            <div style="flex:1;">
              <div style="color:#fff;font-weight:600;font-size:0.85rem;">${escapeHtml(item.name)}</div>
              <div style="color:#94a3b8;font-size:0.75rem;">Color: ${escapeHtml(item.variant)} | Qty: ${item.qty}</div>
            </div>
            <div style="color:#fff;font-weight:700;font-size:0.85rem;">&#8369;${(item.price * item.qty).toLocaleString()}</div>
          </div>`;
      });
      itemsHtml += '</div>';
    }

    // Timeline
    const stages = STATUS_STAGES;
    const currentIdx = status === 'Received' ? stages.length - 1 : stages.indexOf(status);
    const fillPct = Math.max(0, Math.min(100, (currentIdx / (stages.length - 1)) * 100));
    let timelineHtml = `<div style="position:relative;margin:16px 0 20px;">
      <div style="position:absolute;top:10px;left:10px;right:10px;height:3px;background:#2d2d4a;z-index:0;border-radius:2px;"></div>
      <div style="position:absolute;top:10px;left:10px;height:3px;width:${fillPct}%;background:${statusColor[status] || '#6366f1'};z-index:1;border-radius:2px;transition:width 0.4s;"></div>
      <div style="display:flex;justify-content:space-between;position:relative;z-index:2;">`;
    stages.forEach((step, idx) => {
      const done = currentIdx > idx;
      const curr = currentIdx === idx;
      const dotBg = done ? '#10b981' : curr ? (statusColor[status] || '#6366f1') : '#1a1a2e';
      const dotBorder = done || curr ? (statusColor[status] || '#6366f1') : '#2d2d4a';
      timelineHtml += `<div style="display:flex;flex-direction:column;align-items:center;width:56px;text-align:center;">
        <div style="width:22px;height:22px;border-radius:50%;background:${dotBg};border:2px solid ${dotBorder};display:flex;align-items:center;justify-content:center;font-size:0.65rem;color:#fff;font-weight:700;margin-bottom:5px;">${done ? '&#10003;' : idx + 1}</div>
        <div style="font-size:0.58rem;color:${done || curr ? '#fff' : '#64748b'};font-weight:${done || curr ? '700' : '400'};line-height:1.2;">${escapeHtml(step)}</div>
      </div>`;
    });
    timelineHtml += '</div></div>';

    const card = document.createElement('div');
    card.style.cssText = 'background:#0f0f23;border:1px solid #2d2d4a;border-radius:12px;padding:20px;font-size:0.9rem;color:#cbd5e1;';
    card.dataset.orderNum = o.orderNum;

    const receivedNote = status === 'Received'
      ? `<div style="color:#10b981;font-size:0.85rem;margin:12px 0;">&#10003; Received on ${o.receivedAt ? new Date(o.receivedAt).toLocaleDateString('en-PH') : 'N/A'}</div>`
      : timelineHtml;

    const canReceive = status === 'Out for Delivery' || status === 'Delivered';

    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
        <div>
          <div style="color:#fff;font-weight:800;font-size:1.05rem;margin-bottom:2px;">${escapeHtml(o.orderNum)}</div>
          <div style="font-size:0.78rem;color:#94a3b8;">${new Date(o.date).toLocaleString('en-PH')}</div>
        </div>
        <span style="color:${statusColor[status] || '#fff'};font-weight:700;font-size:0.75rem;background:${(statusColor[status] || '#fff') + '22'};padding:4px 10px;border-radius:20px;border:1px solid ${(statusColor[status] || '#fff') + '44'};">${escapeHtml(status)}</span>
      </div>
      ${receivedNote}
      <div style="font-size:0.85rem;line-height:1.7;color:#94a3b8;">
        <div>Payment: <strong style="color:#fff;">${payLabel}</strong></div>
        <div>Address: ${addrLabel}</div>
        <div style="margin-top:4px;font-size:1rem;">Total: <strong style="color:#60a5fa;">&#8369;${Number(o.total).toLocaleString()}</strong></div>
      </div>
      ${itemsHtml}
      <div style="display:flex;gap:10px;margin-top:16px;border-top:1px solid #2d2d4a;padding-top:16px;flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" style="flex:1;" data-receipt-btn>&#128424;&#65039; View Receipt</button>
        ${canReceive && status !== 'Received' ? `<button class="btn" style="flex:1;background:#065f46;color:#fff;border:1px solid #10b981;" data-receive-btn>&#10003; Order Received</button>` : ''}
        <button class="btn btn-primary btn-sm" style="flex:1;" onclick="window.location.href='products.html'">&#128717;&#65039; Buy Again</button>
      </div>`;

    // Safe event listeners (no JSON in attributes)
    const receiptBtn = card.querySelector('[data-receipt-btn]');
    if (receiptBtn) receiptBtn.addEventListener('click', () => openReceiptOverlay(o));

    const receiveBtn = card.querySelector('[data-receive-btn]');
    if (receiveBtn) receiveBtn.addEventListener('click', () => openConfirmReceiveModal(o.orderNum));

    return card;
  }

  // Build the full side panel using DOM
  const overlay = document.createElement('div');
  overlay.id = 'orders-modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(4px);z-index:99990;display:flex;justify-content:flex-end;';
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  const panel = document.createElement('div');
  panel.style.cssText = 'background:#080c18;border-left:1px solid #1e2d4a;width:100%;max-width:620px;height:100%;display:flex;flex-direction:column;animation:slideInRight 0.3s ease;';

  // Header
  const headerEl = document.createElement('div');
  headerEl.style.cssText = 'padding:22px 24px;border-bottom:1px solid #1e2d4a;display:flex;justify-content:space-between;align-items:center;background:#0c1222;flex-shrink:0;';
  headerEl.innerHTML = `<h2 style="color:#fff;font-size:1.3rem;font-weight:800;display:flex;align-items:center;gap:8px;">&#128230; My Orders</h2>`;
  const closeBtn = document.createElement('button');
  closeBtn.style.cssText = 'background:rgba(255,255,255,0.1);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1.3rem;display:flex;align-items:center;justify-content:center;';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => overlay.remove());
  headerEl.appendChild(closeBtn);

  // Tab + Search bar
  const controlsWrap = document.createElement('div');
  controlsWrap.style.cssText = 'flex-shrink:0;border-bottom:1px solid #1e2d4a;';

  // Tab bar
  const tabBar = document.createElement('div');
  tabBar.style.cssText = 'display:flex;gap:0;border-bottom:1px solid #1e2d4a;';

  const tabDefs = [
    { id: 'all', label: '&#128230; All' },
    { id: 'to-receive', label: '&#128337; To Receive' },
    { id: 'received', label: '&#10003; Received' }
  ];

  let activeTab = 'all';

  function tabStatusMatch(o, tab) {
    const s = getOrderStatus(o);
    if (tab === 'all') return true;
    if (tab === 'to-receive') return s !== 'Received';
    if (tab === 'received') return s === 'Received';
    return true;
  }

  const tabEls = {};
  tabDefs.forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.innerHTML = label;
    btn.className = 'orders-tab-btn' + (id === 'all' ? ' active' : '');
    btn.dataset.tab = id;
    btn.addEventListener('click', () => {
      activeTab = id;
      tabEls[Object.keys(tabEls).find(k => tabEls[k] === btn)] && null;
      Object.values(tabEls).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderList(searchInput.value.trim());
    });
    tabBar.appendChild(btn);
    tabEls[id] = btn;
  });

  // Count badges on tabs
  function updateTabCounts() {
    tabDefs.forEach(({ id }) => {
      const count = orders.filter(o => tabStatusMatch(o, id)).length;
      const btn = tabEls[id];
      const existing = btn.querySelector('.tab-count');
      if (existing) existing.remove();
      if (count > 0) {
        const badge = document.createElement('span');
        badge.className = 'tab-count';
        badge.textContent = count;
        btn.appendChild(badge);
      }
    });
  }

  // Search input
  const searchRow = document.createElement('div');
  searchRow.style.cssText = 'padding:12px 24px;';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search by order number (e.g. TH-123456)...';
  searchInput.className = 'form-input';
  searchInput.style.cssText = 'width:100%;';
  searchRow.appendChild(searchInput);

  controlsWrap.appendChild(tabBar);
  controlsWrap.appendChild(searchRow);

  // Body
  const bodyEl = document.createElement('div');
  bodyEl.style.cssText = 'flex:1;overflow-y:auto;padding:20px 24px;display:flex;flex-direction:column;gap:14px;';

  function renderList(filter) {
    bodyEl.innerHTML = '';
    const filtered = orders.filter(o => {
      const matchSearch = !filter || o.orderNum.toUpperCase().includes(filter.toUpperCase());
      const matchTab = tabStatusMatch(o, activeTab);
      return matchSearch && matchTab;
    });

    if (filtered.length === 0) {
      const emptyMsgs = {
        all: { icon: '&#128230;', title: 'No orders yet', sub: 'You haven\'t placed any orders. Start shopping!' },
        'to-receive': { icon: '&#128337;', title: 'No pending orders', sub: 'All your orders have been received.' },
        received: { icon: '&#10003;', title: 'No received orders', sub: 'Orders you confirm will appear here.' }
      };
      const m = emptyMsgs[activeTab] || emptyMsgs.all;
      const el = document.createElement('div');
      el.style.cssText = 'text-align:center;padding:60px 20px;color:var(--text-secondary);';
      el.innerHTML = `<div style="font-size:3rem;margin-bottom:14px;">${m.icon}</div><h3 style="color:#fff;margin-bottom:8px;">${m.title}</h3><p style="margin-bottom:24px;">${m.sub}</p><a href="products.html" class="btn btn-primary glow-blue" style="display:inline-flex;" onclick="document.getElementById('orders-modal-overlay').remove()">Shop Now</a>`;
      bodyEl.appendChild(el);
      return;
    }

    filtered.forEach(o => bodyEl.appendChild(buildOrderCard(o)));
  }

  updateTabCounts();
  renderList('');
  searchInput.addEventListener('input', e => renderList(e.target.value.trim()));

  panel.appendChild(headerEl);
  panel.appendChild(controlsWrap);
  panel.appendChild(bodyEl);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);
}

function openConfirmReceiveModal(orderNum) {
  const existing = document.getElementById('confirm-receive-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'confirm-receive-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:99995;display:flex;align-items:center;justify-content:center;padding:20px;';

  const card = document.createElement('div');
  card.style.cssText = 'background:#1a1a2e;border:1px solid #2d2d4a;border-radius:16px;padding:36px 28px;max-width:420px;width:100%;text-align:center;';
  card.innerHTML = `
    <div style="font-size:3rem;margin-bottom:12px;">&#128230;</div>
    <h3 style="color:#fff;font-size:1.2rem;font-weight:800;margin-bottom:8px;">Confirm Order Received</h3>
    <p style="color:var(--text-secondary);margin-bottom:20px;font-size:0.9rem;">Confirm all items received for <strong style="color:#fff;">${escapeHtml(orderNum)}</strong>?</p>
    <div style="display:flex;gap:12px;justify-content:center;">
      <button class="btn btn-secondary" id="conf-cancel-btn">Cancel</button>
      <button class="btn btn-primary glow-blue" id="conf-ok-btn">Yes, I Received It</button>
    </div>`;

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  document.getElementById('conf-cancel-btn').addEventListener('click', () => overlay.remove());
  document.getElementById('conf-ok-btn').addEventListener('click', () => {
    overlay.remove();
    markOrderReceived(orderNum);
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

function markOrderReceived(orderNum) {
  if (!currentUser) return;
  const key = `techhub_orders_${currentUser.email}`;
  const orders = JSON.parse(localStorage.getItem(key) || '[]');
  const idx = orders.findIndex(o => o.orderNum === orderNum);
  if (idx === -1) return;

  orders[idx].status = 'Received';
  orders[idx].receivedAt = new Date().toISOString();
  if (orders[idx].payment && orders[idx].payment.method === 'cod') {
    orders[idx].payment.status = 'Paid (COD)';
  }
  localStorage.setItem(key, JSON.stringify(orders));
  showToast('Order marked as received! &#10003;', 'success');

  const existingPanel = document.getElementById('orders-modal-overlay');
  if (existingPanel) existingPanel.remove();
  openOrdersModal();
}


// In-page receipt overlay (no window.open, no JSON in attributes)
function openReceiptOverlay(order) {
  const existing = document.getElementById('receipt-overlay-wrap');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'receipt-overlay-wrap';
  overlay.className = 'receipt-overlay';

  const payLabel = order.payment && order.payment.label
    ? escapeHtml(order.payment.label)
    : escapeHtml(typeof order.payment === 'string' ? order.payment : 'N/A');

  const payStatus = order.payment && order.payment.status
    ? escapeHtml(order.payment.status)
    : (order.payment && order.payment.method === 'cod' && !order.receivedAt ? 'Unpaid (payable on delivery)' : 'Paid');

  const isReceivedCOD = order.payment && order.payment.method === 'cod' && order.receivedAt;
  let payStatusDisplay = payStatus;
  if (isReceivedCOD) payStatusDisplay = `Paid (COD) on ${new Date(order.receivedAt).toLocaleDateString('en-PH')}`;

  const addrLabel = order.delivery && order.delivery.formatted
    ? escapeHtml(order.delivery.formatted)
    : escapeHtml(order.address || 'Address not recorded (placed before update)');

  const refHtml = order.payment && order.payment.refNum
    ? `<div><span style="color:#64748b;">Reference:</span> <strong>${escapeHtml(order.payment.refNum)}</strong></div>` : '';

  const mobileHtml = order.payment && order.payment.mobileMasked
    ? `<div><span style="color:#64748b;">Mobile:</span> <strong>${escapeHtml(order.payment.mobileMasked)}</strong></div>` : '';

  const last4Html = order.payment && order.payment.last4
    ? `<div><span style="color:#64748b;">Card:</span> <strong>${escapeHtml(order.payment.cardBrand || '')} ending in ${escapeHtml(order.payment.last4)}</strong></div>` : '';

  let itemsTableHtml = '';
  if (order.items && order.items.length > 0) {
    itemsTableHtml = `<table class="receipt-items-table">
      <thead><tr>
        <th>Item</th><th>Qty</th><th>Unit Price</th><th>Warranty</th><th style="text-align:right;">Amount</th>
      </tr></thead>
      <tbody>`;
    order.items.forEach(item => {
      const wCode = escapeHtml(item.warrantyCode || 'N/A');
      const wExp = item.warrantyExpiry ? new Date(item.warrantyExpiry).toLocaleDateString('en-PH') : 'N/A';
      itemsTableHtml += `<tr>
        <td><strong>${escapeHtml(item.name)}</strong><br><small style="color:#64748b;">Color: ${escapeHtml(item.variant)}</small></td>
        <td>${item.qty}</td>
        <td>&#8369;${item.price.toLocaleString()}</td>
        <td><span class="receipt-warranty-pill">${wCode}</span><br><small style="color:#64748b;">Exp: ${wExp}</small></td>
        <td style="text-align:right;"><strong>&#8369;${(item.price * item.qty).toLocaleString()}</strong></td>
      </tr>`;
    });
    itemsTableHtml += '</tbody></table>';
  }

  const promoHtml = order.discount > 0
    ? `<div class="receipt-totals-row"><span>Promo (${escapeHtml(order.promoCode || 'DISC')})</span><strong style="color:#10b981;">-&#8369;${Number(order.discount).toLocaleString()}</strong></div>` : '';

  const receivedHtml = order.receivedAt
    ? `<div style="background:#d1fae5;border:1px solid #6ee7b7;border-radius:8px;padding:10px 14px;margin-top:16px;color:#065f46;font-size:0.85rem;"><strong>&#10003; Received on ${new Date(order.receivedAt).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></div>` : '';

  const card = document.createElement('div');
  card.className = 'receipt-card';

  card.innerHTML = `
    <button class="receipt-close-btn" id="receipt-close-btn" aria-label="Close receipt">&times;</button>

    <div class="receipt-header">
      <div>
        <h2 class="receipt-brand-title">Tech<span>Hub</span></h2>
        <p style="color:#64748b;font-size:0.8rem;margin-top:4px;">938 Aurora Boulevard, Cubao, Quezon City<br>support@techhub.ph | +63 (02) 8888-8324</p>
      </div>
      <div class="receipt-meta-right">
        <h2>Receipt</h2>
        <p>Order #${escapeHtml(order.orderNum)}</p>
        <p>${new Date(order.date).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>

    <div class="receipt-grid-info">
      <div class="receipt-info-block">
        <h4>Customer &amp; Delivery</h4>
        <strong style="font-size:1rem;">${order.delivery ? escapeHtml(order.delivery.fullName) : escapeHtml(order.address || 'N/A')}</strong>
        ${order.delivery ? `<div style="color:#64748b;">${escapeHtml(order.delivery.mobile || '')}</div><div style="color:#64748b;">${escapeHtml(order.delivery.email || '')}</div>` : ''}
        <div style="margin-top:8px;"><strong>Deliver to:</strong><br>${addrLabel}${order.delivery && order.delivery.notes ? `<br><em style="color:#64748b;">${escapeHtml(order.delivery.notes)}</em>` : ''}</div>
      </div>
      <div class="receipt-info-block">
        <h4>Payment</h4>
        <div><span style="color:#64748b;">Method:</span> <strong>${payLabel}</strong></div>
        ${refHtml}${mobileHtml}${last4Html}
        <div style="margin-top:8px;"><span style="color:#64748b;">Status:</span> <strong style="color:${order.receivedAt || (order.payment && order.payment.method !== 'cod') ? '#065f46' : '#92400e'}">${payStatusDisplay}</strong></div>
        ${receivedHtml}
      </div>
    </div>

    ${itemsTableHtml}

    <div class="receipt-totals-wrap">
      <div class="receipt-totals-row"><span>Subtotal</span><strong>&#8369;${Number(order.subtotal || order.total).toLocaleString()}</strong></div>
      ${promoHtml}
      <div class="receipt-totals-row"><span>Shipping</span><strong>${order.shipping ? '&#8369;' + Number(order.shipping).toLocaleString() : 'FREE'}</strong></div>
      <div class="receipt-totals-row grand"><span>Total</span><span>&#8369;${Number(order.total).toLocaleString()}</span></div>
    </div>

    <div class="receipt-actions">
      <button class="receipt-print-btn" onclick="window.print();">&#128424;&#65039; Print / Save as PDF</button>
    </div>

    <div style="text-align:center;color:#64748b;font-size:0.8rem;margin-top:16px;border-top:1px solid #e2e8f0;padding-top:16px;">
      <strong>1-Year Warranty Included per Item &mdash; see codes above</strong><br>
      Keep this receipt for warranty claims. Thank you for shopping at TechHub Philippines!
    </div>`;

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  document.getElementById('receipt-close-btn').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// printReceipt: kept as alias — opens the in-page overlay; does NOT use window.open
function printReceipt(order) {
  openReceiptOverlay(order);
}

/* ==========================================================================
   WISHLIST SYSTEM
   ========================================================================== */
function toggleHeart(btn, productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    if (btn) btn.classList.remove('active');
    showToast('Removed from favorites');
  } else {
    wishlist.push(productId);
    if (btn) btn.classList.add('active');
    showToast('Saved to your favorites \u2764\uFE0F');
  }
  localStorage.setItem('techhub_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function openWishlist() {
  renderWishlistDrawer();
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.add('active');
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) drawer.classList.add('open');
}

function closeWishlist() {
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) drawer.classList.remove('open');
  if (!isAnyOtherModalOpen()) {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) backdrop.classList.remove('active');
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-items-container');
  const countEl = document.getElementById('drawer-wishlist-count');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon" style="font-size: 2.5rem; margin-bottom: 8px;">\u2764\uFE0F</div>
        <h4 style="color: #fff; margin-bottom: 6px;">No favorites saved</h4>
        <p style="font-size: 0.88rem;">Click the heart icon on any product card to save items.</p>
      </div>
    `;
    if (countEl) countEl.textContent = '0';
    return;
  }

  container.innerHTML = wishlist.map((pid, idx) => {
    const p = PRODUCTS_DATA[pid];
    if (!p) return '';
    return `
      <div class="drawer-item">
        <img src="${p.image}" alt="${p.name}" class="drawer-item-img" />
        <div class="drawer-item-info">
          <div class="drawer-item-title">${p.name}</div>
          <div class="drawer-item-price">\u20B1${p.price.toLocaleString()}</div>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <button class="btn btn-primary btn-sm glow-blue" onclick="addToCart('${p.id}'); closeWishlist();">
              Add to Cart
            </button>
            <button class="item-delete-btn" onclick="toggleHeart(null, '${p.id}'); renderWishlistDrawer();">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (countEl) countEl.textContent = wishlist.length;
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-count');
  if (badge) badge.textContent = wishlist.length;

  document.querySelectorAll('.wishlist-toggle').forEach(btn => {
    const card = btn.closest('.product-card');
    if (card) {
      const pid = card.getAttribute('data-id');
      if (wishlist.includes(pid)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

/* ==========================================================================
   AUTHENTICATION LOGIC (With Demo Account Support)
   ========================================================================== */
function openAuthModal(tab = 'login') {
  switchAuthTab(tab);
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.add('active');
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('active');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('active');
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop && !isAnyDrawerOpen()) backdrop.classList.remove('active');
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginBtn = document.getElementById('tab-login-btn');
  const signupBtn = document.getElementById('tab-signup-btn');

  if (tab === 'login') {
    if (loginForm) loginForm.style.display = 'block';
    if (signupForm) signupForm.style.display = 'none';
    if (loginBtn) loginBtn.classList.add('active');
    if (signupBtn) signupBtn.classList.remove('active');
  } else {
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'block';
    if (loginBtn) loginBtn.classList.remove('active');
    if (signupBtn) signupBtn.classList.add('active');
  }
}

function fillDemoCredentials() {
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-pass');
  if (emailInput) emailInput.value = 'TechHub';
  if (passInput) passInput.value = 'group4overflow';
  showToast('Demo credentials filled!');
}

function handleAuthSubmit(e, type) {
  e.preventDefault();

  // Safe init of users array
  let users = [];
  try {
    users = JSON.parse(localStorage.getItem('techhub_users')) || [];
  } catch (err) {
    users = [];
  }

  if (type === 'login') {
    const userOrEmail = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-pass').value.trim();

    // Check demo credentials
    if ((userOrEmail === 'TechHub' || userOrEmail.toLowerCase() === 'techhub@group4.ph') && pass === 'group4overflow') {
      currentUser = { name: 'TechHub Member', email: 'user@techhub.ph', role: 'Verified Buyer' };
      localStorage.setItem('techhub_user', JSON.stringify(currentUser));
      checkAuthUI();
      closeAuthModal();
      showToast('Welcome back, TechHub Member!', 'success');
      return;
    }

    // Check registered users
    const foundUser = users.find(u => (u.email === userOrEmail || u.name === userOrEmail) && u.password === pass);
    if (foundUser) {
      currentUser = { name: foundUser.name, email: foundUser.email, role: 'Customer' };
      localStorage.setItem('techhub_user', JSON.stringify(currentUser));
      checkAuthUI();
      closeAuthModal();
      showToast(`Welcome back, ${foundUser.name}!`, 'success');
    } else {
      showToast('Invalid email/username or password.', 'error');
    }
  } else {
    // Signup Logic
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const pass = document.getElementById('signup-pass').value.trim();
    const confirmPass = document.getElementById('signup-confirm-pass').value.trim();

    if (!name || !email || !pass || !confirmPass) {
      showToast('Please fill out all fields.', 'error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    if (pass.length < 8) {
      showToast('Password must be at least 8 characters long.', 'error');
      return;
    }

    if (pass !== confirmPass) {
      showToast('Passwords do not match.', 'error');
      return;
    }

    // Check if user exists
    if (users.find(u => u.email === email)) {
      showToast('An account with this email already exists.', 'error');
      return;
    }

    // Save new user
    users.push({ name, email, password: pass }); // Client-side simulation
    localStorage.setItem('techhub_users', JSON.stringify(users));

    // Auto login
    currentUser = { name, email, role: 'Customer' };
    localStorage.setItem('techhub_user', JSON.stringify(currentUser));
    checkAuthUI();
    closeAuthModal();
    showToast(`Account created! Welcome, ${name}!`, 'success');
  }
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('techhub_user');
  checkAuthUI();
  showToast('You have been signed out.', 'info');
}

function checkAuthUI() {
  const authWrap = document.getElementById('user-auth-area');
  const mobileAuthWrap = document.getElementById('mobile-user-auth-area');

  // Verify state
  try {
    currentUser = JSON.parse(localStorage.getItem('techhub_user'));
  } catch (e) {
    currentUser = null;
  }

  if (currentUser) {
    const desktopHtml = `
      <div class="user-profile-dropdown" style="position: relative;">
        <button class="action-btn" onclick="this.nextElementSibling.classList.toggle('active')" style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; background: var(--accent-blue, #3b82f6); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #fff;">
            ${currentUser.name.charAt(0).toUpperCase()}
          </div>
        </button>
        <div class="dropdown-menu" style="display: none; position: absolute; right: 0; top: 100%; background: #1e1e2f; border: 1px solid #333; border-radius: 8px; padding: 10px; min-width: 150px; z-index: 100;">
          <div style="padding: 8px; border-bottom: 1px solid #333; margin-bottom: 8px;">
            <strong style="color: #fff; display: block;">${currentUser.name}</strong>
          </div>
          <a href="#" onclick="openOrdersModal(); return false;" style="display: block; padding: 8px; color: #cbd5e1; text-decoration: none;">📦 My Orders</a>
          <a href="#" onclick="handleLogout(); return false;" style="display: block; padding: 8px; color: #ef4444; text-decoration: none;">🚪 Logout</a>
        </div>
      </div>
    `;
    const mobileHtml = `
      <div style="padding: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
        <strong style="color:#fff;">Hi, ${currentUser.name}</strong><br><br>
        <button class="btn btn-outline btn-block" onclick="openOrdersModal(); return false;" style="margin-bottom:10px;">My Orders</button>
        <button class="btn btn-outline btn-block" onclick="handleLogout()" style="color: #ef4444; border-color: #ef4444;">Logout</button>
      </div>
    `;

    if (authWrap) authWrap.innerHTML = desktopHtml;
    if (mobileAuthWrap) mobileAuthWrap.innerHTML = mobileHtml;
  } else {
    const desktopHtml = `
      <button class="btn btn-outline btn-sm glow-blue" id="login-nav-btn" onclick="openAuthModal('login')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Sign In</span>
      </button>
    `;
    const mobileHtml = `<button class="btn btn-primary btn-block" onclick="openAuthModal('login')">Sign In / Register</button>`;

    if (authWrap) authWrap.innerHTML = desktopHtml;
    if (mobileAuthWrap) mobileAuthWrap.innerHTML = mobileHtml;
  }

  // Setup click outside for dropdown
  document.querySelectorAll('.user-profile-dropdown button').forEach(btn => {
    btn.onclick = function (e) {
      e.stopPropagation();
      const menu = this.nextElementSibling;
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
    };
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-profile-dropdown')) {
      document.querySelectorAll('.user-profile-dropdown .dropdown-menu').forEach(menu => menu.style.display = 'none');
    }
  });
}

/* ==========================================================================
   SEARCH AUTOCOMPLETE
   ========================================================================== */
function initSearchAutocomplete() {
  const searchBtn = document.getElementById('search-btn');
  if (!searchBtn) return;

  // Create the search overlay bar (hidden by default)
  const overlay = document.createElement('div');
  overlay.id = 'search-overlay';
  overlay.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9998;backdrop-filter:blur(4px);';

  const bar = document.createElement('div');
  bar.id = 'search-bar';
  bar.style.cssText = 'position:fixed;top:0;left:0;width:100%;z-index:9999;background:#1a1a2e;border-bottom:2px solid rgba(59,130,246,0.5);padding:16px 0;display:none;box-shadow:0 4px 20px rgba(0,0,0,0.5);';

  const container = document.createElement('div');
  container.style.cssText = 'max-width:900px;margin:0 auto;padding:0 20px;position:relative;';

  const inputWrap = document.createElement('div');
  inputWrap.style.cssText = 'display:flex;align-items:center;background:#0f0f23;border:1px solid rgba(59,130,246,0.4);border-radius:12px;padding:10px 16px;gap:10px;';

  const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('width', '20');
  svgIcon.setAttribute('height', '20');
  svgIcon.setAttribute('fill', 'none');
  svgIcon.setAttribute('stroke', '#888');
  svgIcon.setAttribute('stroke-width', '2');
  svgIcon.setAttribute('viewBox', '0 0 24 24');
  svgIcon.innerHTML = '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>';
  svgIcon.style.cssText = 'flex-shrink:0;';

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'global-search-input';
  input.placeholder = 'Search products by name, brand, or category...';
  input.style.cssText = 'flex:1;background:transparent;border:none;outline:none;color:#fff;font-size:1rem;font-family:inherit;';
  input.autocomplete = 'off';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = 'background:none;border:none;color:#888;font-size:1.4rem;cursor:pointer;padding:0 4px;line-height:1;';
  closeBtn.title = 'Close search';

  inputWrap.appendChild(svgIcon);
  inputWrap.appendChild(input);
  inputWrap.appendChild(closeBtn);
  container.appendChild(inputWrap);

  const dropdown = document.createElement('div');
  dropdown.id = 'search-dropdown';
  dropdown.style.cssText = 'display:none;background:#1a1a2e;border:1px solid rgba(59,130,246,0.3);border-top:none;border-radius:0 0 12px 12px;max-height:400px;overflow-y:auto;';
  container.appendChild(dropdown);

  bar.appendChild(container);
  document.body.appendChild(overlay);
  document.body.appendChild(bar);

  function openSearch() {
    bar.style.display = 'block';
    overlay.style.display = 'block';
    input.value = '';
    dropdown.style.display = 'none';
    dropdown.innerHTML = '';
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    bar.style.display = 'none';
    overlay.style.display = 'none';
    input.value = '';
    dropdown.style.display = 'none';
    dropdown.innerHTML = '';
  }

  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (bar.style.display === 'block') {
      closeSearch();
    } else {
      openSearch();
    }
  });

  closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bar.style.display === 'block') {
      closeSearch();
    }
  });

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    if (query.length < 2) {
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
      return;
    }

    const matches = Object.values(PRODUCTS_DATA).filter(p => {
      return p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.specs && p.specs.some(s => s.toLowerCase().includes(query)));
    }).slice(0, 8);

    if (matches.length === 0) {
      dropdown.innerHTML = '<div style="padding:16px 20px;color:#888;text-align:center;font-size:0.9rem;">No results found for "' + input.value + '"</div>';
      dropdown.style.display = 'block';
      return;
    }

    dropdown.innerHTML = matches.map(m => {
      const discountedPrice = m.discount ? Math.round(m.price * (1 - m.discount / 100)) : m.price;
      return `<div class="search-result-item" data-pid="${m.id}" style="display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.05);transition:background 0.15s;" onmouseover="this.style.background='rgba(59,130,246,0.1)'" onmouseout="this.style.background='transparent'">
        <img src="${m.image}" alt="${m.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;background:#0f0f23;" />
        <div style="flex:1;min-width:0;">
          <div style="color:#fff;font-size:0.9rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m.name}</div>
          <div style="color:#888;font-size:0.8rem;margin-top:2px;">${m.brand} &bull; <strong style="color:#3b82f6;">&#8369;${discountedPrice.toLocaleString()}</strong></div>
        </div>
      </div>`;
    }).join('');

    dropdown.style.display = 'block';

    // Bind click on each result
    dropdown.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const pid = item.getAttribute('data-pid');
        closeSearch();
        openProductModal(pid);
      });
    });
  });
}

/* ==========================================================================
   NAVIGATION & DRAWER CONTROLS
   ========================================================================== */
function initGlobalNavigation() {
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.onclick = () => openCart();

  const wishlistBtn = document.getElementById('wishlist-btn');
  if (wishlistBtn) wishlistBtn.onclick = () => openWishlist();

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.onclick = () => {
      mobileDrawer.classList.toggle('open');
    };
  }
  // Close mobile drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('open')) {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    }
  });
}

function closeAllModalsAndDrawers() {
  closeProductModal();
  closeCart();
  closeWishlist();
  closeAuthModal();
}

function isAnyDrawerOpen() {
  const cartDrawer = document.getElementById('cart-drawer');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  return (cartDrawer && cartDrawer.classList.contains('open')) ||
    (wishlistDrawer && wishlistDrawer.classList.contains('open'));
}

function isAnyOtherModalOpen() {
  const pModal = document.getElementById('product-modal');
  const aModal = document.getElementById('auth-modal');
  return (pModal && pModal.classList.contains('active')) ||
    (aModal && aModal.classList.contains('active'));
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
let toastTimeout = null;
function showToast(message, type = 'success', duration = 4000) {
  // Max 4 toasts visible at once — remove oldest if exceeded
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = [
      'position:fixed', 'top:20px', 'right:20px', 'z-index:99999',
      'display:flex', 'flex-direction:column', 'gap:10px', 'pointer-events:none',
      'max-width:420px', 'width:calc(100% - 40px)'
    ].join(';');
    document.body.appendChild(container);
  }

  // Stack limit
  while (container.children.length >= 4) {
    const oldest = container.firstElementChild;
    oldest.style.opacity = '0';
    oldest.style.transform = 'translateX(120%)';
    setTimeout(() => oldest.remove(), 280);
    break;
  }

  const icons = { success: '&#10003;', error: '&#10007;', warning: '&#9888;', info: '&#8505;' };
  const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
  const c = colors[type] || colors.info;

  const toast = document.createElement('div');
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.style.cssText = [
    'background:#1a1a2e',
    `border-left:4px solid ${c}`,
    'color:#fff',
    'padding:14px 16px 10px',
    'border-radius:8px',
    `box-shadow:0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)`,
    'display:flex', 'align-items:flex-start', 'gap:12px',
    'min-width:260px', 'max-width:420px', 'width:100%',
    'position:relative', 'overflow:hidden',
    'transform:translateX(120%)',
    'transition:transform 0.32s cubic-bezier(0.175,0.885,0.32,1.275), opacity 0.25s ease',
    'pointer-events:auto'
  ].join(';');

  // Dismiss
  function dismiss() {
    toast.style.transform = 'translateX(120%)';
    toast.style.opacity = '0';
    clearInterval(progressTimer);
    setTimeout(() => toast.remove(), 320);
  }

  // Build toast DOM safely with textContent to avoid XSS
  const iconEl = document.createElement('div');
  iconEl.style.cssText = `font-size:1.15rem;color:${c};flex-shrink:0;padding-top:1px;`;
  iconEl.innerHTML = icons[type] || icons.info; // safe — only HTML entity codes
  const msgEl = document.createElement('div');
  msgEl.style.cssText = 'flex:1;font-size:0.88rem;line-height:1.5;padding-right:4px;';
  msgEl.textContent = message; // textContent: safe against XSS
  const closeBtn = document.createElement('button');
  closeBtn.style.cssText = 'background:none;border:none;color:#64748b;cursor:pointer;font-size:1.3rem;line-height:1;padding:0;flex-shrink:0;';
  closeBtn.setAttribute('aria-label', 'Dismiss');
  closeBtn.innerHTML = '&times;';
  const progressBar = document.createElement('div');
  progressBar.className = 'toast-progress';
  progressBar.style.cssText = `position:absolute;bottom:0;left:0;height:3px;background:${c};opacity:0.7;width:100%;transform-origin:left;transition:transform linear;`;
  toast.append(iconEl, msgEl, closeBtn, progressBar);

  closeBtn.addEventListener('click', dismiss);

  // Pause progress on hover
  toast.addEventListener('mouseenter', () => { if (progressBar) progressBar.style.animationPlayState = 'paused'; clearInterval(progressTimer); });
  toast.addEventListener('mouseleave', () => { progressTimer = setTimeout(dismiss, 800); });
  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });
  });

  // Progress bar countdown
  const progressEl = toast.querySelector('.toast-progress');
  const startTime = Date.now();
  let progressTimer;
  if (progressEl) {
    progressEl.style.transition = `transform ${duration}ms linear`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { progressEl.style.transform = 'scaleX(0)'; });
    });
    progressTimer = setTimeout(dismiss, duration);
  } else {
    progressTimer = setTimeout(dismiss, duration);
  }
}

// ==========================================
// MODAL & DRAWER EVENT LISTENERS
// ==========================================

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  // Close all overlay layers in priority order (topmost first)
  const toClose = [
    'confirm-receive-overlay',
    'receipt-overlay-wrap',
    'order-success-overlay',
    'orders-modal-overlay'
  ];

  for (const id of toClose) {
    const el = document.getElementById(id);
    if (el) { el.remove(); return; } // Close one layer per Esc press
  }

  // Lower priority closables
  if (document.getElementById('product-modal') && document.getElementById('product-modal').style.display !== 'none') {
    document.getElementById('product-modal').style.display = 'none';
    return;
  }
  if (typeof closeCart === 'function') closeCart();
  if (typeof closeAuthModal === 'function') closeAuthModal();
  if (typeof toggleMobileMenu === 'function') {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer && drawer.classList.contains('open')) { toggleMobileMenu(); }
  }
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('auth-modal') || e.target.classList.contains('modal-backdrop')) {
    if (typeof closeAuthModal === 'function') closeAuthModal();
    if (typeof closeOrdersModal === 'function') closeOrdersModal();
    if (document.getElementById('product-modal')) document.getElementById('product-modal').style.display = 'none';
  }
  if (e.target.id === 'cart-backdrop' && typeof closeCart === 'function') {
    closeCart();
  }
});

/* ==========================================================================
   GLOBAL PRODUCT IMAGE ERROR FALLBACK & PLACEHOLDER ENGINE
   ========================================================================== */
window.createProductPlaceholderSvg = function(title = 'Product', brand = 'TechHub') {
  const safeTitle = escapeHtml(title || 'Product');
  const safeBrand = escapeHtml(brand || 'TechHub');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="cardGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0b0f19"/>
      </radialGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#22d3ee"/>
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#cardGrad)"/>
    <g transform="translate(160, 120)" stroke="url(#accentGrad)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <rect x="0" y="0" width="80" height="96" rx="10"/>
      <path d="M24 32h32M24 48h20M40 76v2"/>
    </g>
    <text x="200" y="255" text-anchor="middle" fill="#60a5fa" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" letter-spacing="2">${safeBrand.toUpperCase()}</text>
    <text x="200" y="285" text-anchor="middle" fill="#f8fafc" font-family="'Outfit', sans-serif" font-weight="600" font-size="16">${safeTitle}</text>
    <text x="200" y="312" text-anchor="middle" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="12">PREVIEW CURRENTLY UNAVAILABLE</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

// Global capture-phase error listener for image loading failures
document.addEventListener('error', function(e) {
  if (e.target && e.target.tagName === 'IMG') {
    const img = e.target;
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    const alt = img.getAttribute('alt') || 'TechHub Product';
    const card = img.closest('.product-card');
    let brand = 'TechHub';
    if (card) {
      const brandEl = card.querySelector('.product-brand');
      if (brandEl) brand = brandEl.textContent.trim();
    }
    img.src = window.createProductPlaceholderSvg(alt, brand);
  }
}, true);

// Initialize placeholders for empty image sources upon DOM ready
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card-thumb img, .product-thumb img').forEach(function(img) {
    const src = img.getAttribute('src');
    if (!src || src.trim() === '') {
      img.dataset.fallbackApplied = 'true';
      const alt = img.getAttribute('alt') || 'TechHub Product';
      const card = img.closest('.product-card');
      let brand = 'TechHub';
      if (card) {
        const brandEl = card.querySelector('.product-brand');
        if (brandEl) brand = brandEl.textContent.trim();
      }
      img.src = window.createProductPlaceholderSvg(alt, brand);
    }
  });
});

