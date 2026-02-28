// ================= MEN IMAGES =================
import menkurta from "../assets/images/menkurta.jpg";
import jacket from "../assets/images/jacket.jpg";
import shirt from "../assets/images/shirt.jpg";
import tshirt from "../assets/images/tshirt.jpg";
import mensoutfit from "../assets/images/mensoutfit.jpg";

// ================= WOMEN IMAGES =================
import saree from "../assets/images/saree.jpg";
import lehenga from "../assets/images/lehenga.jpg";
import womenkurti from "../assets/images/womenkurti.jpg";

// ================= PARTY WEAR IMAGES =================
import gawn from "../assets/images/gawn.jpeg";
import shortdreass from "../assets/images/shortdreass.jpeg";
import western1 from "../assets/images/western1.jpeg";
import western2 from "../assets/images/western2.jpg";
import western3 from "../assets/images/western3.jpeg";

// ================= KIDS IMAGES =================
import kidslehenga from "../assets/images/kidslehenga.jpg";
import kidsoutfit from "../assets/images/kidsoutfit.jpg";

// ================= ETHNIC IMAGES =================
import ethnic1 from "../assets/images/ethnic1.jpeg";
import ethnic2 from "../assets/images/ethnic2.jpeg";
import ethnic3 from "../assets/images/ethnic3.jpeg";
import ethnic4 from "../assets/images/ethnic4.jpg";

// ================= WESTERN IMAGES =================
import w1 from "../assets/images/w1.jpeg";
import w2 from "../assets/images/w2.jpeg";
import w3 from "../assets/images/w3.jpeg";
import w4 from "../assets/images/w4.jpeg";
import w5 from "../assets/images/w5.jpeg";
import w6 from "../assets/images/w6.jpeg";

const products = [

  // ===== MEN =====
  {
    id: 1,
    name: "Classic Men Kurta",
    category: "men",
    price: 1999,
    image: menkurta,
    description: "Premium cotton festive kurta"
  },
  {
    id: 2,
    name: "Stylish Jacket",
    category: "men",
    price: 2999,
    image: jacket,
    description: "Winter collection jacket"
  },
  {
    id: 3,
    name: "Casual Shirt",
    category: "men",
    price: 1499,
    image: shirt,
    description: "Slim fit formal shirt"
  },
  {
    id: 4,
    name: "Basic T-Shirt",
    category: "men",
    price: 999,
    image: tshirt,
    description: "Comfort everyday wear"
  },
  {
    id: 5,
    name: "Traditional Outfit Set",
    category: "men",
    price: 3499,
    image: mensoutfit,
    description: "Complete festive outfit"
  },

  // ===== WOMEN =====
  {
    id: 6,
    name: "Silk Saree",
    category: "women",
    price: 4999,
    image: saree,
    description: "Premium silk saree"
  },
  {
    id: 7,
    name: "Designer Lehenga",
    category: "women",
    price: 6999,
    image: lehenga,
    description: "Wedding special lehenga"
  },
  {
    id: 8,
    name: "Women Kurti",
    category: "women",
    price: 1799,
    image: womenkurti,
    description: "Comfort daily wear kurti"
  },

  // ===== PARTY WEAR =====
  {
    id: 9,
    name: "Elegant Party Gown",
    category: "party",
    price: 5599,
    image: gawn,
    description: "Premium party wear gown"
  },
  {
    id: 10,
    name: "Short Party Dress",
    category: "party",
    price: 2299,
    image: shortdreass,
    description: "Trendy short dress"
  },
  {
    id: 11,
    name: "Western Glam Outfit",
    category: "party",
    price: 2599,
    image: western1,
    description: "Stylish modern party wear"
  },
  {
    id: 12,
    name: "Evening Party Dress",
    category: "party",
    price: 2799,
    image: western2,
    description: "Elegant evening outfit"
  },
  {
    id: 13,
    name: "Night Party Special",
    category: "party",
    price: 2999,
    image: western3,
    description: "Premium night wear collection"
  },

  // ===== KIDS =====
  {
    id: 14,
    name: "Kids Lehenga",
    category: "kids",
    price: 1899,
    image: kidslehenga,
    description: "Cute festive lehenga"
  },
  {
    id: 15,
    name: "Kids Ethnic Outfit",
    category: "kids",
    price: 1599,
    image: kidsoutfit,
    description: "Comfortable festive wear"
  },

  // ===== ETHNIC =====
  {
    id: 16,
    name: "Ethnic Wear 1",
    category: "ethnic",
    price: 3499,
    image: ethnic1,
    description: "Traditional ethnic style"
  },
  {
    id: 17,
    name: "Ethnic Wear 2",
    category: "ethnic",
    price: 3799,
    image: ethnic2,
    description: "Festival special ethnic"
  },
  {
    id: 18,
    name: "Ethnic Wear 3",
    category: "ethnic",
    price: 3999,
    image: ethnic3,
    description: "Premium festive wear"
  },
  {
    id: 19,
    name: "Ethnic Wear 4",
    category: "ethnic",
    price: 4299,
    image: ethnic4,
    description: "Designer traditional wear"
  },


    // ===== WESTERN =====
 {
  id: 20,
  name: "Western Maxi Dress",
  category: "western",
  price: 2899,
  image: w1,
  description: "Elegant maxi dress for outings",
  size: ["S", "M", "L"],
  color: "Red"
},
{
  id: 21,
  name: "Stylish Western Top",
  category: "western",
  price: 1899,
  image: w2,
  description: "Trendy casual top",
  size: ["M", "L"],
  color: "Black"
},
{
  id: 22,
  name: "Modern Street Outfit",
  category: "western",
  price: 2599,
  image: w3,
  description: "Chic everyday fashion",
  size: ["S", "M"],
  color: "Blue"
},
  {
    id: 23,
    name: "Denim Fashion Look",
    category: "western",
    price: 2199,
    image: w4,
    description: "Classic denim style"
    
  },
  {
    id: 24,
    name: "Crop Top & Skirt",
    category: "western",
    price: 1999,
    image: w5,
    description: "Cute western combo set"
  },
  {
    id: 25,
    name: "Floral Summer Dress",
    category: "western",
    price: 1799,
    image: w6,
    description: "Light and fresh summer wear"
  }

];

export default products;