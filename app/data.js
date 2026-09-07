// Contenido compartido de Mi Rey Taquería & Grill, extraído del sitio original.

// Prefijo para rutas de imágenes (necesario en GitHub Pages, donde el sitio
// vive bajo /<repo>/). En local es "".
export const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p) => `${BP}${p}`;

export const info = {
  name: "Mi Rey",
  full: "Mi Rey Taquería & Grill",
  phone: "(910) 899-4199",
  phoneHref: "+19108994199",
  email: "mirey2877@gmail.com",
  address: "4015 Market St, Wilmington, NC 28403, USA",
  addressShort: "4015 Market St, Wilmington, NC",
};

export const hero = {
  title: "Are you ready to indulge your taste buds?",
  text:
    "You can order below and view our menu offerings. For catering, click our catering page in the MENU, not through the order link.",
  cta: "ORDER",
};

export const featured = [
  { src: asset("/img/spread.png"), alt: "A table full of Mexican dishes" },
  { src: asset("/img/tostada_clean.png"), alt: "Birria tostada with crema and cheese" },
  { src: asset("/img/chimichanga.png"), alt: "Chimichanga with Mexican rice" },
  { src: asset("/img/featured_clean.png"), alt: "Selection of featured dishes" },
  { src: asset("/img/tostada2.png"), alt: "Loaded asada tostada" },
];

export const specials = [
  { day: "Monday", text: "Soups and broths 20% OFF" },
  {
    day: "Tuesday",
    text:
      "2 for 1 tacos ($3.25 al pastor, pork carnitas) or ($3.25 chicken or ground beef)",
  },
  { day: "Wednesday", text: "All birria plates special with house margarita FREE" },
  {
    day: "Thursday",
    text: "Grill and fajitas night — 15% OFF fajita para dos, fajita texana and pollo asado",
  },
  {
    day: "Friday & Weekends",
    text: "Small margarita $7.00 · tall margarita $11.00 · wings all flavors 15% OFF",
  },
];

export const story = {
  title: "Our Story",
  text:
    "Immerse yourself in the rich flavors and culture of Mexico at Mi Rey Taquería & Grill. Our family-owned restaurant in Wilmington, NC, brings you the essence of traditional Mexican cuisine with a modern twist. From our sizzling fajitas to our mouthwatering tacos, every dish is crafted with love and heritage. Step into our world and experience the warmth and authenticity of Mexico right here in New Hanover County.",
  cta: "Learn More",
};

export const testimonials = [
  {
    name: "Reimond R.",
    place: "Wilmington, NC",
    quote:
      "La mejor cocina Jalisciense que he probado en Wilmington. Los tacos de birria son de otro mundo y la atención te hace sentir realmente como un rey. ¡Totalmente recomendado!",
  },
  {
    name: "Carlos Fernández",
    place: "Family event",
    quote:
      "Contratamos el servicio de taquiza de Mi Rey para un evento familiar y fue un éxito total. La carne estaba en su punto, las salsas tienen el toque casero auténtico y el equipo fue súper puntual y profesional. Si quieres quedar bien con tus invitados, esta es la mejor opción en Wilmington.",
  },
  {
    name: "Angel M.",
    place: "Wilmington, NC",
    quote:
      "Lo que más me gustó de Mi Rey fue que nos invitaron a probar el menú antes de contratar la taquiza. Esa cortesía y la amabilidad del personal nos dieron mucha seguridad. La comida es deliciosa y el servicio es de primera. ¡Súper recomendados para cualquier fiesta!",
  },
];

export const hours = [
  { day: "Sunday", time: "10:30 AM – 9:00 PM" },
  { day: "Monday", time: "10:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "10:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "10:30 AM – 10:00 PM" },
  { day: "Thursday", time: "10:30 AM – 10:00 PM" },
  { day: "Friday", time: "10:30 AM – 10:00 PM" },
  { day: "Saturday", time: "10:30 AM – 10:00 PM" },
];

export const social = ["Facebook", "Instagram", "TikTok", "Maps"];
