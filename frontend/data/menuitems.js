// Petzy product catalog used by the Menu (Shop) page.
// Each key is a category; items keep the same structure (foodid, name, price, etc.)
// so the existing cart & order logic from C_Project continues to work.
const menuitems = {
  food: [
    {
      foodid: 1,
      name: "Premium Dog Kibble",
    
      price: 799,
      description: "High‑protein chicken & rice formula for active adult dogs.",
      specialty: true
    },
    {
      foodid: 2,
      name: "Grain‑Free Cat Food",
     
      price: 699,
      description: "Gentle on sensitive tummies with real fish and veggies."
    },
    {
      foodid: 3,
      name: "Puppy Starter Pack",
    
      price: 999,
      description: "Complete nutrition pack for growing puppies (food + treats)."
    },
    {
      foodid: 4,
      name: "Small Pet Mix",
    
      price: 450,
      description: "Balanced pellets for rabbits, hamsters, and guinea pigs."
    }
  ],
  treats: [
    {
      foodid: 5,
      name: "Dental Chew Sticks",
      
      price: 350,
      description: "Cleans teeth and freshens breath with every chew.",
      specialty: true
    },
    {
      foodid: 6,
      name: "Chicken Jerky Bites",
   
      price: 520,
      description: "Slow‑dried real chicken treats, no artificial colors."
    },
    {
      foodid: 7,
      name: "Catnip Crunchies",
    
      price: 280,
      description: "Irresistible crunchy snacks infused with premium catnip."
    },
    {
      foodid: 8,
      name: "Training Treat Mix",
      
      price: 390,
      description: "Small, soft treats perfect for training sessions."
    }
  ],
  clothes: [
    {
      foodid: 9,
      name: "Cozy Winter Hoodie",
   
      price: 1200,
      description: "Fleece‑lined hoodie to keep dogs warm in cold weather.",
      specialty: true
    },
    {
      foodid: 10,
      name: "Raincoat for Dogs",
      
      price: 950,
      description: "Waterproof and lightweight with reflective strips."
    },
    {
      foodid: 11,
      name: "Cat Bow Tie Collar",
     
      price: 450,
      description: "Adjustable collar with a cute bow tie for special days."
    },
    {
      foodid: 12,
      name: "Paw‑Print Bandana Set",
      
      price: 300,
      description: "Colorful bandanas for dogs & cats, comfortable and stylish."
    }
  ],
  house: [
    {
      foodid: 13,
      name: "Plush Donut Bed",
 
      price: 1800,
      description: "Ultra‑soft round bed for perfect naps and snuggles.",
      specialty: true
    },
    {
      foodid: 14,
      name: "Cat Tree & Scratcher",
    
      price: 3200,
      description: "Multi‑level play tower with scratching posts and hideouts."
    },
    {
      foodid: 15,
      name: "Outdoor Kennel",
      
      price: 5400,
      description: "Weather‑resistant dog house for gardens and balconies."
    },
    {
      foodid: 16,
      name: "Pet Travel Crate",
    
      price: 2600,
      description: "Air‑flow design with secure lock for safe travels."
    }
  ],
  medicine: [
    {
      foodid: 17,
      name: "Flea & Tick Control Drops",
 
      price: 650,
      description: "Monthly protection against fleas and ticks for dogs & cats.",
      specialty: true
    },
    {
      foodid: 18,
      name: "Multivitamin Chewables",
   
      price: 580,
      description: "Supports immunity, coat health, and overall vitality."
    },
    {
      foodid: 19,
      name: "Pet Wound Spray",
      
      price: 420,
      description: "Gentle antiseptic spray for minor cuts and scratches."
    },
    {
      foodid: 20,
      name: "Deworming Tablets",
      
      price: 380,
      description: "Effective deworming for dogs and cats (weight‑based)."
    }
  ],
  toys: [
    {
      foodid: 21,
      name: "Rope Tug Toy",
    
      price: 350,
      description: "Durable rope toy for interactive play and dental health."
    },
    {
      foodid: 22,
      name: "Squeaky Plush Bone",
  
      price: 320,
      description: "Soft plush toy with squeaker for endless fun."
    },
    {
      foodid: 23,
      name: "Laser Pointer Toy",
    
      price: 250,
      description: "Keep your cat active with a fun moving light."
    },
    {
      foodid: 24,
      name: "Interactive Puzzle Feeder",
   
      price: 1100,
      description: "Slow‑feeding bowl that challenges and entertains your pet.",
      specialty: true
    }
  ]
};

export default menuitems;