export const products = [
  {
    id: "mre-lite-protein-powder",
    name: "MRE Lite Protein Powder",
    displayName: "MRE Lite\nProtein Powder",
    price: "$39.99",
    oldPrice: "$56.99",
    discountLabel: "30% OFF",
    category: "Supplements",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/MRE_Lite_Protien_Powder.png"),
    isOnSale: true,
    isFeatured: true,
    isPopular: false,
    description:
      "A lightweight protein powder option for recovery and muscle support.",
  },

  {
    id: "beyond-raw-lit-pre-workout",
    name: "Beyond Raw LIT Pre-Workout",
    displayName: "Beyond Raw LIT\nPre-Workout",
    price: "$29.99",
    oldPrice: "$39.99",
    discountLabel: "25% OFF",
    category: "Supplements",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Beyond_Raw_LIT_Pre_Workout.png"),
    isOnSale: true,
    isFeatured: true,
    isPopular: false,
    description:
      "Pre-workout supplement designed to support energy and training performance.",
  },

  {
    id: "insulated-shaker-bottle",
    name: "Insulated Shaker Bottle",
    displayName: "Insulated\nShaker Bottle",
    price: "$24.99",
    oldPrice: null,
    discountLabel: null,
    category: "Accessories",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Insulated_Shaker_Bottle.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: true,
    description:
      "Insulated shaker bottle for keeping drinks cold during workouts.",

    // Might remove, better to just use correct image size
    detailImageStyle: {
      resizeMode: "contain",
    },
  },

  {
    id: "leather-weightlifting-gloves",
    name: "Leather Weightlifting Gloves",
    displayName: "Leather\nWeightlifting Gloves",
    price: "$34.99",
    oldPrice: null,
    discountLabel: null,
    category: "Gear",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Leather_Weightlifting_Gloves.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: true,
    description:
      "Leather training gloves for grip support and hand protection.",
  },

  {
    id: "luxury-yoga-mat",
    name: "Luxury Yoga Mat",
    displayName: "Luxury\nYoga Mat",
    price: "$74.99",
    oldPrice: null,
    discountLabel: "Best Seller",
    category: "Gear",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Luxury_Yoga_Mat.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: true,
    description: "Premium yoga mat designed for comfort, grip, and stability.",
  },

  {
    id: "weightlifting-belt",
    name: "Weightlifting Belt",
    displayName: "Weightlifting\nBelt",
    price: "$49.99",
    oldPrice: null,
    discountLabel: null,
    category: "Gear",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Weightlifting_Belt.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: false,
    description:
      "Supportive lifting belt for strength training and heavy compound lifts.",
  },

  {
    id: "resistance-loop-bands",
    name: "Resistance Loop Bands",
    displayName: "Resistance\nLoop Bands",
    price: "$19.99",
    oldPrice: null,
    discountLabel: null,
    category: "Accessories",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Resistance_Loop_Bands.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: false,
    description:
      "Resistance band set for warmups, mobility work, and strength training.",
  },

  {
    id: "speed-jump-rope",
    name: "Speed Jump Rope",
    displayName: "Speed\nJump Rope",
    price: "$16.99",
    oldPrice: null,
    discountLabel: null,
    category: "Accessories",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Speed_Jump_Rope.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: false,
    description:
      "Lightweight speed rope for conditioning, cardio, and agility training.",
  },

  {
    id: "gym-duffle-bag",
    name: "Gym Duffle Bag",
    displayName: "Gym\nDuffle Bag",
    price: "$49.99",
    oldPrice: null,
    discountLabel: null,
    category: "Accessories",
    image: require("../../../../../../assets/On_Core_Fitness_Store_Images/Gym_Duffle_Bag.png"),
    isOnSale: false,
    isFeatured: false,
    isPopular: false,
    description:
      "Durable gym duffle bag for carrying training gear and daily essentials.",
  },
];

export const flashSaleProducts = products.filter((product) => product.isOnSale);

export const featuredProducts = products.filter(
  (product) => product.isFeatured
);

export const popularProducts = products.filter((product) => product.isPopular);

export const allProducts = products;
