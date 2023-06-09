import prodcutImage from "../assets/ps5.png";
import prodcutImage2 from "../assets/nintendo.png";
import prodcutImage3 from "../assets/macbook.png";
import { ProductType } from "../types/types";
const items: ProductType[] = [
  {
    id: "1",
    title: "Playstation 5",
    secondTitle: "NOW IN STORE",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad sequi ipsum quasi vero, dolore, porro nesciunt praesentium officia nemo quidem eveniet, a quo labore nihil doloremque pariatur recusandae? Suscipit!",
    image: prodcutImage,
    rating: 4.0,
    numReviews: 8,
    price: 1000,
    countInStock: 10,
  },
  {
    id: "2",
    title: "Nintendo Switch",
    secondTitle: "NOW IN STORE",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad sequi ipsum quasi vero, dolore, porro nesciunt praesentium officia nemo quidem eveniet, a quo labore nihil doloremque pariatur recusandae? Suscipit!",
    image: prodcutImage2,
    rating: 4.5,
    numReviews: 12,
    price: 600,
    countInStock: 10,
  },
  {
    id: "3",
    title: "Macbook pro 2023",
    secondTitle: "NOW IN STORE",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad sequi ipsum quasi vero, dolore, porro nesciunt praesentium officia nemo quidem eveniet, a quo labore nihil doloremque pariatur recusandae? Suscipit!",
    image: prodcutImage3,
    rating: 3,
    numReviews: 12,
    price: 2000,
    countInStock: 10,
  },
];

export default items;
