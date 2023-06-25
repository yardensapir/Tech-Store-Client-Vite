
import HText from '../../components/HText/HText';
import psImage from '../../assets/ps5.png'
import ShoppingCard from '../../components/Card/ShoppingCard';
const CartPage = () => {

  return (

    <main className='flex flex-wrap items-start justify-around py-2 min-h-[100vh] mt-24 '>
      <div >
        <div className=' mb-6 px-2'>
          <HText>Shopping Cart</HText>
        </div>
        <div className='p-2 mb-2'>

        <ShoppingCard image={psImage} name='PS 4' price={100} qty={1} />
       
      
      
        </div>



      </div>
      <div className='flex flex-col gap-6 items-center'>
        <div className='flex items-center gap-3 w-full'>
          <span className=''>
          <HText>Total Products:</HText>
          </span>
          <span>1</span>
        </div>
        <HText>Subtotal Price: $200</HText>
        <button className='btn btn-outline btn-accent'>Proceed To Checkout</button>
      </div>
    </main>
  )
};
export default CartPage;



