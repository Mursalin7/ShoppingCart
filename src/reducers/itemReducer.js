const initialState ={
    item : [{
        title:'Acer Aspire',
        price: 29000,
        images:"../../public/laptoppic1.jpg",
        description:"Very Slow Laptop",
        id:345,
    },{
        title:'HP',
        price: 31000,
        images:"../../public/Mypic.jpg",
        description:"Good Laptop",
        id:346,
    },{
        title:'Dell',
        price: 33000,
        images:"../../public/laptoppic1.jpg",
        description:"Better Laptop",
        id:347,
    }],
    cart:[]
}
export const itemReducer = (state = initialState,action) => {
    switch(action.type){
        default :
            return state 
    }
}
