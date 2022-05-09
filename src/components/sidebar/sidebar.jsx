import React, { useState } from 'react'

import {useDispatch} from "react-redux"
import { Wrapper,Container, Logo, List, ListItem, Dis, Auth } from './sidebar.js'


const Sidebar = () => {

    const dispatch = useDispatch()

    const [isClicked, setIsClicked] = useState(false)

    const lists = document.querySelectorAll('.list')
    function activeLink() {
        lists.forEach((item) => item.classList.remove('active'));
        this.className.add('active')
    }
    // lists.forEach((item) =>item.addEventListener('onclick', activeLink))

    return (
        <Wrapper>
            <Container>
                <Logo>
                    <img src={require('../../assets/icons/logo.png')} alt="logo" />
                    <p>shopee.</p>
                </Logo>
                <List>
                    <ListItem className='list active' onClick={() => activeLink()}>
                        <img src={require('../../assets/icons/new.png')} alt="" />
                        <p>New in</p>
                    </ListItem>
                    <ListItem className='list'  onClick={() => activeLink()}>
                        <img src={require('../../assets/icons/men-clothing.png')} alt="" />
                        <p>Clothing</p>
                    </ListItem>
                    <ListItem className='list'  onClick={() => activeLink()}>
                        <img src={require('../../assets/icons/men-shoes.png')} alt="" />
                        <p>Shoes</p>
                    </ListItem>
                    <ListItem className='list'  onClick={() => activeLink()}>
                        <img src={require('../../assets/icons/aceessories-men.png')} alt="" />
                        <p>Accessories</p>
                    </ListItem>
                </List>
                <Dis>
                    <p>invite a friend and a get discount of <span>10%</span></p>
                </Dis>
                <Auth>
                    <img src={require('../../assets/icons/logout.png')} alt="" />
                    <p>Log Out</p>
                </Auth>
            </Container>
        </Wrapper>
    )
}

export default Sidebar