import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addProductToCart} from "../../actions";


const Items = (props) => {

    const {
        title,
        price,
        images,
        description,
        id,
    } = props.item;
    const imageRef = React.createRef();
    // const [img, setImg] = useState(images[0]);
    const [img, setImg] = useState(images);
    const [aItem, setAItem] = useState(0);


    const handleMouseOut = (e) => {
        setImg(images);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(images[i]);
        setAItem(i);
    }

    return (
        <div className="card h-100 product">
            <Link to={`/products/${id}`} className="product__link"><img
                onMouseOut={handleMouseOut}
                onTouchEnd={handleMouseOut}
                className="card-img-top product__img" src={img} alt={title} ref={imageRef}/>
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <h5 className="product__price">{price}</h5>
                <p className="card-text product__description">{description}</p>
                <button
                    onClick={() => {
                        props.dispatch(addProductToCart({...props.item}))
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>
            </div>
        </div>
    );
};

export default connect()(Items);

