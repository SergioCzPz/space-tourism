export interface CrewInterface {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

export interface Images {
  png: string;
  webp: string;
}
