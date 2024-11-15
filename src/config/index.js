export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

// export const addProductFormElements = [
//   {
//     label: "Title",
//     name: "title",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter product title",
//   },
//   {
//     label: "Description",
//     name: "description",
//     componentType: "textarea",
//     placeholder: "Enter product description",
//   },
//   {
//     label: "Category",
//     name: "category",
//     componentType: "select",
//     options: [
//       { id: "plates", label: "Plates" },
//       { id: "glasses", label: "Glasses" },
//       { id: "kids", label: "Kids" },
//       { id: "accessories", label: "Accessories" },
//       { id: "footwear", label: "Footwear" },
//     ],
//   },
//   {
//     label: "Brand",
//     name: "brand",
//     componentType: "select",
//     options: [
//       { id: "sarda", label: "Sarda" },
//       { id: "rr", label: "RR" },
//       { id: "puma", label: "Puma" },
//       { id: "levi", label: "Levi's" },
//       { id: "zara", label: "Zara" },
//       { id: "h&m", label: "H&M" },
//     ],
//   },
//   {
//     label: "Material",
//     name: "material",
//     componentType: "select",
//     options: [
//       { id: "sarda", label: "Bio-Degradable" },
//       { id: "rr", label: "Conventional Plastics" },
//       { id: "puma", label: "Wood" },
//       { id: "levi", label: "Aluminum" },
//       { id: "zara", label: "Palm Leaf" },
//       { id: "h&m", label: "Foam" },
//     ],
//   },
//   {
//     label: "Price",
//     name: "price",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter product price",
//   },
//   {
//     label: "Sale Price",
//     name: "salePrice",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter sale price (optional)",
//   },
//   {
//     label: "Total Stock",
//     name: "totalStock",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter total stock",
//   },
// ];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "thermocol", label: "Thermocol" },
      { id: "tissues", label: "Tissues" },
      { id: "wine glass", label: "Wine glass" },
      { id: "wooden products", label: "Wooden products" },
      { id: "alfa", label: "Alfa" },
      { id: "benxon", label: "Benxon" },
      { id: "bio bowls", label: "Bio bowls" },
      { id: "bio plates", label: "Bio plates" },
      { id: "bio spoons", label: "bio spoons" },
      { id: "buffet plates", label: "Buffet Plates" },
      { id: "wisposable wearable", label: "Disposable Wearable" },
      { id: "fuel tins", label: "Fuel tins" },
      { id: "garbage bags", label: "Garbage bags" },
      { id: "golden cups", label: "Golden cups" },
      { id: "housekeping items", label: "Housekeping items" },
      { id: "meal tray", label: "Meal tray" },
      { id: "menu board", label: "Menu board" },
      { id: "milky carry bags", label: "Milky carry bags" },
      { id: "muffin cups", label: "Muffin cups" },
      { id: "next level cups", label: "Next Level Cups" },
      { id: "paper cups", label: "Paper Cups" },
      { id: "paper plate", label: "Paper plete" },
      { id: "plastic container", label: "Plastic container" },
      { id: "plastic cups", label: "Plastic cups" },
      { id: "poly cover", label: "Poly cover" },
      { id: "pouch", label: "Pouch" },
      { id: "ripple glass", label: "Ripple glass" },
      { id: "rolls", label: "Rolls" },
      { id: "seal bag", label: "Seal bag" },
      { id: "silver plates", label: "silver plates" },
      { id: "spoons", label: "Spoons" },
      { id: "straws", label: "Straws" },
      
    ],
  },
  // {
  //   label: "Subcategory",  // New field for subcategory
  //   name: "subcategory",
  //   componentType: "select", // Dropdown for subcategories
  //   dependentOn: "category",  // Indicates that it's dependent on category
  //   placeholder: "Select a subcategory",
  //   options: []  // This will be dynamically filled based on the selected category
  // },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sarda", label: "Sarda" },
      { id: "classic", label: "Classic" },
      { id: "soft", label: "Soft" },
      { id: "sony", label: "Sony" },
      { id: "sd", label: "S.D" },
      { id: "ecopack", label: "Ecopack" },
      { id: "next level", label: "Next Level" },
      { id: "vardhaman", label: "Vardhaman" },
      { id: "rr", label: "RR" },
      { id: "jainson", label: "Jainson" },
      { id: "goodwill", label: "Goodwill" },
      { id: "lotus", label: "Lotus" },
      { id: "dove", label: "Dove" },
      { id: "talyx", label: "Kalyx" },
      { id: "grace", label: "Grace" },
      { id: "milan", label: "Milan" },
      { id: "chuk", label: "Chuk" },
      { id: "paras", label: "Paras" },
      { id: "alfa", label: "alfa" },
      { id: "benxon", label: "Benxon" },
      { id: "greenvale", label: "Greenvale" },
      { id: "bhadra", label: "Bhadra" },
      { id: "other", label: "other" },
    ],
  },
  {
    label: "Material",
    name: "material",
    componentType: "select",
    options: [
      { id: "biodegradable", label: "Bio-Degradable" },
      { id: "paper", label: "Paper" },
      { id: "conventionalplastics", label: "Conventional Plastics" },
      { id: "wood", label: "Wood" },
      { id: "cloth", label: "Cloth" },
      { id: "others", label: "Others" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];


export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  // {
  //   id: "men",
  //   label: "Men",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "women",
  //   label: "Women",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "kids",
  //   label: "Kids",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "footwear",
  //   label: "Footwear",
  //   path: "/shop/listing",
  // },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const materialOptionsMap = {
  biodegradable: "Bio-Degradable",
  conventionalplastics: "Conventional Plastics",
  wood: "Wood",
  aluminum: "Aluminum",
};

// export const filterOptions = {
//   category: [
//     { id: "plates", label: "Plates" },
//     { id: "glasses", label: "Glasses" },
//     { id: "kids", label: "Kids" },
//     { id: "accessories", label: "Accessories" },
//     { id: "footwear", label: "Footwear" },
//   ],
//   brand: [
//     { id: "sarda", label: "Sarda" },
//     { id: "rr", label: "RR" },
//     { id: "puma", label: "Puma" },
//     { id: "levi", label: "Levi's" },
//     { id: "zara", label: "Zara" },
//     { id: "h&m", label: "H&M" },
//   ],
//   material: [
//     { id: "sarda", label: "Bio-Degradable" },
//     { id: "rr", label: "Conventional Plastics" },
//     { id: "puma", label: "Wood" },
//     { id: "levi", label: "Aluminum" },
//     { id: "zara", label: "Palm Leaf" },
//     { id: "h&m", label: "Foam" },
//   ],
// };

export const filterOptions = {
  category: [
    // { 
    //   id: "plates", 
    //   label: "Plates",
    //   // subcategories: [
    //   //   { id: "dinner-plates", label: "Dinner Plates" },
    //   //   { id: "salad-plates", label: "Salad Plates" },
    //   //   { id: "dessert-plates", label: "Dessert Plates" },
    //   //   { id: "charger-plates", label: "Charger Plates" }
    //   // ]
    // },
    // { 
    //   id: "glasses", 
    //   label: "Glasses",
    //   // subcategories: [
    //   //   { id: "wine-glasses", label: "Wine Glasses" },
    //   //   { id: "water-glasses", label: "Water Glasses" },
    //   //   { id: "champagne-flutes", label: "Champagne Flutes" },
    //   //   { id: "cocktail-glasses", label: "Cocktail Glasses" }
    //   // ]
    // },
    // { 
    //   id: "kids", 
    //   label: "Kids",
    //   // subcategories: [
    //   //   { id: "kids-plates", label: "Plates" },
    //   //   { id: "kids-cups", label: "Cups" },
    //   //   { id: "kids-utensils", label: "Utensils" },
    //   //   { id: "lunch-boxes", label: "Lunch Boxes" }
    //   // ]
    // },
    // { 
    //   id: "accessories", 
    //   label: "Accessories",
    //   // subcategories: [
    //   //   { id: "napkin-rings", label: "Napkin Rings" },
    //   //   { id: "placemats", label: "Placemats" },
    //   //   { id: "coasters", label: "Coasters" },
    //   //   { id: "serving-utensils", label: "Serving Utensils" }
    //   // ]
    // },
    // { 
    //   id: "footwear", 
    //   label: "Footwear",
    //   // subcategories: [
    //   //   { id: "kitchen-shoes", label: "Kitchen Shoes" },
    //   //   { id: "outdoor-dining-slippers", label: "Outdoor Dining Slippers" },
    //   //   { id: "anti-slip-socks", label: "Anti-Slip Socks" }
    //   // ]
    // },
      { id: "alfa", label: "Alfa" },
      { id: "benxon", label: "Benxon" },
      { id: "bio bowls", label: "Bio bowls" },
      { id: "bio plates", label: "Bio plates" },
      { id: "bio spoons", label: "bio spoons" },
      { id: "buffet plates", label: "Buffet Plates" },
      { id: "wisposable wearable", label: "Disposable Wearable" },
      { id: "fuel tins", label: "Fuel tins" },
      { id: "garbage bags", label: "Garbage bags" },
      { id: "golden cups", label: "Golden cups" },
      { id: "housekeping items", label: "Housekeping items" },
      { id: "meal tray", label: "Meal tray" },
      { id: "menu board", label: "Menu board" },
      { id: "milky carry bags", label: "Milky carry bags" },
      { id: "muffin cups", label: "Muffin cups" },
      { id: "next level cups", label: "Next Level Cups" },
      { id: "paper cups", label: "Paper Cups" },
      { id: "paper plate", label: "Paper plate" },
      { id: "plastic container", label: "Plastic container" },
      { id: "plastic cups", label: "Plastic cups" },
      { id: "poly cover", label: "Poly cover" },
      { id: "pouch", label: "Pouch" },
      { id: "ripple glass", label: "Ripple glass" },
      { id: "rolls", label: "Rolls" },
      { id: "seal bag", label: "Seal bag" },
      { id: "silver plates", label: "silver plates" },
      { id: "spoons", label: "Spoons" },
      { id: "straws", label: "Straws" },
      { id: "thermocol", label: "Thermocol" },
      { id: "tissues", label: "Tissues" },
      { id: "wine glass", label: "Glasses" },
      { id: "wooden products", label: "Wooden products" },
  ],
  brand: [
      { id: "bhadra", label: "Bhadra" },
      { id: "sarda", label: "Sarda" },
      { id: "sd", label: "S.D" },
      { id: "sony", label: "Sony" },
      { id: "soft", label: "Soft" },
      { id: "ecopack", label: "Ecopack" },
      { id: "next level", label: "Next Level" },
      { id: "classic", label: "Classic" },
      { id: "vardhaman", label: "Vardhaman" },
      { id: "jainson", label: "Jainson" },
      { id: "goodwill", label: "Goodwill" },
      { id: "rr", label: "RR" },
      { id: "lotus", label: "Lotus" },
      { id: "dove", label: "Dove" },
      { id: "talyx", label: "Kalyx" },
      { id: "grace", label: "Grace" },
      { id: "milan", label: "Milan" },
      { id: "chuk", label: "Chuk" },
      { id: "paras", label: "Paras" },
      { id: "alfa", label: "alfa" },
      { id: "benxon", label: "Benxon" },
      { id: "greenvale", label: "Greenvale" },
      { id: "other", label: "other" },
  ],
  material: [
      { id: "biodegradable", label: "Bio-Degradable" },
      { id: "conventionalplastics", label: "Conventional Plastics" },
      { id: "aluminium", label: "Aluminium" },
      { id: "paper", label: "Paper" },
      { id: "wood", label: "Wood" },
      { id: "cloth", label: "Cloth" },
      { id: "others", label: "Others" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
