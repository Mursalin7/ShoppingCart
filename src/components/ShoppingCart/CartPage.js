import React from 'react';
import CartProduct from '../ShoppingCart/CartProduct';
import {connect} from 'react-redux';

const CartPage = (props) => {
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '6rem'}}>
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Shopping cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {props.numberofItems ? props.cartItems.map(cart => (
                                 <CartProduct {...cart} img={cart.images} />
                             )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1> }
                        </div>
                        <div className="card-footer">
                            <div className="pull-right" style={{margin: '10px'}}>
                                <div className="pull-right" style={{margin: '5px'}}>
                                    Total price: <b>Rs- {(props.amount)}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        cartItems:state.shop.cart,
        numberofItems : state.shop.cart.reduce((total,currentItem) => {
           return total + currentItem.quantity
        },0),
        amount :  state.shop.cart.reduce((total,currentItem) => {
            return total + (currentItem.price * currentItem.quantity)
         },0),
    }
}
export default connect(mapStateToProps,null)(CartPage);
