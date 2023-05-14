import items from "../data/data";
import Card from "./Card";

const Prodcuts = () => {

    return (<section className="mx-auto min-h-full w-full  py-2">
        <h1 className="text-4xl mb-6 mt-6 font-semibold text-primary-300 mx-auto w-5/6">Catagorys</h1>
        <div className="flex flex-wrap gap-20 items-center justify-center p-3 py-2">
            {items.map((product) => <Card key={product.id} title={product.title} image={product.image} description={product.info} />)}
        </div>
    </section>)
};
export default Prodcuts;


