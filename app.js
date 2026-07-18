/* ==========================================================================
   BrickFlame Waste Solutions - Pure Vanilla JS Controller & Router
   ========================================================================== */

// --- 1. Pure JS Icons Mapper (Inline SVGs) ---
function getIcon(name, classList = "w-4 h-4") {
  const icons = {
    Hammer: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.785 2.012a2.22 2.22 0 0 1 3.13 0l4.073 4.072a2.22 2.22 0 0 1 0 3.13l-4.524 4.524-7.202-7.202z"></path><path d="m14 13-8.5 8.5H3v-2.5L11.5 10.5"></path><path d="m20.5 7.5-3-3"></path><path d="m12 11.5 1.5 1.5"></path></svg>`,
    LayoutGrid: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>`,
    Wrench: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    Activity: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    Users: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    GraduationCap: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`,
    Flame: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
    Leaf: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 5.5a7 7 0 0 1-13.7 3.2M11 20l-4-4m4 4v-4"></path></svg>`,
    Compass: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    ShieldCheck: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"></path><polyline points="9 11 11 13 15 9"></polyline></svg>`,
    Mail: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    Phone: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    Calendar: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>`,
    ArrowRight: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    CheckCircle2: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`,
    ChevronRight: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
    X: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>`,
    Clock: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    MapPin: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    Send: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
    HelpCircle: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>`,
    FileText: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`,
    Image: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>`,
    Award: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    Lightbulb: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`,
    Play: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>`,
    AlertTriangle: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>`,
    ArrowUpRight: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
    Sun: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>`,
    Moon: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`,
    Menu: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`,
    ArrowUp: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="19" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
    Trash2: `<svg class="${classList}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"></path></svg>`
  };
  return icons[name] || icons.Hammer;
}

// --- 2. Database Arrays ---
const FOUNDERS = [
  {
    name: "Price Dodzi",
    role: "C.E.O and Site Engineer",
    bio: "As C.E.O and Lead Site Engineer, Price leads the physical design and construction of every brick incinerator. With advanced training in environmental engineering, he ensures each structure meets rigorous thermal performance and safety standards, optimizing natural draft and heat retention for cleaner combustion.",
    image: "/src/assets/images/prince_dodzi_1784315867465.jpg"
  },
  {
    name: "Solomon Yaw Adeklo",
    role: "Project Manager",
    bio: "Solomon oversees project planning, logistics, client communications, and on-site scheduling. His expertise in environmental project management guarantees that every construction project, from domestic builds to industrial systems, is executed on time, within budget, and with exceptional workmanship.",
    image: "/src/assets/images/solomon_adeklo_1784315879708.jpg"
  }
];

const SERVICES = [
  {
    id: "design-construction",
    title: "Design and Construction of Cone-Shaped Brick Incinerators",
    description: "End-to-end bespoke bricklaying and architectural construction of high-efficiency brick incinerators.",
    icon: "Hammer",
    longDescription: "Our signature service uses premium fired clay bricks and heat-resistant firebricks to build custom-sized cone-shaped incinerators. We utilize precise thermodynamic calculations to ensure natural airflow is optimized, reducing smoke and maximizing heat retention."
  },
  {
    id: "custom-incinerators",
    title: "Custom-Built Incinerators for Homes & Businesses",
    description: "Sized perfectly to match the waste production rates of estates, schools, hotels, and agricultural projects.",
    icon: "LayoutGrid",
    longDescription: "We don't believe in a one-size-fits-all approach. We consult with households, residential estates, schools, hotels, farms, and factories to build incinerators with capacities precisely tailored to their daily combustible waste generation rates."
  },
  {
    id: "installation-systems",
    title: "Installation of Complete Waste Incineration Systems",
    description: "Integrating protective rain caps, heavy steel grates, ash doors, and high-draft chimney stacks.",
    icon: "Wrench",
    longDescription: "Beyond the brick structure, we engineer and install the critical hardware including custom-welded steel grates, secure waste loading doors, and secondary air control dampers for maximum durability and operator safety."
  },
  {
    id: "maintenance-repairs",
    title: "Incinerator Maintenance and Repair Services",
    description: "Masonry restoration, refractory brick replacement, chimney soot cleaning, and grate upgrades.",
    icon: "Activity",
    longDescription: "To maintain long-term reliability, we offer routine checkups, clean blockage paths, patch weathered exterior mortar rendering, replace individual damaged refractory bricks, and service steel doors and grates."
  },
  {
    id: "technical-consultation",
    title: "Technical Consultation on Waste Management",
    description: "Professional evaluations on waste segregation, layout design, and regulatory compliance.",
    icon: "Users",
    longDescription: "Our engineering experts evaluate your site and waste stream to provide actionable advice on sorting, recycling integration, safe waste reduction policies, and environmental standards compliance in Ghana."
  },
  {
    id: "operator-training",
    title: "Operator Training & Safe Usage",
    description: "Hands-on training for staff and community members on proper waste segregation, loading, and cleaning.",
    icon: "GraduationCap",
    longDescription: "Every incinerator project comes with comprehensive on-site training. We teach your designated operators how to sort waste, safe loading protocols, ash removal routines, basic troubleshooting, and emergency safety operations."
  }
];

const CONSTRUCTION_STEPS = [
  {
    step: 1,
    title: "Site Selection and Planning",
    description: "The team selects a stable ground location with excellent drainage. It is critical to keep the incinerator at an adequate safety clearance distance from nearby buildings, high trees, power lines, and pedestrian walkways.",
    image: "./src/assets/images/step1.png",
    safetyConsideration: "Ensure compliance with local environmental regulations and check prevailing wind directions to minimize drift."
  },
  {
    step: 2,
    title: "Preparing the Foundation",
    description: "We mark out and excavate the soil before casting a reinforced concrete slab. This solid base distributes the heavy weight of the masonry structure and prevents any structural shifting, cracking, or sinking over time.",
    image: "./src/assets/images/step 2.png",
    safetyConsideration: "Concrete must be vibrated to eliminate air pockets and allowed to set fully for maximum structural stability."
  },
  {
    step: 3,
    title: "Constructing the Ash Chamber",
    description: "The lower brick section forms the ash chamber. It acts as a collection bin below the combustion grate. We incorporate a custom steel ash-removal door to make cleaning out cold ash straightforward and safe.",
    image: "./src/assets/images/step3.png",
    safetyConsideration: "Ensure the brick layout leaves perfectly plumb and square margins for the flush metal door frame."
  },
  {
    step: 4,
    title: "Installing Primary Air Inlets",
    description: "Air inlet openings are carefully engineered in the lower brick courses surrounding the ash chamber. These draw fresh oxygen into the firebed, supporting a clean, fast burn.",
    image: "./src/assets/images/step4.png",
    safetyConsideration: "Inlets must remain clear of mortar droppings during bricklaying to guarantee unimpeded draft flow."
  },
  {
    step: 5,
    title: "Installing the Metal Support Grate",
    description: "A heavy-duty, high-temperature steel support grate is mounted between the ash chamber and the combustion chamber. It suspends waste securely above the air inlets.",
    image: "./src/assets/images/step 5.png",
    safetyConsideration: "Allow a small thermal expansion gap around the grate edges to prevent expanding steel from cracking the bricks."
  },
  {
    step: 6,
    title: "Constructing the Combustion Chamber",
    description: "Masons lay fired clay bricks with refractory mortar to form the main combustion chamber. The interior is lined with premium firebricks in high-temperature zones to withstand thermal shock.",
    image: "./src/assets/images/step 6.png",
    safetyConsideration: "Ensure thick, tight joints with dedicated refractory fireclay mortar in the hot-zone core."
  },
  {
    step: 7,
    title: "Installing the Waste Loading Door",
    description: "A heavy cast-iron or thick steel loading door with a robust hinge mechanism is securely anchored into the brick wall. This door allows operators to load combustible waste safely.",
    image: "./src/assets/images/step 7.png",
    safetyConsideration: "The door is fitted with a cool-touch handle and a secure latch to prevent accidental opening during a active burn."
  },
  {
    step: 8,
    title: "Building the Cone-Shaped Upper Chamber",
    description: "The masons start tapering the brick courses inward. This cone profile is key: it concentrates heat, draws fresh air up rapidly (venturi effect), and distributes structural weight stably.",
    image: "./src/assets/images/step 8.png",
    safetyConsideration: "Each brick course must be precisely offset inward with careful level checks to keep the cone structurally sound."
  },
  {
    step: 9,
    title: "Constructing the Chimney System",
    description: "A brick-lined or steel flue chimney is erected at the cone peak to draft exhaust gases upward, keeping ground-level air clean and drawing fresh oxygen through the primary inlets.",
    image: "./src/assets/images/step 9.png",
    safetyConsideration: "A protective wire spark-arrestor and weather-proof rain cap are integrated onto the chimney peak."
  },
  {
    step: 10,
    title: "Exterior Finishing",
    description: "A high-durability plaster render or weatherproofing wash is applied to the exterior brickwork. This shields the outer mortar from rainwater and adds a clean, professional company aesthetic.",
    image: "./src/assets/images/step 10.png",
    safetyConsideration: "The plaster must be formulated to resist thermal expansion and weather cracking."
  },
  {
    step: 11,
    title: "Drying and Curing",
    description: "Crucial stage where the finished structure is left undisturbed for up to 14 days. Moisture in the refractory cement evaporates naturally to avoid rapid boiling during first fires.",
    image: "./src/assets/images/step 11.png",
    safetyConsideration: "Do not rush this step. Lighting fires too early will turn trapped water into steam, causing internal brick cracks."
  },
  {
    step: 12,
    title: "Inspection and Initial Testing",
    description: "Price Dodzi carries out a comprehensive safety inspection. A controlled low-temperature test burn validates the natural draft pull, airflow distribution, door seals, and smoke behavior.",
    image: "./src/assets/images/step 12.png",
    safetyConsideration: "Observe the external walls for any heat leakage, verify smooth draft draft, and confirm proper chimney emissions."
  },
  {
    step: 13,
    title: "Commissioning and Operator Training",
    description: "We officially hand over the system and deliver our step-by-step training. We teach waste sorting (segregation), safety controls, and proper loading quantities to prolong incinerator lifespan.",
    image: "./src/assets/images/step 13.png",
    safetyConsideration: "Emphasize to operators the critical rule: never burn plastics, batteries, or electronic waste."
  }
];

