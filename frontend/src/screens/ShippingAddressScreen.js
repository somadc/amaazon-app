import React, { useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { CART_SAVE_SHIPPING_ADDRESS} from '../constants/cartConstants';
import { saveShippingAddress } from '../actions/cartAction';

const ShippingAddressScreen = (props) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!userInfo) {
        props.history.push('signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postalCode, country}));
        // TODO : dispatch save shipping address action
        props.history.push('/payment');
    };
   

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Shipping Address</h1>
            </div>
            <div>
                <label html for="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required></input>
            </div>
            <div>
                <label html for="address">Address</label>
                <input type="text" id="address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required></input>
            </div>
            <div>
                <label html for="city">City</label>
                <input type="text" id="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required></input>
            </div>
            <div>
                <label html for="postalCode">Postal Code</label>
                <input type="text" id="postalCode" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required></input>
            </div>
            <div>
                <label html for="country">Country</label>
                <input type="text" id="country" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
            </div>
            <div>
                <lable/>
                <button className="primary" type="submit">Continue</button>
            </div>

            </form>
        </div>
    );
}

export default ShippingAddressScreen;
