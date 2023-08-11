import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle';
import CategoryCard from '../Category/CategoryCard';
import img1 from '../../imeges/clothe.png';
import img2 from '../../imeges/labtop.png';
import img3 from '../../imeges/mobile.png';


function HomeCategory() {
    return (
        <Container>
            <SubTitle title='التصنيفات' btntitle='المزيد' pathText= '/allcategory'/>
            <Row>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#0034ff'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#Ff5262'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
            </Row>
        </Container>
    )
}

export default HomeCategory;