const FAQS = [
  {
    question: "Why choose brick construction instead of simple sheet metal or clay?",
    answer: "Fired clay bricks and firebricks provide superior thermal mass, meaning they hold heat for extremely efficient combustion. Unlike metal incinerators, brick does not rust under the heavy rains of Ghana, warp under extreme thermal stress, or corrode from acidic smoke gases, ensuring a service life of many years rather than months."
  },
  {
    question: "How long does the construction process take on-site?",
    answer: "Typically, the construction of a standard residential or institutional brick incinerator takes 7 to 10 days of on-site masonry work, followed by a mandatory 10 to 14-day curing period to allow all moisture in the refractory mortar to dry slowly before commissioning."
  },
  {
    question: "What types of waste can be safely incinerated in a brick incinerator?",
    answer: "Our modern incinerators are designed to burn dry, combustible organic materials such as cardboard, paper, agricultural biomass (leaves, coconut husks, sawdust), wood waste, and dry non-recyclable combustible packaging. They are NOT designed to burn plastics, rubber, electronic waste, or heavy chemical waste."
  },
  {
    question: "Can the combustion ash be reused?",
    answer: "Yes, but ONLY if clean biomass (wood, paper, agricultural residues) is incinerated. Clean biomass ash is high in potassium, calcium, and magnesium, making it excellent for acidic soil conditioning, compost enhancement, traditional soap making, or brick manufacturing. Ash from mixed municipal waste contains heavy metals and must be safely landfilled."
  },
  {
    question: "Do you construct custom incinerators for schools and hospitals?",
    answer: "Absolutely. We customize the combustion chamber volume, grate heavy-dutiness, and loading doors to match the waste production rates and types of each client—ranging from small backyard models for single homes to large-scale systems for clinics and schools."
  },
  {
    question: "Where is BrickFlame Waste Solutions Limited located?",
    answer: "Our head office and testing facility is located at New Sebrepor, Tema, in the Greater Accra Region of Ghana. However, we travel to construct custom incinerators for communities, farms, and businesses throughout Ghana and neighboring countries."
  }
];

const BLOG_POSTS = [
  {
    id: "post-1",
    title: "Unlocking Circular Economics: The Power of Biomass Ash in Ghana",
    excerpt: "Learn how farmers in Greater Accra are utilizing clean biomass ash as a rich soil supplement and potassium source for crops.",
    category: "Sustainability",
    date: "July 15, 2026",
    author: "Solomon Yaw Adeklo",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
    content: "For generations, agricultural residues in Ghana—such as coconut husks, crop stalks, and cocoa shells—have been burned in wild, open-air heaps. This open burning releases heavy smoke, offers poor ash quality, and poses high fire risks. By burning these clean agricultural residues inside a controlled, modern cone-shaped brick incinerator, we recover clean, mineral-rich ash. This ash is packed with calcium carbonate, magnesium, and potassium, which acts as a fantastic organic pH neutralizer for Ghana's acidic soils. Integrating ash back into the soil creates a closed-loop organic system that supports both crop yields and waste reduction."
  },
  {
    id: "post-2",
    title: "Why waste segregation is the backbone of sustainable incineration",
    excerpt: "An essential guide to sorting municipal waste, protecting operator health, and achieving zero-hazard emissions.",
    category: "Waste Management",
    date: "June 28, 2026",
    author: "Price Dodzi",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600",
    content: "At BrickFlame Waste Solutions Limited, we emphasize that our incinerators are thermodynamic tools, not magical dustbins. What goes in directly determines what comes out. Mixing PVC plastics, batteries, or old electronics into the burn stream releases toxic dioxins and heavy metals into the atmosphere and poisons the resulting ash. When waste is rigorously sorted beforehand—diverting organic compostables, recycling metals/glass, and incinerating only paper, wood, and dry residues—incineration is clean, efficient, and exceptionally safe. This guide outlines practical community segregation models we implement across schools and estates."
  },
  {
    id: "post-3",
    title: "The Thermodynamic Advantages of Cone-Shaped Chimney Stacks",
    excerpt: "Diving into the fluid dynamics and masonry science that make cone-shaped brick incinerators self-drawing.",
    category: "Engineering",
    date: "May 14, 2026",
    author: "Price Dodzi",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&q=80&w=600",
    content: "Why are our incinerators shaped like cones instead of standard cylinders or squares? It comes down to draft. As air heats up inside the primary chamber, it expands and rises. In a straight cylinder, friction against the walls slows the gas. But in a cone, the narrowing walls accelerate the upward gas speed—a physical phenomenon known as the Venturi effect. This rapid rise creates a vacuum at the base, drawing fresh oxygen in through the primary inlets and driving complete, clean combustion without mechanical blowers or electricity."
  }
];

const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Completed Institutional Incinerator in Tema",
    category: "Finished Projects",
    image: "/src/assets/images/hero_incinerator_1784315894663.jpg"
  },
  {
    id: "g2",
    title: "Reinforced Concrete Foundation Preparation",
    category: "Construction",
    image: "/src/assets/images/step2_foundation_1784315921228.jpg"
  },
  {
    id: "g3",
    title: "Precise Brickwork on the Ash Chamber",
    category: "Construction",
    image: "/src/assets/images/step3_ash_chamber_1784315936387.jpg"
  },
  {
    id: "g4",
    title: "Site Surveying & Safety Planning",
    category: "Planning",
    image: "/src/assets/images/step1_site_planning_1784315909010.jpg"
  },
  {
    id: "g5",
    title: "Fired Clay Brick Stack Ready for Masonry",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g6",
    title: "Environmental Testing of Draft Emissions",
    category: "Testing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Emmanuel K. Amponsah",
    role: "Chief Medical Director",
    organization: "Grace Memorial Clinic, Tema",
    content: "BrickFlame constructed a tailored brick incinerator for our non-hazardous combustible waste. The engineering is outstanding—it handles our paper waste safely, requires zero electricity, and has significantly improved our overall clinical sanitation.",
    rating: 5
  },
  {
    name: "Madam Faustina Mensah",
    role: "Headmistress",
    organization: "New Sebrepor Academy",
    content: "With over 800 students, managing waste was a continuous cost burden. Price and Solomon's team built our cone incinerator, trained our janitors, and conducted educational sessions on waste sorting. It has changed our school environment completely.",
    rating: 5
  },
  {
    name: "Agyeman Badu",
    role: "Estate Manager",
    organization: "Green Crest Residential Estates",
    content: "The aesthetic design of the brick incinerator blends perfectly with our landscape. It operates cleanly, and the maintenance team is prompt. Highly recommend BrickFlame for eco-friendly community solutions.",
    rating: 5
  }
];

// --- 3. App State Variables ---
let currentPage = "home";
let activeStepIdx = 0;
let blogFilter = "All";
let galleryFilter = "All";
let selectedService = null;
let selectedBlog = null;
let lightboxImage = null;
let currentTestimonialIdx = 0;
let mobileMenuOpen = false;
let statsCounted = false;

