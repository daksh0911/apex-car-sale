/**
 * ============================================================================
 * APEX SUPERCAR & HYPERCAR DIRECT SALES PLATFORM — 2026 ENGINE
 * ============================================================================
 * Features:
 * 1. Pinned Vertical Immersive Scroll Theater (Acts 0 to 3 driven by ScrollTrigger)
 * 2. 100% Accurate Verified Vehicle Photography (16:9 framed, no misfitting)
 * 3. Real Working Color Configurator (swaps identical-angle real car photos in 8 colors)
 * 4. Interior & Cockpit Craftsmanship with Ambient Lighting Controls
 * 5. Direct Sales Purchasing Packages & Purchase Order Flow
 * 6. Head-to-Head Model Comparison Arena
 * 7. OriginKit 3D Coverflow Inventory Vault
 * 8. Lenis Smooth Inertia Scroll (Zero sound/voice dependencies)
 */

// ----------------------------------------------------------------------------
// 1. HYPERCAR INVENTORY (ACCURATE CHASSIS SPECS & 16:9 VERIFIED PHOTOGRAPHY)
// ----------------------------------------------------------------------------
const HYPERCARS = [
  {
    id: 'bugatti_chiron',
    marque: 'Bugatti',
    model: 'Chiron Pur Sport',
    powertrain: 'combustion',
    engine: '8.0L Quad-Turbo W16',
    output: 1500,
    unit: 'HP',
    accel: 2.3,
    topSpeed: 350,
    price: '$3,800,000',
    priceUsd: 3800000,
    image: 'bugatti_chiron_blue.jpg',
    tag: 'W16 Quad-Turbo &bull; Molsheim',
    desc: 'The benchmark of modern mechanical engineering. 64 valves, four titanium turbochargers, and 1,600 Nm of torque delivered to all four wheels.'
  },
  {
    id: 'taycan_gt',
    marque: 'Porsche',
    model: 'Taycan Turbo GT',
    powertrain: 'electric',
    engine: 'Dual Permanent-Magnet Motors',
    output: 1092,
    unit: 'HP',
    accel: 2.1,
    topSpeed: 305,
    price: '$230,000',
    priceUsd: 230000,
    image: 'taycan_gt_blue.jpg',
    tag: 'Dual-Motor Electric GT &bull; Weissach',
    desc: 'The most powerful series-production Porsche ever built. 800V silicon-carbide inverters deliver 1,092 HP overboost with 2.1s acceleration.'
  },
  {
    id: 'ferrari_sf90',
    marque: 'Ferrari',
    model: 'SF90 Stradale',
    powertrain: 'hybrid',
    engine: '4.0L Twin-Turbo V8 + 3 E-Motors',
    output: 1000,
    unit: 'HP',
    accel: 2.5,
    topSpeed: 340,
    price: '$528,000',
    priceUsd: 528000,
    image: 'ferrari_sf90_red.jpg',
    tag: 'Twin-Turbo V8 Hybrid &bull; Maranello',
    desc: 'Maranello’s plug-in hybrid masterpiece. 780 HP twin-turbo internal combustion V8 paired with three electric motors generating 1,000 total HP.'
  },
  {
    id: 'porsche_911_gt3',
    marque: 'Porsche',
    model: '911 GT3 (992)',
    powertrain: 'combustion',
    engine: '4.0L Naturally Aspirated Boxer-6',
    output: 510,
    unit: 'HP',
    accel: 3.4,
    topSpeed: 318,
    price: '$182,900',
    priceUsd: 182900,
    image: 'paint_yellow.jpg',
    tag: '4.0L Atmospheric Flat-6 &bull; Flacht',
    desc: 'Pure motorsport engineering. Double-wishbone front axle, swan-neck rear wing, and a naturally aspirated 4.0L boxer engine singing to 9,000 RPM.'
  },
  {
    id: 'lambo_revuelto',
    marque: 'Lamborghini',
    model: 'Revuelto',
    powertrain: 'hybrid',
    engine: '6.5L Naturally Aspirated V12 + 3 E-Motors',
    output: 1015,
    unit: 'HP',
    accel: 2.5,
    topSpeed: 350,
    price: '$608,000',
    priceUsd: 608000,
    image: 'lambo_revuelto_green.jpg',
    tag: '6.5L Atmospheric V12 &bull; Sant\'Agata',
    desc: 'Sant’Agata Bolognese’s High Performance Electrified Vehicle (HPEV). Naturally aspirated 6.5L V12 screaming to 9,500 RPM with three axial flux electric motors.'
  },
  {
    id: 'aston_valkyrie',
    marque: 'Aston Martin',
    model: 'Valkyrie',
    powertrain: 'hybrid',
    engine: '6.5L Cosworth Naturally Aspirated V12',
    output: 1160,
    unit: 'HP',
    accel: 2.5,
    topSpeed: 355,
    price: '$3,500,000',
    priceUsd: 3000000,
    image: 'aston_valkyrie_green.jpg',
    tag: 'Cosworth 6.5L V12 &bull; Gaydon',
    desc: 'Formula 1 technology on the public road. 1,000 HP pure atmospheric Cosworth V12 revving to 11,100 RPM coupled with 160 HP Rimac KERS battery hybrid boost.'
  },
  {
    id: 'mclaren_p1',
    marque: 'McLaren',
    model: 'P1 Hypercar',
    powertrain: 'hybrid',
    engine: '3.8L Twin-Turbo V8 + E-Motor',
    output: 916,
    unit: 'HP',
    accel: 2.8,
    topSpeed: 350,
    price: '$1,350,000',
    priceUsd: 1350000,
    image: 'mclaren_p1_orange.jpg',
    tag: 'MonoCage V8 Hybrid &bull; Woking',
    desc: 'The original hybrid hypercar pioneer. Instant Power Assist System (IPAS), Formula 1 Drag Reduction System (DRS), and MonoCage full carbon tub.'
  },
  {
    id: 'ferrari_daytona',
    marque: 'Ferrari',
    model: 'Daytona SP3',
    powertrain: 'combustion',
    engine: '6.5L Mid-Rear Naturally Aspirated V12',
    output: 840,
    unit: 'HP',
    accel: 2.85,
    topSpeed: 340,
    price: '$2,250,000',
    priceUsd: 2250000,
    image: 'ferrari_daytona_red.jpg',
    tag: 'Icona Series 6.5L V12 &bull; Maranello',
    desc: 'Pure mechanical romance. Tribute to the 1967 24 Hours of Daytona. Titanium connecting rods, 9,500 RPM naturally aspirated V12 acoustic howl.'
  }
];

