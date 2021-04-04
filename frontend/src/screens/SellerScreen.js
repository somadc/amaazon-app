import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function SellerScreen() {

    // const cart = useSelector((state) => state.cart);
    // const { cartItems } = cart;
    // const  userSignin = useSelector((state) => state.userSignin);
    // const { userInfo } =  userSignin;
    // const dispatch = useDispatch();
    // const signoutHandler = () => {
    //     dispatch(signout());
    // }

  return (
    
      <div className="grid-container">
    <header className="row" style={{'background-color': '#ffffff', 'color': 'blue'}}>
        <h2  >Sell on amaazon
        </h2>
        <div>
            <Link to="/pricing" style={{'color': 'blue'}}>Pricing 
              </Link>
            <Link to="/deliveringorder" style={{'color': 'blue'}}>Delivering Order
              </Link>
              {/* {
                userInfo ? (
                  <div className="dropdown">
                  <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>

                  </ul>
                  </div>
                ):
                ( */}
                  <Link to="/sellersignin" style={{'color': 'blue'}}>Sign In as a seller</Link>
                  
        </div>
    </header>
</div>
    
  );
}

export default SellerScreen;