// Count-down timer state
const targetCountdownTime = new Date().getTime() + (140 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (28 * 60 * 1000); // 12 days, 14 hours, 28 minutes from load

// Live Stats Values
const finalStats = { projects: 42, communities: 18, experience: 5, satisfaction: 99 };
let currentStats = { projects: 0, communities: 0, experience: 0, satisfaction: 0 };

// --- 4. Navigation & Page Handling ---
const validPages = ["home", "about", "services", "incinerators", "process", "ash", "prototype", "gallery", "blog", "faq", "contact"];

function detectPage() {
  const path = window.location.pathname;
  if (path.endsWith("/about.html")) return "about";
  if (path.endsWith("/services.html")) return "services";
  if (path.endsWith("/incinerators.html")) return "incinerators";
  if (path.endsWith("/process.html")) return "process";
  if (path.endsWith("/ash.html")) return "ash";
  if (path.endsWith("/prototype.html")) return "prototype";
  if (path.endsWith("/gallery.html")) return "gallery";
  if (path.endsWith("/blog.html")) return "blog";
  if (path.endsWith("/faq.html")) return "faq";
  if (path.endsWith("/contact.html")) return "contact";
  return "home";
}

function setPage(pageName) {
  if (pageName === "home") {
    window.location.href = "index.html";
  } else if (validPages.includes(pageName)) {
    window.location.href = pageName + ".html";
  } else {
    window.location.href = "index.html";
  }
}
window.setPage = setPage;

// --- 5. Event Listeners Delegation Setup ---
function setupEventListeners() {
  // Logo Click
  document.addEventListener("click", (e) => {
    const logoLink = e.target.closest("#header-logo");
    if (logoLink) {
      e.preventDefault();
      setPage("home");
    }
  });

  // Navigation menu clicks (delegation)
  document.addEventListener("click", (e) => {
    const navLink = e.target.closest(".nav-link-btn");
    if (navLink) {
      const page = navLink.getAttribute("data-page");
      if (page) {
        e.preventDefault();
        setPage(page);
      }
    }
  });

  // Theme Toggle Button
  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("#theme-toggle-btn");
    if (toggleBtn) {
      const isDark = document.documentElement.classList.toggle("dark");
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (err) {
        console.warn("localStorage is not accessible:", err);
      }
      document.body.setAttribute("data-theme", isDark ? "dark" : "light");
      renderThemeToggler(isDark);
    }
  });

  // Mobile Menu Toggle Hamburger
  document.addEventListener("click", (e) => {
    const menuToggle = e.target.closest("#mobile-menu-toggle");
    if (menuToggle) {
      const drawer = document.getElementById("mobile-nav-drawer");
      if (drawer) {
        const isCurrentlyHidden = drawer.classList.contains("hidden");
        if (isCurrentlyHidden) {
          drawer.classList.remove("hidden");
          menuToggle.innerHTML = getIcon("X", "w-5 h-5");
          mobileMenuOpen = true;
        } else {
          drawer.classList.add("hidden");
          menuToggle.innerHTML = getIcon("Menu", "w-5 h-5");
          mobileMenuOpen = false;
        }
      }
    } else {
      // Click outside drawer to close it
      const drawer = document.getElementById("mobile-nav-drawer");
      const toggle = document.getElementById("mobile-menu-toggle");
      if (drawer && !drawer.classList.contains("hidden") && toggle) {
        if (!drawer.contains(e.target) && !toggle.contains(e.target)) {
          drawer.classList.add("hidden");
          toggle.innerHTML = getIcon("Menu", "w-5 h-5");
          mobileMenuOpen = false;
        }
      }
    }
  });

  // Services Modal Opens
  document.addEventListener("click", (e) => {
    const specBtn = e.target.closest(".service-spec-btn-action");
    if (specBtn) {
      const serviceId = specBtn.getAttribute("data-id");
      selectedService = SERVICES.find(s => s.id === serviceId) || null;
      renderServiceModal();
    }
  });

  // Close Service Modal
  document.addEventListener("click", (e) => {
    if (e.target.closest("#close-srv-modal") || e.target.closest("#close-srv-modal-btn") || (e.target.classList.contains("modal-overlay") && e.target.id === "service-modal-overlay")) {
      selectedService = null;
      document.getElementById("service-modal-overlay")?.remove();
    }
  });

  // Service Modal redirect to Contact Us
  document.addEventListener("click", (e) => {
    if (e.target.closest("#srv-modal-contact-btn")) {
      selectedService = null;
      document.getElementById("service-modal-overlay")?.remove();
      setPage("contact");
    }
  });

  // Step Navigations on Process View
  document.addEventListener("click", (e) => {
    const nextBtn = e.target.closest("#step-next-btn");
    if (nextBtn) {
      if (activeStepIdx < CONSTRUCTION_STEPS.length - 1) {
        activeStepIdx++;
        renderProcessStepCard();
      }
    }

    const prevBtn = e.target.closest("#step-prev-btn");
    if (prevBtn) {
      if (activeStepIdx > 0) {
        activeStepIdx--;
        renderProcessStepCard();
      }
    }

    const stepItem = e.target.closest(".step-menu-item");
    if (stepItem) {
      const stepNum = parseInt(stepItem.getAttribute("data-step"));
      activeStepIdx = stepNum - 1;
      renderProcessStepCard();
    }
  });

  // FAQ Accordion Toggle
  document.addEventListener("click", (e) => {
    const faqTrigger = e.target.closest(".accordion-trigger");
    if (faqTrigger) {
      const item = faqTrigger.closest(".accordion-item");
      const isCurrentlyOpen = item.classList.contains("open");
      
      // Close all other items
      document.querySelectorAll(".accordion-item").forEach(acc => {
        acc.classList.remove("open");
        const content = acc.querySelector(".accordion-content");
        if (content) content.style.maxHeight = null;
      });

      if (!isCurrentlyOpen) {
        item.classList.add("open");
        const content = item.querySelector(".accordion-content");
        if (content) content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });

  // Blog Category Filters
  document.addEventListener("click", (e) => {
    const filterBtn = e.target.closest(".blog-cat-btn");
    if (filterBtn) {
      blogFilter = filterBtn.getAttribute("data-cat");
      renderBlogGrid();
    }
  });

  // Read Blog Post
  document.addEventListener("click", (e) => {
    const readBtn = e.target.closest(".blog-card-read-btn");
    if (readBtn) {
      const blogId = readBtn.getAttribute("data-id");
      selectedBlog = BLOG_POSTS.find(b => b.id === blogId) || null;
      renderBlogModal();
    }
  });

  // Close Blog Modal
  document.addEventListener("click", (e) => {
    if (e.target.closest("#close-blog-modal") || e.target.closest("#close-blog-modal-btn") || (e.target.classList.contains("modal-overlay") && e.target.id === "blog-modal-overlay")) {
      selectedBlog = null;
      document.getElementById("blog-modal-overlay")?.remove();
    }
  });

  // Gallery Filters
  document.addEventListener("click", (e) => {
    const filterBtn = e.target.closest(".gallery-cat-btn");
    if (filterBtn) {
      galleryFilter = filterBtn.getAttribute("data-cat");
      renderGalleryGrid();
    }
  });

  // Gallery Lightbox Open
  document.addEventListener("click", (e) => {
    const galleryCard = e.target.closest(".gallery-item-card");
    if (galleryCard) {
      const itemId = galleryCard.getAttribute("data-id");
      lightboxImage = GALLERY_ITEMS.find(item => item.id === itemId) || null;
      renderLightboxModal();
    }
  });

  // Close Gallery Lightbox
  document.addEventListener("click", (e) => {
    if (e.target.closest("#close-gal-modal") || (e.target.classList.contains("modal-overlay") && e.target.id === "lightbox-overlay")) {
      lightboxImage = null;
      document.getElementById("lightbox-overlay")?.remove();
    }
  });

  // Testimonial Nav dots Click
  document.addEventListener("click", (e) => {
    const dotBtn = e.target.closest(".testimonial-nav-dot");
    if (dotBtn) {
      currentTestimonialIdx = parseInt(dotBtn.getAttribute("data-idx"));
      renderTestimonials();
    }
  });

  // Left & Right Sidebar Inquiry Submit Form
  document.addEventListener("submit", (e) => {
    const inquiryForm = e.target.closest("#sidebar-inquiry-form") || e.target.closest("#mobile-inquiry-form");
    if (inquiryForm) {
      e.preventDefault();
      alert("Thank you! Your inquiry has been submitted. Solomon Adeklo or Price Dodzi will contact you shortly.");
      inquiryForm.reset();
    }
  });

  // Main Page contact us submit form
  document.addEventListener("submit", (e) => {
    const contactForm = e.target.closest("#main-contact-form");
    if (contactForm) {
      e.preventDefault();
      const phoneInput = document.getElementById("contact-phone")?.value;
      const emailInput = document.getElementById("contact-email")?.value;
      
      // Simple custom validation
      if (!phoneInput && !emailInput) {
        alert("Please provide either your Phone Number or Email Address so we can reach you.");
        return;
      }
      
      alert("Success! Your detailed request has been logged. Price Dodzi (C.E.O) will review your specifications and contact you.");
      contactForm.reset();
    }
  });
}

// --- 6. Helper & Timers Functions ---

// Run Stat Counter Up animation once
function startStatCounters() {
  if (statsCounted) return;
  statsCounted = true;
  
  const duration = 1200; // ms
  const intervalTime = 30;
  const steps = duration / intervalTime;
  let currentStep = 0;

  const statTimer = setInterval(() => {
    currentStep++;
    currentStats.projects = Math.min(finalStats.projects, Math.round((finalStats.projects / steps) * currentStep));
    currentStats.communities = Math.min(finalStats.communities, Math.round((finalStats.communities / steps) * currentStep));
    currentStats.experience = Math.min(finalStats.experience, Math.round((finalStats.experience / steps) * currentStep));
    currentStats.satisfaction = Math.min(finalStats.satisfaction, Math.round((finalStats.satisfaction / steps) * currentStep));

    renderStatsNumbersOnly();

    if (currentStep >= steps) {
      clearInterval(statTimer);
    }
  }, intervalTime);
}

function renderStatsNumbersOnly() {
  const pEl = document.getElementById("stat-projects");
  const cEl = document.getElementById("stat-communities");
  const eEl = document.getElementById("stat-experience");
  const sEl = document.getElementById("stat-satisfaction");

  if (pEl) pEl.textContent = currentStats.projects + "+";
  if (cEl) cEl.textContent = currentStats.communities + "+";
  if (eEl) eEl.textContent = currentStats.experience;
  if (sEl) sEl.textContent = currentStats.satisfaction + "%";
}

// Auto Testimonial slider rotation
function startTestimonialsTimer() {
  setInterval(() => {
    currentTestimonialIdx = (currentTestimonialIdx + 1) % TESTIMONIALS.length;
    renderTestimonials();
  }, 6500);
}

// Count-down for prototype reveal
function startPrototypeCountdown() {
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetCountdownTime - now;

    const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

    const dEl = document.getElementById("timer-days");
    const hEl = document.getElementById("timer-hours");
    const mEl = document.getElementById("timer-minutes");
    const sEl = document.getElementById("timer-seconds");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
    if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}

// Render dynamic theme button graphic
function renderThemeToggler(isDark) {
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) {
    btn.innerHTML = isDark 
      ? getIcon("Sun", "w-4 h-4 text-gold-yellow") 
      : getIcon("Moon", "w-4 h-4 text-brick-red");
  }
}

// --- 7. Page Templating & Rendering ---

function render() {
  // Sync page title
  const formattedTitle = currentPage === "home" ? "Home" : (currentPage === "incinerators" ? "Technology" : (currentPage === "process" ? "13-Step Process" : currentPage.charAt(0).toUpperCase() + currentPage.slice(1)));
  document.title = `${formattedTitle} | BrickFlame Waste Solutions Limited - Tema, Ghana`;

  // Sync Nav active classes
  document.querySelectorAll(".nav-link-btn").forEach(link => {
    const page = link.getAttribute("data-page");
    if (page === currentPage) {
      link.classList.add("text-brick-red", "bg-brick-red/5");
      link.classList.remove("text-neutral-600", "dark:text-neutral-300");
    } else {
      link.classList.remove("text-brick-red", "bg-brick-red/5");
      link.classList.add("text-neutral-600", "dark:text-neutral-300");
    }
  });

  const mainContainer = document.getElementById("main-content-area");
  if (mainContainer) {
    // If empty or placeholder, render proper template
    if (!mainContainer.children || mainContainer.children.length === 0 || mainContainer.innerHTML.trim() === "") {
      let pageHTML = "";

      switch (currentPage) {
        case "home":
          pageHTML = renderHome();
          break;
        case "about":
          pageHTML = renderAbout();
          break;
        case "services":
          pageHTML = renderServices();
          break;
        case "incinerators":
          pageHTML = renderTechnology();
          break;
        case "process":
          pageHTML = renderProcess();
          break;
        case "ash":
          pageHTML = renderAshCircularity();
          break;
        case "prototype":
          pageHTML = renderPrototype();
          break;
        case "gallery":
          pageHTML = renderGallery();
          break;
        case "blog":
          pageHTML = renderBlog();
          break;
        case "faq":
          pageHTML = renderFAQs();
          break;
        case "contact":
          pageHTML = renderContact();
          break;
        default:
          pageHTML = renderHome();
      }

      mainContainer.innerHTML = `<div class="animate-fadeIn">${pageHTML}</div>`;
    }
  }

  // Run dynamic UI setups based on rendered views
  if (currentPage === "home") {
    startStatCounters();
    renderStatsNumbersOnly();
  } else if (currentPage === "process") {
    renderProcessStepCard();
  } else if (currentPage === "blog") {
    renderBlogGrid();
  } else if (currentPage === "gallery") {
    renderGalleryGrid();
  }

  // Sync dynamic subcomponents
  renderTestimonials();
}

/* ==================== PAGE RENDERERS ==================== */

