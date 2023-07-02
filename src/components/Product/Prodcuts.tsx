import Card from "../Card/Card";
import { ProductType } from "../../types/types";


type Props = {
    productQuery: [];
};

const Prodcuts = ({ productQuery }: Props) => {
    return (
        <section className="mx-auto min-h-full w-full  py-2">
            <h1 className="text-4xl mb-6 mt-6 font-semibold text-primary-300 mx-auto w-5/6">Catagorys</h1>
            <div className="flex flex-wrap gap-20 items-center justify-center p-3 py-2">
                {productQuery.map((product: ProductType) => (<Card key={product._id} name={product.name} image={product.image} description={product.description} />))}
            </div>
        </section>



    )
};
export default Prodcuts;


