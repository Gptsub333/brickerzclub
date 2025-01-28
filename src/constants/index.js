import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
} from "lucide-react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "How it Works", href: "#Features" },
  { label: "Features", href: "#Workflow" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "Contact Us", href: "#Pricing" },
];

export const testimonials = [
  {
    user: "Alice Williams",
    company: "Blockchain Enterprises",
    image: user1,
    text: "Brickerzclub has transformed playtime for my kids. The quality and variety of toys are amazing!",
  },
  {
    user: "Carlos Martinez",
    company: "Crypto Innovations",
    image: user2,
    text: "As a busy parent, Brickerzclub's rental service is a lifesaver. It's eco-friendly and budget-friendly!",
  },
  {
    user: "Sophia Lee",
    company: "Chain Solutions Inc.",
    image: user3,
    text: "Brickerzclub makes toy shopping hassle-free—my kids are always excited to try something new every month!",
  },
  {
    user: "James Cooper",
    company: "DeFi Labs",
    image: user4,
    text: "Thanks to Brickerzclub, we no longer deal with clutter—my kids play, return, and eagerly wait for their next delivery!",
  },
  {
    user: "Olivia Harris",
    company: "SmartChain Technologies",
    image: user5,
    text: "I love how Brickerzclub combines fun and sustainability, making playtime guilt-free and enjoyable.",
  },
  {
    user: "Ethan Clark",
    company: "Ledger Innovations",
    image: user6,
    text: "The flexibility of Brickerzclub's rental plans lets us enjoy premium toys without breaking the bank.",
  },
];

export const features = [
  {
    icon: BotMessageSquare,
    text: "Choose & Rent",
    description:
      "Browse our curated selection and rent the perfect toys for your child.",
  },
  {
    icon: BatteryCharging,
    text: "Play & Learn",
    description:
      "Watch your child's imagination soar with educational and fun toys.",
  },
  {
    icon: PlugZap,
    text: "Buy Favorites",
    description:
      "Love a toy? Purchase it at a special discounted price just for you!",
  },
];

export const checklistItems = [
  {
    title: "Easy Accessable",
    description:
      "Our user-friendly interface makes it simple for you to browse, select, and rent toys with just a few clicks. Find the perfect toy anytime, anywhere.",
  },
  {
    title: "More Affordable Cost",
    description:
      "Enjoy quality toys at a fraction of the price. Renting allows you to save money while providing endless fun for your kids.",
  },
  {
    title: "Diverse Toy Collection",
    description:
      "Choose from a wide range of toys catering to all age groups and preferences. From educational toys to the latest trending gadgets, we’ve got it all.",
  },
  {
    title: "Eco-Friendly Option",
    description:
      "Renting toys reduces waste and promotes sustainability. Help the planet by reusing toys instead of buying new ones every time.Deploy your smart contracts to the blockchain in minutes, with real-time collaboration and feedback.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Deploy up to 3 smart contracts",
      "5 GB Transaction History",
      "Basic Blockchain Analytics",
      "Testnet Access",
    ],
  },
  {
    title: "Developer",
    price: "$15",
    features: [
      "Deploy up to 10 smart contracts",
      "20 GB Transaction History",
      "Advanced Blockchain Analytics",
      "Mainnet Access",
    ],
  },
  {
    title: "Enterprise",
    price: "$500",
    features: [
      "Unlimited Smart Contract Deployments",
      "Unlimited Transaction History",
      "Priority Blockchain Network Access",
      "Dedicated Support & Custom Solutions",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#Features", text: "How it Works" },
  { href: "#Workflow", text: "Features" },
  { href: "#Testimonials", text: "Testimonials" },
  { href: "#Pricing", text: "Contact Us" },
  // { href: "#", text: "Register" },
];