// ----------------------------------------------------------------------------
// 2. MULTI-CAR COLOR & BESPOKE INTERIOR REGISTRY (ALL 8 SUPERCARS)
// ----------------------------------------------------------------------------
const MARQUE_COLOR_REGISTRY = {
  porsche_911_gt3: {
    name: 'Porsche 911 GT3 (992)',
    marque: 'Porsche',
    baseImg: 'paint_yellow.jpg',
    cockpitImg: 'cockpit_porsche_911_gt3.jpg',
    interiorName: 'Flacht Clubsport Race-Tex & Carbon Architecture',
    interiorSpecs: [
      { num: '01', title: 'Carbon Bucket Shells', desc: 'Full CFRP lightweight bucket seats with integral thorax airbags and 6-point harness pass-throughs.' },
      { num: '02', title: 'Flacht GT3 Wheel', desc: 'Alcantara-wrapped steering wheel with yellow 12 o\'clock marker, rotary drive mode switch, and tactile PDK paddles.' },
      { num: '03', title: 'Analogue Tachometer', desc: 'Central analogue tachometer singing to 9,000 RPM flanked by dual high-resolution 7-inch track displays.' },
      { num: '04', title: 'Clubsport Roll Cage', desc: 'Bolted titanium rear roll cage with certified motorsport fire suppression brackets and lightweight door pulls.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'paint_yellow.jpg', name: 'Speed Yellow Metallic', code: 'PAINT // POR-1S1', tint: '#facc15' },
      red: { img: 'paint_red.jpg', name: 'Guards Red Racing Spec', code: 'PAINT // POR-G1', tint: '#dc2626' },
      blue: { img: 'paint_blue.jpg', name: 'Shark Blue Heritage', code: 'PAINT // POR-D5C', tint: '#0284c7' },
      green: { img: 'paint_green.jpg', name: 'Python Green Motorsport', code: 'PAINT // POR-3I', tint: '#16a34a' },
      silver: { img: 'paint_silver.jpg', name: 'GT Liquid Silver Metallic', code: 'PAINT // POR-M7Z', tint: '#94a3b8' },
      black: { img: 'paint_black.jpg', name: 'Nero Stealth Black Satin', code: 'PAINT // POR-904', tint: '#18181b' },
      orange: { img: 'paint_orange.jpg', name: 'Signal Orange Classic', code: 'PAINT // POR-018', tint: '#ea580c' },
      white: { img: 'paint_white.jpg', name: 'Chalk White Titanium', code: 'PAINT // POR-3H', tint: '#f8fafc' }
    }
  },
  bugatti_chiron: {
    name: 'Bugatti Chiron Pur Sport',
    marque: 'Bugatti',
    baseImg: 'bugatti_chiron_blue.jpg',
    cockpitImg: 'cockpit_bugatti_chiron.jpg',
    interiorName: 'Molsheim C-Line Semi-Aniline & Titanium Cockpit',
    interiorSpecs: [
      { num: '01', title: 'Monolithic Titanium Stack', desc: 'Independent center binnacle milled from a single solid block of aerospace aluminum with 4 tactile dials.' },
      { num: '02', title: 'Architectural C-Spine', desc: 'Continuous LED-illuminated parabolic titanium C-curve dividing the cockpit into driver and passenger hemispheres.' },
      { num: '03', title: 'Semi-Aniline Leather', desc: 'French-tanned leather and bespoke quilting with Pur Sport embroidery across headrests and carbon tub sill.' },
      { num: '04', title: 'Accuton Diamond Audio', desc: 'Four 1-carat diamond membrane tweeters producing crystal-clear high fidelity acoustics up to 400 km/h.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'bugatti_chiron_yellow.jpg', name: 'Jaune Molsheim Pur Sport', code: 'PAINT // BUG-Y16', tint: '#facc15' },
      red: { img: 'bugatti_chiron_red.jpg', name: 'Italian Racing Red Spec', code: 'PAINT // BUG-R08', tint: '#dc2626' },
      blue: { img: 'bugatti_chiron_blue.jpg', name: 'Bleu de France Racing Atelier', code: 'PAINT // BUG-EB01', tint: '#0284c7' },
      green: { img: 'bugatti_chiron_green.jpg', name: 'Viper Grand Prix Green', code: 'PAINT // BUG-G12', tint: '#16a34a' },
      silver: { img: 'bugatti_chiron_silver.jpg', name: 'Sprint Liquid Silver Metal', code: 'PAINT // BUG-S70', tint: '#94a3b8' },
      black: { img: 'bugatti_chiron_black.jpg', name: 'Nocturne Deep Carbon Black', code: 'PAINT // BUG-N01', tint: '#0a0a0c' },
      orange: { img: 'bugatti_chiron_orange.jpg', name: 'Tangerine Pearl Atelier', code: 'PAINT // BUG-O24', tint: '#ea580c' },
      white: { img: 'bugatti_chiron_white.jpg', name: 'Glacier White Monocoque', code: 'PAINT // BUG-W02', tint: '#f8fafc' }
    }
  },
  taycan_gt: {
    name: 'Porsche Taycan Turbo GT',
    marque: 'Porsche',
    baseImg: 'taycan_gt_blue.jpg',
    cockpitImg: 'cockpit_taycan_gt.jpg',
    interiorName: 'Weissach Lightweight Race-Tex & Carbon Architecture',
    interiorSpecs: [
      { num: '01', title: 'Weissach Carbon Buckets', desc: 'CFRP lightweight bucket seats saving 21 kg with Turbo GT embossed crests and GT silver cross-stitching.' },
      { num: '02', title: 'Race-Tex GT Wheel', desc: 'Race-Tex steering wheel with Attack Mode push-to-pass paddle switch delivering instant 120 kW electric burst.' },
      { num: '03', title: '16.8" Curved OLED', desc: 'Curved digital instrument cluster with vapor-deposited anti-reflective coating and specialized Weissach telemetry.' },
      { num: '04', title: 'Acoustic Weight Relief', desc: 'Lightweight sound-insulating glazing with rear seat omission package and specialized structural carbon bracing.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'taycan_gt_yellow.jpg', name: 'Speed Yellow Weissach Spec', code: 'PAINT // POR-1S1', tint: '#facc15' },
      red: { img: 'taycan_gt_red.jpg', name: 'Carmine Red Racing GT', code: 'PAINT // POR-0L', tint: '#dc2626' },
      blue: { img: 'taycan_gt_blue.jpg', name: 'Voltage Gentian Blue Metallic', code: 'PAINT // POR-1A', tint: '#0284c7' },
      green: { img: 'taycan_gt_green.jpg', name: 'Mamba Green Metallic', code: 'PAINT // POR-M6', tint: '#16a34a' },
      silver: { img: 'taycan_gt_silver.jpg', name: 'Dolomite Silver Metallic', code: 'PAINT // POR-F0', tint: '#94a3b8' },
      black: { img: 'taycan_gt_black.jpg', name: 'Jet Black Metallic', code: 'PAINT // POR-2T', tint: '#0a0a0c' },
      orange: { img: 'taycan_gt_orange.jpg', name: 'Acid Orange Heritage', code: 'PAINT // POR-O9', tint: '#ea580c' },
      white: { img: 'taycan_gt_white.jpg', name: 'Carrara White Metallic', code: 'PAINT // POR-2Y', tint: '#f8fafc' }
    }
  },
  ferrari_sf90: {
    name: 'Ferrari SF90 Stradale',
    marque: 'Ferrari',
    baseImg: 'ferrari_sf90_red.jpg',
    cockpitImg: 'cockpit_ferrari_sf90.jpg',
    interiorName: 'Scuderia HMI Digital Cockpit & Gated Shift Bridge',
    interiorSpecs: [
      { num: '01', title: 'Scuderia Monocoque Seats', desc: 'Carbon racing shells in Nero leather with Rosso Corsa contrast accents and Cavallino stitched headrests.' },
      { num: '02', title: 'F1 LED Steering Wheel', desc: 'Formula 1 derived steering wheel with upper LED shift lights, Manettino dial, and capacitive HMI touchpads.' },
      { num: '03', title: '16" Curved HD Cluster', desc: 'Fully digital curved instrument screen presenting central 3D tachometer, hybrid battery state, and nav.' },
      { num: '04', title: 'Gated Metal Shift Bridge', desc: 'Sculpted metal center console paying homage to Ferrari\'s iconic manual open-gate gear selectors.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'ferrari_sf90_yellow.jpg', name: 'Giallo Modena Triplo Strato', code: 'PAINT // FER-102', tint: '#facc15' },
      red: { img: 'ferrari_sf90_red.jpg', name: 'Rosso Corsa Scuderia', code: 'PAINT // FER-322', tint: '#dc2626' },
      blue: { img: 'ferrari_sf90_blue.jpg', name: 'Blu Tour de France', code: 'PAINT // FER-522', tint: '#0284c7' },
      green: { img: 'ferrari_sf90_green.jpg', name: 'Verde British Racing', code: 'PAINT // FER-611', tint: '#16a34a' },
      silver: { img: 'ferrari_sf90_silver.jpg', name: 'Argento Nürburgring', code: 'PAINT // FER-101', tint: '#94a3b8' },
      black: { img: 'ferrari_sf90_black.jpg', name: 'Nero Daytona Metallizzato', code: 'PAINT // FER-901', tint: '#0a0a0c' },
      orange: { img: 'ferrari_sf90_orange.jpg', name: 'Rosso Dino Tribute', code: 'PAINT // FER-311', tint: '#ea580c' },
      white: { img: 'ferrari_sf90_white.jpg', name: 'Bianco Avus Pure White', code: 'PAINT // FER-100', tint: '#f8fafc' }
    }
  },
  lambo_revuelto: {
    name: 'Lamborghini Revuelto',
    marque: 'Lamborghini',
    baseImg: 'lambo_revuelto_green.jpg',
    cockpitImg: 'cockpit_lambo_revuelto.jpg',
    interiorName: 'Sant’Agata Y-Design Monofuselage Cockpit',
    interiorSpecs: [
      { num: '01', title: 'Corsa Carbon Shells', desc: 'Super-sport carbon shell seats upholstered in micro-perforated microfiber with Arancio geometric Y-stitching.' },
      { num: '02', title: 'Fighter Jet Flip Starter', desc: 'Aviation-style center console with red safety flip-cover protecting the missile-style engine start button.' },
      { num: '03', title: 'Triple Display Architecture', desc: '12.3-inch driver instrument cluster, 8.4-inch vertical central screen, and dedicated 9.1-inch passenger display.' },
      { num: '04', title: 'Forged Composite Vents', desc: 'Hexagonal carbon air conditioning vents integrated directly into the aeronautical sculpted dashboard.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'lambo_revuelto_yellow.jpg', name: 'Giallo Belenus Pearl', code: 'PAINT // LAM-0058', tint: '#facc15' },
      red: { img: 'lambo_revuelto_red.jpg', name: 'Rosso Mars Competizione', code: 'PAINT // LAM-0084', tint: '#dc2626' },
      blue: { img: 'lambo_revuelto_blue.jpg', name: 'Blu Cepheus Dynamic', code: 'PAINT // LAM-0062', tint: '#0284c7' },
      green: { img: 'lambo_revuelto_green.jpg', name: 'Verde Mantis Pearl Effect', code: 'PAINT // LAM-0077', tint: '#16a34a' },
      silver: { img: 'lambo_revuelto_silver.jpg', name: 'Grigio Telesto Technical', code: 'PAINT // LAM-0098', tint: '#94a3b8' },
      black: { img: 'lambo_revuelto_black.jpg', name: 'Nero Nemesis Satin Matt', code: 'PAINT // LAM-0049', tint: '#0a0a0c' },
      orange: { img: 'lambo_revuelto_orange.jpg', name: 'Arancio Borealis 3-Coat', code: 'PAINT // LAM-0105', tint: '#ea580c' },
      white: { img: 'lambo_revuelto_white.jpg', name: 'Bianco Monocerus Solid', code: 'PAINT // LAM-0051', tint: '#f8fafc' }
    }
  },
  aston_valkyrie: {
    name: 'Aston Martin Valkyrie',
    marque: 'Aston Martin',
    baseImg: 'aston_valkyrie_green.jpg',
    cockpitImg: 'cockpit_aston_valkyrie.jpg',
    interiorName: 'Gaydon Formula 1 Feet-Up Recumbent Monocoque',
    interiorSpecs: [
      { num: '01', title: 'Recumbent F1 Seating', desc: 'Body-molded padding bonded directly to the carbon tub in authentic Formula 1 feet-up racing posture.' },
      { num: '02', title: 'Detachable F1 Wheel', desc: 'Removable carbon-fiber yoke steering wheel with integrated central OLED display and switchable engine maps.' },
      { num: '03', title: 'Dual A-Pillar Displays', desc: 'Internal digital camera displays mounted on A-pillars replacing external wing mirrors to eliminate aero drag.' },
      { num: '04', title: '6-Point Motorsport Harness', desc: 'FIA-spec Willans 6-point safety harness with central rotary camlock anchor bolted to carbon monocoque.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'aston_valkyrie_yellow.jpg', name: 'Sunburst Yellow AMR', code: 'PAINT // AST-Y02', tint: '#facc15' },
      red: { img: 'aston_valkyrie_red.jpg', name: 'Hyper Red Q-Division', code: 'PAINT // AST-R03', tint: '#dc2626' },
      blue: { img: 'aston_valkyrie_blue.jpg', name: 'Mariana Blue Metallic', code: 'PAINT // AST-B11', tint: '#0284c7' },
      green: { img: 'aston_valkyrie_green.jpg', name: 'Aston Martin Racing Green', code: 'PAINT // AST-G01', tint: '#16a34a' },
      silver: { img: 'aston_valkyrie_silver.jpg', name: 'Skyfall Silver Metallic', code: 'PAINT // AST-S07', tint: '#94a3b8' },
      black: { img: 'aston_valkyrie_black.jpg', name: 'Onyx Black Q-Bespoke', code: 'PAINT // AST-B01', tint: '#0a0a0c' },
      orange: { img: 'aston_valkyrie_orange.jpg', name: 'Cosmos Orange Metallic', code: 'PAINT // AST-O05', tint: '#ea580c' },
      white: { img: 'aston_valkyrie_white.jpg', name: 'Lunar White Tri-Coat', code: 'PAINT // AST-W09', tint: '#f8fafc' }
    }
  },
  mclaren_p1: {
    name: 'McLaren P1 Hypercar',
    marque: 'McLaren',
    baseImg: 'mclaren_p1_orange.jpg',
    cockpitImg: 'cockpit_mclaren_p1.jpg',
    interiorName: 'MSO Lacquered Carbon MonoCage & Dual F1 Switchgear',
    interiorSpecs: [
      { num: '01', title: 'MSO Minimalist Buckets', desc: 'Ultra-thin carbon racing shells with high-density memory foam padding weighing just 10.5 kg per seat.' },
      { num: '02', title: 'DRS & IPAS Steering', desc: 'Formula 1 race steering wheel equipped with steering-mounted buttons for Instant Power Assist (IPAS) & DRS wing.' },
      { num: '03', title: 'Raw Carbon MonoCage', desc: 'Lacquered exposed carbon fiber weave chassis visible on floors, sills, and pillars with zero carpet insulation.' },
      { num: '04', title: 'Horizon Race Display', desc: 'Digital instrument cluster that tilts into a slim horizontal telemetry bar when Race Mode is activated.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'mclaren_p1_yellow.jpg', name: 'Volcano Yellow MSO Pearl', code: 'PAINT // MCL-Y05', tint: '#facc15' },
      red: { img: 'mclaren_p1_red.jpg', name: 'Volcano Red Tinted Lacquer', code: 'PAINT // MCL-R02', tint: '#dc2626' },
      blue: { img: 'mclaren_p1_blue.jpg', name: 'MSO Defined Burton Blue', code: 'PAINT // MCL-B09', tint: '#0284c7' },
      green: { img: 'mclaren_p1_green.jpg', name: 'Mantis Green Motorsport', code: 'PAINT // MCL-G04', tint: '#16a34a' },
      silver: { img: 'mclaren_p1_silver.jpg', name: 'Supernova Silver Metallic', code: 'PAINT // MCL-S08', tint: '#94a3b8' },
      black: { img: 'mclaren_p1_black.jpg', name: 'MSO Carbon Black Stealth', code: 'PAINT // MCL-B02', tint: '#0a0a0c' },
      orange: { img: 'mclaren_p1_orange.jpg', name: 'Papaya Spark Volcano Orange MSO', code: 'PAINT // MCL-O01', tint: '#ea580c' },
      white: { img: 'mclaren_p1_white.jpg', name: 'Silica White Pearl', code: 'PAINT // MCL-W01', tint: '#f8fafc' }
    }
  },
  ferrari_daytona: {
    name: 'Ferrari Daytona SP3',
    marque: 'Ferrari',
    baseImg: 'ferrari_daytona_red.jpg',
    cockpitImg: 'cockpit_ferrari_daytona.jpg',
    interiorName: 'Icona Wrap-Around Historic Blue Alcantara Cockpit',
    interiorSpecs: [
      { num: '01', title: 'Seamless Integrated Bench', desc: 'Historic Blu Chiaro Alcantara seats upholstered directly onto chassis tub seamlessly linking driver and passenger.' },
      { num: '02', title: 'Movable Pedal Box', desc: 'Due to fixed-to-tub seating, the forged aluminum pedal box and steering column adjust electrically to the driver.' },
      { num: '03', title: 'Stratified Minimalist Dash', desc: 'Horizontally stepped carbon dash with anti-glare micro-suede inspired by 1960s 24H Daytona endurance racers.' },
      { num: '04', title: 'Acoustic Atmospheric Tunnel', desc: 'Natural cabin acoustics channel the pure mechanical 9,500 RPM intake symphony of the 6.5L V12 directly into the cabin.' }
    ],
    useDirectImages: true,
    colors: {
      yellow: { img: 'ferrari_daytona_yellow.jpg', name: 'Giallo Triplo Strato Icona', code: 'PAINT // FER-103', tint: '#facc15' },
      red: { img: 'ferrari_daytona_red.jpg', name: 'Rosso Magma Historical', code: 'PAINT // FER-323', tint: '#dc2626' },
      blue: { img: 'ferrari_daytona_blue.jpg', name: 'Blu Corsa Daytona', code: 'PAINT // FER-525', tint: '#0284c7' },
      green: { img: 'ferrari_daytona_green.jpg', name: 'Verde Francesca Vintage', code: 'PAINT // FER-612', tint: '#16a34a' },
      silver: { img: 'ferrari_daytona_silver.jpg', name: 'Grigio Silverstone Opaco', code: 'PAINT // FER-104', tint: '#94a3b8' },
      black: { img: 'ferrari_daytona_black.jpg', name: 'Nero Stellato Glitter', code: 'PAINT // FER-902', tint: '#0a0a0c' },
      orange: { img: 'ferrari_daytona_orange.jpg', name: 'Arancio Formula 1', code: 'PAINT // FER-312', tint: '#ea580c' },
      white: { img: 'ferrari_daytona_white.jpg', name: 'Bianco Cervino Pure Snow', code: 'PAINT // FER-105', tint: '#f8fafc' }
    }
  }
};

// Immediate background preloading of all studio paint images across all 8 marques
if (typeof window !== 'undefined') {
  Object.values(MARQUE_COLOR_REGISTRY).forEach(car => {
    if (car.colors) {
      Object.values(car.colors).forEach(item => {
        if (item.img) {
          const preloader = new Image();
          preloader.src = item.img;
        }
      });
    }
    if (car.cockpitImg) {
      const preloader = new Image();
      preloader.src = car.cockpitImg;
    }
  });
}

// Global vehicle switcher in color studio
window.selectConfigCar = function(carId) {
  const carData = MARQUE_COLOR_REGISTRY[carId];
  if (!carData) return;

  if (window.apexApp) {
    window.apexApp.configCarId = carId;
  }

  // Update active pill button
  document.querySelectorAll('#paint-car-selector button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-car') === carId);
  });

  // Update label
  const label = document.getElementById('paint-car-label');
  if (label) label.textContent = carData.name;

  if (window.apexApp && window.apexApp.studioMode === 'interior') {
    window.setStudioMode('interior');
  } else {
    const currentColor = (window.apexApp && window.apexApp.currentColorKey) || 'yellow';
    window.applyCarColor(currentColor);
  }
};

// Global Studio Mode Switcher: Exterior Paint vs Cockpit Interior
window.setStudioMode = function(mode) {
  if (window.apexApp) {
    window.apexApp.studioMode = mode;
  }

  // Update mode pills active state
  document.querySelectorAll('.studio-mode-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });

  const carId = (window.apexApp && window.apexApp.configCarId) || 'porsche_911_gt3';
  const carData = MARQUE_COLOR_REGISTRY[carId] || MARQUE_COLOR_REGISTRY['porsche_911_gt3'];

  const img = document.getElementById('paint-display-img');
  const tint = document.getElementById('paint-tint-overlay');
  const finishOverlay = document.getElementById('paint-finish-overlay');
  const codeEl = document.getElementById('paint-code');
  const nameEl = document.getElementById('paint-display-name');
  const finishLabel = document.getElementById('paint-finish-label');
  const exteriorControls = document.getElementById('exterior-controls-grid');
  const interiorGrid = document.getElementById('interior-specs-grid');
  const caliperBadge = document.getElementById('caliper-badge-box');

  if (mode === 'interior') {
    if (img) {
      img.src = carData.cockpitImg || 'cockpit_hypercar.jpg';
      img.style.filter = 'none';
    }
    if (tint) tint.style.opacity = '0';
    if (finishOverlay) finishOverlay.style.opacity = '0';
    if (codeEl) codeEl.textContent = 'BESPOKE COCKPIT ARCHITECTURE';
    if (nameEl) nameEl.textContent = carData.interiorName || 'Handcrafted Bespoke Cockpit';
    if (finishLabel) finishLabel.textContent = 'Factory Bespoke Specification // Authentic Hand-Crafted Cockpit (No Color Swatches)';

    // Hide exterior paint controls completely - NO color options in interior!
    if (exteriorControls) exteriorControls.classList.add('hidden');
    if (caliperBadge) caliperBadge.classList.add('hidden');

    // Show interior specs grid
    if (interiorGrid) {
      interiorGrid.classList.remove('hidden');
      const specsHtml = (carData.interiorSpecs || []).map(s => `
        <div class="p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.08] shadow-md">
          <span class="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">${s.num} // ${s.title.toUpperCase()}</span>
          <h5 class="font-display font-bold text-sm text-white">${s.title}</h5>
          <p class="text-xs text-zinc-300 mt-1 leading-relaxed">${s.desc}</p>
        </div>
      `).join('');
      interiorGrid.innerHTML = `
        <div class="col-span-full flex items-center justify-between pb-2 mb-1 border-b border-white/[0.08]">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            <span class="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">${carData.marque} ${carData.name} &bull; Bespoke Interior Architecture</span>
          </div>
          <span class="text-[11px] font-mono text-zinc-400">Factory Handcrafted Spec // Paint Swatches Disabled</span>
        </div>
        ${specsHtml}
      `;
    }
  } else {
    // Exterior Mode
    if (exteriorControls) exteriorControls.classList.remove('hidden');
    if (interiorGrid) interiorGrid.classList.add('hidden');
    if (caliperBadge) caliperBadge.classList.remove('hidden');
    const currentColor = (window.apexApp && window.apexApp.currentColorKey) || 'yellow';
    window.applyCarColor(currentColor);
  }
};

// Global vehicle switcher in Cockpit Interior Section (Section 6)
window.selectCockpitCar = function(carId) {
  const carData = MARQUE_COLOR_REGISTRY[carId];
  if (!carData) return;

  // Update active pill button
  document.querySelectorAll('#cockpit-car-selector button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cockpit-car') === carId);
  });

  // Update image
  const img = document.getElementById('cockpit-display-img');
  if (img) {
    img.src = carData.cockpitImg;
  }

  // Update badges
  const modelBadge = document.getElementById('cockpit-model-badge');
  const specName = document.getElementById('cockpit-spec-name');
  if (modelBadge) modelBadge.textContent = `${carData.marque} ${carData.name} // Atelier Dossier`;
  if (specName) specName.textContent = carData.interiorName;

  // Update 4 cards
  const specs = carData.interiorSpecs || [];
  specs.forEach((s, idx) => {
    const cardTitle = document.getElementById(`cockpit-card-title-${idx + 1}`);
    const cardDesc = document.getElementById(`cockpit-card-desc-${idx + 1}`);
    const cardTag = document.getElementById(`cockpit-card-tag-${idx + 1}`);
    if (cardTag) cardTag.textContent = `${s.num} // ${s.title.toUpperCase()}`;
    if (cardTitle) cardTitle.textContent = s.title;
    if (cardDesc) cardDesc.textContent = s.desc;
  });
};

// Global standalone color changer function (works for ALL 8 cars)
window.applyCarColor = function(colorKey) {
  if (window.apexApp) {
    window.apexApp.currentColorKey = colorKey;
    if (window.apexApp.studioMode === 'interior') {
      window.apexApp.studioMode = 'exterior';
      document.querySelectorAll('.studio-mode-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === 'exterior');
      });
      const swatchesContainer = document.getElementById('color-swatches-container');
      if (swatchesContainer) swatchesContainer.style.opacity = '1';
    }
  }

  const carId = (window.apexApp && window.apexApp.configCarId) || 'porsche_911_gt3';
  const carData = MARQUE_COLOR_REGISTRY[carId] || MARQUE_COLOR_REGISTRY['porsche_911_gt3'];
  const colorInfo = carData.colors[colorKey] || carData.colors['yellow'];

  const img = document.getElementById('paint-display-img');
  const tint = document.getElementById('paint-tint-overlay');
  const codeEl = document.getElementById('paint-code');
  const nameEl = document.getElementById('paint-display-name');
  const finishLabel = document.getElementById('paint-finish-label');

  if (img) {
    if (colorInfo.img) {
      img.src = colorInfo.img;
      img.style.filter = 'none';
      if (tint) tint.style.opacity = '0';
    } else {
      img.src = carData.baseImg;
      img.style.filter = colorInfo.filter || 'none';
      if (tint) {
        tint.style.backgroundColor = colorInfo.tint || '#facc15';
        tint.style.mixBlendMode = colorInfo.mode || 'color';
        tint.style.opacity = '0.85';
      }
    }
  }

  if (codeEl) codeEl.textContent = colorInfo.code;
  if (nameEl) nameEl.textContent = colorInfo.name;
  if (finishLabel) finishLabel.textContent = 'High-Gloss Triple-Layer Finish (Standard)';

  // Active state on all swatch elements
  document.querySelectorAll('.swatch-circle').forEach((btn) => {
    const key = btn.getAttribute('data-key') || btn.getAttribute('data-color');
    btn.classList.toggle('active', key === colorKey);
  });

  if (window.apexApp) {
    window.apexApp.currentColorKey = colorKey;
    if (typeof window.apexApp.updateFinishLabels === 'function') {
      window.apexApp.updateFinishLabels();
    }
  }
};

// Global standalone finish changer function
window.setFinishType = function(finish) {
  const btnGloss = document.getElementById('btn-finish-gloss');
  const btnMetallic = document.getElementById('btn-finish-metallic');
  const btnMatte = document.getElementById('btn-finish-matte');
  const finishOverlay = document.getElementById('paint-finish-overlay');

  [btnGloss, btnMetallic, btnMatte].forEach((b) => {
    if (b) b.className = 'px-3 py-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white font-semibold text-xs border border-white/[0.08] transition-colors';
  });

  if (finish === 'gloss') {
    if (btnGloss) btnGloss.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-colors';
    if (finishOverlay) finishOverlay.className = 'paint-finish-overlay gloss';
  } else if (finish === 'metallic') {
    if (btnMetallic) btnMetallic.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-colors';
    if (finishOverlay) finishOverlay.className = 'paint-finish-overlay metallic';
  } else {
    if (btnMatte) btnMatte.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-colors';
    if (finishOverlay) finishOverlay.className = 'paint-finish-overlay matte';
  }

  if (window.apexApp) {
    window.apexApp.currentFinish = finish;
    if (typeof window.apexApp.updateFinishLabels === 'function') {
      window.apexApp.updateFinishLabels();
    }
  }
};

// Global standalone caliper color changer function
window.setCaliperColor = function(caliperKey) {
  const label = document.getElementById('caliper-name');
  const names = {
    yellow: 'Brembo Yellow',
    red: 'Rosso Corsa Red',
    acid_green: 'Acid Green Ceramic',
    black: 'Titanium Black'
  };
  if (label) {
    label.textContent = names[caliperKey] || 'Brembo Yellow';
  }
  if (window.apexApp) {
    window.apexApp.currentCaliper = caliperKey;
  }
};

// ----------------------------------------------------------------------------
// 3. MAIN APPLICATION CONTROLLER
// ----------------------------------------------------------------------------
class ApexSalesApp {
  constructor() {
    window.apexApp = this;
    this.filteredCars = [...HYPERCARS];
    this.vaultIndex = 0;
    this.currentAct = 0;
    this.totalActs = 4;
    this.configCarId = 'porsche_911_gt3';
    this.currentColorKey = 'yellow';
    this.currentFinish = 'gloss';
    this.currentCaliper = 'yellow';
    this.currentCurrency = 'USD';
    this.calcTerm = 36;
    this.conciergeProto = 'whatsapp';

    this.initLenis();
    this.initScrollTheater();
    this.setAct(0);
    this.initSpotlights();
    this.initFlowingMenu();
    this.renderVault();
    this.initFinancingCalc();
    this.initMonograph();
    this.initRevealGallery();
    this.setupKeyboard();
    this.bindColorSwatches();
    window.selectConfigCar('porsche_911_gt3');

    // Refresh ScrollTrigger heights after DOM stabilizes and on orientation/resize
    window.addEventListener('resize', () => {
      this.setAct(this.currentAct);
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });

    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.setAct(this.currentAct);
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 200);
    });

    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 150);
  }

  bindColorSwatches() {
    const swatches = document.querySelectorAll('.swatch-circle');
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        e.preventDefault();
        const key = swatch.getAttribute('data-key') || swatch.getAttribute('data-color');
        if (key) {
          window.applyCarColor(key);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // LENIS SMOOTH INERTIA SCROLL
  // --------------------------------------------------------------------------
  initLenis() {
    // On mobile devices and touch screens, native momentum scrolling is smoother,
    // prevents touch-locking, and ensures 100% responsiveness without gesture hijacking.
    const isMobileDevice = window.innerWidth <= 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isMobileDevice) {
      // Allow native browser touch physics
      window.lenis = null;
      return;
    }

    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
      });
      window.lenis = lenis;

      if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    }
  }

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // IMMERSIVE VERTICAL PINNED SCROLL THEATER (CONTINUOUS AEROSPACE SCRUB)
  // --------------------------------------------------------------------------
  initScrollTheater() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const slides = [
      document.getElementById('bg-act-0'),
      document.getElementById('bg-act-1'),
      document.getElementById('bg-act-2'),
      document.getElementById('bg-act-3')
    ];

    const acts = [
      document.getElementById('act-0'),
      document.getElementById('act-1'),
      document.getElementById('act-2'),
      document.getElementById('act-3')
    ];

    const dots = document.querySelectorAll('.theater-dot');
    const railCounter = document.getElementById('rail-counter');
    const railFill = document.getElementById('rail-fill');
    const railPercentage = document.getElementById('rail-percentage');
    const hudSpeed = document.getElementById('hud-speed');
    const hudPower = document.getElementById('hud-power');
    const actTabs = document.querySelectorAll('.theater-act-tab');

    // Continuous Scroll-driven scrubbing timeline (fast & snappy response)
    ScrollTrigger.create({
      trigger: '#scroll-theater',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 to 1.0

        // 1. Continuous 4-chapter smooth cross-fading & camera dolly
        const actFloat = progress * (this.totalActs - 1);
        const currentActiveAct = Math.min(this.totalActs - 1, Math.round(actFloat));

        if (currentActiveAct !== this.currentAct) {
          this.currentAct = currentActiveAct;
          actTabs.forEach((tab, idx) => {
            if (idx === currentActiveAct) {
              tab.className = 'theater-act-tab px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all text-amber-300 bg-amber-400/10 border border-amber-400/30';
            } else {
              tab.className = 'theater-act-tab px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all text-zinc-400 hover:text-white';
            }
          });
        }

        // Smooth continuous cross-fade: active slide reaches 1, others fade out
        slides.forEach((slide, idx) => {
          if (!slide) return;
          const dist = Math.abs(actFloat - idx);
          const opacity = Math.max(0, Math.min(1, 1 - dist));
          slide.style.opacity = opacity.toFixed(3);
        });

    // Smooth distinct visibility for story acts
    acts.forEach((act, idx) => {
      if (!act) return;
      const dist = Math.abs(actFloat - idx);
      let opacity = 0;
      if (dist <= 0.35) {
        opacity = 1;
      } else if (dist < 0.75) {
        opacity = 1 - (dist - 0.35) / 0.4;
      }
      const diff = actFloat - idx;
      const translateY = -diff * 15;
      act.style.opacity = opacity.toFixed(3);
      act.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
      if (window.innerWidth <= 768) {
        act.style.transform = `translateY(${translateY.toFixed(1)}px)`;
      } else {
        act.style.transform = `translateY(calc(-50% + ${translateY.toFixed(1)}px))`;
      }
      act.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    });
  }
});

