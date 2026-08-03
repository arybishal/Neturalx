import everest from "@/assets/dest-everest.jpg";
import annapurna from "@/assets/dest-annapurna.jpg";
import langtang from "@/assets/dest-langtang.jpg";
import humla from "@/assets/dest-humla.jpg";
import aavash from "@/assets/team-aavash.jpg";
import bishal from "@/assets/team-bishal.jpg";
import aditya from "@/assets/team-aditya.jpg";

export const BRAND = {
  name: "Ruta Vanta NaturelaX",
  short: "Ruta Vanta",
  tagline: "Carbon Neutral Himalayan Adventures",
  philosophy: "The world doesn't need tourists. It needs guests.",
};

export const CONTACT = {
  phones: ["+977 9762651574", "+977 9847026645"],
  emails: ["info.customercare@rutavanta.com", "info.contact@rutavanta.com"],
  location: "Thamel, Kathmandu, Nepal",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treks", to: "/treks" },
  { label: "Carbon Neutral", to: "/carbon-neutral" },
  { label: "Conservation", to: "/conservation" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Sustainable Trekking",
    text: "Explore Nepal's Himalayan trails through low-impact trekking experiences designed around fragile ecosystems.",
    icon: "Footprints",
  },
  {
    title: "Carbon Neutral Travel",
    text: "Measured and offset emissions from transportation, accommodation, and trekking logistics.",
    icon: "Leaf",
  },
  {
    title: "Wildlife Conservation",
    text: "Support Himalayan biodiversity and endangered species protection across protected corridors.",
    icon: "PawPrint",
  },
  {
    title: "Clean Mountain Initiatives",
    text: "Reduce plastic waste and protect fragile trekking ecosystems with trail clean-up programs.",
    icon: "Recycle",
  },
  {
    title: "Local Community Support",
    text: "Support local guides, fair wages, and the mountain communities who call these valleys home.",
    icon: "Users",
  },
] as const;

export type Trek = {
  slug: string;
  name: string;
  region: string;
  image: string;
  duration: string;
  difficulty: string;
  score: number;
  impact: string;
  overview: string;
};

export const TREKS: Trek[] = [
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    region: "Khumbu, Solukhumbu",
    image: everest,
    duration: "14 Days",
    difficulty: "Challenging",
    score: 96,
    impact: "1.9 t CO₂ offset per guest",
    overview:
      "Walk the classic Khumbu corridor to the foot of the world's highest peak, staying in solar-powered Sherpa lodges and carrying zero single-use plastic.",
  },
  {
    slug: "annapurna-circuit",
    name: "Annapurna Circuit",
    region: "Gandaki Province",
    image: annapurna,
    duration: "12 Days",
    difficulty: "Moderate",
    score: 94,
    impact: "1.4 t CO₂ offset per guest",
    overview:
      "Cross Thorong La through terraced farmland, pine forest and high desert, sleeping in community-owned teahouses along the entire route.",
  },
  {
    slug: "langtang-valley",
    name: "Langtang Valley",
    region: "Rasuwa, Langtang National Park",
    image: langtang,
    duration: "8 Days",
    difficulty: "Easy to Moderate",
    score: 98,
    impact: "0.9 t CO₂ offset per guest",
    overview:
      "A short, low-emission trek from Kathmandu into a valley rebuilt by its own people, funding forest restoration with every booking.",
  },
  {
    slug: "humla-remote-himalayas",
    name: "Humla Remote Himalayas",
    region: "Karnali Province",
    image: humla,
    duration: "16 Days",
    difficulty: "Expedition",
    score: 92,
    impact: "2.3 t CO₂ offset per guest",
    overview:
      "A rare expedition into Nepal's most remote district, where tourism income reaches households that receive almost none of it today.",
  },
];

export const TEAM = [
  {
    name: "Aavash Aryal",
    role: "Founder / CEO",
    image: aavash,
    bio: "A Himalayan guide turned entrepreneur, Aavash founded Ruta Vanta to prove that adventure tourism can regenerate the landscapes it depends on.",
  },
  {
    name: "Bishal Adhikari",
    role: "Co-Founder / CTO",
    image: bishal,
    bio: "Bishal builds the technology behind our emissions tracking, route planning and transparent offset reporting for every journey we operate.",
  },
  {
    name: "Aditya Pakhrin",
    role: "Data Analyst",
    image: aditya,
    bio: "Aditya turns trail, transport and lodge data into the carbon models that let every guest see the exact footprint of their adventure.",
  },
] as const;

export const TESTIMONIALS = [
  {
    flag: "🇩🇪",
    name: "Lena Hoffmann",
    country: "Germany",
    trek: "Everest Base Camp",
    quote:
      "I have trekked in four countries and never seen an operator this transparent. They handed me a carbon report at the end — line by line.",
  },
  {
    flag: "🇦🇺",
    name: "Marcus Bell",
    country: "Australia",
    trek: "Annapurna Circuit",
    quote:
      "Every lodge we slept in was locally owned. You feel the money staying in the valley instead of leaving it.",
  },
  {
    flag: "🇯🇵",
    name: "Yuki Tanaka",
    country: "Japan",
    trek: "Langtang Valley",
    quote:
      "We carried out more waste than we produced. It changed how I think about travelling anywhere, not just in Nepal.",
  },
] as const;
