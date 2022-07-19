import React from 'react'
import Products from '../Products'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

function HomePage() {

    return (
        <div>
            <h1>
                Shop the Look
                <Row>
                    {Products.map(product => (
                        <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </h1>
        </div>
    )
}

export default HomePage