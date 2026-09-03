import bus from "../assets/brand/Bus.png";
import ezo from "../assets/brand/Ezo.png";
import vyapar from "../assets/brand/vyapar-removebg-preview.png";
import divine from "../assets/brand/divine-removebg-preview.png";
import pujahub from "../assets/brand//380989410_1059905185375094_3683665795461431076_n.jpg";
import Growth from "../assets/Public/Growth.png";
import Camera from "../assets/Public/Camera.png";
import Magnet from "../assets/Public/Magnet.png";
import Web from "../assets/Public/Web.png";
export const navItems = [
  { label: "🏠Home", href: "/" },
  { label: "🎨Services", href: "/#services" },
  { label: "👷‍♀️Work", href: "/#work" },
  { label: "👥Meet The Team", href: "/meet-the-team" },
  { label: "📞Contact", href: "/#callback" },
];

export const contact = {
  email: "hello@bananabrand.in",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  address: "India",
  addressHref: "/#contact",
  social: { instagram: "#", facebook: "#", linkedin: "#" },
};

export const brands = [
  {
    name: "ezo",
    image: ezo,
  },
  {
    name: "Car101",
    image: bus,
  },
  {
    name: "Vyapar",
    image: vyapar,
  },
  {
    name: "Divine hindu",
    image: divine,
  },
  {
    name: "Pooja hub",
    image: pujahub,
  },
];
export const services = [
  {
    
    icon: "✦",
    title: "Content Creation",
    text: "Reels, product videos, photography and content that makes your brand impossible to ignore.",
    image: Camera,
  },
  {
    // no: "02",
    icon: "↗",
    title: "Performance Marketing",
    text: "Campaign strategy, paid ads and conversion-focused growth.",
    image: Growth,
  },
  {
    // no: "03",
    icon: "⌘",
    title: "Website Development",
    text: "Fast, responsive websites that turn visitors into customers.",
    image: Web,
  },
  {
    // no: "04",
    icon: "◎",
    title: "Social Media",
    text: "Strategy, creative, publishing and a consistent brand presence.",
    image: Magnet,
  },
];
export const reasons = [
  "Creative thinking",
  "Fast execution",
  "Business focused",
  "One connected team",
];
export const projects = [
  "Brand Launch",
  "E-commerce Growth",
  "Social Campaign",
];
export const callbackServices = [
  "Content Creation",
  "Performance Marketing",
  "Website Development",
  "Social Media",
  "Complete Brand Package",
];
