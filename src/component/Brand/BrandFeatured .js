import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Utility/SubTitle';
import BrandCard from './BrandCard'
import img1 from '../../imeges/brand1.png'
import img2 from '../../imeges/brand2.png'
import img3 from '../../imeges/brand3.png'


const BrandFeatured = ({ title, btntitle }) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img = {img1}/>
                <BrandCard img = {img2}/>
                <BrandCard img = {img3}/>
                <BrandCard img = {img2}/>
            </Row>
        </Container>
    )
}

export default BrandFeatured