// Interactive 3D Subtle Mouse Parallax
window.addEventListener('mousemove', (e) => {
  if (window.innerWidth <= 768) return; // disable mouse parallax on mobile
  const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
  const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;
  gsap.to('.theater-bg-layer', {
    x: xNorm * 12,
    y: yNorm * 8,
    duration: 1.2,
    ease: 'power2.out',
    overwrite: 'auto'
  });
});
}

setAct(actIdx) {
this.currentAct = Math.max(0, Math.min(this.totalActs - 1, actIdx));
const slides = [
  document.getElementById('bg-act-0'),
  document.getElementById('bg-act-1'),
  document.getElementById('bg-act-2'),
  document.getElementById('bg-act-3')
];
const acts = [
  document.getElementById('act-0'),
  document.getElementById('act-1'),
  document.getElementById('act-2'),
  document.getElementById('act-3')
];
const actTabs = document.querySelectorAll('.theater-act-tab');

slides.forEach((s, idx) => {
  if (s) s.style.opacity = idx === this.currentAct ? '1' : '0';
});

acts.forEach((a, idx) => {
  if (a) {
    const isActive = idx === this.currentAct;
    a.style.opacity = isActive ? '1' : '0';
    a.style.visibility = isActive ? 'visible' : 'hidden';
    a.style.pointerEvents = isActive ? 'auto' : 'none';
    if (window.innerWidth <= 768) {
      a.style.transform = 'translateY(0)';
    } else {
      a.style.transform = 'translateY(-50%)';
    }
    a.classList.toggle('active', isActive);
  }
});

    actTabs.forEach((tab, idx) => {
      if (idx === this.currentAct) {
        tab.className = 'theater-act-tab px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all text-amber-300 bg-amber-400/10 border border-amber-400/30';
      } else {
        tab.className = 'theater-act-tab px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all text-zinc-400 hover:text-white';
      }
    });
  }

  jumpToAct(actIdx) {
    this.setAct(actIdx);

    const theater = document.getElementById('scroll-theater');
    if (!theater) return;

    const rect = theater.getBoundingClientRect();
    const scrollStart = window.scrollY + rect.top;
    const totalScroll = theater.offsetHeight - window.innerHeight;
    const targetY = scrollStart + (actIdx / (this.totalActs - 1)) * totalScroll;

    if (window.lenis) {
      window.lenis.scrollTo(targetY, { duration: 0.8, immediate: false });
    } else {
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  }

  nextAct() {
    const nextIndex = ((this.currentAct || 0) + 1) % this.totalActs;
    this.jumpToAct(nextIndex);
  }

  prevAct() {
    const prevIndex = ((this.currentAct || 0) - 1 + this.totalActs) % this.totalActs;
    this.jumpToAct(prevIndex);
  }

  // --------------------------------------------------------------------------
  // ORIGINKIT SPOTLIGHT CURSOR TRACKING
  // --------------------------------------------------------------------------
  initSpotlights() {
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // --------------------------------------------------------------------------
  // HEADER POWERTRAIN SWITCHER
  // --------------------------------------------------------------------------
  filterByPowertrain(type) {
    const btnAll = document.getElementById('header-btn-all');
    const btnIce = document.getElementById('header-btn-combustion');
    const btnEv = document.getElementById('header-btn-electric');

    [btnAll, btnIce, btnEv].forEach(b => {
      if (b) b.className = 'px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all text-zinc-400 hover:text-white';
    });

    if (type === 'all') {
      if (btnAll) btnAll.className = 'px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all bg-amber-500 text-black';
    } else if (type === 'combustion') {
      if (btnIce) btnIce.className = 'px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all bg-amber-500 text-black';
    } else if (type === 'electric') {
      if (btnEv) btnEv.className = 'px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all bg-sky-500 text-black';
    }

    this.filterVault(type);
  }

  // --------------------------------------------------------------------------
  // 3D COVERFLOW INVENTORY VAULT (16:10 PROPERLY FRAMED CARDS)
  // --------------------------------------------------------------------------
  filterVault(filter) {
    const filterButtons = document.querySelectorAll('.vault-filter-btn');
    filterButtons.forEach(btn => {
      const active = btn.getAttribute('data-type') === filter;
      btn.className = active 
        ? 'vault-filter-btn px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-black transition-all'
        : 'vault-filter-btn px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-all';
    });

    if (filter === 'all') {
      this.filteredCars = [...HYPERCARS];
    } else {
      this.filteredCars = HYPERCARS.filter(c => c.powertrain === filter);
    }

    this.vaultIndex = 0;
    this.renderVault();
  }

  renderVault() {
    const track = document.getElementById('vault-track');
    const counter = document.getElementById('vault-counter');
    if (!track) return;

    track.innerHTML = '';
    const total = this.filteredCars.length;
    if (counter) {
      counter.textContent = `0${Math.min(total, this.vaultIndex + 1)} / 0${total}`;
    }

    this.filteredCars.forEach((car, idx) => {
      const card = document.createElement('div');
      card.className = 'vault-card flex flex-col justify-between';

      if (idx === this.vaultIndex) {
        card.classList.add('active');
      } else if (idx === this.vaultIndex - 1) {
        card.classList.add('prev');
      } else if (idx === this.vaultIndex + 1) {
        card.classList.add('next');
      } else {
        card.classList.add('hidden-far');
      }

      // Proper 16:10 framed card with full vehicle visible
      card.innerHTML = `
        <div class="vault-img-container">
          <img src="${car.image}" alt="${car.marque} ${car.model}" class="vault-img">
          <div class="absolute top-3 left-3">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase ${car.powertrain === 'electric' ? 'bg-sky-500/30 text-sky-300 border border-sky-500/40' : 'bg-amber-500/30 text-amber-300 border border-amber-500/40'}">
              ${car.tag}
            </span>
          </div>
          <div class="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-display font-bold text-amber-400 border border-white/[0.1]">
            ${this.formatCurrency(car.priceUsd)}
          </div>
        </div>

        <div class="p-5">
          <span class="block text-[11px] uppercase font-mono tracking-widest text-zinc-400">${car.marque}</span>
          <h3 class="font-display font-bold text-xl text-white mt-0.5">${car.model}</h3>

          <div class="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/[0.08] text-xs">
            <div>
              <span class="text-zinc-500 block text-[10px] uppercase font-mono">Output</span>
              <span class="font-display font-bold text-sm text-white">${car.output} ${car.unit}</span>
            </div>
            <div>
              <span class="text-zinc-500 block text-[10px] uppercase font-mono">0–100 km/h</span>
              <span class="font-display font-bold text-sm text-white">${car.accel}s</span>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.vaultIndex = idx;
        this.renderVault();
      });

      track.appendChild(card);
    });

    this.renderInspector();
  }

  prevVaultCard() {
    if (this.vaultIndex > 0) {
      this.vaultIndex--;
      this.renderVault();
    }
  }

  nextVaultCard() {
    if (this.vaultIndex < this.filteredCars.length - 1) {
      this.vaultIndex++;
      this.renderVault();
    }
  }

  renderInspector() {
    const inspector = document.getElementById('active-car-inspector');
    if (!inspector || !this.filteredCars[this.vaultIndex]) return;

    const car = this.filteredCars[this.vaultIndex];
    inspector.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full ${car.powertrain === 'electric' ? 'bg-sky-400' : 'bg-amber-400'}"></span>
            <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">${car.marque} // CERTIFIED SALES DOSSIER</span>
            <span class="text-xs uppercase tracking-widest text-zinc-400 font-medium">${car.marque} &bull; Certified Atelier Dossier</span>
          </div>

          <h3 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">${car.model}</h3>
          <p class="text-sm text-zinc-300 leading-relaxed">${car.desc}</p>

          <div class="space-y-3 pt-2">
            <div class="flex justify-between py-2 border-b border-white/[0.08] text-xs">
              <span class="text-zinc-400">Powertrain</span>
              <span class="font-display font-bold text-white">${car.engine}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/[0.08] text-xs">
              <span class="text-zinc-400">Peak Power</span>
              <span class="font-display font-bold text-amber-400">${car.output} ${car.unit}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/[0.08] text-xs">
              <span class="text-zinc-400">Acceleration (0–100 km/h)</span>
              <span class="font-display font-bold text-white">${car.accel} seconds</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/[0.08] text-xs">
              <span class="text-zinc-400">Top Speed</span>
              <span class="font-display font-bold text-white">${car.topSpeed} km/h</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/[0.08] text-xs">
              <span class="text-zinc-400">MSRP Purchase Price</span>
              <span class="font-display font-extrabold text-amber-400 text-base">${this.formatCurrency(car.priceUsd)}</span>
            </div>
          </div>

          <a href="#purchase-section" onclick="window.apexApp.preselectCar('${car.id}')" class="btn-primary-apex inline-block px-6 py-3 rounded-xl text-xs uppercase tracking-wider mt-2">
            Order ${car.model} Direct
          </a>
        </div>

        <div class="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-video border border-white/[0.1] bg-gradient-to-b from-[#141418] via-[#0d0d10] to-[#08080a] flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] pointer-events-none"></div>
          <img src="${car.image}" alt="${car.model}" class="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] z-10 transition-transform duration-500 hover:scale-[1.03]">
          <div class="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono text-zinc-300 border border-white/[0.1] z-20">
            ${car.tag}
          </div>
        </div>
      </div>
    `;

  }

  // --------------------------------------------------------------------------
  // 4. CABIN AMBIENT LIGHTING SWITCHER
  // --------------------------------------------------------------------------
  setAmbientGlow(color) {
    const container = document.getElementById('cabin-preview-container');
    const label = document.getElementById('ambient-name');
    if (!container) return;

    container.className = `lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl cabin-glow ${color}`;

    const names = {
      amber: 'Solar Amber (Warm Gold)',
      blue: 'Monaco Ice Blue',
      crimson: 'Apex Crimson Red',
      white: 'Studio Pure White'
    };

    if (label) {
      label.textContent = names[color] || 'Solar Amber';
      label.className = `font-display font-bold text-sm ${color === 'blue' ? 'text-sky-400' : color === 'crimson' ? 'text-red-500' : color === 'white' ? 'text-white' : 'text-amber-400'}`;
    }
  }

  // --------------------------------------------------------------------------
  // 5. REAL WORKING COLOR CONFIGURATOR (SWAPPING IDENTICAL-ANGLE REAL CAR PHOTOS)
  // --------------------------------------------------------------------------
  applyDirectColor(colorKey) {
    window.applyCarColor(colorKey);
  }

  setFinishType(finish) {
    this.currentFinish = finish;
    const btnGloss = document.getElementById('btn-finish-gloss');
    const btnMetallic = document.getElementById('btn-finish-metallic');
    const btnMatte = document.getElementById('btn-finish-matte');

    [btnGloss, btnMetallic, btnMatte].forEach(b => {
      if (b) b.className = 'px-3 py-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white font-semibold text-xs border border-white/[0.08] transition-colors';
    });

    if (finish === 'gloss') {
      if (btnGloss) btnGloss.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-colors';
    } else if (finish === 'metallic') {
      if (btnMetallic) btnMetallic.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-colors';
    } else {
      if (btnMatte) btnMatte.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-colors';
    }

    this.updateFinishLabels();
  }

  setCaliperColor(caliperKey) {
    this.currentCaliper = caliperKey;
    const label = document.getElementById('caliper-name');
    const names = {
      yellow: 'Brembo Yellow',
      red: 'Rosso Corsa Red',
      acid_green: 'Acid Green Ceramic',
      black: 'Titanium Black'
    };
    if (label) {
      label.textContent = names[caliperKey] || 'Brembo Yellow';
    }
  }

  updateFinishLabels() {
    const finishLabel = document.getElementById('paint-finish-label');
    const finishNames = {
      gloss: 'High-Gloss Triple-Layer Finish (Standard)',
      metallic: 'Deep Metallic Micro-Flake (+ $4,500)',
      matte: 'Satin Stealth Matte Finish (+ $8,000)'
    };
    if (finishLabel) {
      finishLabel.textContent = finishNames[this.currentFinish] || 'High-Gloss Triple-Layer Finish';
    }
  }

  // --------------------------------------------------------------------------
  // 13.5 STRINGTUNE EDITORIAL SCROLL REVEAL GALLERY
  // --------------------------------------------------------------------------
  initRevealGallery() {
    // If StringTune is loaded on window
    if (typeof StringTune !== 'undefined' && StringTune.StringTune) {
      try {
        const stringTune = StringTune.StringTune.getInstance();
        window.StringTuneContext = stringTune;
        if (StringTune.StringLazy) {
          stringTune.use(StringTune.StringLazy);
        }
        stringTune.start(0);
      } catch (err) {
        console.warn('StringTune instance start error:', err);
      }
    }

    // High performance IntersectionObserver for guaranteed buttery smooth StringTune reveals & repeat scrubbing
    const figures = document.querySelectorAll('.-w-gallery figure');
    if (figures.length > 0) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('-inview');
            } else {
              // Reset when scrolled far away if string-repeat is active
              const rect = entry.target.getBoundingClientRect();
              if (rect.top > window.innerHeight + 150 || rect.bottom < -150) {
                entry.target.classList.remove('-inview');
              }
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px'
        });

        figures.forEach(fig => observer.observe(fig));
      } else {
        // Fallback for older browsers
        figures.forEach(fig => fig.classList.add('-inview'));
      }

      // Interactive 3D Holographic Perspective Tilt on Mouse Movement
      figures.forEach(fig => {
        fig.addEventListener('mousemove', (e) => {
          const rect = fig.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;

          fig.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
        });

        fig.addEventListener('mouseleave', () => {
          fig.style.transform = '';
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 6. HEAD-TO-HEAD DUEL ARENA
  // --------------------------------------------------------------------------
  initDuelArena() {
    const selA = document.getElementById('duel-select-a');
    const selB = document.getElementById('duel-select-b');

    if (!selA || !selB) return;

    HYPERCARS.forEach((car) => {
      const optA = document.createElement('option');
      optA.value = car.id;
      optA.textContent = `${car.marque} ${car.model} (${car.output} HP // ${car.price})`;
      selA.appendChild(optA);

      const optB = document.createElement('option');
      optB.value = car.id;
      optB.textContent = `${car.marque} ${car.model} (${car.output} HP // ${car.price})`;
      selB.appendChild(optB);
    });

    selA.value = 'bugatti_chiron';
    selB.value = 'taycan_gt';

    this.updateDuel();
  }

  updateDuel() {
    const idA = document.getElementById('duel-select-a')?.value;
    const idB = document.getElementById('duel-select-b')?.value;

    const carA = HYPERCARS.find(c => c.id === idA) || HYPERCARS[0];
    const carB = HYPERCARS.find(c => c.id === idB) || HYPERCARS[1];

    const cardA = document.getElementById('duel-card-a');
    const cardB = document.getElementById('duel-card-b');
    const statsContainer = document.getElementById('duel-stats-container');

    if (cardA) {
      cardA.innerHTML = `
        <div class="relative rounded-2xl overflow-hidden aspect-video border border-white/[0.08] bg-gradient-to-b from-[#16161b] via-[#0d0d10] to-[#08080a] flex items-center justify-center p-3">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          <img src="${carA.image}" alt="${carA.model}" class="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] z-10">
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute bottom-3 left-3 z-20">
            <span class="text-[10px] uppercase font-mono text-amber-400 font-bold tracking-wider">${carA.tag}</span>
            <h4 class="font-display font-bold text-lg sm:text-xl text-white leading-tight">${carA.marque} ${carA.model}</h4>
            <span class="text-xs font-display text-white block mt-0.5">${this.formatCurrency(carA.priceUsd)}</span>
          </div>
        </div>
      `;
    }

    if (cardB) {
      cardB.innerHTML = `
        <div class="relative rounded-2xl overflow-hidden aspect-video border border-white/[0.08] bg-gradient-to-b from-[#16161b] via-[#0d0d10] to-[#08080a] flex items-center justify-center p-3">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          <img src="${carB.image}" alt="${carB.model}" class="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] z-10">
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute bottom-3 left-3 z-20">
            <span class="text-[10px] uppercase font-mono text-sky-400 font-bold tracking-wider">${carB.tag}</span>
            <h4 class="font-display font-bold text-lg sm:text-xl text-white leading-tight">${carB.marque} ${carB.model}</h4>
            <span class="text-xs font-display text-white block mt-0.5">${this.formatCurrency(carB.priceUsd)}</span>
          </div>
        </div>
      `;
    }

    if (statsContainer) {
      const maxHp = Math.max(carA.output, carB.output, 1600);
      const pctHpA = (carA.output / maxHp) * 100;
      const pctHpB = (carB.output / maxHp) * 100;

      const minAccel = Math.min(carA.accel, carB.accel);
      const pctAccA = (minAccel / carA.accel) * 100;
      const pctAccB = (minAccel / carB.accel) * 100;

      const maxSpeed = Math.max(carA.topSpeed, carB.topSpeed, 500);
      const pctSpeedA = (carA.topSpeed / maxSpeed) * 100;
      const pctSpeedB = (carB.topSpeed / maxSpeed) * 100;

      statsContainer.innerHTML = `
        <!-- Output Clash -->
        <div>
          <div class="flex justify-between text-xs font-mono mb-1">
            <span class="${carA.output >= carB.output ? 'text-amber-400 font-bold' : 'text-zinc-400'}">${carA.output} HP</span>
            <span class="text-white uppercase">Peak Horsepower</span>
            <span class="${carB.output >= carA.output ? 'text-sky-400 font-bold' : 'text-zinc-400'}">${carB.output} HP</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="stat-bar-container"><div class="stat-bar-fill bg-amber-500 float-right" style="width: ${pctHpA}%"></div></div>
            <div class="stat-bar-container"><div class="stat-bar-fill bg-sky-400" style="width: ${pctHpB}%"></div></div>
          </div>
        </div>

        <!-- 0-100 Acceleration Clash -->
        <div>
          <div class="flex justify-between text-xs font-mono mb-1">
            <span class="${carA.accel <= carB.accel ? 'text-amber-400 font-bold' : 'text-zinc-400'}">${carA.accel}s</span>
            <span class="text-white uppercase">0–100 km/h Sprint</span>
            <span class="${carB.accel <= carA.accel ? 'text-sky-400 font-bold' : 'text-zinc-400'}">${carB.accel}s</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="stat-bar-container"><div class="stat-bar-fill bg-amber-500 float-right" style="width: ${pctAccA}%"></div></div>
            <div class="stat-bar-container"><div class="stat-bar-fill bg-sky-400" style="width: ${pctAccB}%"></div></div>
          </div>
        </div>

        <!-- Top Track Speed Clash -->
        <div>
          <div class="flex justify-between text-xs font-mono mb-1">
            <span class="${carA.topSpeed >= carB.topSpeed ? 'text-amber-400 font-bold' : 'text-zinc-400'}">${carA.topSpeed} km/h</span>
            <span class="text-white uppercase">Top Track Speed</span>
            <span class="${carB.topSpeed >= carA.topSpeed ? 'text-sky-400 font-bold' : 'text-zinc-400'}">${carB.topSpeed} km/h</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="stat-bar-container"><div class="stat-bar-fill bg-amber-500 float-right" style="width: ${pctSpeedA}%"></div></div>
            <div class="stat-bar-container"><div class="stat-bar-fill bg-sky-400" style="width: ${pctSpeedB}%"></div></div>
          </div>
        </div>
      `;
    }
  }

  // --------------------------------------------------------------------------
  // 7. PACKAGE SELECTION & CAR PRE-SELECTION
  // --------------------------------------------------------------------------
  selectPackage(pkgId) {
    const pkgSelect = document.getElementById('form-package-select');
    if (pkgSelect) {
      pkgSelect.value = pkgId;
      const el = document.getElementById('purchase-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  preselectCar(carId) {
    const carSelect = document.getElementById('form-vehicle-select');
    if (carSelect) carSelect.value = carId;
  }

  submitPurchaseOrder() {
    alert('Purchase inquiry registered. A certified brand sales advisor will send your formal vehicle acquisition contract within 12 hours.');
  }

  // --------------------------------------------------------------------------
  // 8. REACT BITS FLOWING MENU (DIRECTIONAL MARQUEE PHYSICS)
  // --------------------------------------------------------------------------
  initFlowingMenu() {
    const items = document.querySelectorAll('.flowing-item');
    if (!items.length) return;

    const distMetric = (x, y, x2, y2) => {
      const xDiff = x - x2;
      const yDiff = y - y2;
      return xDiff * xDiff + yDiff * yDiff;
    };

    const findClosestEdge = (mouseX, mouseY, width, height) => {
      const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
      const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
      return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const animationDefaults = { duration: 0.6, ease: 'expo.out' };

    items.forEach((item) => {
      const marquee = item.querySelector('.flowing-marquee');
      const inner = item.querySelector('.flowing-marquee__inner');
      if (!marquee || !inner) return;

      if (typeof gsap !== 'undefined') {
        gsap.set(marquee, { y: '101%' });

        // Continuous seamless marquee animation
        const firstPart = inner.querySelector('.flowing-marquee__part');
        if (firstPart) {
          const contentWidth = firstPart.offsetWidth || 500;
          const speed = parseFloat(item.getAttribute('data-speed')) || 16;
          gsap.to(inner, {
            x: -contentWidth,
            duration: speed,
            ease: 'none',
            repeat: -1
          });
        }

        // Directional mouse enter
        item.addEventListener('mouseenter', (ev) => {
          const rect = item.getBoundingClientRect();
          const x = ev.clientX - rect.left;
          const y = ev.clientY - rect.top;
          const edge = findClosestEdge(x, y, rect.width, rect.height);

          gsap.timeline({ defaults: animationDefaults })
            .set(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(inner, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marquee, inner], { y: '0%' }, 0);
        });

        // Directional mouse leave
        item.addEventListener('mouseleave', (ev) => {
          const rect = item.getBoundingClientRect();
          const x = ev.clientX - rect.left;
          const y = ev.clientY - rect.top;
          const edge = findClosestEdge(x, y, rect.width, rect.height);

          gsap.timeline({ defaults: animationDefaults })
            .to(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(inner, { y: edge === 'top' ? '101%' : '-101%' }, 0);
        });
      }
    });
  }

  selectCarById(carId) {
    this.preselectCar(carId);
    if (typeof window.selectConfigCar === 'function') {
      window.selectConfigCar(carId);
    }
    const paint = document.getElementById('paint-section');
    if (paint) {
      paint.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --------------------------------------------------------------------------
  // 10. MULTI-CURRENCY CONVERSION SYSTEM (ATELIER PROVENANCE)
  // --------------------------------------------------------------------------
  getExchangeRate() {
    const rates = {
      USD: { rate: 1.0, prefix: '$', suffix: '' },
      EUR: { rate: 0.92, prefix: '€', suffix: '' },
      GBP: { rate: 0.78, prefix: '£', suffix: '' },
      AED: { rate: 3.67, prefix: 'AED ', suffix: '' },
      CHF: { rate: 0.89, prefix: 'CHF ', suffix: '' }
    };
    return rates[this.currentCurrency] || rates.USD;
  }

  formatCurrency(usdValue) {
    if (!usdValue) return '$0';
    const { rate, prefix, suffix } = this.getExchangeRate();
    const converted = Math.round(usdValue * rate);
    return `${prefix}${converted.toLocaleString('en-US')}${suffix}`;
  }

  setCurrency(curr) {
    this.currentCurrency = curr;
    document.querySelectorAll('.currency-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-curr') === curr);
    });
    this.renderVault();
    this.updateDuel();
    this.updateFinancingCalc();
  }

  // --------------------------------------------------------------------------
  // 11. INTERACTIVE BESPOKE FINANCING & ACQUISITION CALCULATOR
  // --------------------------------------------------------------------------
  initFinancingCalc() {
    const select = document.getElementById('calc-car-select');
    if (!select) return;

    select.innerHTML = '';
    HYPERCARS.forEach(car => {
      const opt = document.createElement('option');
      opt.value = car.id;
      opt.textContent = `${car.marque} ${car.model} (${this.formatCurrency(car.priceUsd)})`;
      select.appendChild(opt);
    });

    select.value = 'bugatti_chiron';
    this.updateFinancingCalc();
  }

  setCalcTerm(months) {
    this.calcTerm = months;
    [24, 36, 48, 60].forEach(t => {
      const btn = document.getElementById(`btn-term-${t}`);
      if (btn) {
        if (t === months) {
          btn.className = 'px-4 py-3 rounded-xl bg-amber-500 text-black text-xs font-mono font-bold transition-all';
        } else {
          btn.className = 'px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] text-xs font-mono font-bold text-zinc-300 hover:border-amber-400 transition-all';
        }
      }
    });
    this.updateFinancingCalc();
  }

  updateFinancingCalc() {
    const select = document.getElementById('calc-car-select');
    const downRange = document.getElementById('calc-down-range');
    const balloonRange = document.getElementById('calc-balloon-range');
    if (!select || !downRange || !balloonRange) return;

    const carId = select.value;
    const car = HYPERCARS.find(c => c.id === carId) || HYPERCARS[0];
    const { rate, prefix, suffix } = this.getExchangeRate();
    const carMSRP = Math.round(car.priceUsd * rate);

    const downPct = parseInt(downRange.value, 10);
    const balloonPct = parseInt(balloonRange.value, 10);

    const downAmount = Math.round(carMSRP * (downPct / 100));
    const balloonAmount = Math.round(carMSRP * (balloonPct / 100));
    const escrowToday = Math.round(carMSRP * 0.10); // 10% refundable security deposit
    const principalToFinance = Math.max(0, carMSRP - downAmount - balloonAmount);

    // Fixed 4.85% annual APR
    const annualRate = 0.0485;
    const monthlyRate = annualRate / 12;
    const n = this.calcTerm;

    let monthlyPayment = 0;
    if (monthlyRate > 0 && n > 0 && principalToFinance > 0) {
      const amortPayment = (principalToFinance * (monthlyRate * Math.pow(1 + monthlyRate, n))) / (Math.pow(1 + monthlyRate, n) - 1);
      const balloonMonthlyInterest = balloonAmount * monthlyRate;
      monthlyPayment = Math.round(amortPayment + balloonMonthlyInterest);
    } else {
      monthlyPayment = Math.round(principalToFinance / (n || 36));
    }

    const totalInterest = Math.round(Math.max(0, (monthlyPayment * n) + balloonAmount + downAmount - carMSRP));

    const downPctLabel = document.getElementById('calc-down-pct-label');
    const downAmountLabel = document.getElementById('calc-down-amount-label');
    const balloonPctLabel = document.getElementById('calc-balloon-pct-label');
    const balloonAmountLabel = document.getElementById('calc-balloon-amount-label');
    const monthlyLabel = document.getElementById('calc-monthly-payment');
    const totalMsrpLabel = document.getElementById('calc-total-msrp');
    const escrowTodayLabel = document.getElementById('calc-escrow-today');
    const financedPrincipalLabel = document.getElementById('calc-financed-principal');
    const totalInterestLabel = document.getElementById('calc-total-interest');

    if (downPctLabel) downPctLabel.textContent = `${downPct}%`;
    if (downAmountLabel) downAmountLabel.textContent = `${prefix}${downAmount.toLocaleString('en-US')}${suffix}`;
    if (balloonPctLabel) balloonPctLabel.textContent = `${balloonPct}%`;
    if (balloonAmountLabel) balloonAmountLabel.textContent = `${prefix}${balloonAmount.toLocaleString('en-US')}${suffix}`;
    if (monthlyLabel) monthlyLabel.innerHTML = `${prefix}${monthlyPayment.toLocaleString('en-US')}${suffix} <span class="text-base text-zinc-400 font-light">/ mo</span>`;
    if (totalMsrpLabel) totalMsrpLabel.textContent = `${prefix}${carMSRP.toLocaleString('en-US')}${suffix}`;
    if (escrowTodayLabel) escrowTodayLabel.textContent = `${prefix}${escrowToday.toLocaleString('en-US')}${suffix}`;
    if (financedPrincipalLabel) financedPrincipalLabel.textContent = `${prefix}${principalToFinance.toLocaleString('en-US')}${suffix}`;
    if (totalInterestLabel) totalInterestLabel.textContent = `${prefix}${totalInterest.toLocaleString('en-US')}${suffix}`;
  }

  applyFinancingToOrder() {
    const select = document.getElementById('calc-car-select');
    if (select) {
      this.preselectCar(select.value);
    }
  }

  // --------------------------------------------------------------------------
  // 12. CERTIFIED PROVENANCE LEDGER CONTROLLER
  // --------------------------------------------------------------------------
  initProvenance() {
    const provIdEl = document.getElementById('prov-chassis-id');
    const car = this.filteredCars[this.vaultIndex] || HYPERCARS[0];
    if (provIdEl && car) {
      provIdEl.textContent = `APX-2026-${car.id.toUpperCase().replace(/_/g, '-')}-078`;
    }
  }

  downloadProvenancePDF() {
    const car = this.filteredCars[this.vaultIndex] || HYPERCARS[0];
    alert(`Generating Certified Factory Provenance Archive for ${car.marque} ${car.model} (Chassis APX-2026-${car.id.toUpperCase()}-078). Swiss escrow & factory heritage seal verified. Download starting...`);
  }

  // --------------------------------------------------------------------------
  // 12.5 BESPOKE ATELIER MONOGRAPH (3D INTERACTIVE FOLIO CONTROLLER)
  // --------------------------------------------------------------------------
  initMonograph() {
    this.monographTotalLeaves = 10;
    this.monographCurrentLeaf = 0;

    // An open spread shows the back of the preceding leaf on the left and
    // the next leaf's front on the right.  Move each cockpit page back one
    // leaf so that the two visible pages always describe the same vehicle.
    // Without this, a car's interior was displayed beside the following
    // car's exterior (for example, the SF90 cockpit beside the 911 GT3).
    const archiveBackPage = document.querySelector('#book-leaf-0 .book-face.back');
    const archiveBackMarkup = archiveBackPage ? archiveBackPage.innerHTML : '';
    const cockpitPageMarkup = [];

    for (let leafIndex = 1; leafIndex <= 8; leafIndex++) {
      const cockpitBackPage = document.querySelector(`#book-leaf-${leafIndex} .book-face.back`);
      cockpitPageMarkup.push(cockpitBackPage ? cockpitBackPage.innerHTML : '');
    }

    for (let leafIndex = 0; leafIndex < cockpitPageMarkup.length; leafIndex++) {
      const precedingBackPage = document.querySelector(`#book-leaf-${leafIndex} .book-face.back`);
      if (precedingBackPage && cockpitPageMarkup[leafIndex]) {
        precedingBackPage.innerHTML = cockpitPageMarkup[leafIndex];
      }
    }

    // Keep the archive page available for the closing dossier spread rather
    // than showing the Daytona cockpit twice.
    const closingBackPage = document.querySelector('#book-leaf-8 .book-face.back');
    if (closingBackPage && archiveBackMarkup) {
      closingBackPage.innerHTML = archiveBackMarkup;
    }

    for (let i = 0; i < this.monographTotalLeaves; i++) {
      const leaf = document.getElementById(`book-leaf-${i}`);
      if (leaf) {
        leaf.style.zIndex = this.monographTotalLeaves - i;

        // Front face click flips forward
        const frontFace = leaf.querySelector('.book-face.front');
        if (frontFace) {
          frontFace.addEventListener('click', (e) => {
            e.stopPropagation();
            this.flipMonographForward();
          });
        }

        // Back face click flips backward
        const backFace = leaf.querySelector('.book-face.back');
        if (backFace) {
          backFace.addEventListener('click', (e) => {
            e.stopPropagation();
            this.flipMonographBackward();
          });
        }
      }
    }

    this.updateMonographUI();
  }

  flipMonographForward() {
    if (this.monographCurrentLeaf < this.monographTotalLeaves) {
      const leafIndex = this.monographCurrentLeaf;
      const leaf = document.getElementById(`book-leaf-${leafIndex}`);
      if (leaf) {
        leaf.style.zIndex = 20 + leafIndex;
        leaf.style.zIndex = 30 + leafIndex;
        leaf.classList.add('flipped');
        setTimeout(() => {
          if (leaf.classList.contains('flipped')) {
            leaf.style.zIndex = leafIndex + 1;
          }
        }, 400);
      }
      this.monographCurrentLeaf++;
      this.updateMonographUI();
    } else {
      this.resetMonograph();
    }
  }

  flipMonographBackward() {
    if (this.monographCurrentLeaf > 0) {
      this.monographCurrentLeaf--;
      const leafIndex = this.monographCurrentLeaf;
      const leaf = document.getElementById(`book-leaf-${leafIndex}`);
      if (leaf) {
        leaf.style.zIndex = 30 + leafIndex;
        leaf.classList.remove('flipped');
        setTimeout(() => {
          if (!leaf.classList.contains('flipped')) {
            leaf.style.zIndex = this.monographTotalLeaves - leafIndex;
          }
        }, 400);
      }
      this.updateMonographUI();
    }
  }

  jumpToMonographLeaf(targetLeaf) {
    targetLeaf = Math.max(0, Math.min(this.monographTotalLeaves, targetLeaf));
    for (let i = 0; i < this.monographTotalLeaves; i++) {
      const leaf = document.getElementById(`book-leaf-${i}`);
      if (!leaf) continue;
      if (i < targetLeaf) {
        leaf.classList.add('flipped');
        leaf.style.zIndex = i + 1;
      } else {
        leaf.classList.remove('flipped');
        leaf.style.zIndex = this.monographTotalLeaves - i;
      }
    }
    this.monographCurrentLeaf = targetLeaf;
    this.updateMonographUI();
  }

  resetMonograph() {
    for (let i = 0; i < this.monographTotalLeaves; i++) {
      const leaf = document.getElementById(`book-leaf-${i}`);
      if (leaf) {
        leaf.classList.remove('flipped');
        leaf.style.zIndex = this.monographTotalLeaves - i;
      }
    }
    this.monographCurrentLeaf = 0;
    this.updateMonographUI();
  }

  updateMonographUI() {
    const bookContainer = document.getElementById('interactive-book');
    const counterEl = document.getElementById('monograph-page-counter');

    if (bookContainer) {
      if (this.monographCurrentLeaf > 0) {
        bookContainer.classList.add('open');
      } else {
        bookContainer.classList.remove('open');
      }
    }

    // Synchronize ribbon navigation tabs
    document.querySelectorAll('.monograph-ribbon-tab').forEach(tab => {
      const leafAttr = parseInt(tab.getAttribute('data-leaf'), 10);
      tab.classList.toggle('active', leafAttr === this.monographCurrentLeaf);
    });

    if (counterEl) {
      const titles = [
        'Cover // The Supercar Monograph',
        'Folio 01 // Bugatti Chiron Pur Sport W16',
        'Folio 02 // Porsche Taycan Turbo GT Weissach',
        'Folio 03 // Ferrari SF90 Stradale Hybrid',
        'Folio 04 // Porsche 911 GT3 (992) Atmospheric',
        'Folio 05 // Lamborghini Revuelto V12 HPEV',
        'Folio 06 // Aston Martin Valkyrie F1 Aerodynamics',
        'Folio 07 // McLaren P1 Ultimate Series Twin-Turbo',
        'Folio 08 // Ferrari Daytona SP3 V12 Icona',
        'Folio 09 // Certified Atelier Escrow Ledger & Dossier',
        'Back Cover // Atelier Archive'
      ];
      counterEl.textContent = titles[this.monographCurrentLeaf] || `Leaf ${this.monographCurrentLeaf}`;
    }
  }

  // --------------------------------------------------------------------------
  // 13. PRIVATE CLIENT CONCIERGE MODAL
  // --------------------------------------------------------------------------
  openConciergeModal() {
    const modal = document.getElementById('concierge-modal');
    if (modal) modal.classList.add('active');
  }

  closeConciergeModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.closest('.text-zinc-400')) return;
    const modal = document.getElementById('concierge-modal');
    if (modal) modal.classList.remove('active');
  }

  setConciergeProto(proto) {
    this.conciergeProto = proto;
    ['whatsapp', 'salon', 'phone'].forEach(p => {
      const btn = document.getElementById(`proto-${p}`);
      if (btn) {
        if (p === proto) {
          btn.className = 'px-3 py-2 rounded-xl bg-amber-500 text-black text-xs font-semibold';
        } else {
          btn.className = 'px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.1] text-zinc-300 text-xs font-semibold';
        }
      }
    });
  }

  submitConciergeBooking() {
    const name = document.getElementById('concierge-name')?.value || 'Distinguished Client';
    const tz = document.getElementById('concierge-tz')?.value || 'Dubai';
    const channelName = this.conciergeProto === 'whatsapp' ? 'WhatsApp Direct' : this.conciergeProto === 'salon' ? 'Private Salon Appointment' : 'Confidential Telephone Consultation';
    alert(`Confidential appointment request registered for ${name}. Our Private Client Director has received your inquiry via ${channelName}. You will be contacted within 2 hours.`);
    this.closeConciergeModal();
  }

  // --------------------------------------------------------------------------
  // 14. KEYBOARD ARROWS
  // 14. KEYBOARD ARROWS (3D MONOGRAPH PAGE TURNING)
  // --------------------------------------------------------------------------
  setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevVaultCard();
        this.flipMonographBackward();
      } else if (e.key === 'ArrowRight') {
        this.nextVaultCard();
        this.flipMonographForward();
      }
    });
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.apexApp = new ApexSalesApp();
});
