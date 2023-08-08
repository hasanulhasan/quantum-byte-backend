export default interface IProduct {
  _id?: string;
  name: string;
  img: string;
  price: string;
  category: string;
  rating: string;
  status: boolean;
  description: string;
  features: string[];
  reviews: string[];
}