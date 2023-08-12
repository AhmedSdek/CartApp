import React from 'react'
import { Card, Col } from 'react-bootstrap'
import rate from '../../imeges/rate.png';
import favImg from '../../imeges/fav-off.png';
function ProductCard({img}) {
    return (
        <Col xs= {12} sm={6} md={4} lg={3} className='d-flex justify-content-center' >
            <Card className='my-2' style={{ width: '18rem' , borderRadius: '8px' , backgroundColor: '#ffffff' , boxShadow : '0 2px 2px 0 rgba(151,151,151,0.5)'}}>
            <Card.Img  variant="top" src={img} />
                <div className="d-flex justify-content-end mx-2">
                        <img
                            src={favImg}
                            alt=""
                            className="text-center"
                            style={{
                                height: "24px",
                                width: "26px",
                                cursor: 'pointer'
                            }}
                        ></img>
                </div>
            <Card.Body>
                <Card.Title className='card-title'>labtop</Card.Title>
                <Card.Text className="d-flex justify-content-between ">
                    <div className="d-flex">
                        <img
                            src={rate}
                            alt=""
                            height="16px"
                            width="16px"
                        ></img>
                        <div className="card-rate mx-2">2.5</div>
                    </div>
                    <div className="d-flex">
                        <div className="card-price">6000</div>
                        <div className="card-currency mx-1">جنيه</div>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
