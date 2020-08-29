export const initialState = {
    basket : [
        // {
        //     id : 1,
        //     title : 'The book book book book book book book book book book book book ',
        //     price : 65.84,
        //     rating: 4,
        //     image: 'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg'
        // },
        // {
        //     id : 2,
        //     title : 'The book book book book book book book book book book book book ',
        //     price : 65.84,
        //     rating: 4,
        //     image: 'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg'
        // }
    ],
    user : null
}


export const GetBasketTotal = (basket)=>
        basket?.reduce((amount,item) => item.price + amount, 0)


function Reducer(state, action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
        //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            
            }
        case 'REMOVE_FROM_BASKET':
            //cloned the basket
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem)=>
             basketItem.id === action.id
            )
            if(index =>0){
                    //item exists, remove it
                    newBasket.splice(index,1)

            }else{
                console.warn(`Cant remove`)
            }
           return {
               ...state,
               basket: newBasket

            }
        default:
            return state;
        }
}

export default Reducer;