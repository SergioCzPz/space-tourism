export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface Images {
  png: string;
  webp: string;
}
