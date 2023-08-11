
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import img1 from '../../imeges/clothe.png';
import img2 from '../../imeges/labtop.png';
import img3 from '../../imeges/mobile.png';
function CategoryContainer() {
    return (
        <Container style={{minHeight:'100vh'}}>
                <Row>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#0034ff'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#Ff5262'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#0034ff'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#Ff5262'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#0034ff'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img1} background='#F4DBA4'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img3} background='#Ff5262'/>
                <CategoryCard title= 'اجهزه منزليه' img = {img2} background='#F4DBA4'/>
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

export default CategoryContainer ;