
import HText from '../../components/HText/HText';
import ShoppingCard from '../../components/Card/ShoppingCard';
import { useSelector } from 'react-redux';
import { ProductType } from '../../types/types';
const CartPage = () => {

  const { cartItems, totallPrice, shippingPrice, taxPrice } = useSelector((state: any) => state.cart)

  return (
    <>
      {cartItems.length > 0 ?
        <main className='flex flex-wrap items-start justify-around py-2 min-h-[100vh] mt-24 '>
          <div >
            <div className=' mb-6 px-2'>
              <HText>Shopping Cart</HText>
            </div>
            <div className='p-2 mb-2'>
              {cartItems.map((cartItem: ProductType) => {
                return <ShoppingCard item={cartItem} key={cartItem._id} image={cartItem.image} name={cartItem.name} price={cartItem.price} qty={cartItem.qty} />
              })}
            </div>
          </div>
          <div className='flex flex-col gap-6 items-center'>
         
              <span className='flex flex-col gap-3 '>
                <HText>Total Products: {cartItems.reduce((a: any, c: any) => a + c.qty, 0)}</HText>
                <HText>Tax Price: ${taxPrice}</HText>
                <HText>Shipping Price: ${shippingPrice}</HText>
                <HText>Subtotal Price: ${totallPrice}</HText>
              </span>

            <button className='btn btn-outline btn-accent'>Proceed To Checkout</button>
          </div>
        </main>
        : <h1 className='flex min-h-[100vh] items-center justify-center basis-3/5 font-poppins text-3xl font-bold'>Cart Is Empty 🐒</h1>}

    </>


  )
};
export default CartPage;



