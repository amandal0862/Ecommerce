import React from 'react'
import Slides from '../slides/slide.jsx'
import Card from '../../components/card/Card.jsx'
import {
    Wrapper,
    Container,
    SlideShow, 
} from "./DisplayHome.js";
import {ProductsList} from "../../features/products/ProductsList.js"
import {s1, s2, s3, s4,s5, s6, s7} from "../../assets/banner"

const DisplayHome = () => {
    return (
        <Wrapper>
            <Container>
                {/* <SlideShow>
                    <Slides Slides={[ s1, s2, s3, s4, s5, s6, s7]}/>
                </SlideShow> */}
                <h1>Trending This Week</h1>
                <ProductsList />
            </Container>
        </Wrapper>
        
    )
}

export default DisplayHome