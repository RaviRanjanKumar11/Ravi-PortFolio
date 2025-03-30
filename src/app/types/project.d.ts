export interface project {
  id: number | string;
  category: string;
  title: string;
  description: string | number;
  image: string | any;
  detailsLink: string;
}

export interface about {
  id: number;
  profile: string;
  post: string;
  nameDetails: string;
  bday: string;
  website: string;
  contact: number;
  city: string;
  age: number;
  degree: string;
  email: string | number;
  freelance: string;
  description: string;
}
   