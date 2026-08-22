export const SERVICE_CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "carpentry", name: "Carpentry & Interiors" },
  { id: "painting", name: "Painting" },
  { id: "facility", name: "Facility Services" },
  { id: "technical", name: "AC & Technical" },
];

export const SERVICES = [
  // --- CATEGORY A: CARPENTRY & INTERIORS ---
  {
    id: "custom-woodwork",
    slug: "custom-woodwork",
    title: "Custom Woodwork & Fine Joinery",
    category: "carpentry",
    categoryName: "Carpentry & Interiors",
    tagline: "Bespoke architectural woodworking tailored to your space",
    shortDescription: "Custom precision woodwork, wall panelling, bespoke partitions, wooden fixtures, and handcrafted joinery.",
    longDescription: "From intricate wooden fluted panels to custom cabinetry and architectural woodwork, our master carpenters bring drawings to reality with high-grade marine plywood, premium teak, MDF, and designer laminates. We ensure millimeter precision, seamless joints, and durable hardware fittings.",
    icon: "Hammer",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Custom wall paneling & fluted wooden accents",
      "Handcrafted wooden partitions & screens",
      "Termite-treated, calibrated waterproof plywood",
      "Branded hardware with soft-close mechanisms",
      "On-site precision measurement & custom CAD planning"
    ],
    inclusions: [
      "Free site inspection & laser measurement",
      "Material selection guidance (Plywood, Veneer, Laminates)",
      "Factory or on-site craftsmanship with master carpenters",
      "Final edge-banding, PU/melamine polish, and site cleanup"
    ]
  },
  {
    id: "modular-kitchen",
    slug: "modular-kitchen",
    title: "Modern Modular Kitchens",
    category: "carpentry",
    categoryName: "Carpentry & Interiors",
    tagline: "Ergonomic, water-resistant, and aesthetically crafted kitchens",
    shortDescription: "L-shaped, U-shaped, Parallel, and Island modular kitchens with acrylic, PU, and laminate finishes.",
    longDescription: "Transform your cooking space into an ergonomic culinary hub. We design and install high-density moisture-resistant (HDHMR) and boiling-water-proof (BWP) modular kitchens equipped with soft-close tandem drawers, corner carousels, hydraulic lift-ups, and sleek acrylic/acrylic-laminate surfaces.",
    icon: "CookingPot",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "100% Waterproof BWP & HDHMR Marine core boards",
      "Tandem boxes, pantry pull-outs, and corner units",
      "Scratch-resistant Acrylic, PU, or Matte Laminate shutters",
      "Integrated chimney, hob, and sink provisioning",
      "Durable quartz, granite, or solid surface compatibility"
    ],
    inclusions: [
      "Ergonomic workflow planning (Work Triangle)",
      "Hardware from top brands (Hettich, Hafele, Ebco)",
      "Professional leveling, installation, and alignment",
      "Multi-year hardware warranty coordination"
    ]
  },
  {
    id: "wardrobes-cupboards",
    slug: "wardrobes-cupboards",
    title: "Wardrobes & Modular Cupboards",
    category: "carpentry",
    categoryName: "Carpentry & Interiors",
    tagline: "Space-maximizing storage with sliding, hinged, and walk-in designs",
    shortDescription: "Custom built-in wardrobes, sliding shutter systems, walk-in closets, and loft storage units.",
    longDescription: "Maximize bedroom storage without compromising elegance. From floor-to-ceiling sliding wardrobes with tinted glass and profiles to classic hinged wardrobes with internal LED sensor lighting, tie-racks, and concealed locker drawers.",
    icon: "DoorClosed",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Floor-to-ceiling sliding and hinged wardrobe configurations",
      "Fluted glass, tinted mirror, and lacquer finish options",
      "Dedicated jewelry trays, pull-out trouser racks, and concealed safes",
      "Heavy-duty top-hung bottom-guided sliding tracks",
      "Integrated warm LED profile lighting"
    ],
    inclusions: [
      "Personalized internal organizer layout planning",
      "Precision edge-banding with zero adhesive bleed",
      "Dust-proof sealing strips and soft-closing dampers",
      "Complete on-site assembly and calibration"
    ]
  },
  {
    id: "tv-units-furniture",
    slug: "tv-units-furniture",
    title: "Designer TV Units & Living Furniture",
    category: "carpentry",
    categoryName: "Carpentry & Interiors",
    tagline: "Sleek entertainment consoles, study desks, and accent tables",
    shortDescription: "Floating TV consoles, acoustic slat backdrops, marble-top media units, study tables, and custom beds.",
    longDescription: "Your living area is the focal point of your home. We craft floating TV backdrops with ambient backlighting, concealed wire channels, marble or PU shelves, matching study consoles, storage beds, and custom shoe racks.",
    icon: "Tv",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Floating TV backdrops with louvers and stone veneer",
      "Concealed electrical conduit routing for zero visible cables",
      "Custom hydraulic storage beds & cushioned headboards",
      "Ergonomic work-from-home study desks & library units",
      "Designer entry foyer units and shoe cabinets"
    ],
    inclusions: [
      "CAD visual conceptualization",
      "Premium edge finishing with high-gloss or matte laminates",
      "Sturdy heavy-load wall anchors and mounting brackets",
      "Cleanup and installation verification"
    ]
  },
  {
    id: "doors-windows",
    slug: "doors-windows",
    title: "Doors, Windows & Frames",
    category: "carpentry",
    categoryName: "Carpentry & Interiors",
    tagline: "Solid wood entrance doors, flush doors, and window casings",
    shortDescription: "Main safety doors, flush bedroom doors, French windows, wooden frames, and lock fittings.",
    longDescription: "Grand main doors that make an unforgettable first impression. We manufacture and install teakwood safety doors, laminated flush doors, bathroom waterproof FRP/WPC doors, wooden window frames, and digital lock fittings.",
    icon: "Maximize",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Solid Teakwood, Pine, and Flush door varieties",
      "CNC routed modern geometric patterns & veneer finishes",
      "High-security mortise and digital smart lock installation",
      "Waterproof bathroom doors with WPC/FRP frames"
    ],
    inclusions: [
      "Frame leveling and alignment check",
      "Heavy brass / SS hinges and tower bolts",
      "Smooth latching calibration and sound-dampening buffers"
    ]
  },
  {
    id: "carpentry-repairs",
    slug: "carpentry-repairs",
    title: "Carpentry Repairs & Maintenance",
    category: "carpentry",
    categoryName: "Carpentry & Interiors",
    tagline: "Quick, dependable fixes for hinges, locks, drawers, and squeaks",
    shortDescription: "Door realignment, lock replacements, drawer track fixes, termite restoration, and woodwork repairs.",
    longDescription: "Don't let stuck doors or squeaky hinges annoy you. Our on-call Pune carpentry specialists quickly diagnose and fix loose hinges, jammed sliding tracks, broken locks, swollen wooden doors, and damaged drawer channels.",
    icon: "Wrench",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Emergency door opening & lock replacement",
      "Hydraulic hinge replacement & realignment",
      "Sliding wardrobe track and roller replacement",
      "Termite damage wood replacement & treatment"
    ],
    inclusions: [
      "Prompt doorstep service across Pune",
      "Upfront pricing with zero hidden labour surcharges",
      "Authentic replacement hardware"
    ]
  },

  // --- CATEGORY B: PAINTING SERVICES ---
  {
    id: "interior-exterior-painting",
    slug: "interior-exterior-painting",
    title: "Interior & Exterior Painting",
    category: "painting",
    categoryName: "Painting Services",
    tagline: "Flawless wall finishes, texture designs, and weatherproof exterior coating",
    shortDescription: "Complete home painting, luxury interior emulsions, exterior weather-shield coating, and royal texture designs.",
    longDescription: "Revitalize your home or commercial building with premium paints from Asian Paints, Berger, and Dulux. We specialize in surface preparation, putty application, sanding with dustless machines, primer coating, and rich velvet emulsions with texture accent walls.",
    icon: "Paintbrush",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Interior Royale, Lustre, and Velvet Emulsions",
      "Exterior Apex Ultima weatherproof coatings with rain barrier",
      "Artistic texture designs, stencil work, and metallic finishes",
      "PU / Melamine wood polishing for doors and furniture",
      "Damp-proof waterproofing and crack sealing"
    ],
    inclusions: [
      "Laser area estimation and color consultation",
      "Complete floor and furniture masking protection",
      "Multi-coat primer, acrylic putty, and dual top-coat",
      "Deep post-painting site cleanup"
    ]
  },

  // --- CATEGORY C: FACILITY & CORPORATE SUPPORT ---
  {
    id: "corporate-facility-support",
    slug: "corporate-facility-support",
    title: "Corporate Support & Facility Staffing",
    category: "facility",
    categoryName: "Facility Services",
    tagline: "Trained workforce solutions for corporate offices, IT parks, and residential complexes",
    shortDescription: "Deployment of corporate support staff, accountants, data entry operators, janitors, and pantry staff in Pune.",
    longDescription: "Kailaash Enterprises delivers dependable facility management staffing for corporate offices, IT companies, co-working spaces, and commercial establishments in Pune. We provide verified, trained, and disciplined personnel on flexible monthly contract models.",
    icon: "Users",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Corporate support staff & office assistants",
      "Junior accountants & billing personnel",
      "Data entry operators & front-desk coordinators",
      "Trained pantry boys & hospitality staff",
      "Commercial housekeeping & janitorial crews"
    ],
    inclusions: [
      "Background-verified & police-verified candidates",
      "Statutory compliance and punctual payroll management",
      "Immediate replacement guarantee on absenteeism",
      "Dedicated account manager for corporate clients"
    ]
  },

  // --- CATEGORY D: AC & TECHNICAL MAINTENANCE ---
  {
    id: "ac-repair-installation",
    slug: "ac-repair-installation",
    title: "AC Repair & New Installation",
    category: "technical",
    categoryName: "AC & Technical",
    tagline: "Certified HVAC technicians for split, cassette, and ductable AC systems",
    shortDescription: "AC jet servicing, gas charging, compressor repair, new AC installation, and annual maintenance (AMC).",
    longDescription: "Keep your cooling systems at peak performance with prompt AC services. Our certified technicians handle split AC jet-pump wet servicing, copper piping, refrigerant leak fixes, motherboard repairs, and commercial cassette unit installations.",
    icon: "Wind",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "High-pressure water jacket servicing for indoor & outdoor units",
      "Precision gas leak detection & authentic refrigerant charging (R32, R410A)",
      "New Split/Inverter AC installation & copper pipe laying",
      "PCB repair, fan motor, and compressor replacement"
    ],
    inclusions: [
      "30-day post-service service warranty",
      "Digital temperature & power draw check",
      "Clean execution without wall spillages"
    ]
  },
  {
    id: "electrical-plumbing-cctv",
    slug: "electrical-plumbing-cctv",
    title: "Electrical, Plumbing & CCTV Systems",
    category: "technical",
    categoryName: "AC & Technical",
    tagline: "Complete residential & commercial infrastructure maintenance",
    shortDescription: "Complete wiring, DB installations, plumbing leakages, sanitary fittings, CCTV cameras, and metal fabrication.",
    longDescription: "One call solves all your electrical, plumbing, and security requirements. We provide licensed electricians for MCB distribution and LED lighting, master plumbers for concealed pipe repairs and pressure pumps, CCTV security installations, and MS/SS metal fabrication work.",
    icon: "ShieldAlert",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Complete electrical rewiring, DB panel box & inverter installation",
      "Concealed plumbing repairs, CPVC line fitting & sanitary ware setup",
      "HD / IP CCTV security camera installation & mobile remote view",
      "MS / SS safety grills, railings, and shed fabrication"
    ],
    inclusions: [
      "Standard safety protocols and quality cables (Finolex, Polycab)",
      "High-grade CPVC / UPVC fittings (Astral, Supreme)",
      "Clean site handover and testing report"
    ]
  }
];
