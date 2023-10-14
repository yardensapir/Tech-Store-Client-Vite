import Loader from "../../components/Loader/Loader";
import Prodcuts from "../../components/Product/Prodcuts";
import Slider from "../../components/Slider/Slider";
import { useGetProductsQuery } from "../../slices/productsApiSlice";

const HomePage = () => {

    // Fetch Data
    const {data:productQuery,isLoading,error} = useGetProductsQuery({})
    if(isLoading){return <Loader/>}
    if(error){return <div>{error.toString()}</div>}

    return <main>
        <Slider productQuery={productQuery.products} />
        <Prodcuts productQuery={productQuery.products}/>
    </main>
};
export default HomePage;