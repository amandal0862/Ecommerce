import React, { useState} from 'react'
import { Wrapper, Container, Choices, Cart, Buttons } from './top.js'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomizedSwitches from '../toggle/toggle.jsx'
import CartDropdown from '../cartDropdown/CartDropdown.jsx';

const Top = () => {
    const [isClicked, setIsClicked] = useState(false)
    const {cartTotalQuantity} = useSelector((state) => state.cart);
    let navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                {/* <Choices>
                    <p>Men</p>
                    <CustomizedSwitches />
                    <p>Women</p>
                </Choices> */}
                <Cart>
                    <img src={require('../../assets/icons/shopping-cart.png')} alt="" onClick={()=>setIsClicked(!isClicked)}/>
                    <span className="quantity" onClick={()=>setIsClicked(!isClicked)}>{cartTotalQuantity}</span>
                    {isClicked ? <CartDropdown />: null}
                </Cart>
                <Buttons>
                    <button className="signIn" onClick={() => navigate('/signin')}>sign in</button>
                </Buttons>
            </Container>
        </Wrapper>
    )
}

export default Top