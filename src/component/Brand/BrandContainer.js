import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import img1 from '../../imeges/brand1.png'
import img2 from '../../imeges/brand2.png'
import img3 from '../../imeges/brand3.png'

function BrandContainer() {
    return (
        <Container>
            <div>AllBrand</div>
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img = {img1}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img3}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img1}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img3}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img1}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img3}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img1}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img3}/>
                <BrandCard img = {img2}/>
            </Row>
        </Container>
    )
}

export default BrandContainer