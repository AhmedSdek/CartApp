import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle';
import ProductCard from './ProductCard';
function CardProductContainer({title ,  btntitle, img}) {
    return (
        <Container>
        <SubTitle title={title} btntitle={btntitle}/>
        <Row>
            <ProductCard img={img}/>
            <ProductCard img={img}/>
            <ProductCard img={img}/>
            <ProductCard img={img}/>
            
        </Row>
    </Container>
    )
}

export default CardProductContainer