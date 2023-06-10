import ProdcutCard from "../../components/Card/ProdcutCard";
import Rating from "../../components/Rating/Rating";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ProductType } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchProdcuts } from "../../libs/productQuerys";

const ProductListPage = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    // Fetch Data
    const productQuery = useQuery({ queryKey: ['prodcuts'], queryFn: fetchProdcuts })
    if (productQuery.isLoading) return <h1>Loading..</h1>
    if (productQuery.isError) { return <pre>{JSON.stringify(productQuery.error)}</pre> }
    return (

        <main>
            {isAboveMediumScreens ? (
                <div className="fixed left-0 top-0  h-full w-[300px] p-2 bg-white drop-shadow-xl flex flex-col overflow-auto " >
                    <select defaultValue={'default'} className="select select-ghost w-full max-w-xs mt-20">
                        <option value={"default"} disabled>Sort By</option>
                        <option value="Svelte">Svelte</option>
                        <option value="Vue">Vue</option>
                        <option value="React">React</option>
                    </select>
                    <hr className=" bg-primary-200 h-[2px]  w-5/6 mx-auto" />
                    <div className=" mt-3 py-2 px-2 flex flex-col gap-3 mx-auto">
                        <span>Filter:</span>
                        <p className=" font-semibold">Price no greater than: 500$</p>
                        <input type="range" min="0" max="1000" step={10} className="range range-accent" />
                        <span>Rating:</span>
                        <Rating />
                        <span className="mt-2">Ram:</span>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">1 TB</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">2 TB</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">4 TB</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                        </div>
                        <span className="mt-2">Color:</span>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Blue</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">Red</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">Green</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">Black</span>
                                <input type="checkbox" className="checkbox checkbox-accent" />
                            </label>
                        </div>
                        <hr className=" bg-primary-200 h-[2px] w-full mx-auto" />
                    </div>
                    <button className="mt-2 relative left-10 w-[100px] bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100 hover:translate-y-[-3px]">Filter</button>
                </div>) : <div className="  h-full w-full p-2 bg-white drop-shadow-xl " >
                <select defaultValue={'default'} className="select select-ghost w-full max-w-xs mt-20">
                    <option value={"default"} disabled>Sort By</option>
                    <option value="Svelte">Svelte</option>
                    <option value="Vue">Vue</option>
                    <option value="React">React</option>
                </select>
                <hr className=" bg-primary-200 h-[2px]  w-5/6 mx-auto" />
                <div className=" mt-3 py-2 px-2 flex flex-col gap-3 mx-auto">
                    <span>Filter:</span>
                    <p className=" font-semibold">Price no greater than: 500$</p>
                    <input type="range" min="0" max="1000" step={10} className="range range-accent" />
                    <span>Rating:</span>
                    <Rating />
                    <span className="mt-2">Ram:</span>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">1 TB</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                        <label className="cursor-pointer label">
                            <span className="label-text">2 TB</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                        <label className="cursor-pointer label">
                            <span className="label-text">4 TB</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                    </div>
                    <span className="mt-2">Color:</span>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Blue</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                        <label className="cursor-pointer label">
                            <span className="label-text">Red</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                        <label className="cursor-pointer label">
                            <span className="label-text">Green</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                        <label className="cursor-pointer label">
                            <span className="label-text">Black</span>
                            <input type="checkbox" className="checkbox checkbox-accent" />
                        </label>
                    </div>
                    <hr className=" bg-primary-200 h-[2px] w-full mx-auto" />
                </div>
                <button className="  mt-2 relative left-2 w-[100px] bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100 hover:translate-y-[-3px]">Filter</button>
            </div>}



            <div className={isAboveMediumScreens ? "flex flex-wrap justify-end w-3/5 py-2 px-2 mx-auto h-full gap-3 mt-20" : "flex flex-col mt-20 mb-12 px-3 py-2"}>
                {productQuery.data.map((product: ProductType) => <ProdcutCard numReviews={product.numReviews} rating={product.rating} productId={product.id} key={product.id} title={product.title} image={product.image} description={product.info} />)}

            </div>
            <div className="flex justify-center btn-group  py-2 mb-6 mt-3">

                <div className="join grid grid-cols-2 gap-3">
                    <button className="join-item btn btn-outline">Previous page</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div>


            </div>

        </main>
    )
};
export default ProductListPage;