
export interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  attrts: Object[]
  reviews: []
}
