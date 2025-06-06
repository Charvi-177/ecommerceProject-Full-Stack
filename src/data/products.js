const products = [
  // 🌸 Women Tops
  {
    id: 1,
    category: "women-tops",
    name: "Floral Top",
    price: 799,
    image: "/images/womentop1.jpg"
  },
  {
    id: 2,
    category: "women-tops",
    name: "Lace Top",
    price: 999,
    image: "/images/womentop2.jpg"
  },
  {
    id: 3,
    category: "women-tops",
    name: "BowTie Top",
    price: 899,
    image: "/images/womentop3.jpg"
  },
  {
    id: 4,
    category: "women-tops",
    name: "Casual Brown Tee",
    price: 649,
    image: "/images/womentop4.jpg"
  },
  {
    id: 5,
    category: "women-tops",
    name: "Red Halter Top",
    price: 1049,
    image: "/images/womentop5.jpg"
  },
  {
    id: 6,
    category: "women-tops",
    name: "White OffShoulder Top",
    price: 1150,
    image: "/images/womentop6.jpg"
  },
  {
    id: 7,
    category: "women-tops",
    name: "Striped Corset Top",
    price: 875,
    image: "/images/womentop7.jpg"
  },
  {
    id: 8,
    category: "women-tops",
    name: "Red Tube Top",
    price: 599,
    image: "/images/womentop8.jpg"
  },
  {
    id: 9,
    category: "women-tops",
    name: "White OffShoulders",
    price: 750,
    image: "/images/womentop9.jpg"
  },
  {
    id: 10,
    category: "women-tops",
    name: "Black Tube Top",
    price: 999,
    image: "/images/womentop10.jpg"
  },

  // 👖 Women Bottoms
  {
    id: 11,
    category: "women-bottoms",
    name: "Straight Fit Jean",
    price: 1299,
    image: "/images/womenbot1.jpg"
  },
  {
    id: 12,
    category: "women-bottoms",
    name: "Pencil Skirt",
    price: 1050,
    image: "/images/womenbot2.jpg"
  },
  {
    id: 13,
    category: "women-bottoms",
    name: "Black Wide Trousers",
    price: 1150,
    image: "/images/womenbot3.jpg"
  },
  {
    id: 14,
    category: "women-bottoms",
    name: "Bellbottom Pants",
    price: 899,
    image: "/images/womenbot4.jpg"
  },
  {
    id: 15,
    category: "women-bottoms",
    name: "Denim Skirt",
    price: 699,
    image: "/images/womenbot5.jpg"
  },
  {
    id: 16,
    category: "women-bottoms",
    name: "Denim Wide Leg Jeans",
    price: 749,
    image: "/images/womenbot6.jpg"
  },
  {
    id: 17,
    category: "women-bottoms",
    name: "Printed Trackpants",
    price: 1349,
    image: "/images/womenbot7.jpg"
  },
  {
    id: 18,
    category: "women-bottoms",
    name: "Cargo Pants",
    price: 1249,
    image: "/images/womenbot8.jpg"
  },
  {
    id: 19,
    category: "women-bottoms",
    name: "Denim Shorts",
    price: 899,
    image: "/images/womenbot9.jpg"
  },
  {
    id: 20,
    category: "women-bottoms",
    name: "Flared Jeans",
    price: 1199,
    image: "/images/womenbot10.jpg"
  },

  // 👕 Men Tops
  {
    id: 21,
    category: "men-tops",
    name: "Graphic Tee",
    price: 899,
    image: "/images/mentop1.jpg"
  },
  {
    id: 22,
    category: "men-tops",
    name: "Basic Blue Shirt",
    price: 999,
    image: "/images/mentop2.jpg"
  },
  {
    id: 23,
    category: "men-tops",
    name: "Blue Tshirt",
    price: 649,
    image: "/images/mentop3.jpg"
  },
  {
    id: 24,
    category: "men-tops",
    name: "Leather Jacket",
    price: 1150,
    image: "/images/mentop4.jpg"
  },
  {
    id: 25,
    category: "men-tops",
    name: "White Tshirt",
    price: 749,
    image: "/images/mentop5.jpg"
  },
  {
    id: 26,
    category: "men-tops",
    name: "Casual Green Tshirt",
    price: 1199,
    image: "/images/mentop6.jpg"
  },
  {
    id: 27,
    category: "men-tops",
    name: "Green Oversized Top",
    price: 849,
    image: "/images/mentop7.jpg"
  },
  {
    id: 28,
    category: "men-tops",
    name: "2Piece Tee",
    price: 599,
    image: "/images/mentop8.jpg"
  },
  {
    id: 29,
    category: "men-tops",
    name: "Black TurtleNeck",
    price: 899,
    image: "/images/mentop9.jpg"
  },
  {
    id: 30,
    category: "men-tops",
    name: "Black Oversized Tee",
    price: 699,
    image: "/images/mentop10.jpg"
  },

  // 👖 Men Bottoms
  {
    id: 31,
    category: "men-bottoms",
    name: "Beige Straight fit",
    price: 1399,
    image: "/images/menbot1.jpg"
  },
  {
    id: 32,
    category: "men-bottoms",
    name: "Black Trackpants",
    price: 1299,
    image: "/images/menbot2.jpg"
  },
  {
    id: 33,
    category: "men-bottoms",
    name: "Baggy Jeans",
    price: 899,
    image: "/images/menbot3.jpg"
  },
  {
    id: 34,
    category: "men-bottoms",
    name: "Grey Sweatpants",
    price: 1199,
    image: "/images/menbot4.jpg"
  },
  {
    id: 35,
    category: "men-bottoms",
    name: "Green Trousers",
    price: 999,
    image: "/images/menbot5.jpg"
  },
  {
    id: 36,
    category: "men-bottoms",
    name: "Denim Straightfit",
    price: 749,
    image: "/images/menbot6.jpg"
  },
  {
    id: 37,
    category: "men-bottoms",
    name: "Shorts",
    price: 1099,
    image: "/images/menbot7.jpg"
  },
  {
    id: 38,
    category: "men-bottoms",
    name: "Denim Jeans",
    price: 1199,
    image: "/images/menbot8.jpg"
  },
  {
    id: 39,
    category: "men-bottoms",
    name: "Designed Straight fit",
    price: 1399,
    image: "/images/menbot9.jpg"
  },
  {
    id: 40,
    category: "men-bottoms",
    name: "Denim Shorts",
    price: 899,
    image: "/images/menbot10.jpg"
  }
];

export default products;
