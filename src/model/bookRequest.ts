export interface BookRequest {
  title: string;
  description: string;
  image: string;
  price: number;
  page: number;
  authorId: number;
  languageId: number;
  publisherId: number;
  countryId: number;
}