function renderHome() {
  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Hero Section -->
      <section class="relative rounded-3xl overflow-hidden min-h-[480px] md:min-h-[580px] flex items-center justify-center p-8 md:p-16 border border-neutral-200/50 dark:border-neutral-900 bg-neutral-950 shadow-2xl">
        <div class="absolute inset-0 z-0">
          <img 
            src="./src/assets/images/hero_incinerator_1784315894663.jpg" 
            alt="BrickFlame Incinerator Banner" 
            class="w-full h-full object-cover opacity-35"
            referrerpolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"></div>
        </div>

        <div class="relative z-10 text-center max-w-4xl space-y-6 md:space-y-8">
          <span class="inline-flex items-center gap-1.5 bg-brick-red/20 text-brick-red text-xs uppercase tracking-widest font-mono font-bold px-3 py-1.5 rounded-full border border-brick-red/30">
            <span class="w-1.5 h-1.5 rounded-full bg-brick-red animate-pulse"></span>
            Sustainable Environmental Engineering
          </span>

          <h1 class="text-3.5xl md:text-6xl font-display font-extrabold text-white leading-tight tracking-tight" style="margin:0">
            Building Sustainable Waste <br class="hidden sm:inline" />
            <span class="text-brick-red">Management Solutions</span>
          </h1>

          <p class="text-neutral-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light" style="margin:0">
            Professional Design • Durable Brick Construction • Cleaner Communities. Empowering estates, schools, healthcare centers, and households with low-maintenance, high-efficiency cone brick incinerators.
          </p>

          <div class="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              id="hero-quote-btn"
              onclick="setPage('contact')" 
              class="bg-brick-red hover:bg-orange-flame text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-brick-red/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2"
            >
              Request Quote ${getIcon("ArrowUpRight", "w-4 h-4")}
            </button>
            <button 
              id="hero-contact-btn"
              onclick="setPage('about')" 
              class="bg-neutral-800/80 hover:bg-neutral-700/80 text-white text-xs font-bold px-6 py-3.5 rounded-xl border border-neutral-700 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Explore Our Vision
            </button>
          </div>
        </div>
      </section>

      <!-- Animated Stats Section -->
      <section class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm text-center hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl font-display font-extrabold text-brick-red" id="stat-projects">0</div>
          <div class="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-2 font-bold font-mono">Projects Completed</div>
        </div>
        
        <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm text-center hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl font-display font-extrabold text-orange-flame" id="stat-communities">0</div>
          <div class="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-2 font-bold font-mono">Communities Served</div>
        </div>
        
        <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm text-center hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl font-display font-extrabold text-gold-yellow" id="stat-experience">0</div>
          <div class="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-2 font-bold font-mono">Years Experience</div>
        </div>
        
        <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm text-center hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl font-display font-extrabold text-forest-green" id="stat-satisfaction">0%</div>
          <div class="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-2 font-bold font-mono">Satisfaction Rate</div>
        </div>
      </section>

      <!-- Intro Highlight Section -->
      <section class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold">Ghanaian Engineering Excellence</span>
          <h2 class="text-2xl md:text-4xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
            Durable Environmental Waste Solutions
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
            Located at New Sebrepor, Tema, <strong>BrickFlame Waste Solutions Limited</strong> is dedicated to tackling solid waste challenges in communities, schools, hotels, and agricultural sites across Africa. We design and construct brick incinerators utilizing high-grade thermodynamics to deliver smoke-free operation, structural stability, and superior heat retention.
          </p>
          <div class="grid sm:grid-cols-2 gap-4 pt-2">
            <div class="flex gap-3 items-start bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200/30 dark:border-neutral-800">
              <span class="text-forest-green mt-0.5 shrink-0">${getIcon("CheckCircle2", "w-5 h-5")}</span>
              <div>
                <h4 class="text-sm font-bold text-neutral-950 dark:text-white">Eco-Friendly</h4>
                <p class="text-xs text-neutral-500">Promoting clean air & health</p>
              </div>
            </div>
            <div class="flex gap-3 items-start bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200/30 dark:border-neutral-800">
              <span class="text-brick-red mt-0.5 shrink-0">${getIcon("CheckCircle2", "w-5 h-5")}</span>
              <div>
                <h4 class="text-sm font-bold text-neutral-950 dark:text-white">Highly Durable</h4>
                <p class="text-xs text-neutral-500">Refractory bricks last decades</p>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <a 
              id="intro-read-more"
              onclick="setPage('about')" 
              class="inline-flex items-center gap-2 text-brick-red hover:text-orange-flame text-xs font-bold font-mono tracking-wider cursor-pointer"
            >
              READ OUR COMPANY PROFILE ${getIcon("ArrowRight", "w-4 h-4")}
            </a>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-brick-red to-orange-flame opacity-10 blur-xl rounded-3xl"></div>
          <div class="relative bg-white dark:bg-[#141416] p-4 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-xl overflow-hidden group">
            <div class="h-64 sm:h-80 rounded-2xl overflow-hidden relative">
              <img 
                src="./src/assets/images/hero_incinerator_1784315894663.jpg" 
                alt="Completed BrickFlame Incinerator" 
                class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerpolicy="no-referrer"
              />
            </div>
            <div class="flex justify-between items-center mt-4 px-2">
              <div>
                <p class="text-[9px] font-bold font-mono text-brick-red uppercase tracking-wider">Latest Build</p>
                <h4 class="text-sm font-bold text-neutral-900 dark:text-white mt-1">Industrial Incinerator - Tema Facility</h4>
              </div>
              <button 
                id="view-gallery-btn"
                onclick="setPage('gallery')" 
                class="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-brick-red hover:border-brick-red/30 transition-all cursor-pointer"
                title="View Gallery"
              >
                ${getIcon("Image", "w-5 h-5")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Target Clients Section -->
      <section class="space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white" style="margin:0">Who We Proudly Serve</h3>
          <p class="text-neutral-500 text-xs md:text-sm" style="margin:0">Custom industrial-grade installations scaled to fit diverse waste processing volumes across Ghana.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div class="w-10 h-10 rounded-xl bg-brick-red/10 text-brick-red flex items-center justify-center font-display font-extrabold text-sm">1</div>
            <div>
              <h5 class="font-display font-bold text-sm text-neutral-950 dark:text-white">Schools & Colleges</h5>
              <p class="text-xs text-neutral-500 mt-1 leading-relaxed">For cardboard, papers & packaging management.</p>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div class="w-10 h-10 rounded-xl bg-orange-flame/10 text-orange-flame flex items-center justify-center font-display font-extrabold text-sm">2</div>
            <div>
              <h5 class="font-display font-bold text-sm text-neutral-950 dark:text-white">Clinics & Hospitals</h5>
              <p class="text-xs text-neutral-500 mt-1 leading-relaxed">Non-hazardous general combustibles disposal.</p>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div class="w-10 h-10 rounded-xl bg-gold-yellow/10 text-gold-yellow flex items-center justify-center font-display font-extrabold text-sm">3</div>
            <div>
              <h5 class="font-display font-bold text-sm text-neutral-950 dark:text-white">Hotels & Hospitality</h5>
              <p class="text-xs text-neutral-500 mt-1 leading-relaxed">Back-of-house sorting & clean sanitization.</p>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div class="w-10 h-10 rounded-xl bg-forest-green/10 text-forest-green flex items-center justify-center font-display font-extrabold text-sm">4</div>
            <div>
              <h5 class="font-display font-bold text-sm text-neutral-950 dark:text-white">Farms & Agricultural</h5>
              <p class="text-xs text-neutral-500 mt-1 leading-relaxed">Clean crop residues & organic husk volumes.</p>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4 col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1">
            <div class="w-10 h-10 rounded-xl bg-neutral-900/10 dark:bg-white/10 text-neutral-900 dark:text-white flex items-center justify-center font-display font-extrabold text-sm">5</div>
            <div>
              <h5 class="font-display font-bold text-sm text-neutral-950 dark:text-white">Residential Estates</h5>
              <p class="text-xs text-neutral-500 mt-1 leading-relaxed">Decentralized estate waste solutions for communities.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Educational FAQ Teaser -->
      <section class="bg-neutral-50 dark:bg-[#141416]/50 p-8 md:p-12 rounded-3xl border border-neutral-200/50 dark:border-neutral-800 grid md:grid-cols-[1fr_2fr] gap-8 items-center">
        <div class="space-y-4 text-center md:text-left">
          <div class="w-12 h-12 rounded-2xl bg-brick-red/10 text-brick-red flex items-center justify-center mx-auto md:mx-0">
            ${getIcon("HelpCircle", "w-6 h-6")}
          </div>
          <h3 class="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white" style="margin:0">Have Questions?</h3>
          <p class="text-neutral-500 text-xs md:text-sm" style="margin:0">We are dedicated to full operational transparency and compliance.</p>
        </div>
        
        <div class="bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-200/30 dark:border-neutral-800 shadow-sm space-y-4">
          <h4 class="text-sm font-bold text-neutral-950 dark:text-white flex items-center gap-2" style="margin:0">
            <span class="text-gold-yellow">${getIcon("Lightbulb", "w-5 h-5")}</span>
            Are these incinerators bad for the air?
          </h4>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed" style="margin:0">
            No, when operated correctly with proper waste segregation. Our cone-shaped design naturally pulls in fresh oxygen which boosts combustion temperatures. This higher heat breaks down organic soot and ash particles, leading to cleaner flue emissions. When users segregate plastics and burn only recommended biomass and clean cardboard, the smoke footprint is extremely low.
          </p>
          <div class="pt-2">
            <button 
              id="goto-faq-btn"
              onclick="setPage('faq')" 
              class="inline-flex items-center gap-1 bg-brick-red/10 text-brick-red text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brick-red hover:text-white transition-all cursor-pointer"
            >
              View Full Educational FAQ Accordion ${getIcon("ChevronRight", "w-4 h-4")}
            </button>
          </div>
        </div>
      </section>

    </div>
  `;
}

function renderAbout() {
  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          A Pioneer in Environmental Engineering
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          About BrickFlame Waste Solutions
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          Providing practical, durable, and sustainable waste management solutions through custom clay-masonry thermodynamics.
        </p>
      </div>

      <!-- Introduction Grid -->
      <section class="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div class="space-y-6">
          <p class="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed" style="margin:0">
            BrickFlame Waste Solutions Limited is a Ghanaian environmental engineering company located at New Sebrepor, Tema, dedicated to providing practical, durable, and sustainable waste management solutions through the design and construction of high-quality cone-shaped brick incinerators.
          </p>
          <p class="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed" style="margin:0">
            Founded with a vision to promote cleaner communities and healthier environments, we specialize in building robust brick incinerators that are engineered for efficient waste combustion, excellent heat retention, long service life, and reliable performance. Our cone-shaped design enhances natural airflow, improves combustion efficiency, and minimizes maintenance, making it an effective solution for managing combustible waste.
          </p>
        </div>

        <div class="bg-white dark:bg-[#141416] p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm space-y-6">
          <h3 class="font-display font-bold text-base text-neutral-950 dark:text-white" style="margin:0">A Ghanaian Foundation</h3>
          <div class="space-y-4">
            <div class="flex gap-3 items-start">
              <span class="text-brick-red mt-0.5 shrink-0">${getIcon("MapPin", "w-5 h-5")}</span>
              <div>
                <h5 class="text-xs font-bold text-neutral-950 dark:text-white">Location</h5>
                <p class="text-[11px] text-neutral-500">New Sebrepor, Tema, Greater Accra, Ghana</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="text-forest-green mt-0.5 shrink-0">${getIcon("ShieldCheck", "w-5 h-5")}</span>
              <div>
                <h5 class="text-xs font-bold text-neutral-950 dark:text-white">Focus Area</h5>
                <p class="text-[11px] text-neutral-500">Custom Thermodynamic Bricklaying & Masonry</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="text-gold-yellow mt-0.5 shrink-0">${getIcon("Users", "w-5 h-5")}</span>
              <div>
                <h5 class="text-xs font-bold text-neutral-950 dark:text-white">Our Goal</h5>
                <p class="text-[11px] text-neutral-500">Reduce waste volumes & protect public health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Vision Mission Values -->
      <section class="grid md:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-[#141416] p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div class="w-12 h-12 rounded-xl bg-brick-red/10 text-brick-red flex items-center justify-center">
            ${getIcon("Compass", "w-6 h-6")}
          </div>
          <h3 class="font-display font-extrabold text-lg text-neutral-950 dark:text-white" style="margin:0">Our Vision</h3>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed" style="margin:0">To become Ghana's leading provider of innovative brick incineration systems and a trusted partner in sustainable waste management across Africa.</p>
        </div>

        <div class="bg-white dark:bg-[#141416] p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div class="w-12 h-12 rounded-xl bg-forest-green/10 text-forest-green flex items-center justify-center">
            ${getIcon("ShieldCheck", "w-6 h-6")}
          </div>
          <h3 class="font-display font-extrabold text-lg text-neutral-950 dark:text-white" style="margin:0">Our Mission</h3>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed" style="margin:0">To design and construct safe, durable, and efficient cone-shaped brick incinerators that enable individuals, businesses, and organizations to manage waste responsibly while contributing to cleaner, healthier, and more sustainable communities.</p>
        </div>

        <div class="bg-white dark:bg-[#141416] p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div class="w-12 h-12 rounded-xl bg-gold-yellow/10 text-gold-yellow flex items-center justify-center">
            ${getIcon("Award", "w-6 h-6")}
          </div>
          <h3 class="font-display font-extrabold text-lg text-neutral-950 dark:text-white" style="margin:0">Our Values</h3>
          <ul class="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 list-disc list-inside" style="padding:0; margin:0">
            <li>Environmental Sustainability</li>
            <li>Workmanship & Precision</li>
            <li>Affordable Local Innovation</li>
            <li>Public Health Protection</li>
          </ul>
        </div>
      </section>

      <!-- Co-founders Profiles -->
      <section class="space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold">Leadership Team</span>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white" style="margin:0">Our Co-Founders</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div  class=" bg-white dark:bg-[#141416] rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
            <div style="height:500px;"  class="relative h-64 sm:h-72 overflow-hidden shrink-0 ">
              <img src="./src/assets/images/prince_dodzi_1784315867465.jpg" alt="Price Dodzi" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h4 class="text-lg font-display font-bold" style="margin:0">Price Dodzi</h4>
                <p class="text-[11px] font-mono uppercase tracking-wider text-brick-red mt-1">C.E.O and Site Engineer</p>
              </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p class="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed" style="margin:0">As C.E.O and Lead Site Engineer, Price leads the physical design and construction of every brick incinerator. With advanced training in environmental engineering, he ensures each structure meets rigorous thermal performance and safety standards, optimizing natural draft and heat retention for cleaner combustion.</p>
              <div class="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                <span>VERIFIED CO-FOUNDER</span>
                <span class="text-brick-red font-bold">BF CO.</span>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
            <div style="height:500px;" class="relative h-64 sm:h-72 overflow-hidden shrink-0">
              <img src="./src/assets/images/solomon_adeklo_1784315879708.jpg" alt="Solomon Yaw Adeklo" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h4 class="text-lg font-display font-bold" style="margin:0">Solomon Yaw Adeklo</h4>
                <p class="text-[11px] font-mono uppercase tracking-wider text-brick-red mt-1">Project Manager</p>
              </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p class="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed" style="margin:0">Solomon oversees project planning, logistics, client communications, and on-site scheduling. His expertise in environmental project management guarantees that every construction project, from domestic builds to industrial systems, is executed on time, within budget, and with exceptional workmanship.</p>
              <div class="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                <span>VERIFIED CO-FOUNDER</span>
                <span class="text-brick-red font-bold">BF CO.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="bg-white dark:bg-[#141416] p-8 md:p-12 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm space-y-10">
        <h3 class="text-xl md:text-2xl font-display font-bold text-neutral-950 dark:text-white text-center" style="margin:0">Our Development Timeline</h3>
        
        <div class="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <div class="relative">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-brick-red border-4 border-white dark:border-[#141416]"></div>
            <h4 class="text-sm md:text-base font-bold text-neutral-950 dark:text-white" style="margin:0">2026 Q1 - Research & Layout Formulation</h4>
            <p class="text-xs text-neutral-500 mt-1" style="margin:0">Conducted extensive thermodynamic research and compiled local material source catalogs for refractory bricks in Tema.</p>
          </div>
          
          <div class="relative">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-orange-flame border-4 border-white dark:border-[#141416] animate-pulse"></div>
            <h4 class="text-sm md:text-base font-bold text-neutral-950 dark:text-white" style="margin:0">2026 Q2 (CURRENT) - Prototype Construction</h4>
            <p class="text-xs text-neutral-500 mt-1" style="margin:0">Currently building our first physical commercial-scale prototype. Running draft tests and capturing educational construction video lessons.</p>
          </div>
          
          <div class="relative">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-neutral-300 dark:bg-neutral-800 border-4 border-white dark:border-[#141416]"></div>
            <h4 class="text-sm md:text-base font-bold text-neutral-950 dark:text-white" style="margin:0">2026 Q3 - Video Launch & Commercial Intake</h4>
            <p class="text-xs text-neutral-500 mt-1" style="margin:0">Releasing our prototype performance videos. Opening design, consulting, and building contracts for schools and healthcare sites in Ghana.</p>
          </div>
          
          <div class="relative">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-neutral-300 dark:bg-neutral-800 border-4 border-white dark:border-[#141416]"></div>
            <h4 class="text-sm md:text-base font-bold text-neutral-950 dark:text-white" style="margin:0">2027 & Beyond - Nationwide African Expansion</h4>
            <p class="text-xs text-neutral-500 mt-1" style="margin:0">Partnering with regional assemblies and environmental NGOs to build robust incinerators across rural sub-Saharan communities.</p>
          </div>
        </div>
      </section>

    </div>
  `;
}

function renderServices() {
  let servicesCards = SERVICES.map(service => `
    <div class="bg-white dark:bg-[#141416] p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all flex flex-col justify-between space-y-6">
      <div class="space-y-4">
        <div class="w-12 h-12 rounded-xl bg-brick-red/10 text-brick-red flex items-center justify-center">
          ${getIcon(service.icon, "w-6 h-6")}
        </div>
        <h3 class="text-lg font-display font-bold text-neutral-900 dark:text-white" style="margin:0">${service.title}</h3>
        <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">${service.description}</p>
      </div>
      <button 
        class="service-spec-btn-action inline-flex items-center gap-1.5 text-brick-red hover:text-orange-flame text-xs font-bold font-mono tracking-wider cursor-pointer pt-4 border-t border-neutral-50 dark:border-neutral-900" 
        data-id="${service.id}"
      >
        SPECIFICATIONS ${getIcon("ArrowRight", "w-3.5 h-3.5")}
      </button>
    </div>
  `).join("");

  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Engineering Capabilities
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          What We Do
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          Combining physical masonry craftsmanship with fluid thermodynamics to construct solutions that outlast metal enclosures.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${servicesCards}
      </div>

      <!-- Why Choose Us Full -->
      <section class="grid lg:grid-cols-2 gap-12 items-center bg-white dark:bg-[#141416] p-8 md:p-12 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
        <div class="space-y-6">
          <h3 class="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white" style="margin:0">Why Choose BrickFlame?</h3>
          <p class="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed" style="margin:0">Fired clay bricks represent a low-cost, highly durable building material suited to the African environment. Rather than importing costly steel components that warp and rust, we hire skilled local masons to create robust waste management structures on-site.</p>
          <div class="space-y-3 pt-2">
            <div class="flex items-center text-xs text-neutral-700 dark:text-neutral-300 gap-2 font-medium">
              <span class="text-forest-green shrink-0">${getIcon("CheckCircle2", "w-4 h-4")}</span> Durable brick construction designed for long service life
            </div>
            <div class="flex items-center text-xs text-neutral-700 dark:text-neutral-300 gap-2 font-medium">
              <span class="text-forest-green shrink-0">${getIcon("CheckCircle2", "w-4 h-4")}</span> Efficient cone-shaped design for improved combustion and airflow
            </div>
            <div class="flex items-center text-xs text-neutral-700 dark:text-neutral-300 gap-2 font-medium">
              <span class="text-forest-green shrink-0">${getIcon("CheckCircle2", "w-4 h-4")}</span> High-quality workmanship and attention to detail
            </div>
            <div class="flex items-center text-xs text-neutral-700 dark:text-neutral-300 gap-2 font-medium">
              <span class="text-forest-green shrink-0">${getIcon("CheckCircle2", "w-4 h-4")}</span> Cost-effective solutions tailored to client needs
            </div>
          </div>
        </div>

        <div class="bg-neutral-50 dark:bg-neutral-900/60 p-8 rounded-2xl border border-neutral-200/40 dark:border-neutral-800 space-y-6">
          <h4 class="text-lg font-display font-bold text-neutral-900 dark:text-white" style="margin:0">Need a tailored incinerator quote?</h4>
          <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Our site engineers will analyze your waste generation rates, soil stability, and local air-current directions to plan a safe site layout.</p>
          <button 
            onclick="setPage('contact')"
            class="bg-brick-red hover:bg-orange-flame text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg shadow-brick-red/20 hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  `;
}

function renderServiceModal() {
  if (!selectedService) return;
  
  const modalHTML = `
    <div class="modal-overlay" id="service-modal-overlay">
      <div class="modal-card">
        <button class="modal-close-btn" id="close-srv-modal">&times;</button>
        <div class="modal-header">
          <div class="modal-header-icon">
            ${getIcon(selectedService.icon, "w-6 h-6")}
          </div>
          <div class="modal-header-title-group">
            <h3 class="text-neutral-900 dark:text-white">${selectedService.title}</h3>
            <p>Service Specifications</p>
          </div>
        </div>
        <div class="modal-body">
          <p>${selectedService.longDescription}</p>
          <div class="modal-body-list-box">
            <h5>Standard Operating Inclusions:</h5>
            <ul>
              <li>Full layout and distance buffer calculation</li>
              <li>Sourcing of specialized local refractory fired-clay bricks</li>
              <li>Integration of ash cleanout door and combustion grates</li>
              <li>Weather-resistant exterior plaster finish</li>
              <li>On-site operator training on waste sorting</li>
            </ul>
          </div>
        </div>
        <div class="modal-footer" style="gap:10px">
          <button class="modal-footer-btn" id="close-srv-modal-btn">Close</button>
          <button class="btn-primary" id="srv-modal-contact-btn" style="font-size:0.75rem; padding:0.5rem 1rem; box-shadow:none">Inquire About Service</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function renderTechnology() {
  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Educational Hub
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          Modern Cone-Shaped Brick Incinerators
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          A practical, sustainable waste management solution engineered for communities across Ghana and sub-Saharan Africa.
        </p>
      </div>

      <!-- Main Feature Grid -->
      <section class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-2xl font-display font-bold text-neutral-900 dark:text-white" style="margin:0">
            Engineered for Efficient Combustion
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed" style="margin:0">
            Across Ghana and many parts of Africa, rapid urbanization, population growth, and increasing commercial activities have led to a significant rise in solid waste. Many communities continue to face challenges safely managing waste due to limited municipal services and illegal dumping.
          </p>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed" style="margin:0">
            Our modern cone-shaped design is based on solid thermodynamic principles. As heated air naturally expands and rises through the narrowing combustion chamber, it accelerates. This speed increase pulls fresh, cold air in through baseline air inlets, fueling a continuous, high-draft hot burn cycle that minimizes carbon soot and smoke.
          </p>
          
          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 space-y-2 shadow-sm">
            <h4 class="font-display font-bold text-sm text-brick-red flex items-center gap-2" style="margin:0">
              ${getIcon("Flame", "w-5 h-5")} High-Heat Retention
            </h4>
            <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">
              Unlike thin sheet-metal enclosures that lose heat rapidly, our thick brickwork insulates the core. High operating temperatures are achieved and maintained, meaning waste is burnt to a fine, complete ash.
            </p>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-brick-red to-orange-flame opacity-10 blur-xl rounded-3xl"></div>
          <img 
            src="./src/assets/images/hero_incinerator_1784315894663.jpg" 
            alt="Physical details of the brick incinerator" 
            class="w-full h-80 sm:h-96 object-cover rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-xl relative z-10"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <!-- Core Architectural Features -->
      <section class="space-y-10">
        <h3 class="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white text-center" style="margin:0">
          Designed with Operational Safety in Mind
        </h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-brick-red font-mono font-bold tracking-wider uppercase">FEATURE 01</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">Controlled Inlets</h4>
            <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Positioned surrounding the baseline to control primary oxygen flow to the burning embers.</p>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-brick-red font-mono font-bold tracking-wider uppercase">FEATURE 02</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">High-Heat Doors</h4>
            <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Constructed with thick heat-resistant steel and latch lock handles for safe waste loading.</p>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-brick-red font-mono font-bold tracking-wider uppercase">FEATURE 03</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">Heavy Steel Grates</h4>
            <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Heavy-duty custom metal support grates that suspend the burning load while allowing ash to fall.</p>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-brick-red font-mono font-bold tracking-wider uppercase">FEATURE 04</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">High-Draft Chimneys</h4>
            <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Extending vertically with an exhaust spark-arrestor and rain caps to guide clean hot draft upward.</p>
          </div>
        </div>
      </section>

      <!-- Brick vs Metal Breakdown -->
      <section class="grid lg:grid-cols-2 gap-12 bg-white dark:bg-[#141416] p-8 md:p-12 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
        <div class="space-y-4">
          <h4 class="font-display font-bold text-base text-forest-green flex items-center gap-2" style="margin:0">
            ${getIcon("CheckCircle2", "w-5 h-5")} Fired Clay Brick System (BrickFlame)
          </h4>
          <ul class="text-xs text-neutral-600 dark:text-neutral-400 space-y-3 list-disc list-inside" style="padding:0; margin:0">
            <li><strong>Excellent thermal stability</strong> - withstands daily high-heat stress without structural distortion.</li>
            <li><strong>Completely rust-proof</strong> - clay bricks unaffected by persistent heavy rains or high coastal moisture.</li>
            <li><strong>Extremely long life</strong> - can provide decades of reliable service when maintained.</li>
            <li><strong>Easy restoration</strong> - damaged sections repaired by replacing individual bricks rather than replacing the unit.</li>
          </ul>
        </div>

        <div class="space-y-4 lg:border-l lg:border-neutral-100 lg:dark:border-neutral-800 lg:pl-12">
          <h4 class="font-display font-bold text-base text-brick-red flex items-center gap-2" style="margin:0">
            ${getIcon("AlertTriangle", "w-5 h-5")} Traditional Sheet-Metal Burners
          </h4>
          <ul class="text-xs text-neutral-600 dark:text-neutral-400 space-y-3 list-disc list-inside" style="padding:0; margin:0">
            <li><strong>Severe thermal warping</strong> - thin iron sheets buckle and crack under intense fire heat.</li>
            <li><strong>Fast oxidation & rusting</strong> - tropical rains quickly rot metal, causing failure within months.</li>
            <li><strong>Low heat retention</strong> - rapid heat escape through metal walls leads to slow, smoky smoldering.</li>
            <li><strong>No patchability</strong> - once rusted through, the entire system must be scrapped.</li>
          </ul>
        </div>
      </section>
    </div>
  `;
}

function renderProcess() {
  let stepsMenuItems = CONSTRUCTION_STEPS.map((step, idx) => `
    <button 
      class="step-menu-item w-full flex items-center gap-3 p-3.5 rounded-xl text-left border cursor-pointer transition-all ${idx === activeStepIdx ? 'active bg-brick-red/10 border-brick-red/30 text-brick-red font-bold' : 'bg-white dark:bg-[#141416] border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400'}" 
      data-step="${step.step}"
    >
      <div class="w-7 h-7 rounded-lg font-display font-bold text-xs flex items-center justify-center shrink-0 ${idx === activeStepIdx ? 'bg-brick-red text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'}">${step.step}</div>
      <span class="text-xs truncate font-semibold tracking-wide">${step.title}</span>
    </button>
  `).join("");

  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Interactive Tutorial
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          13 Steps in Constructing a Brick Incinerator
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          A step-by-step review of our site layouts, high-quality masonry practices, and rigorous technical execution.
        </p>
      </div>

      <!-- Steps Content Layout -->
      <div class="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
        <div class="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          ${stepsMenuItems}
        </div>

        <div id="step-details-container" class="w-full">
          <!-- Rendered dynamically by renderProcessStepCard -->
        </div>
      </div>
    </div>
  `;
}

function renderProcessStepCard() {
  const step = CONSTRUCTION_STEPS[activeStepIdx];
  const container = document.getElementById("step-details-container");
  if (!container) return;

  // Sync steps menu highlight active
  document.querySelectorAll(".step-menu-item").forEach((btn, idx) => {
    if (idx === activeStepIdx) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const prevDisabled = activeStepIdx === 0 ? "disabled" : "";
  const nextDisabled = activeStepIdx === CONSTRUCTION_STEPS.length - 1 ? "disabled" : "";

  let imageHTML = "";
  if (step.image) {
    imageHTML = `
      <div class="step-detail-image-box">
        <img src="${step.image}" alt="${step.title}" />
      </div>
    `;
  } else {
    imageHTML = `
      <div class="step-detail-image-box" style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:2rem; background:var(--bg-main); border:1px solid var(--border-color)">
        <span style="color:var(--brick-red); margin-bottom:10px">${getIcon("Wrench", "w-10 h-10")}</span>
        <h5 style="font-size:0.8rem; font-weight:bold">Engineering Process Step</h5>
        <p style="font-size:0.7rem; color:var(--text-muted); max-width:260px; margin-top:5px">Conducted on-site using precise thermodynamic leveling parameters.</p>
      </div>
    `;
  }

  let safetyHTML = "";
  if (step.safetyConsideration) {
    safetyHTML = `
      <div class="step-detail-safety">
        <h5 class="step-detail-safety-title">Safety & Compliance:</h5>
        <p class="step-detail-safety-text">${step.safetyConsideration}</p>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="step-detail-card animate-fadeIn">
      <div class="step-detail-header">
        <span class="step-detail-label">Construction Phase 0${step.step}</span>
        <h3 class="step-detail-title text-neutral-900 dark:text-white">${step.title}</h3>
      </div>

      ${imageHTML}

      <p class="step-detail-desc">${step.description}</p>

      ${safetyHTML}

      <div class="step-detail-navigation">
        <button class="step-nav-btn" id="step-prev-btn" ${prevDisabled}>
          ${getIcon("ArrowRight", "w-3.5 h-3.5 rotate-180")} Previous
        </button>
        <button class="step-nav-btn" id="step-next-btn" ${nextDisabled}>
          Next ${getIcon("ArrowRight", "w-3.5 h-3.5")}
        </button>
      </div>
    </div>
  `;
}

function renderAshCircularity() {
  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Sustainability & Circularity
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          Ash Utilization and Resource Recovery
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          Fostering clean recycling streams and utilizing mineral-rich organic incinerator ash responsibly.
        </p>
      </div>

      <!-- Split Stream: Biomass vs Municipal -->
      <section class="grid lg:grid-cols-2 gap-8 items-stretch">
        <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="space-y-4">
            <div class="bg-forest-green/10 text-forest-green px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest inline-flex items-center gap-1">
              <img src="./src/assets/images/ash.png" width="400px" height="400px"> 
            </div>
            <h3 class="text-lg md:text-xl font-display font-bold text-neutral-950 dark:text-white" style="margin:0">When Burning Biomass (Leaves, Wood, Husks, Cardboard)</h3>
            <p class="text-xs text-neutral-500 leading-relaxed font-light" style="margin:0">If the incinerator is operated as a clean-feed system with sorted biomass waste, the resulting bottom ash acts as a rich, safe mineral concentrate containing high potassium, calcium carbonate, and magnesium.</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800 space-y-1">
              <h5 class="text-xs font-bold text-forest-green flex items-center gap-1.5"> <img src="./src/assets/images/ash.png" width="400px" height="400px">   Soil Amendment</h5>
              <p class="text-[11px] text-neutral-500 leading-relaxed">Raises pH of acidic crop lands. Apply moderately.</p>
            </div>
            <div class="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800 space-y-1">
              <h5 class="text-xs font-bold text-forest-green flex items-center gap-1.5"> <img src="./src/assets/images/ash.png" width="400px" height="400px">  Compost Additive</h5>
              <p class="text-[11px] text-neutral-500 leading-relaxed">Enriches farm compost heaps with key minerals.</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="space-y-4">
            <div class="bg-brick-red/10 text-brick-red px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest inline-flex items-center gap-1">
              <img src="./src/assets/images/ash.png" width="400px" height="400px"> 
            </div>
            <h3 class="text-lg md:text-xl font-display font-bold text-neutral-950 dark:text-white" style="margin:0">When Burning Mixed Household/Industrial Waste</h3>
            <p class="text-xs text-neutral-500 leading-relaxed font-light" style="margin:0">If the stream contains plastic coatings, rubber, treated wood, painted lumber, batteries, or medical items, the ash CANNOT be used on soils. It holds toxic heavy metal residues.</p>
          </div>

          <div class="bg-brick-red/5 border border-brick-red/10 p-5 rounded-2xl">
            <h5 class="text-xs font-bold text-brick-red flex items-center gap-1.5" style="margin:0">
               <img src="./src/assets/images/ash.png" width="400px" height="400px"> 
            </h5>
            <p class="text-[11px] text-neutral-500 leading-relaxed mt-2" style="margin:0">Lead, cadmium, mercury, and dioxins can compile in municipal residue. Handle with heavy gloves and dispose safely in deep industrial landfills.</p>
          </div>
        </div>
      </section>

      <!-- Resource Recovery & Sorting Diagram -->
      <section class="space-y-10 text-center">
        <div class="space-y-2">
          <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-white" style="margin:0">Our Recommended Segregation Model</h3>
          <p class="text-neutral-500 text-xs max-w-lg mx-auto" style="margin:0">Sorting waste at the source reduces combustion loads and keeps operational emissions exceptionally low.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-6 rounded-2xl flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-neutral-400 font-mono font-bold tracking-widest uppercase">Stream 01</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white leading-snug">Organic Food Waste</h4>
            <span class="text-xs font-bold text-forest-green uppercase">Compost & Biogas</span>
          </div>

          <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-6 rounded-2xl flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-neutral-400 font-mono font-bold tracking-widest uppercase">Stream 02</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white leading-snug">Recyclables (Metals, Glass)</h4>
            <span class="text-xs font-bold text-gold-yellow uppercase">Regional Recyclers</span>
          </div>

          <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-6 rounded-2xl flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-neutral-400 font-mono font-bold tracking-widest uppercase">Stream 03</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white leading-snug">Combustible Biomass</h4>
            <span class="text-xs font-bold text-orange-flame uppercase">BrickFlame Incinerator</span>
          </div>

          <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-6 rounded-2xl flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
            <span class="text-[9px] text-neutral-400 font-mono font-bold tracking-widest uppercase">Stream 04</span>
            <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white leading-snug">Chemicals & Batteries</h4>
            <span class="text-xs font-bold text-brick-red uppercase">Specialized Disposal</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderPrototype() {
  // Start countdown clock timer
  setTimeout(startPrototypeCountdown, 100);

  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-flex items-center gap-1.5 bg-brick-red/15 text-brick-red text-xs uppercase tracking-widest font-mono font-bold px-3 py-1 rounded-full animate-pulse">
          <span class="w-1.5 h-1.5 rounded-full bg-brick-red"></span>
          Under Construction
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          First Commercial Prototype Build
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          We are currently constructing our physical, full-scale cone-shaped brick incinerator in Tema. Performance results and construction video tutorials are coming soon!
        </p>
      </div>

      <!-- Countdown Clock Card -->
      <section class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-8 md:p-12 rounded-3xl text-center max-w-2xl mx-auto space-y-6 shadow-xl">
        <h3 class="text-xs font-bold text-brick-red uppercase tracking-widest font-mono" style="margin:0">Prototype Reveal & Performance Verification In:</h3>
        
        <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800 p-4 rounded-2xl">
            <div id="timer-days" class="text-2xl md:text-3xl font-display font-bold text-neutral-950 dark:text-white">00</div>
            <div class="text-[9px] text-neutral-400 font-mono tracking-widest mt-1">DAYS</div>
          </div>
          <div class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800 p-4 rounded-2xl">
            <div id="timer-hours" class="text-2xl md:text-3xl font-display font-bold text-neutral-950 dark:text-white">00</div>
            <div class="text-[9px] text-neutral-400 font-mono tracking-widest mt-1">HRS</div>
          </div>
          <div class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800 p-4 rounded-2xl">
            <div id="timer-minutes" class="text-2xl md:text-3xl font-display font-bold text-neutral-950 dark:text-white">00</div>
            <div class="text-[9px] text-neutral-400 font-mono tracking-widest mt-1">MIN</div>
          </div>
          <div class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800 p-4 rounded-2xl">
            <div id="timer-seconds" class="text-2xl md:text-3xl font-display font-bold text-neutral-950 dark:text-white">00</div>
            <div class="text-[9px] text-neutral-400 font-mono tracking-widest mt-1">SEC</div>
          </div>
        </div>

        <p class="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed" style="margin:10px auto 0">Join our waiting list to get instant notification access to the launch video and full building blueprints.</p>
      </section>

      <!-- Coming Soon Features Grid -->
      <section class="grid md:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-full bg-brick-red/10 text-brick-red flex items-center justify-center mx-auto">
            ${getIcon("Play", "w-5 h-5")}
          </div>
          <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">Construction Videos</h4>
          <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">HD video series demonstrating soil excavation, steel grates fitting, and expert brickwork layout.</p>
        </div>

        <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-full bg-orange-flame/10 text-orange-flame flex items-center justify-center mx-auto">
            ${getIcon("Activity", "w-5 h-5")}
          </div>
          <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">Emissions Testing Logs</h4>
          <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Verified testing reports documenting active core temperatures, burn metrics, and draft speeds.</p>
        </div>

        <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-full bg-gold-yellow/10 text-gold-yellow flex items-center justify-center mx-auto">
            ${getIcon("FileText", "w-5 h-5")}
          </div>
          <h4 class="font-display font-bold text-sm text-neutral-950 dark:text-white" style="margin:0">CAD Blueprints</h4>
          <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">Precise structural blueprints detailing brick count variables and steel component templates.</p>
        </div>
      </section>
    </div>
  `;
}

function renderGallery() {
  const categories = ["All", "Finished Projects", "Construction", "Planning", "Materials", "Testing"];
  let tabsHTML = categories.map(cat => `
    <button 
      class="gallery-cat-btn px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${cat === galleryFilter ? 'bg-brick-red border-brick-red text-white' : 'bg-white dark:bg-[#141416] border-neutral-200/50 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'}" 
      data-cat="${cat}"
    >
      ${cat}
    </button>
  `).join("");

  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-12 md:space-y-16">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Visual Portfolio
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          Project Gallery
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          A collection of site plans, foundation preparation works, and completed brick incinerators in Greater Accra.
        </p>
      </div>

      <!-- Categories Menu -->
      <div class="flex flex-wrap gap-2.5 justify-center">
        ${tabsHTML}
      </div>

      <!-- Grid Container -->
      <div id="gallery-grid-container" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Filtered gallery items render here -->
      </div>
    </div>
  `;
}

function renderGalleryGrid() {
  const container = document.getElementById("gallery-grid-container");
  if (!container) return;

  // Sync active categories
  document.querySelectorAll(".gallery-cat-btn").forEach(btn => {
    if (btn.getAttribute("data-cat") === galleryFilter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const items = galleryFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);

  container.innerHTML = items.map(item => `
    <div 
      class="gallery-item-card" 
      data-id="${item.id}"
    >
      <div class="gallery-item-image">
        <img src="${item.image}" alt="${item.title}" />
        <div class="gallery-item-overlay">
          <span class="gallery-item-tag">${item.category}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
        </div>
      </div>
    </div>
  `).join("");
}

function renderLightboxModal() {
  if (!lightboxImage) return;

  const modalHTML = `
    <div class="modal-overlay" id="lightbox-overlay" style="background-color:rgba(0,0,0,0.95)">
      <div class="modal-card" style="max-width:800px; padding:10px; background:transparent; border:none; box-shadow:none">
        <button class="modal-close-btn" id="close-gal-modal" style="color:white; top:10px; right:10px; font-size:2rem">&times;</button>
        <div style="width:100%; display:flex; flex-direction:column; align-items:center; gap:10px">
          <img 
            src="${lightboxImage.image}" 
            alt="${lightboxImage.title}" 
            style="max-width:100%; max-height:80vh; object-fit:contain; border-radius:8px" 
          />
          <div style="background:rgba(0,0,0,0.8); color:white; padding:10px 20px; border-radius:6px; text-align:center">
            <span style="font-size:9px; color:var(--brick-red); text-transform:uppercase; font-weight:bold">${lightboxImage.category}</span>
            <h4 style="font-size:0.9rem; font-weight:bold; margin-top:2px">${lightboxImage.title}</h4>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function renderBlog() {
  const categories = ["All", "Sustainability", "Waste Management", "Engineering"];
  let tabsHTML = categories.map(cat => `
    <button 
      class="blog-cat-btn px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${cat === blogFilter ? 'bg-brick-red border-brick-red text-white' : 'bg-white dark:bg-[#141416] border-neutral-200/50 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'}" 
      data-cat="${cat}"
    >
      ${cat}
    </button>
  `).join("");

  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-12 md:space-y-16">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Company Insights
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          Educational Blog
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          Expert insights on clay-masonry thermodynamics, environmental safety compliance, and organic biomass recycling streams.
        </p>
      </div>

      <!-- Categories Menu -->
      <div class="flex flex-wrap gap-2.5 justify-center">
        ${tabsHTML}
      </div>

      <!-- Grid Container -->
      <div id="blog-grid-container" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;
}

function renderBlogGrid() {
  const container = document.getElementById("blog-grid-container");
  if (!container) return;

  // Sync filters active
  document.querySelectorAll(".blog-cat-btn").forEach(btn => {
    if (btn.getAttribute("data-cat") === blogFilter) {
      btn.classList.add("bg-brick-red", "border-brick-red", "text-white");
      btn.classList.remove("bg-white", "dark:bg-[#141416]", "text-neutral-600", "dark:text-neutral-400");
    } else {
      btn.classList.remove("bg-brick-red", "border-brick-red", "text-white");
      btn.classList.add("bg-white", "dark:bg-[#141416]", "text-neutral-600", "dark:text-neutral-400");
    }
  });

  const posts = blogFilter === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === blogFilter);

  container.innerHTML = posts.map(post => `
    <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
      <div class="h-48 overflow-hidden shrink-0 relative">
        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500" />
        <span class="absolute top-4 left-4 bg-brick-red text-white text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-1 rounded">${post.category}</span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <span class="text-[10px] text-neutral-400 font-mono">${post.date}</span>
          <h3 class="text-base font-display font-bold text-neutral-900 dark:text-white leading-snug group-hover:text-brick-red transition-colors" style="margin:0">${post.title}</h3>
          <p class="text-xs text-neutral-500 leading-relaxed" style="margin:0">${post.excerpt}</p>
        </div>
        <div class="pt-4 border-t border-neutral-50 dark:border-neutral-900 flex justify-between items-center text-[11px]">
          <span class="text-neutral-400">By ${post.author}</span>
          <button class="blog-card-read-btn inline-flex items-center gap-1 text-brick-red hover:text-orange-flame font-bold font-mono uppercase cursor-pointer" data-id="${post.id}">
            READ ARTICLE ${getIcon("ArrowRight", "w-3 h-3")}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function renderBlogModal() {
  if (!selectedBlog) return;

  const modalHTML = `
    <div class="modal-overlay fixed inset-0 z-100 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm" id="blog-modal-overlay">
      <div class="bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 space-y-6 animate-scaleIn">
        <button class="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors cursor-pointer text-xl font-bold" id="close-blog-modal">&times;</button>
        
        <div class="h-60 sm:h-72 rounded-xl overflow-hidden">
          <img src="${selectedBlog.image}" alt="${selectedBlog.title}" class="w-full h-full object-cover" />
        </div>
        
        <div class="flex flex-wrap justify-between items-center text-[10px] font-mono text-neutral-400 gap-2">
          <span class="bg-brick-red/10 text-brick-red px-2 py-0.5 rounded font-bold uppercase">${selectedBlog.category}</span>
          <span>${selectedBlog.date} • By ${selectedBlog.author}</span>
        </div>
        
        <h3 class="text-xl sm:text-2xl font-display font-extrabold text-neutral-950 dark:text-white leading-tight" style="margin:0">${selectedBlog.title}</h3>
        
        <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4 font-light">
          <p>${selectedBlog.content}</p>
          
          <div class="bg-neutral-50 dark:bg-neutral-900/60 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800 flex items-center gap-3">
            <span class="text-brick-red shrink-0">${getIcon("Flame", "w-5 h-5")}</span>
            <p class="text-[11px] text-neutral-500 leading-snug" style="margin:0"><strong>Interested in our clean environmental methods?</strong> Share this post with your facility stakeholders or contact Solomon Adeklo for site assessments.</p>
          </div>
        </div>
        
        <div class="pt-4 border-t border-neutral-50 dark:border-neutral-900 flex justify-end">
          <button class="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer" id="close-blog-modal-btn">Close Article</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function renderFAQs() {
  let listHTML = FAQS.map((faq, idx) => `
    <div class="accordion-item bg-white dark:bg-[#141416] border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
      <button class="accordion-trigger w-full flex justify-between items-center p-5 text-left cursor-pointer group">
        <span class="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white group-hover:text-brick-red transition-colors">${faq.question}</span>
        <span class="accordion-icon text-neutral-400 group-hover:text-brick-red transition-colors font-mono font-bold text-base">+</span>
      </button>
      <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div class="p-5 pt-0 border-t border-neutral-50 dark:border-neutral-900 text-xs text-neutral-500 leading-relaxed font-light">
          ${faq.answer}
        </div>
      </div>
    </div>
  `).join("");

  return `
    <div class="container mx-auto px-6 max-w-4xl py-12 md:py-20 animate-fadeIn space-y-12 md:space-y-16">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Educational Accordion
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          Frequently Asked Questions
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          Learn more about environmental guidelines, clay brick lifespan, operating safety, and regional services in Tema.
        </p>
      </div>

      <!-- FAQ Accordions -->
      <div class="space-y-4">
        ${listHTML}
      </div>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="container mx-auto px-6 max-w-7xl py-12 md:py-20 animate-fadeIn space-y-16 md:space-y-24">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-mono text-brick-red font-bold block">
          Get in Touch
        </span>
        <h1 class="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight" style="margin:0">
          Contact Us & Get Quotations
        </h1>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed" style="margin:0">
          Have physical waste projects or custom specifications? Direct message Solomon Adeklo or Price Dodzi for prompt estimates.
        </p>
      </div>

      <!-- Dual Column Layout -->
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        
        <!-- Info Cards -->
        <div class="space-y-6">
          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex gap-4 items-start">
            <div class="w-10 h-10 rounded-xl bg-brick-red/10 text-brick-red flex items-center justify-center shrink-0">${getIcon("MapPin", "w-5 h-5")}</div>
            <div>
              <h4 class="text-sm font-bold text-neutral-950 dark:text-white" style="margin:0">Head Office & Testing Facility</h4>
              <p class="text-xs text-neutral-500 mt-1" style="margin:0">New Sebrepor, Tema, Greater Accra Region, Ghana</p>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex gap-4 items-start">
            <div class="w-10 h-10 rounded-xl bg-brick-red/10 text-brick-red flex items-center justify-center shrink-0">${getIcon("Phone", "w-5 h-5")}</div>
            <div>
              <h4 class="text-sm font-bold text-neutral-950 dark:text-white" style="margin:0">Call or WhatsApp Support</h4>
              <p class="text-sm font-bold text-neutral-900 dark:text-white mt-1" style="margin:0">+233 25 601 6767</p>
              <p class="text-[10px] text-neutral-400 mt-0.5" style="margin:0">Site Engineers available Mon - Sat, 8AM - 5PM</p>
            </div>
          </div>

          <div class="bg-white dark:bg-[#141416] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex gap-4 items-start">
            <div class="w-10 h-10 rounded-xl bg-brick-red/10 text-brick-red flex items-center justify-center shrink-0">${getIcon("Mail", "w-5 h-5")}</div>
            <div>
              <h4 class="text-sm font-bold text-neutral-950 dark:text-white" style="margin:0">Direct Email Address</h4>
              <p class="text-xs font-bold text-neutral-900 dark:text-white mt-1" style="margin:0">brickflamewaste@gmail.com</p>
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-l-4 border-forest-green bg-forest-green/5 dark:bg-forest-green/10 flex gap-4 items-start">
            <div class="w-10 h-10 rounded-xl bg-forest-green/15 text-forest-green flex items-center justify-center shrink-0">${getIcon("ShieldCheck", "w-5 h-5")}</div>
            <div>
              <h4 class="text-sm font-bold text-forest-green" style="margin:0">EPA Compliance Guarantee</h4>
              <p class="text-xs text-neutral-500 mt-1 leading-relaxed" style="margin:0">We compile physical layouts strictly aligned with local environmental buffers and air direction checks.</p>
            </div>
          </div>
        </div>

        <!-- Contact Form Card -->
        <div class="bg-white dark:bg-[#141416] p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-xl space-y-6">
          <h3 class="text-lg font-display font-bold text-neutral-950 dark:text-white" style="margin:0">Request Free Design Specifications</h3>
          <form id="main-contact-form" class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-wider block">Full Name *</label>
                <input type="text" placeholder="e.g. Agyeman Badu" class="w-full bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brick-red transition-colors" required />
              </div>
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-wider block">Facility / Organization</label>
                <input type="text" placeholder="e.g. New Sebrepor Academy" class="w-full bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brick-red transition-colors" />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-wider block">Phone Number</label>
                <input type="tel" id="contact-phone" placeholder="e.g. +233 24 123 4567" class="w-full bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brick-red transition-colors" />
              </div>
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-wider block">Email Address</label>
                <input type="email" id="contact-email" placeholder="e.g. user@domain.com" class="w-full bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brick-red transition-colors" />
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-wider block">Estimated Daily Waste Volume</label>
              <select class="w-full bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brick-red transition-colors cursor-pointer">
                <option value="domestic">Small Domestic (Household cardboard & papers)</option>
                <option value="estate">Residential Estate (Decentralized combustible packages)</option>
                <option value="school">School / College (Papers, notebooks & packaging)</option>
                <option value="clinic">Clinic / Hospital (Non-hazardous combustibles)</option>
                <option value="industrial">High Scale Commercial / Agricultural</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-wider block">Detailed Message / Custom Requests *</label>
              <textarea placeholder="Please describe your local ground stability, distance clearance buffer spaces, or special requirements..." class="w-full h-24 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brick-red transition-colors resize-none" required></textarea>
            </div>

            <div class="flex items-start gap-2 pt-2">
              <input type="checkbox" required id="agree-privacy" class="mt-0.5" />
              <label for="agree-privacy" class="text-[10px] text-neutral-400 leading-normal">I agree to receive communications from BrickFlame environmental masons regarding on-site surveys and operator manuals.</label>
            </div>

            <button type="submit" class="w-full bg-brick-red hover:bg-orange-flame text-white text-xs font-bold py-3.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-brick-red/15 hover:-translate-y-0.5 active:translate-y-0 text-center">
              Request On-Site Technical Survey
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// --- 8. Synchronize Shared Subcomponents ---

function renderTestimonials() {
  const container = document.getElementById("testimonials-slide-container");
  if (!container) return;

  const slidesHTML = TESTIMONIALS.map((t, idx) => {
    let stars = "";
    for (let s = 0; s < t.rating; s++) {
      stars += "★";
    }

    return `
      <div class="testimonial-slide transition-opacity duration-500 space-y-4 max-w-2xl mx-auto text-center ${idx === currentTestimonialIdx ? 'opacity-100 block' : 'opacity-0 hidden'}">
        <div class="text-gold-yellow text-sm tracking-widest font-bold">${stars}</div>
        <p class="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-light italic leading-relaxed">"${t.content}"</p>
        <div class="pt-2">
          <div class="font-display font-bold text-xs text-neutral-900 dark:text-white">${t.name}</div>
          <div class="text-[10px] text-neutral-400 mt-1 uppercase tracking-wider font-mono">${t.role} — ${t.organization}</div>
        </div>
      </div>
    `;
  }).join("");

  const dotsHTML = TESTIMONIALS.map((t, idx) => `
    <button 
      class="testimonial-nav-dot w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentTestimonialIdx ? 'bg-brick-red w-4' : 'bg-neutral-300 dark:bg-neutral-700'}" 
      data-idx="${idx}"
      title="Testimonial ${idx + 1}"
    ></button>
  `).join("");

  container.innerHTML = `
    <div class="w-full py-4">
      ${slidesHTML}
      <div class="flex justify-center gap-1.5 mt-6">
        ${dotsHTML}
      </div>
    </div>
  `;
}

// --- 9. Initialization ---
let initialized = false;
function init() {
  if (initialized) return;
  initialized = true;

  currentPage = detectPage();

  // Default to light mode (disable dark mode on load)
  let isDark = false;
  try {
    localStorage.removeItem("theme");
  } catch (err) {
    console.warn("localStorage is not accessible:", err);
  }

  if (isDark) {
    document.documentElement.classList.add("dark");
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.body.setAttribute("data-theme", "light");
  }

  renderThemeToggler(isDark);
  setupEventListeners();
  render();

  // Preloader removal
  setTimeout(() => {
    const preloader = document.getElementById("app-preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 400);
    }
  }, 1000);

  // Background Timers
  startTestimonialsTimer();
}

// Kick off
document.addEventListener("DOMContentLoaded", init);
// Fallback if DOM already loaded
if (document.readyState === "interactive" || document.readyState === "complete") {
  init();
}
