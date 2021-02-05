import React, {Component} from 'react';
import {connect} from 'react-redux';
import Items from "../components/Items/Items";

class ProductList extends Component {

    render() {
        return (
            <div className="col-lg-9">
                <div className="row">
                  {(this.props.item).map(eachItem =>{
                        return (<div className="col-md-6 mb-4">
                            <Items key={eachItem.id} item={eachItem} />
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.items
};

export default connect(mapStateToProps, null)(ProductList);
