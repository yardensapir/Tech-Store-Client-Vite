export const addDecimals =(num:number)=>{
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  export const updateCart = (state:any,product:any)=>{


        // Calculate Items Price
        state.itemsPrice = addDecimals (state.cartItems.reduce((acc:any,item:any)=>acc+ item.price * product.qty, 0))

        // Shipping Price
        state.shippingPrice = addDecimals(state.itemsPrice > 100? 0 : 10)

        // Calculate Tax Price
         state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

         //Calculate Total Price
         state.totallPrice = (Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.taxPrice)).toFixed(2) 

         localStorage.setItem('cart', JSON.stringify(state))

         return state

  }