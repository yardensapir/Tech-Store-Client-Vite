
export interface ProductType {
  _id: string;
  name: string;
  user?:string
  qty:number;
  description: string;
  image: string;
  rating: number;
  numReviews: number;
  category: string
  price: number;
  countInStock: number;
  createdAt?:string
  attrts?: Object[]
  reviews?: []
}
