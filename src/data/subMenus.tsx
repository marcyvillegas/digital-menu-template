export type SubMenuType = {
  name: string;
  details: string;
  isNew: boolean;
  isBestSeller: boolean;
  price: number;
};

export const Breakfast: SubMenuType[] = [
  {
    name: "Tapa & Garlic Fried Rice",
    details: "",
    isNew: false,
    isBestSeller: false,
    price: 150.0,
  },
  {
    name: "Longganisa & Garlic Fried Rice",
    details: "",
    isNew: false,
    isBestSeller: false,
    price: 90.0,
  },
  {
    name: "Bangus & Garlic Fried Rice",
    details: "",
    isNew: true,
    isBestSeller: false,
    price: 120.0,
  },
];

export const Pork: SubMenuType[] = [
  {
    name: "Sinigang",
    details: "",
    isNew: false,
    isBestSeller: false,
    price: 200.0,
  },
  {
    name: "Liempo",
    details: "",
    isNew: true,
    isBestSeller: false,
    price: 250.0,
  },
  {
    name: "Kare-Kare",
    details: "",
    isNew: false,
    isBestSeller: false,
    price: 200.0,
  },
  {
    name: "Sisig",
    details: "",
    isNew: true,
    isBestSeller: false,
    price: 150.0,
  },
];

export const Beef: SubMenuType[] = [
  {
    name: "Bulalo",
    details: "",
    isNew: false,
    isBestSeller: false,
    price: 350.0,
  },
  {
    name: "Beef Steak",
    details: "",
    isNew: false,
    isBestSeller: true,
    price: 200.0,
  },
];

export const Seafood: SubMenuType[] = [
  {
    name: "Fried Tilapia",
    details: "",
    isNew: false,
    isBestSeller: false,
    price: 120.0,
  },
  {
    name: "Adobong Pusit",
    details: "",
    isNew: true,
    isBestSeller: false,
    price: 120.0,
  },
];

export const Dessert: SubMenuType[] = [
  {
    name: "Halo-halo",
    details: "",
    isNew: false,
    isBestSeller: true,
    price: 45.0,
  },
  {
    name: "Leche Flan",
    details: "",
    isNew: false,
    isBestSeller: true,
    price: 30.0,
  },
];
