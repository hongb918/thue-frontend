import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
    // const id = product.id;

    return (
        <Card className='mb-3 p-3 border-primary rounded' style={{ with: '20rem' }}>
            <Link to={`/thue/products/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/thue/products/${product._id}`} className="text-decoration">
                    <Card.Header>
                        <h5>
                            {product.name}
                        </h5>
                    </Card.Header>
                </Link>
                <Card.Text as='div' style={{ fontSize: '18px' }}>
                    <div className='my-3 card-text' >
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e820'} />
                    </div>
                </Card.Text>

                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product