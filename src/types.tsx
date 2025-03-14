export interface Topic {
  title: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export interface Article {
  slug: string;
  title: string;
  caption: string;
  category: string;
  imageurl: string;
  content: string;
  created_at: Date;
  views: number;
}
